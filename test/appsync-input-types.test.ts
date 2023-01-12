import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { CodeFirstSchema, InputType, ObjectType } from '../src';
import * as t from './scalar-type-defintions';

const out = 'input Test {\n  test: String\n}\n';
let stack: cdk.Stack;
let schema: CodeFirstSchema;
beforeEach(() => {
  // GIVEN
  stack = new cdk.Stack();
  schema = new CodeFirstSchema();
  new appsync.GraphqlApi(stack, 'api', {
    name: 'api',
    schema,
  });
});

describe('testing Input Type properties', () => {
  test('InputType configures properly', () => {
    // WHEN
    const test = new InputType('Test', {
      definition: { test: t.string },
    });
    schema.addType(test);

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
    Template.fromStack(stack).resourceCountIs('AWS::AppSync::Resolver', 0);
  });

  test('InputType can addField', () => {
    // WHEN
    const test = new InputType('Test', { definition: {} });
    schema.addType(test);
    test.addField({ fieldName: 'test', field: t.string });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('appsync fails addField with InputType missing fieldName', () => {
    // WHEN
    const test = new InputType('Test', { definition: {} });
    schema.addType(test);

    // THEN
    expect(() => {
      test.addField({ fieldName: 'test' });
    }).toThrowError('Input Types must have both fieldName and field options.');
  });

  test('appsync fails addField with InputType missing field', () => {
    // WHEN
    const test = new InputType('Test', { definition: {} });
    schema.addType(test);

    // THEN
    expect(() => {
      test.addField({ field: t.string });
    }).toThrowError('Input Types must have both fieldName and field options.');
  });

  test('appsync fails addField with InputType missing both fieldName and field options', () => {
    // WHEN
    const test = new InputType('Test', { definition: {} });
    schema.addType(test);

    // THEN
    expect(() => {
      test.addField({});
    }).toThrowError('Input Types must have both fieldName and field options.');
  });

  test('InputType can be a GraphqlType', () => {
    // WHEN
    const test = new InputType('Test', {
      definition: { test: t.string },
    });
    schema.addType(test);

    schema.addType(new ObjectType('Test2', {
      definition: { input: test.attribute() },
    }));

    const obj = 'type Test2 {\n  input: Test\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}${obj}`,
    });
  });
});
