import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { CodeFirstSchema, Field, InterfaceType, ObjectType, ResolvableField, UnionType } from '../src';
import * as t from './scalar-type-defintions';

const out = 'type Test1 {\n  test1: String\n}\ntype Test2 {\n  test2: String\n}\nunion UnionTest = Test1 | Test2\n';
const test1 = new ObjectType('Test1', {
  definition: { test1: t.string },
});
const test2 = new ObjectType('Test2', {
  definition: { test2: t.string },
});
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
  schema.addType(test1);
  schema.addType(test2);
});

describe('testing Union Type properties', () => {
  test('UnionType configures properly', () => {
    // WHEN
    const union = new UnionType('UnionTest', {
      definition: [test1, test2],
    });
    schema.addType(union);
    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
    Template.fromStack(stack).resourceCountIs('AWS::AppSync::Resolver', 0);
  });

  test('UnionType can addField', () => {
    // WHEN
    const union = new UnionType('UnionTest', {
      definition: [test1],
    });
    schema.addType(union);
    union.addField({ field: test2.attribute() });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('UnionType errors when addField is configured with fieldName option', () => {
    // WHEN
    const union = new UnionType('UnionTest', {
      definition: [test1],
    });
    schema.addType(union);

    // THEN
    expect(() => {
      union.addField({ fieldName: 'fail', field: test2.attribute() });
    }).toThrowError('Union Types cannot be configured with the fieldName option. Use the field option instead.');
  });

  test('UnionType errors when addField is not configured with field option', () => {
    // WHEN
    const union = new UnionType('UnionTest', {
      definition: [test1],
    });
    schema.addType(union);

    // THEN
    expect(() => {
      union.addField({});
    }).toThrowError('Union Types must be configured with the field option.');
  });

  test('UnionType can be a GraphqlType', () => {
    // WHEN
    const union = new UnionType('UnionTest', {
      definition: [test1, test2],
    });
    schema.addType(union);

    schema.addType(new ObjectType('Test2', {
      definition: { union: union.attribute() },
    }));

    const obj = 'type Test2 {\n  union: UnionTest\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}${obj}`,
    });
  });

  test('appsync errors when addField with Graphql Types', () => {
    // WHEN
    const test = new UnionType('Test', {
      definition: [],
    });
    // THEN
    expect(() => {
      test.addField({ field: t.string });
    }).toThrowError('Fields for Union Types must be Object Types.');
  });

  test('appsync errors when addField with Field', () => {
    // WHEN
    const test = new UnionType('Test', {
      definition: [],
    });
    // THEN
    expect(() => {
      test.addField({ field: new Field({ returnType: t.string }) });
    }).toThrowError('Fields for Union Types must be Object Types.');
  });

  test('appsync errors when addField with ResolvableField', () => {
    // WHEN
    const test = new UnionType('Test', {
      definition: [],
    });
    // THEN
    expect(() => {
      test.addField({ field: new ResolvableField({ returnType: t.string }) });
    }).toThrowError('Fields for Union Types must be Object Types.');
  });

  test('appsync errors when addField with Interface Types', () => {
    // WHEN
    const test = new UnionType('Test', {
      definition: [],
    });
    // THEN
    expect(() => {
      test.addField({ field: new InterfaceType('break', { definition: {} }).attribute() });
    }).toThrowError('Fields for Union Types must be Object Types.');
  });

  test('appsync errors when addField with Union Types', () => {
    // WHEN
    const test = new UnionType('Test', {
      definition: [],
    });
    // THEN
    expect(() => {
      test.addField({ field: test.attribute() });
    }).toThrowError('Fields for Union Types must be Object Types.');
  });
});
