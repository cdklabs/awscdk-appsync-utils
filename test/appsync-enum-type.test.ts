import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { CodeFirstSchema, EnumType, ObjectType } from '../src';
import * as t from './scalar-type-defintions';

const out = 'enum Test {\n  test1\n  test2\n  test3\n}\n';
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

describe('testing Enum Type properties', () => {
  test('EnumType configures properly', () => {
    // WHEN
    const test = new EnumType('Test', {
      definition: ['test1', 'test2', 'test3'],
    });
    schema.addType(test);

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
    Template.fromStack(stack).resourceCountIs('AWS::AppSync::Resolver', 0);
  });

  test('EnumType can addField', () => {
    // WHEN
    const test = new EnumType('Test', {
      definition: ['test1', 'test2'],
    });
    schema.addType(test);
    test.addField({ fieldName: 'test3' });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('EnumType can be a GraphqlType', () => {
    // WHEN
    const test = new EnumType('Test', {
      definition: ['test1', 'test2', 'test3'],
    });
    schema.addType(test);

    schema.addType(new ObjectType('Test2', {
      definition: { enum: test.attribute() },
    }));

    const obj = 'type Test2 {\n  enum: Test\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}${obj}`,
    });
  });

  test('errors when enum type is configured with white space', () => {
    // THEN
    expect(() => {
      new EnumType('Test', {
        definition: ['test 1', 'test2', 'test3'],
      });
    }).toThrowError('Enum Type values cannot have whitespace. Received: test 1');
  });

  test('errors when the fieldName in addField has white space', () => {
    // WHEN
    const test = new EnumType('Test', {
      definition: [],
    });
    // THEN
    expect(() => {
      test.addField({ fieldName: ' ' });
    }).toThrowError('Enum Type values cannot have whitespace. Received:  ');
  });

  test('errors when enum type is configured with field options', () => {
    // WHEN
    const test = new EnumType('Test', {
      definition: [],
    });
    // THEN
    expect(() => {
      test.addField({ fieldName: 'test', field: t.string });
    }).toThrowError('Enum Type fields consist of strings. Use the fieldName option instead of the field option.');
  });

  test('errors when enum type is missing fieldName option', () => {
    // WHEN
    const test = new EnumType('Test', {
      definition: [],
    });
    // THEN
    expect(() => {
      test.addField({});
    }).toThrowError('When adding a field to an Enum Type, you must configure the fieldName option.');
  });
});
