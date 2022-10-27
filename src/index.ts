import { ISchema, ISchemaConfig, IGraphqlApi } from '@aws-cdk/aws-appsync-alpha';
import { Lazy } from 'aws-cdk-lib';
import { shapeAddition } from './private';
import { IIntermediateType } from './schema-base';
import { Field, ResolvableField } from './schema-field';
import { ObjectType } from './schema-intermediate';
export * from './schema-base';
export * from './schema-field';
export * from './schema-intermediate';

export class CodeFirstSchema implements ISchema {
  /**
   * The definition for this schema
   */
  public definition: string;

  private query?: ObjectType;

  private mutation?: ObjectType;

  private subscription?: ObjectType;

  private types: IIntermediateType[];

  public constructor() {
    this.definition = '';
    this.types = [];
  }

  /**
   * Called when the GraphQL Api is initialized to allow this object to bind
   * to the stack.
   *
   * @param api The binding GraphQL Api
   */
  public bind(api: IGraphqlApi): ISchemaConfig {
    return {
      apiId: api.apiId,
      definition: Lazy.string({
        produce: () => this.types.reduce((acc, type) => `${acc}${type._bindToGraphqlApi(api).toString()}\n`,
          `${this.declareSchema()}${this.definition}`),
      }),
    };
  }

  /**
   * Escape hatch to add to Schema as desired. Will always result
   * in a newline.
   *
   * @param addition the addition to add to schema
   * @param delimiter the delimiter between schema and addition
   * @default - ''
   *
   */
  public addToSchema(addition: string, delimiter?: string): void {
    const sep = delimiter ?? '';
    this.definition = `${this.definition}${sep}${addition}\n`;
  }

  /**
   * Add a query field to the schema's Query. CDK will create an
   * Object Type called 'Query'. For example,
   *
   * type Query {
   *   fieldName: Field.returnType
   * }
   *
   * @param fieldName the name of the query
   * @param field the resolvable field to for this query
   */
  public addQuery(fieldName: string, field: ResolvableField): ObjectType {
    if (!this.query) {
      this.query = new ObjectType('Query', { definition: {} });
      this.addType(this.query);
    };
    this.query.addField({ fieldName, field });
    return this.query;
  }

  /**
   * Add a mutation field to the schema's Mutation. CDK will create an
   * Object Type called 'Mutation'. For example,
   *
   * type Mutation {
   *   fieldName: Field.returnType
   * }
   *
   * @param fieldName the name of the Mutation
   * @param field the resolvable field to for this Mutation
   */
  public addMutation(fieldName: string, field: ResolvableField): ObjectType {
    if (!this.mutation) {
      this.mutation = new ObjectType('Mutation', { definition: {} });
      this.addType(this.mutation);
    };
    this.mutation.addField({ fieldName, field });
    return this.mutation;
  }

  /**
   * Add a subscription field to the schema's Subscription. CDK will create an
   * Object Type called 'Subscription'. For example,
   *
   * type Subscription {
   *   fieldName: Field.returnType
   * }
   *
   * @param fieldName the name of the Subscription
   * @param field the resolvable field to for this Subscription
   */
  public addSubscription(fieldName: string, field: Field): ObjectType {
    if (!this.subscription) {
      this.subscription = new ObjectType('Subscription', { definition: {} });
      this.addType(this.subscription);
    }
    const directives = field.fieldOptions?.directives?.filter((directive) => directive.mutationFields);
    if (directives && directives.length > 1) {
      throw new Error(`Subscription fields must not have more than one @aws_subscribe directives. Received: ${directives.length}`);
    }
    this.subscription.addField({ fieldName, field });
    return this.subscription;
  }

  /**
   * Add type to the schema
   *
   * @param type the intermediate type to add to the schema
   *
   */
  public addType(type: IIntermediateType): IIntermediateType {
    this.types.push(type);
    return type;
  }

  /**
   * Set the root types of this schema if they are defined.
   *
   * For example:
   * schema {
   *   query: Query
   *   mutation: Mutation
   *   subscription: Subscription
   * }
   */
  private declareSchema(): string {
    if (!this.query && !this.mutation && !this.subscription) {
      return '';
    }
    type root = 'mutation' | 'query' | 'subscription';
    const list: root[] = ['query', 'mutation', 'subscription'];
    return shapeAddition({
      prefix: 'schema',
      fields: list.map((key: root) => this[key] ? `${key}: ${this[key]?.name}` : '')
        .filter((field) => field != ''),
    }) + '\n';
  }
}
