import * as path from 'path';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cdk from 'aws-cdk-lib/core';
import { SourceApiAssociationMergeOperation } from '../src';

let stack: cdk.Stack;
let api1: appsync.IGraphqlApi;
let api2: appsync.IGraphqlApi;
let mergedApiExecutionRole: iam.Role;
let mergedApi: appsync.IGraphqlApi;
let sourceApiAssociation1: appsync.SourceApiAssociation;
let sourceApiAssociation2: appsync.SourceApiAssociation;
beforeEach(() => {
  stack = new cdk.Stack();

  api1 = new appsync.GraphqlApi(stack, 'api1', {
    authorizationConfig: {},
    name: 'api',
    definition: appsync.Definition.fromFile(path.join(__dirname, 'appsync.test.graphql')),
    logConfig: {},
  });

  api2 = new appsync.GraphqlApi(stack, 'api2', {
    authorizationConfig: {},
    name: 'api',
    definition: appsync.Definition.fromFile(path.join(__dirname, 'appsync.test.graphql')),
    logConfig: {},
  });

  mergedApiExecutionRole = new iam.Role(stack, 'MergedApiExecutionRole', {
    assumedBy: new iam.ServicePrincipal('appsync.amazonaws.com'),
  });

  mergedApi = new appsync.GraphqlApi(stack, 'merged-api', {
    name: 'api',
    definition: appsync.Definition.fromSourceApis({
      sourceApis: [],
      mergedApiExecutionRole: mergedApiExecutionRole,
    }),
  });

  sourceApiAssociation1 = new appsync.SourceApiAssociation(stack, 'SourceApiAssociation1', {
    sourceApi: api1,
    mergedApi: mergedApi,
    mergeType: appsync.MergeType.MANUAL_MERGE,
    mergedApiExecutionRole: mergedApiExecutionRole,
  });

  sourceApiAssociation2 = new appsync.SourceApiAssociation(stack, 'SourceApiAssociation2', {
    sourceApi: api2,
    mergedApi: mergedApi,
    mergeType: appsync.MergeType.MANUAL_MERGE,
    mergedApiExecutionRole: mergedApiExecutionRole,
  });
});

test('source api association merge operation with version identifier', () => {
  new SourceApiAssociationMergeOperation(stack, 'SourceApi1Merge', {
    sourceApiAssociation: sourceApiAssociation1,
    versionIdentifier: '1',
  });

  Template.fromStack(stack).resourceCountIs('AWS::Lambda::Function', 5);
  Template.fromStack(stack).resourceCountIs('Custom::AppSyncSourceApiMergeOperation', 1);

  Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'index.isComplete',
    Timeout: 120,
  });

  Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'index.onEvent',
    Timeout: 120,
  });

  Template.fromStack(stack).hasResourceProperties('Custom::AppSyncSourceApiMergeOperation', {
    ServiceToken: {
      'Fn::GetAtt': [
        'SchemaMergeOperationProviderframeworkonEventC84B1BAA',
        'Arn',
      ],
    },
    associationId: {
      'Fn::GetAtt': [
        'SourceApiAssociation17B8F97C7',
        'AssociationId',
      ],
    },
    mergedApiIdentifier: {
      'Fn::GetAtt': [
        'mergedapiCE4CAF34',
        'Arn',
      ],
    },
    sourceApiIdentifier: {
      'Fn::GetAtt': [
        'api1A91238E2',
        'Arn',
      ],
    },
    versionIdentifier: '1',
  });
});

test('source api association merge operation with always update', () => {
  new SourceApiAssociationMergeOperation(stack, 'SourceApi1Merge', {
    sourceApiAssociation: sourceApiAssociation1,
    alwaysMergeOnStackUpdate: true,
  });

  Template.fromStack(stack).resourceCountIs('AWS::Lambda::Function', 5);
  Template.fromStack(stack).resourceCountIs('Custom::AppSyncSourceApiMergeOperation', 1);
});

test('source api association merge operations with version identifier', () => {
  new SourceApiAssociationMergeOperation(stack, 'SourceApi1Merge', {
    sourceApiAssociation: sourceApiAssociation1,
    versionIdentifier: '1',
  });

  new SourceApiAssociationMergeOperation(stack, 'SourceApi2Merge', {
    sourceApiAssociation: sourceApiAssociation2,
    versionIdentifier: '1',
  });

  Template.fromStack(stack).resourceCountIs('AWS::Lambda::Function', 5);
  Template.fromStack(stack).resourceCountIs('Custom::AppSyncSourceApiMergeOperation', 2);

  Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'index.isComplete',
    Timeout: 120,
  });

  Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'index.onEvent',
    Timeout: 120,
  });

  Template.fromStack(stack).hasResourceProperties('Custom::AppSyncSourceApiMergeOperation', {
    ServiceToken: {
      'Fn::GetAtt': [
        'SchemaMergeOperationProviderframeworkonEventC84B1BAA',
        'Arn',
      ],
    },
    associationId: {
      'Fn::GetAtt': [
        'SourceApiAssociation17B8F97C7',
        'AssociationId',
      ],
    },
    mergedApiIdentifier: {
      'Fn::GetAtt': [
        'mergedapiCE4CAF34',
        'Arn',
      ],
    },
    sourceApiIdentifier: {
      'Fn::GetAtt': [
        'api1A91238E2',
        'Arn',
      ],
    },
    versionIdentifier: '1',
  });

  Template.fromStack(stack).hasResourceProperties('Custom::AppSyncSourceApiMergeOperation', {
    ServiceToken: {
      'Fn::GetAtt': [
        'SchemaMergeOperationProviderframeworkonEventC84B1BAA',
        'Arn',
      ],
    },
    associationId: {
      'Fn::GetAtt': [
        'SourceApiAssociation254340D38',
        'AssociationId',
      ],
    },
    mergedApiIdentifier: {
      'Fn::GetAtt': [
        'mergedapiCE4CAF34',
        'Arn',
      ],
    },
    sourceApiIdentifier: {
      'Fn::GetAtt': [
        'api2C4850CEA',
        'Arn',
      ],
    },
    versionIdentifier: '1',
  });
});