import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as t from './scalar-type-defintions';
import { CodeFirstSchema, Directive, Field, InterfaceType, ObjectType, ResolvableField } from '../src';

const generateField = (directives: Directive[]): Field => {
  return new Field({
    returnType: t.string,
    directives,
  });
};

const generateRField = (directives: Directive[]): ResolvableField => {
  return new ResolvableField({
    returnType: t.string,
    directives,
  });
};

interface AuthType {
  stack: cdk.Stack;
  directive: Directive;
  tag: string;
  authorizationConfig?: appsync.AuthorizationConfig;
};

/**
  * List of all built in auth type directives
  *
  * A list of all test cases to test correct insertion of all built in auth type directives.
  */
const makeAuthTypes = (): AuthType[] => {
  const cognitoDefaultStack = new cdk.Stack();
  const cognitoAddlStack = new cdk.Stack();
  return [{
    stack: new cdk.Stack(),
    directive: Directive.iam(),
    tag: '@aws_iam',
    authorizationConfig: {
      defaultAuthorization: {
        authorizationType: appsync.AuthorizationType.IAM,
      },
    },
  }, {
    stack: new cdk.Stack(),
    directive: Directive.oidc(),
    tag: '@aws_oidc',
    authorizationConfig: {
      defaultAuthorization: {
        authorizationType: appsync.AuthorizationType.OIDC,
        openIdConnectConfig: { oidcProvider: 'test' },
      },
    },
  }, {
    stack: new cdk.Stack(),
    directive: Directive.apiKey(),
    tag: '@aws_api_key',
  }, {
    stack: cognitoDefaultStack,
    directive: Directive.cognito('test', 'test2'),
    tag: '@aws_auth(cognito_groups: ["test", "test2"])',
    authorizationConfig: {
      defaultAuthorization: {
        authorizationType: appsync.AuthorizationType.USER_POOL,
        userPoolConfig: { userPool: new cognito.UserPool(cognitoDefaultStack, 'userpool') },
      },
    },
  }, {
    stack: cognitoAddlStack,
    directive: Directive.cognito('test', 'test2'),
    tag: '@aws_cognito_user_pools(cognito_groups: ["test", "test2"])',
    authorizationConfig: {
      additionalAuthorizationModes: [
        {
          authorizationType: appsync.AuthorizationType.USER_POOL,
          userPoolConfig: { userPool: new cognito.UserPool(cognitoAddlStack, 'userpool') },
        },
      ],
    },
  }, {
    stack: new cdk.Stack(),
    directive: Directive.custom('custom'),
    tag: 'custom',
  }];
};

describe('Basic Testing of Directives for Code-First', () => {
  test.each(makeAuthTypes())('$tag directive configures in Object Type', ({ directive, tag, authorizationConfig, stack }) => {
    // WHEN
    const schema = new CodeFirstSchema();
    new appsync.GraphqlApi(stack, 'api_iam', {
      name: 'api',
      authorizationConfig,
      schema,
    });

    schema.addType(new ObjectType('Test', {
      definition: {
        field: generateField([directive]),
        rfield: generateRField([directive]),
      },
      directives: [directive],
    }));
    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `type Test ${tag} {\n  field: String\n  ${tag}\n  rfield: String\n  ${tag}\n}\n`,
    });
  });

  test.each(makeAuthTypes())('$tag directive configures in Interface Type', ({ directive, tag, authorizationConfig, stack }) => {
    // WHEN
    const schema = new CodeFirstSchema();
    new appsync.GraphqlApi(stack, 'api_iam', {
      name: 'api',
      authorizationConfig,
      schema,
    });

    schema.addType(new InterfaceType('Test', {
      definition: {
        field: generateField([directive]),
        rfield: generateRField([directive],
        ),
      },
      directives: [directive],
    }));
    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::AppSync::GraphQLSchema', {
      Definition: `interface Test ${tag} {\n  field: String\n  ${tag}\n  rfield: String\n  ${tag}\n}\n`,
    });
  });
});
