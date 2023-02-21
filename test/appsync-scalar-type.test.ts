import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as t from './scalar-type-defintions';
import { CodeFirstSchema, ObjectType } from '../src';

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

describe('testing all GraphQL Types', () => {
  test('scalar type id', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.id,
      },
    }));
    const out = 'type Test {\n  id: ID\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type string', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.string,
      },
    }));
    const out = 'type Test {\n  id: String\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type int', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.int,
      },
    }));
    const out = 'type Test {\n  id: Int\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type float', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.float,
      },
    }));
    const out = 'type Test {\n  id: Float\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type boolean', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.boolean,
      },
    }));
    const out = 'type Test {\n  id: Boolean\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type AWSDate', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.awsDate,
      },
    }));
    const out = 'type Test {\n  id: AWSDate\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type AWSTime', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.awsTime,
      },
    }));
    const out = 'type Test {\n  id: AWSTime\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type AWSDateTime', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.awsDateTime,
      },
    }));
    const out = 'type Test {\n  id: AWSDateTime\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type AWSTimestamp', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.awsTimestamp,
      },
    }));
    const out = 'type Test {\n  id: AWSTimestamp\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type AWSEmail', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.awsEmail,
      },
    }));
    const out = 'type Test {\n  id: AWSEmail\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type AWSJSON', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.awsJson,
      },
    }));
    const out = 'type Test {\n  id: AWSJSON\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });


  test('scalar type AWSUrl', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.awsUrl,
      },
    }));
    const out = 'type Test {\n  id: AWSURL\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type AWSPhone', () => {
    // WHEN
    schema.addType(new ObjectType('Test', {
      definition: {
        id: t.awsPhone,
      },
    }));
    const out = 'type Test {\n  id: AWSPhone\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });

  test('scalar type AWSIPAddress', () => {
    // WHEN
    schema.addType( new ObjectType('Test', {
      definition: {
        id: t.awsIpAddress,
      },
    }));
    const out = 'type Test {\n  id: AWSIPAddress\n}\n';

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `${out}`,
    });
  });
});
