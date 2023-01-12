import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { CodeFirstSchema, Directive, Field, InterfaceType, ObjectType, ResolvableField } from '../src';
import * as t from './scalar-type-defintions';

let stack: cdk.Stack;
let api: appsync.GraphqlApi;
let schema: CodeFirstSchema;
beforeEach(() => {
  // GIVEN
  stack = new cdk.Stack();
  schema = new CodeFirstSchema();
  api = new appsync.GraphqlApi(stack, 'api', {
    name: 'api',
    schema,
  });
});

describe('testing Object Type properties', () => {
  test('ObjectType can implement from interface types', () => {
    // WHEN
    const baseTest = new InterfaceType('baseTest', {
      definition: {
        id: t.id,
      },
    });
    const objectTest = new ObjectType('objectTest', {
      interfaceTypes: [baseTest],
      definition: {
        id2: t.id,
      },
      directives: [Directive.custom('@test')],
    });

    schema.addType(baseTest);
    schema.addType(objectTest);
    const gql_interface = 'interface baseTest {\n  id: ID\n}\n';
    const gql_object = 'type objectTest implements baseTest @test {\n  id2: ID\n  id: ID\n}\n';
    const out = `${gql_interface}${gql_object}`;

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('ObjectType can implement from multiple interface types', () => {
    // WHEN
    const baseTest = new InterfaceType('baseTest', {
      definition: { id: t.id },
    });
    const anotherTest = new InterfaceType('anotherTest', {
      definition: { id2: t.id },
    });
    const objectTest = new ObjectType('objectTest', {
      interfaceTypes: [anotherTest, baseTest],
      definition: {
        id3: t.id,
      },
    });

    schema.addType(baseTest);
    schema.addType(anotherTest);
    schema.addType(objectTest);

    const gql_interface = 'interface baseTest {\n  id: ID\n}\ninterface anotherTest {\n  id2: ID\n}\n';
    const gql_object = 'type objectTest implements anotherTest & baseTest {\n  id3: ID\n  id2: ID\n  id: ID\n}\n';
    const out = `${gql_interface}${gql_object}`;

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('Object Type can be a Graphql Type', () => {
    // WHEN
    const baseTest = new ObjectType('baseTest', {
      definition: {
        id: t.id,
      },
    });
    const graphqlType = baseTest.attribute();
    const test = new ObjectType('Test', {
      definition: {
        test: graphqlType,
      },
    });
    schema.addType(test);
    const out = 'type Test {\n  test: baseTest\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('Object Type can implement Resolvable Field in definition', () => {
    // WHEN
    const field = new ResolvableField({
      returnType: t.string,
      dataSource: api.addNoneDataSource('none'),
      args: {
        arg: t.int,
      },

    });
    const test = new ObjectType('Test', {
      definition: {
        test: t.string,
        resolve: field,
      },
    });
    schema.addType(test);
    const out = 'type Test {\n  test: String\n  resolve(arg: Int): String\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('Object Type can implement Resolvable Field from GraphqlType', () => {
    // WHEN
    const field = new ResolvableField({
      returnType: t.string,
      dataSource: api.addNoneDataSource('none'),
      args: {
        arg: t.int,
      },

    });
    const test = new ObjectType('Test', {
      definition: {
        test: t.string,
        resolve: field,
      },
    });
    schema.addType(test);
    const out = 'type Test {\n  test: String\n  resolve(arg: Int): String\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('Object Type can implement Resolvable Field for pipelineResolvers', () => {
    // WHEN
    const ds = api.addNoneDataSource('none');
    const test1 = ds.createFunction('Test1Function', {
      name: 'test1',
    });
    const test2 = ds.createFunction('Test2Function', {
      name: 'test2',
    });
    const test = new ObjectType('Test', {
      definition: {
        resolve: new ResolvableField({
          returnType: t.string,
          args: {
            arg: t.int,
          },
          pipelineConfig: [test1, test2],
          requestMappingTemplate: appsync.MappingTemplate.fromString(JSON.stringify({
            version: '2017-02-28',
          })),
          responseMappingTemplate: appsync.MappingTemplate.fromString(JSON.stringify({
            version: 'v1',
          })),
        }),
      },
    });
    schema.addType(test);

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::Resolver', {
      Kind: 'PIPELINE',
      PipelineConfig: {
        Functions: [
          { 'Fn::GetAtt': ['apiTest1Function793605E9', 'FunctionId'] },
          { 'Fn::GetAtt': ['apiTest2FunctionB704A7AD', 'FunctionId'] },
        ],
      },
    });
  });

  test('Object Type can dynamically add Fields', () => {
    // WHEN
    const field = new ResolvableField({
      returnType: t.string,
      dataSource: api.addNoneDataSource('none'),
      args: { arg: t.int },

    });
    const test = new ObjectType('Test', {
      definition: {
        test: t.string,
      },
    });
    test.addField({ fieldName: 'resolve', field });
    test.addField({ fieldName: 'dynamic', field: t.string });

    schema.addType(test);
    const out = 'type Test {\n  test: String\n  resolve(arg: Int): String\n  dynamic: String\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
    Template.fromStack(stack).resourceCountIs('AWS::AppSync::Resolver', 1);
  });

  test('Object Type can generate Fields with Directives', () => {
    // WHEN
    const test = new ObjectType('Test', {
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
    const out = 'type Test {\n  test: String\n  resolve: String\n  @aws_api_key\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('Object Type can generate ResolvableFields with Directives', () => {
    // WHEN
    const test = new ObjectType('Test', {
      definition: {
        test: t.string,
      },
    });
    const field = new ResolvableField({
      returnType: t.string,
      directives: [Directive.apiKey()],
      dataSource: api.addNoneDataSource('none'),
      args: {
        arg: t.string,
      },

    });
    test.addField({ fieldName: 'resolve', field });

    schema.addType(test);
    const out = 'type Test {\n  test: String\n  resolve(arg: String): String\n  @aws_api_key\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
    Template.fromStack(stack).resourceCountIs('AWS::AppSync::Resolver', 1);
  });

  test('appsync fails addField with ObjectType missing fieldName', () => {
    // WHEN
    const test = new ObjectType('Test', { definition: {} });
    schema.addType(test);

    // THEN
    expect(() => {
      test.addField({ fieldName: 'test' });
    }).toThrowError('Object Types must have both fieldName and field options.');
  });

  test('appsync fails addField with ObjectType missing field', () => {
    // WHEN
    const test = new ObjectType('Test', { definition: {} });
    schema.addType(test);

    // THEN
    expect(() => {
      test.addField({ field: t.string });
    }).toThrowError('Object Types must have both fieldName and field options.');
  });

  test('appsync fails addField with ObjectType missing both fieldName and field options', () => {
    // WHEN
    const test = new ObjectType('Test', { definition: {} });
    schema.addType(test);

    // THEN
    expect(() => {
      test.addField({});
    }).toThrowError('Object Types must have both fieldName and field options.');
  });
});
