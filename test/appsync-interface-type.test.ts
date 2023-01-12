import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { CodeFirstSchema, Directive, Field, InterfaceType, ObjectType, ResolvableField } from '../src';
import * as t from './scalar-type-defintions';

let stack: cdk.Stack;
let schema: CodeFirstSchema;
let api: appsync.GraphqlApi;
beforeEach(() => {
  // GIVEN
  stack = new cdk.Stack();
  schema = new CodeFirstSchema();
  api = new appsync.GraphqlApi(stack, 'api', {
    name: 'api',
    schema,
  });
});

describe('testing InterfaceType properties', () => {
  let baseTest: InterfaceType;
  beforeEach(()=>{
    baseTest = new InterfaceType('baseTest', {
      definition: {
        id: t.id,
      },
    });
  });
  test('basic InterfaceType produces correct schema', () => {
    // WHEN
    schema.addToSchema(baseTest.toString());
    const out = 'interface baseTest {\n  id: ID\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('InterfaceType fields can have arguments', () => {
    // WHEN
    baseTest.addField({
      fieldName: 'test',
      field: new Field({
        returnType: t.string,
        args: { success: t.int },
      }),
    });
    schema.addToSchema(baseTest.toString());
    const out = 'interface baseTest {\n  id: ID\n  test(success: Int): String\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('InterfaceType fields will not produce resolvers', () => {
    // WHEN
    baseTest.addField({
      fieldName: 'test',
      field: new ResolvableField({
        returnType: t.string,
        args: { success: t.int },
        dataSource: api.addNoneDataSource('none'),
      }),
    });
    schema.addToSchema(baseTest.toString());
    const out = 'interface baseTest {\n  id: ID\n  test(success: Int): String\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
    Template.fromStack(stack).resourceCountIs('AWS::AppSync::Resolver', 0);
  });

  test('Interface Type can be a Graphql Type', () => {
    // WHEN
    const graphqlType = baseTest.attribute();

    const test = new ObjectType('Test', {
      definition: {
        test: graphqlType,
      },
    });
    schema.addToSchema(test.toString());
    const out = 'type Test {\n  test: baseTest\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('Interface Type can generate Fields with Directives', () => {
    // WHEN
    const test = new InterfaceType('Test', {
      definition: {
        test: t.string,
      },
    });
    test.addField({
      fieldName: 'resolve',
      field: new Field({
        returnType: t.string,
        directives: [Directive.apiKey()],
      }),
    });

    schema.addType(test);
    const out = 'interface Test {\n  test: String\n  resolve: String\n  @aws_api_key\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('Interface Type can generate ResolvableFields with Directives, but not the resolver', () => {
    // WHEN
    const test = new InterfaceType('Test', {
      definition: {
        test: t.string,
      },
    });
    test.addField({
      fieldName: 'resolve',
      field: new ResolvableField({
        returnType: t.string,
        directives: [Directive.apiKey()],
        dataSource: api.addNoneDataSource('none'),
      }),
    });

    schema.addType(test);
    const out = 'interface Test {\n  test: String\n  resolve: String\n  @aws_api_key\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
    Template.fromStack(stack).resourceCountIs('AWS::AppSync::Resolver', 0);
  });

  test('appsync fails addField with InterfaceType missing fieldName', () => {
    // WHEN
    const test = new InterfaceType('Test', { definition: {} });
    schema.addType(test);

    // THEN
    expect(() => {
      test.addField({ fieldName: 'test' });
    }).toThrowError('Interface Types must have both fieldName and field options.');
  });

  test('appsync fails addField with InterfaceType missing field', () => {
    // WHEN
    const test = new InterfaceType('Test', { definition: {} });
    schema.addType(test);

    // THEN
    expect(() => {
      test.addField({ field: t.string });
    }).toThrowError('Interface Types must have both fieldName and field options.');
  });

  test('appsync fails addField with InterfaceType missing both fieldName and field options', () => {
    // WHEN
    const test = new InterfaceType('Test', { definition: {} });
    schema.addType(test);

    // THEN
    expect(() => {
      test.addField({});
    }).toThrowError('Interface Types must have both fieldName and field options.');
  });
});
