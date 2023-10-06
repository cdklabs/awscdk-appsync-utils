import { randomUUID } from 'crypto';
import * as path from 'path';
import { CfnResource, CustomResource, Duration, Stack } from 'aws-cdk-lib';
import { ISourceApiAssociation } from 'aws-cdk-lib/aws-appsync';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct, IConstruct } from 'constructs';

/**
 * This interface for the provider of the custom resource that will be used to initiate a merge operation during Cloudformation update.
 */
export interface ISourceApiAssociationMergeOperationProvider extends IConstruct {

  /**
     * Service token which is used for identifying the handler used for the merge operation custom resource.
     */
  readonly serviceToken: string;

  /**
     * This function associates a source api association with the provider.
     * This method can be used for adding permissions to merge a specific source api association to the custom resource provider.
     * @param sourceApiAssociation The association to associate.
     */
  associateSourceApiAssociation(sourceApiAssociation: ISourceApiAssociation): void;
}

/**
 * Properties for SourceApiAssociationMergeOperationProvider.
 */
export interface SourceApiAssociationMergeOperationProviderProps {

  /**
     * Time between calls to the polling Lambda function which determines whether the merge operation is finished or not.
     *
     * @default Duration.seconds(5)
     */
  readonly pollingInterval?: Duration;

  /**
     * Total timeout in waiting for the source api association merge operation to complete.
     *
     * @default Duration.minutes(15)
     */
  readonly totalTimeout?: Duration;
}

/**
 * SourceApiAssociationMergeProvider class is responsible for constructing the custom resource that will be used for initiating the
 * source API merge during a Cloudformation update.
 */
export class SourceApiAssociationMergeOperationProvider extends Construct implements ISourceApiAssociationMergeOperationProvider {

  /**
     * Service token for the resource provider.
     */
  public readonly serviceToken: string;

  /**
     * The lambda function responsible for kicking off the merge operation.
     */
  public readonly schemaMergeLambda: Function;

  /**
     * The lambda function response for ensuring that the merge operation finished.
     */
  public readonly sourceApiStablizationLambda: Function;

  constructor(scope: Construct, id: string, props: SourceApiAssociationMergeOperationProviderProps) {
    super(scope, id);

    this.schemaMergeLambda = new NodejsFunction(this, 'MergeSourceApiSchemaLambda', {
      runtime: Runtime.NODEJS_LATEST,
      entry: path.join(__dirname, 'mergeSourceApiSchemaHandler', 'index.ts'),
      handler: 'onEvent',
      timeout: Duration.minutes(2),
    });

    this.sourceApiStablizationLambda = new NodejsFunction(this, 'PollSourceApiMergeLambda', {
      runtime: Runtime.NODEJS_LATEST,
      entry: path.join(__dirname, 'mergeSourceApiSchemaHandler', 'index.ts'),
      handler: 'isComplete',
      timeout: Duration.minutes(2),
    });

    const provider = new Provider(this, 'SchemaMergeOperationProvider', {
      onEventHandler: this.schemaMergeLambda,
      isCompleteHandler: this.sourceApiStablizationLambda,
      queryInterval: props.pollingInterval ?? Duration.seconds(5),
      totalTimeout: props.totalTimeout ?? Duration.minutes(15),
    });

    this.serviceToken = provider.serviceToken;
  }

  public associateSourceApiAssociation(sourceApiAssociation: ISourceApiAssociation) {
    this.schemaMergeLambda.addToRolePolicy(new PolicyStatement({
      effect: Effect.ALLOW,
      resources: [sourceApiAssociation.associationArn],
      actions: ['appsync:StartSchemaMerge'],
    }));

    this.sourceApiStablizationLambda.addToRolePolicy(new PolicyStatement({
      effect: Effect.ALLOW,
      resources: [sourceApiAssociation.associationArn],
      actions: ['appsync:GetSourceApiAssociation'],
    }));
  }
}

/**
 * Properties for SourceApiAssociationMergeOperation which handles triggering a merge operation as a custom resource
 * during a Cloudformation stack update.
 */
export interface SourceApiAssociationMergeOperationProps {

  /**
     * The source api association resource which will be merged.
     */
  readonly sourceApiAssociation: ISourceApiAssociation;

  /**
     * The merge operation provider construct which is responsible for configuring the Lambda resource that will be invoked during
     * Cloudformation update.
     */
  readonly mergeOperationProvider?: ISourceApiAssociationMergeOperationProvider;

