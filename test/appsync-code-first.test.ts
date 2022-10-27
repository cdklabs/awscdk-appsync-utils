import { GraphqlApi } from '@aws-cdk/aws-appsync-alpha';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CodeFirstSchema, Directive, Field, InterfaceType, ObjectType, ResolvableField } from '../src';
import * as t from './scalar-type-defintions';

let stack: cdk.Stack;
beforeEach(() => {
  // GIVEN
  stack = new cdk.Stack();
});

describe('code-first implementation through GraphQL Api functions`', () => {
  let api: GraphqlApi;
  let schema: CodeFirstSchema;
  beforeEach(() => {
    // GIVEN
    schema = new CodeFirstSchema();
    api = new GraphqlApi(stack, 'api', {
      name: 'api',
      schema,
    });
  });

  test('testing addType w/ Interface Type for schema definition mode `code`', () => {
    // WHEN
    const test = new InterfaceType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
      },
    });
    schema.addType(test);
    test.addField({ fieldName: 'dupid', field: t.dup_id });
    const out = 'interface Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('testing addType w/ Object Type for schema definition mode `code`', () => {
    // WHEN
    const test = new ObjectType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
      },
    });
    schema.addType(test);
    test.addField({ fieldName: 'dupid', field: t.dup_id });
    const out = 'type Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('testing addObjectType for schema definition mode `code`', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
        dupid: t.dup_id,
      },
    }));
    const out = 'type Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('addField dynamically adds field to schema for ObjectType', () => {
    // WHEN
    const test = schema.addType(new ObjectType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
      },
    }));

    test.addField({ fieldName: 'dupid', field: t.dup_id });
    const out = 'type Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('testing addInterfaceType for schema definition mode `code`', () => {
    // WHEN
    schema.addType(new InterfaceType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
        dupid: t.dup_id,
      },
    }));
    const out = 'interface Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('addField dynamically adds field to schema for InterfaceType', () => {
    // WHEN
    const test = schema.addType(new InterfaceType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
      },
    }));

    test.addField({ fieldName: 'dupid', field: t.dup_id });
    const out = 'interface Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('addSubscription allows for adding fields but not resolvable fields', () => {
    const ds = api.addNoneDataSource('DS');

    // WHEN
    schema.addMutation('addId', new ResolvableField({
      returnType: t.required_id,
      args: { id: t.required_id },
      dataSource: ds,
    }));
    schema.addSubscription('addedId', new Field({
      returnType: t.required_id,
      args: { id: t.required_id },
      directives: [Directive.subscribe('addId')],
    }));

    const schemaDef = 'schema {\n  mutation: Mutation\n  subscription: Subscription\n}\n';
    const mutationDef = 'type Mutation {\n  addId(id: ID!): ID!\n}\n';
    const subscriptionDef = 'type Subscription {\n  addedId(id: ID!): ID!\n  @aws_subscribe(mutations: ["addId"])\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${schemaDef}${mutationDef}${subscriptionDef}`,
    });
  });
});

describe('code-first implementation through Schema functions`', () => {
  let schema: CodeFirstSchema;
  beforeEach(() => {
    // GIVEN
    schema = new CodeFirstSchema();
  });

  test('testing addType w/ Interface Type for schema definition mode `code`', () => {
    // WHEN
    const test = new InterfaceType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
      },
    });
    schema.addType(test);
    test.addField({ fieldName: 'dupid', field: t.dup_id });

    new GraphqlApi(stack, 'api', {
      name: 'api',
      schema,
    });
    const out = 'interface Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('testing addType w/ Object Type for schema definition mode `code`', () => {
    // WHEN
    const test = new ObjectType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
      },
    });
    schema.addType(test);
    test.addField({ fieldName: 'dupid', field: t.dup_id });

    new GraphqlApi(stack, 'api', {
      name: 'api',
      schema,
    });
    const out = 'type Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('testing addObjectType for schema definition mode `code`', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
        dupid: t.dup_id,
      },
    }));

    new GraphqlApi(stack, 'api', {
      name: 'api',
      schema,
    });

    const out = 'type Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('schema.addField dynamically adds field to schema for ObjectType', () => {
    // WHEN
    const test = schema.addType(new ObjectType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
      },
    }));

    test.addField({ fieldName: 'dupid', field: t.dup_id });
    new GraphqlApi(stack, 'api', {
      name: 'api',
      schema,
    });
    const out = 'type Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('testing addInterfaceType for schema definition mode `code`', () => {
    // WHEN
    schema.addType(new InterfaceType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
        dupid: t.dup_id,
      },
    }));
    new GraphqlApi(stack, 'api', {
      name: 'api',
      schema,
    });
    const out = 'interface Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('schema addField dynamically adds field to schema for InterfaceType', () => {
    // WHEN
    const test = schema.addType(new InterfaceType('Test', {
      definition: {
        id: t.id,
        lid: t.list_id,
        rid: t.required_id,
        rlid: t.required_list_id,
        rlrid: t.required_list_required_id,
      },
    }));

    test.addField({ fieldName: 'dupid', field: t.dup_id });
    new GraphqlApi(stack, 'api', {
      name: 'api',
      schema,
    });
    const out = 'interface Test {\n  id: ID\n  lid: [ID]\n  rid: ID!\n  rlid: [ID]!\n  rlrid: [ID!]!\n  dupid: [ID!]!\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });
});
