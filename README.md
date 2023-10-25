# AWS CDK AppSync Utilities

This package contains various utilities for definining GraphQl Apis via AppSync using the [aws-cdk](https://github.com/aws/aws-cdk).

## Code First Schema Definition

`CodeFirstSchema` offers the ability to generate your schema in a code-first
approach. A code-first approach offers a developer workflow with:

- **modularity**: organizing schema type definitions into different files
- **reusability**: removing boilerplate/repetitive code
- **consistency**: resolvers and schema definition will always be synced

The code-first approach allows for **dynamic** schema generation. You can
generate your schema based on variables and templates to reduce code
duplication.

```ts
import { GraphqlApi } from '@aws-cdk/aws-appsync-alpha';
import { CodeFirstSchema } from 'awscdk-appsync-utils';

const schema = new CodeFirstSchema();
const api = new GraphqlApi(this, 'api', { name: 'myApi', schema });

schema.addType(new ObjectType('demo', {
  definition: { id: GraphqlType.id() },
}));
```

### Code-First Example

To showcase the code-first approach. Let's try to model the following schema segment.

```gql
interface Node {
  id: String
}

type Query {
  allFilms(after: String, first: Int, before: String, last: Int): FilmConnection
}

type FilmNode implements Node {
  filmName: String
}

type FilmConnection {
  edges: [FilmEdge]
  films: [Film]
  totalCount: Int
}

type FilmEdge {
  node: Film
  cursor: String
}
```

Above we see a schema that allows for generating paginated responses. For example,
we can query `allFilms(first: 100)` since `FilmConnection` acts as an intermediary
for holding `FilmEdges` we can write a resolver to return the first 100 films.

In a separate file, we can declare our object types and related functions.
We will call this file `object-types.ts` and we will have created it in a way that
allows us to generate other `XxxConnection` and `XxxEdges` in the future.

```ts nofixture
import { GraphqlType, InterfaceType, ObjectType } from 'awscdk-appsync-utils';
const pluralize = require('pluralize');

export const args = {
  after: GraphqlType.string(),
  first: GraphqlType.int(),
  before: GraphqlType.string(),
  last: GraphqlType.int(),
};

export const Node = new InterfaceType('Node', {
  definition: { id: GraphqlType.string() }
});
export const FilmNode = new ObjectType('FilmNode', {
  interfaceTypes: [Node],
  definition: { filmName: GraphqlType.string() }
});

export function generateEdgeAndConnection(base: ObjectType) {
  const edge = new ObjectType(`${base.name}Edge`, {
    definition: { node: base.attribute(), cursor: GraphqlType.string() }
  });
  const connection = new ObjectType(`${base.name}Connection`, {
    definition: {
      edges: edge.attribute({ isList: true }),
      [pluralize(base.name)]: base.attribute({ isList: true }),
      totalCount: GraphqlType.int(),
    }
  });
  return { edge: edge, connection: connection };
}
```

Finally, we will go to our `cdk-stack` and combine everything together
to generate our schema.

```ts fixture=with-objects
declare const dummyRequest: appsync.MappingTemplate;
declare const dummyResponse: appsync.MappingTemplate;

const api = new appsync.GraphqlApi(this, 'Api', {
  name: 'demo',
});

const objectTypes = [ Node, FilmNode ];

const filmConnections = generateEdgeAndConnection(FilmNode);

api.addQuery('allFilms', new ResolvableField({
  returnType: filmConnections.connection.attribute(),
  args: args,
  dataSource: api.addNoneDataSource('none'),
  requestMappingTemplate: dummyRequest,
  responseMappingTemplate: dummyResponse,
}));

api.addType(Node);
api.addType(FilmNode);
api.addType(filmConnections.edge);
api.addType(filmConnections.connection);
```

Notice how we can utilize the `generateEdgeAndConnection` function to generate
Object Types. In the future, if we wanted to create more Object Types, we can simply
create the base Object Type (i.e. Film) and from there we can generate its respective
`Connections` and `Edges`.

Check out a more in-depth example [here](https://github.com/BryanPan342/starwars-code-first).

## GraphQL Types

One of the benefits of GraphQL is its strongly typed nature. We define the
types within an object, query, mutation, interface, etc. as **GraphQL Types**.

GraphQL Types are the building blocks of types, whether they are scalar, objects,
interfaces, etc. GraphQL Types can be:

- [**Scalar Types**](https://docs.aws.amazon.com/appsync/latest/devguide/scalars.html): Id, Int, String, AWSDate, etc.
- [**Object Types**](#Object-Types): types that you generate (i.e. `demo` from the example above)
- [**Interface Types**](#Interface-Types): abstract types that define the base implementation of other
Intermediate Types

More concretely, GraphQL Types are simply the types appended to variables.
Referencing the object type `Demo` in the previous example, the GraphQL Types
is `String!` and is applied to both the names `id` and `version`.

### Directives

`Directives` are attached to a field or type and affect the execution of queries,
mutations, and types. With AppSync, we use `Directives` to configure authorization.
Appsync utils provide static functions to add directives to your CodeFirstSchema.

- `Directive.iam()` sets a type or field's authorization to be validated through `Iam`
- `Directive.apiKey()` sets a type or field's authorization to be validated through a `Api Key`
- `Directive.oidc()` sets a type or field's authorization to be validated through `OpenID Connect`
- `Directive.cognito(...groups: string[])` sets a type or field's authorization to be validated
through `Cognito User Pools`
  - `groups` the name of the cognito groups to give access

To learn more about authorization and directives, read these docs [here](https://docs.aws.amazon.com/appsync/latest/devguide/security.html).

### Field and Resolvable Fields

While `GraphqlType` is a base implementation for GraphQL fields, we have abstractions
on top of `GraphqlType` that provide finer grain support.

### Field

`Field` extends `GraphqlType` and will allow you to define arguments. [**Interface Types**](#Interface-Types) are not resolvable and this class will allow you to define arguments,
but not its resolvers.

For example, if we want to create the following type:

```gql
type Node {
  test(argument: string): String
}
```

The CDK code required would be:

```ts
import { Field, GraphqlType, InterfaceType } from 'awscdk-appsync-utils';

const field = new Field({
  returnType: GraphqlType.string(),
  args: {
    argument: GraphqlType.string(),
  },
});
const type = new InterfaceType('Node', {
  definition: { test: field },
});
```

### Resolvable Fields

`ResolvableField` extends `Field` and will allow you to define arguments and its resolvers.
[**Object Types**](#Object-Types) can have fields that resolve and perform operations on
your backend.

You can also create resolvable fields for object types.

```gql
type Info {
  node(id: String): String
}
```

The CDK code required would be:

```ts
declare const api: appsync.GraphqlApi;
declare const dummyRequest: appsync.MappingTemplate;
declare const dummyResponse: appsync.MappingTemplate;

const info = new ObjectType('Info', {
  definition: {
    node: new ResolvableField({
      returnType: GraphqlType.string(),
      args: {
        id: GraphqlType.string(),
      },
      dataSource: api.addNoneDataSource('none'),
      requestMappingTemplate: dummyRequest,
      responseMappingTemplate: dummyResponse,
    }),
  },
});
```

To nest resolvers, we can also create top level query types that call upon
other types. Building off the previous example, if we want the following graphql
type definition:

```gql
type Query {
  get(argument: string): Info
}
```

The CDK code required would be:

```ts
declare const api: appsync.GraphqlApi;
declare const dummyRequest: appsync.MappingTemplate;
declare const dummyResponse: appsync.MappingTemplate;

const query = new ObjectType('Query', {
  definition: {
    get: new ResolvableField({
      returnType: GraphqlType.string(),
      args: {
        argument: GraphqlType.string(),
      },
      dataSource: api.addNoneDataSource('none'),
      requestMappingTemplate: dummyRequest,
      responseMappingTemplate: dummyResponse,
    }),
  },
});
```

Learn more about fields and resolvers [here](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-overview.html).

### Intermediate Types

Intermediate Types are defined by Graphql Types and Fields. They have a set of defined
fields, where each field corresponds to another type in the system. Intermediate
Types will be the meat of your GraphQL Schema as they are the types defined by you.

Intermediate Types include:

- [**Interface Types**](#Interface-Types)
- [**Object Types**](#Object-Types)
- [**Enum Types**](#Enum-Types)
- [**Input Types**](#Input-Types)
- [**Union Types**](#Union-Types)

#### Interface Types

**Interface Types** are abstract types that define the implementation of other
intermediate types. They are useful for eliminating duplication and can be used
to generate Object Types with less work.

You can create Interface Types ***externally***.

```ts
const node = new InterfaceType('Node', {
  definition: {
    id: GraphqlType.string({ isRequired: true }),
  },
});
```

To learn more about **Interface Types**, read the docs [here](https://graphql.org/learn/schema/#interfaces).

#### Object Types

**Object Types** are types that you declare. For example, in the [code-first example](#code-first-example)
the `demo` variable is an **Object Type**. **Object Types** are defined by
GraphQL Types and are only usable when linked to a GraphQL Api.

You can create Object Types in two ways:

1. Object Types can be created ***externally***.

    ```ts
    const schema = new CodeFirstSchema();
    const api = new appsync.GraphqlApi(this, 'Api', {
      name: 'demo',
      schema,
    });
    const demo = new ObjectType('Demo', {
      definition: {
        id: GraphqlType.string({ isRequired: true }),
        version: GraphqlType.string({ isRequired: true }),
      },
    });

    schema.addType(demo);
    ```

    > This method allows for reusability and modularity, ideal for larger projects.
    For example, imagine moving all Object Type definition outside the stack.

    `object-types.ts` - a file for object type definitions

    ```ts nofixture
    import { ObjectType, GraphqlType } from 'awscdk-appsync-utils';
    export const demo = new ObjectType('Demo', {
      definition: {
        id: GraphqlType.string({ isRequired: true }),
        version: GraphqlType.string({ isRequired: true }),
      },
    });
    ```

    `cdk-stack.ts` - a file containing our cdk stack

    ```ts fixture=with-objects
    declare const schema: CodeFirstSchema;
    schema.addType(demo);
    ```

2. Object Types can be created ***externally*** from an Interface Type.

    ```ts
    const node = new InterfaceType('Node', {
      definition: {
        id: GraphqlType.string({ isRequired: true }),
      },
    });
    const demo = new ObjectType('Demo', {
      interfaceTypes: [ node ],
      definition: {
        version: GraphqlType.string({ isRequired: true }),
      },
    });
    ```

    > This method allows for reusability and modularity, ideal for reducing code duplication.

To learn more about **Object Types**, read the docs [here](https://graphql.org/learn/schema/#object-types-and-fields).

#### Enum Types

**Enum Types** are a special type of Intermediate Type. They restrict a particular
set of allowed values for other Intermediate Types.

```gql
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}
```

> This means that wherever we use the type Episode in our schema, we expect it to
> be exactly one of NEWHOPE, EMPIRE, or JEDI.

The above GraphQL Enumeration Type can be expressed in CDK as the following:

```ts
declare const api: GraphqlApi;
const episode = new EnumType('Episode', {
  definition: [
    'NEWHOPE',
    'EMPIRE',
    'JEDI',
  ],
});
api.addType(episode);
```

To learn more about **Enum Types**, read the docs [here](https://graphql.org/learn/schema/#enumeration-types).

#### Input Types

**Input Types** are special types of Intermediate Types. They give users an
easy way to pass complex objects for top level Mutation and Queries.

```gql
input Review {
  stars: Int!
  commentary: String
}
```

The above GraphQL Input Type can be expressed in CDK as the following:

```ts
declare const api: appsync.GraphqlApi;
const review = new InputType('Review', {
  definition: {
    stars: GraphqlType.int({ isRequired: true }),
    commentary: GraphqlType.string(),
  },
});
api.addType(review);
```

To learn more about **Input Types**, read the docs [here](https://graphql.org/learn/schema/#input-types).

#### Union Types

**Union Types** are a special type of Intermediate Type. They are similar to
Interface Types, but they cannot specify any common fields between types.

**Note:** the fields of a union type need to be `Object Types`. In other words, you
can't create a union type out of interfaces, other unions, or inputs.

```gql
union Search = Human | Droid | Starship
```

The above GraphQL Union Type encompasses the Object Types of Human, Droid and Starship. It
can be expressed in CDK as the following:

```ts
declare const api: appsync.GraphqlApi;
const string = GraphqlType.string();
const human = new ObjectType('Human', { definition: { name: string } });
const droid = new ObjectType('Droid', { definition: { name: string } });
const starship = new ObjectType('Starship', { definition: { name: string } }););
const search = new UnionType('Search', {
  definition: [ human, droid, starship ],
});
api.addType(search);
```

To learn more about **Union Types**, read the docs [here](https://graphql.org/learn/schema/#union-types).

### Query

Every schema requires a top level Query type. By default, the schema will look
for the `Object Type` named `Query`. The top level `Query` is the **only** exposed
type that users can access to perform `GET` operations on your Api.

To add fields for these queries, we can simply run the `addQuery` function to add
to the schema's `Query` type.

```ts
declare const api: appsync.GraphqlApi;
declare const filmConnection: InterfaceType;
declare const dummyRequest: appsync.MappingTemplate;
declare const dummyResponse: appsync.MappingTemplate;

const string = GraphqlType.string();
const int = GraphqlType.int();
api.addQuery('allFilms', new ResolvableField({
  returnType: filmConnection.attribute(),
  args: { after: string, first: int, before: string, last: int},
  dataSource: api.addNoneDataSource('none'),
  requestMappingTemplate: dummyRequest,
  responseMappingTemplate: dummyResponse,
}));
```

To learn more about top level operations, check out the docs [here](https://docs.aws.amazon.com/appsync/latest/devguide/graphql-overview.html).

### Mutation

Every schema **can** have a top level Mutation type. By default, the schema will look
for the `ObjectType` named `Mutation`. The top level `Mutation` Type is the only exposed
type that users can access to perform `mutable` operations on your Api.

To add fields for these mutations, we can simply run the `addMutation` function to add
to the schema's `Mutation` type.

```ts
declare const api: appsync.GraphqlApi;
declare const filmNode: ObjectType;
declare const dummyRequest: appsync.MappingTemplate;
declare const dummyResponse: appsync.MappingTemplate;

const string = GraphqlType.string();
const int = GraphqlType.int();
api.addMutation('addFilm', new ResolvableField({
  returnType: filmNode.attribute(),
  args: { name: string, film_number: int },
  dataSource: api.addNoneDataSource('none'),
  requestMappingTemplate: dummyRequest,
  responseMappingTemplate: dummyResponse,
}));
```

To learn more about top level operations, check out the docs [here](https://docs.aws.amazon.com/appsync/latest/devguide/graphql-overview.html).

### Subscription

Every schema **can** have a top level Subscription type. The top level `Subscription` Type
is the only exposed type that users can access to invoke a response to a mutation. `Subscriptions`
notify users when a mutation specific mutation is called. This means you can make any data source
real time by specify a GraphQL Schema directive on a mutation.

**Note**: The AWS AppSync client SDK automatically handles subscription connection management.

To add fields for these subscriptions, we can simply run the `addSubscription` function to add
to the schema's `Subscription` type.

```ts
declare const api: appsync.GraphqlApi;
declare const film: InterfaceType;

api.addSubscription('addedFilm', new Field({
  returnType: film.attribute(),
  args: { id: GraphqlType.id({ isRequired: true }) },
  directives: [Directive.subscribe('addFilm')],
}));
```

To learn more about top level operations, check out the docs [here](https://docs.aws.amazon.com/appsync/latest/devguide/real-time-data.html).

## Merge Source API to Merged API Using A Custom Resource

The SourceApiAssociationMergeOperation construct provides the ability to merge a source api to a Merged Api
and invoke a merge within a Cloudformation custom resource. If the merge operation fails with a conflict, the 
Cloudformation update will fail and rollback the changes to the source API in the stack.

```ts
import * as cdk from 'aws-cdk-lib';

const sourceApi1ToMerge = new appsync.GraphqlApi(this, 'FirstSourceAPI', {
  name: 'FirstSourceAPI',
  definition: appsync.Definition.fromFile(path.join(__dirname, 'appsync.merged-api-1.graphql')),
});

const sourceApi2ToMerge = new appsync.GraphqlApi(this, 'SecondSourceAPI', {
  name: 'SecondSourceAPI',
  definition: appsync.Definition.fromFile(path.join(__dirname, 'appsync.merged-api-2.graphql')),
});

const remoteMergedApi = appsync.GraphqlApi.fromGraphqlApiAttributes(this, 'ImportedMergedApi', {
  graphqlApiId: 'MyApiId',
  graphqlApiArn: 'MyApiArn',
});

const remoteExecutionRole = iam.Role.fromRoleArn(this, 'ExecutionRole', 'arn:aws:iam::ACCOUNT:role/MyExistingRole');
const association1 = new appsync.SourceApiAssociation(this, 'SourceApiAssociation1', {
   sourceApi: sourceApi1ToMerge,
   mergedApi: remoteMergedApi,
   mergeType: appsync.MergeType.MANUAL_MERGE,
   mergedApiExecutionRole: remoteExecutionRole,
});

const association2 = new appsync.SourceApiAssociation(this, 'SourceApiAssociation2', {
   sourceApi: sourceApi2ToMerge,
   mergedApi: remoteMergedApi,
   mergeType: appsync.MergeType.MANUAL_MERGE,
   mergedApiExecutionRole: remoteExecutionRole,
});

// The version id can be any identifier defined by the developer. Changing the version identifier allows you to control
// whether a merge operation will take place during deployment.
SourceApiAssociationMergeOperation(this, 'MergeOperation1', {
  sourceApiAssociation: association1,
  versionIdentifier: '1',
});

// Optionally, you can add the alwaysMergeOnStackUpdate flag instead which will ensure that the merge operation occurs 
// during every stack update, regardless if there was a change or not. Note that this may lead to merge operations that 
//do not actually change the MergedAPI.
SourceApiAssociationMergeOperation(this, 'MergeOperation2', {
  sourceApiAssociation: association2,
  alwaysMergeOnStackUpdate: true,
});
```

## Contributing

This library leans towards high level and experimental features for appsync cdk users. If you have an idea for additional utilities please create an issue describing the feature.

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.