  /**
     * The version identifier for the schema merge operation. Any change to the version identifier will trigger a merge on the next
     * update. Use the version identifier property to control when the source API metadata is merged.
     *
     * @default null
     */
  readonly versionIdentifier?: string;

  /**
     * Flag indicating whether the source api should be merged on every CFN update or not.
     * If set to true and there are no changes to the source API, this will result in a no-op merge operation.
     *
     * @default False
     */
  readonly alwaysMergeOnStackUpdate?: boolean;
}

/**
 * Type used to define the input properties to the merge operation custom resource.
 */
type MergeResourceProperties = {

  /**
     * The assocition id.
     */
  associationId: string;

  /**
     * The merged api identifier.
     */
  mergedApiIdentifier: string;

  /**
     * The source api identifier.
     */
  sourceApiIdentifier: string;

  /**
     * A version identifier field. Changing the version identifier will trigger a merge operation on update.
     */
  versionIdentifier?: string;

  /**
     * Whether the resource will always update or not. When always update is enabled, we use a random UUID to trigger a
     * merge operation after each deployment following a synthesis of the stack.
     */
  alwaysUpdate?: string;
}

/**
 * The SourceApiAssociationMergeOperation triggers a merge of a source API during a Cloudformation stack update.
 * This can be used to propagate changes from the source API to the Merged API when the association is using type MANUAL_MERGE.
 * If the merge operation fails, it will fail the Cloudformation update and rollback the stack.
 */
export class SourceApiAssociationMergeOperation extends Construct {

  constructor(scope: Construct, id: string, props: SourceApiAssociationMergeOperationProps) {
    super(scope, id);

    if (!props.alwaysMergeOnStackUpdate && !props.versionIdentifier) {
      throw new Error('A version identifier must be specified when the alwaysMergeOnStackUpdate flag is false');
    }

    var mergeOperationProvider = props.mergeOperationProvider;
    if (!mergeOperationProvider) {
      mergeOperationProvider = this.getOrCreateMergeOperationProvider();
    }

    mergeOperationProvider.associateSourceApiAssociation(props.sourceApiAssociation);

    var properties: MergeResourceProperties = {
      associationId: props.sourceApiAssociation.associationId,
      mergedApiIdentifier: props.sourceApiAssociation.mergedApi.arn,
      sourceApiIdentifier: props.sourceApiAssociation.sourceApi.arn,
    };

    // When versionIdentifier property is passed, it allows the developer to explicitly control when the source api is merged via the merge operation.
    // Changing the version identifier will allow you to control whether the merge operation occurs for a specific merge operation of not.
    if (props.versionIdentifier) {
      properties.versionIdentifier = props.versionIdentifier;
    }

    // When alwaysMergeOnStackUpdate flag is set to true, everytime the stack is deployed we create a new custom resource which ensures that this
    // merge operation is always ran. This potentially will result in no-ops.
    if (props.alwaysMergeOnStackUpdate) {
      properties.alwaysUpdate = randomUUID();
    }

    // Custom resource for the merge of this specific source api association.
    const customResource = new CustomResource(this, 'SourceApiSchemaMergeOperation', {
      serviceToken: mergeOperationProvider.serviceToken,
      resourceType: 'Custom::AppSyncSourceApiMergeOperation',
      properties: {
        ...properties,
      },
    });

    // If a reference to the source API exists,
    // add a dependency on all children of the source api in order to ensure that this resource is created at the end.
    props.sourceApiAssociation.sourceApi.node.children.forEach((child) => {
      if (CfnResource.isCfnResource(child)) {
        customResource.node.addDependency(child);
      }

      if (Construct.isConstruct(child) && child.node.defaultChild && CfnResource.isCfnResource(child.node.defaultChild)) {
        customResource.node.addDependency(child.node.defaultChild);
      }
    });
  }

  /**
   * Get an existing merge operation provider from the current stack or create a new stack scoped merge operation provider.
   * @returns SourceApiAssociationMergeOperationProvider
   */
  private getOrCreateMergeOperationProvider(): SourceApiAssociationMergeOperationProvider {
    const constructName = 'SchemaMergeOperationProvider';
    const stack = Stack.of(this);
    const existing = stack.node.tryFindChild(constructName);
    if (!existing) {
      return new SourceApiAssociationMergeOperationProvider(stack, 'SchemaMergeOperationProvider', {
        pollingInterval: Duration.seconds(30),
      });
    } else {
      return existing as SourceApiAssociationMergeOperationProvider;
    }
  }
}