import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as t from './scalar-type-defintions';
import { CodeFirstSchema, ObjectType, ResolvableField } from '../src';

// Schema Definitions
const type = new ObjectType('test', {
  definition: {
    version: t.required_string,
  },
});
const query = new ObjectType('Query', {
  definition: {
    getTests: new ResolvableField({
      returnType: type.attribute({ isRequiredList: true, isList: true }),
    }),
  },
});
const mutation = new ObjectType('Mutation', {
  definition: {
    addTest: new ResolvableField({
      returnType: type.attribute(),
      args: { version: t.required_string },
    }),
  },
});

let stack: cdk.Stack;
beforeEach(() => {
  // GIVEN
  stack = new cdk.Stack();
});

describe('CodeFirstSchema bind validation', () => {
  test('bind throws error when api does not implement IGraphqlApi', () => {
    // WHEN
    const schema = new CodeFirstSchema();
    const invalidApi = {
      apiId: 'test-api-id',
      // Missing 'arn' and 'addNoneDataSource' - not a valid IGraphqlApi
    };

    // THEN
    expect(() => {
      schema.bind(invalidApi as any);
    }).toThrowError("'api' instance should implement IGraphqlApi, but doesn't");
  });

  test('bind succeeds with valid IGraphqlApi', () => {
    // WHEN
    const schema = new CodeFirstSchema();
    new appsync.GraphqlApi(stack, 'API', {
      name: 'demo',
      schema,
    });

    // THEN - no error thrown, schema binds successfully
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: '',
    });
  });
});

describe('basic testing schema definition mode `code`', () => {

  test('definition mode `code` produces empty schema definition', () => {
    // WHEN
    new appsync.GraphqlApi(stack, 'API', {
      name: 'demo',
      schema: new CodeFirstSchema(),
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: '',
    });
  });

  test('definition mode `code` generates correct schema with addToSchema', () => {
    // WHEN
    const schema = new CodeFirstSchema();
    new appsync.GraphqlApi(stack, 'API', {
      name: 'demo',
      schema,
    });
    schema.addType(type);
    schema.addType(query);
    schema.addType(mutation);

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${type.toString()}\n${query.toString()}\n${mutation.toString()}\n`,
    });
  });

  test('definition mode `code` allows for api to addQuery', () => {
    // WHEN
    const schema = new CodeFirstSchema();
    new appsync.GraphqlApi(stack, 'API', {
      name: 'demo',
      schema,
    });
    schema.addQuery('test', new ResolvableField({
      returnType: t.string,
    }));

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: 'schema {\n  query: Query\n}\ntype Query {\n  test: String\n}\n',
    });
  });

  test('definition mode `code` allows for schema to addMutation', () => {
    // WHEN
    const schema = new CodeFirstSchema();
    new appsync.GraphqlApi(stack, 'API', {
      name: 'demo',
      schema,
    });
    schema.addMutation('test', new ResolvableField({
      returnType: t.string,
    }));

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: 'schema {\n  mutation: Mutation\n}\ntype Mutation {\n  test: String\n}\n',
    });
  });

  test('definition mode `code` allows for schema to addSubscription', () => {
    // WHEN
    const schema = new CodeFirstSchema();
    new appsync.GraphqlApi(stack, 'API', {
      name: 'demo',
      schema,
    });
    schema.addSubscription('test', new ResolvableField({
      returnType: t.string,
    }));

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: 'schema {\n  subscription: Subscription\n}\ntype Subscription {\n  test: String\n}\n',
    });
  });
});
