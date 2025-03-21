# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SourceApiAssociationMergeOperation <a name="SourceApiAssociationMergeOperation" id="awscdk-appsync-utils.SourceApiAssociationMergeOperation"></a>

The SourceApiAssociationMergeOperation triggers a merge of a source API during a Cloudformation stack update.

This can be used to propagate changes from the source API to the Merged API when the association is using type MANUAL_MERGE.
If the merge operation fails, it will fail the Cloudformation update and rollback the stack.

#### Initializers <a name="Initializers" id="awscdk-appsync-utils.SourceApiAssociationMergeOperation.Initializer"></a>

```typescript
import { SourceApiAssociationMergeOperation } from 'awscdk-appsync-utils'

new SourceApiAssociationMergeOperation(scope: Construct, id: string, props: SourceApiAssociationMergeOperationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperation.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProps">SourceApiAssociationMergeOperationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-appsync-utils.SourceApiAssociationMergeOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-appsync-utils.SourceApiAssociationMergeOperation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-appsync-utils.SourceApiAssociationMergeOperation.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProps">SourceApiAssociationMergeOperationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperation.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.SourceApiAssociationMergeOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-appsync-utils.SourceApiAssociationMergeOperation.isConstruct"></a>

```typescript
import { SourceApiAssociationMergeOperation } from 'awscdk-appsync-utils'

SourceApiAssociationMergeOperation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-appsync-utils.SourceApiAssociationMergeOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-appsync-utils.SourceApiAssociationMergeOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### SourceApiAssociationMergeOperationProvider <a name="SourceApiAssociationMergeOperationProvider" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider"></a>

- *Implements:* <a href="#awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider">ISourceApiAssociationMergeOperationProvider</a>

SourceApiAssociationMergeProvider class is responsible for constructing the custom resource that will be used for initiating the source API merge during a Cloudformation update.

#### Initializers <a name="Initializers" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.Initializer"></a>

```typescript
import { SourceApiAssociationMergeOperationProvider } from 'awscdk-appsync-utils'

new SourceApiAssociationMergeOperationProvider(scope: Construct, id: string, props: SourceApiAssociationMergeOperationProviderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProviderProps">SourceApiAssociationMergeOperationProviderProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProviderProps">SourceApiAssociationMergeOperationProviderProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.associateSourceApiAssociation">associateSourceApiAssociation</a></code> | This function associates a source api association with the provider. |

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `associateSourceApiAssociation` <a name="associateSourceApiAssociation" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.associateSourceApiAssociation"></a>

```typescript
public associateSourceApiAssociation(sourceApiAssociation: ISourceApiAssociation): void
```

This function associates a source api association with the provider.

This method can be used for adding permissions to merge a specific source api association to the custom resource provider.

###### `sourceApiAssociation`<sup>Required</sup> <a name="sourceApiAssociation" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.associateSourceApiAssociation.parameter.sourceApiAssociation"></a>

- *Type:* aws-cdk-lib.aws_appsync.ISourceApiAssociation

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.isConstruct"></a>

```typescript
import { SourceApiAssociationMergeOperationProvider } from 'awscdk-appsync-utils'

SourceApiAssociationMergeOperationProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.property.schemaMergeLambda">schemaMergeLambda</a></code> | <code>aws-cdk-lib.aws_lambda.SingletonFunction</code> | The lambda function responsible for kicking off the merge operation. |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.property.serviceToken">serviceToken</a></code> | <code>string</code> | Service token for the resource provider. |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.property.sourceApiStablizationLambda">sourceApiStablizationLambda</a></code> | <code>aws-cdk-lib.aws_lambda.SingletonFunction</code> | The lambda function response for ensuring that the merge operation finished. |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `schemaMergeLambda`<sup>Required</sup> <a name="schemaMergeLambda" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.property.schemaMergeLambda"></a>

```typescript
public readonly schemaMergeLambda: SingletonFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.SingletonFunction

The lambda function responsible for kicking off the merge operation.

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

Service token for the resource provider.

---

##### `sourceApiStablizationLambda`<sup>Required</sup> <a name="sourceApiStablizationLambda" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider.property.sourceApiStablizationLambda"></a>

```typescript
public readonly sourceApiStablizationLambda: SingletonFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.SingletonFunction

The lambda function response for ensuring that the merge operation finished.

---


## Structs <a name="Structs" id="Structs"></a>

### AddFieldOptions <a name="AddFieldOptions" id="awscdk-appsync-utils.AddFieldOptions"></a>

The options to add a field to an Intermediate Type.

#### Initializer <a name="Initializer" id="awscdk-appsync-utils.AddFieldOptions.Initializer"></a>

```typescript
import { AddFieldOptions } from 'awscdk-appsync-utils'

const addFieldOptions: AddFieldOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.AddFieldOptions.property.field">field</a></code> | <code><a href="#awscdk-appsync-utils.IField">IField</a></code> | The resolvable field to add. |
| <code><a href="#awscdk-appsync-utils.AddFieldOptions.property.fieldName">fieldName</a></code> | <code>string</code> | The name of the field. |

---

##### `field`<sup>Optional</sup> <a name="field" id="awscdk-appsync-utils.AddFieldOptions.property.field"></a>

```typescript
public readonly field: IField;
```

- *Type:* <a href="#awscdk-appsync-utils.IField">IField</a>
- *Default:* no IField

The resolvable field to add.

This option must be configured for Object, Interface,
Input and Union Types.

---

##### `fieldName`<sup>Optional</sup> <a name="fieldName" id="awscdk-appsync-utils.AddFieldOptions.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string
- *Default:* no fieldName

The name of the field.

This option must be configured for Object, Interface,
Input and Enum Types.

---

### BaseTypeOptions <a name="BaseTypeOptions" id="awscdk-appsync-utils.BaseTypeOptions"></a>

Base options for GraphQL Types.

#### Initializer <a name="Initializer" id="awscdk-appsync-utils.BaseTypeOptions.Initializer"></a>

```typescript
import { BaseTypeOptions } from 'awscdk-appsync-utils'

const baseTypeOptions: BaseTypeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.BaseTypeOptions.property.isList">isList</a></code> | <code>boolean</code> | property determining if this attribute is a list i.e. if true, attribute would be [Type]. |
| <code><a href="#awscdk-appsync-utils.BaseTypeOptions.property.isRequired">isRequired</a></code> | <code>boolean</code> | property determining if this attribute is non-nullable i.e. if true, attribute would be Type! |
| <code><a href="#awscdk-appsync-utils.BaseTypeOptions.property.isRequiredList">isRequiredList</a></code> | <code>boolean</code> | property determining if this attribute is a non-nullable list i.e. if true, attribute would be [ Type ]! or if isRequired true, attribe would be [ Type! ]! |

---

##### `isList`<sup>Optional</sup> <a name="isList" id="awscdk-appsync-utils.BaseTypeOptions.property.isList"></a>

```typescript
public readonly isList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a list i.e. if true, attribute would be [Type].

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="awscdk-appsync-utils.BaseTypeOptions.property.isRequired"></a>

```typescript
public readonly isRequired: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is non-nullable i.e. if true, attribute would be Type!

---

##### `isRequiredList`<sup>Optional</sup> <a name="isRequiredList" id="awscdk-appsync-utils.BaseTypeOptions.property.isRequiredList"></a>

```typescript
public readonly isRequiredList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a non-nullable list i.e. if true, attribute would be [ Type ]! or if isRequired true, attribe would be [ Type! ]!

---

### EnumTypeOptions <a name="EnumTypeOptions" id="awscdk-appsync-utils.EnumTypeOptions"></a>

Properties for configuring an Enum Type.

#### Initializer <a name="Initializer" id="awscdk-appsync-utils.EnumTypeOptions.Initializer"></a>

```typescript
import { EnumTypeOptions } from 'awscdk-appsync-utils'

const enumTypeOptions: EnumTypeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.EnumTypeOptions.property.definition">definition</a></code> | <code>string[]</code> | the attributes of this type. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="awscdk-appsync-utils.EnumTypeOptions.property.definition"></a>

```typescript
public readonly definition: string[];
```

- *Type:* string[]

the attributes of this type.

---

### FieldOptions <a name="FieldOptions" id="awscdk-appsync-utils.FieldOptions"></a>

Properties for configuring a field.

#### Initializer <a name="Initializer" id="awscdk-appsync-utils.FieldOptions.Initializer"></a>

```typescript
import { FieldOptions } from 'awscdk-appsync-utils'

const fieldOptions: FieldOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.FieldOptions.property.returnType">returnType</a></code> | <code><a href="#awscdk-appsync-utils.GraphqlType">GraphqlType</a></code> | The return type for this field. |
| <code><a href="#awscdk-appsync-utils.FieldOptions.property.args">args</a></code> | <code>{[ key: string ]: <a href="#awscdk-appsync-utils.GraphqlType">GraphqlType</a>}</code> | The arguments for this field. |
| <code><a href="#awscdk-appsync-utils.FieldOptions.property.directives">directives</a></code> | <code><a href="#awscdk-appsync-utils.Directive">Directive</a>[]</code> | the directives for this field. |

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="awscdk-appsync-utils.FieldOptions.property.returnType"></a>

```typescript
public readonly returnType: GraphqlType;
```

- *Type:* <a href="#awscdk-appsync-utils.GraphqlType">GraphqlType</a>

The return type for this field.

---

##### `args`<sup>Optional</sup> <a name="args" id="awscdk-appsync-utils.FieldOptions.property.args"></a>

```typescript
public readonly args: {[ key: string ]: GraphqlType};
```

- *Type:* {[ key: string ]: <a href="#awscdk-appsync-utils.GraphqlType">GraphqlType</a>}
- *Default:* no arguments

The arguments for this field.

i.e. type Example (first: String second: String) {}
- where 'first' and 'second' are key values for args
and 'String' is the GraphqlType

---

##### `directives`<sup>Optional</sup> <a name="directives" id="awscdk-appsync-utils.FieldOptions.property.directives"></a>

```typescript
public readonly directives: Directive[];
```

- *Type:* <a href="#awscdk-appsync-utils.Directive">Directive</a>[]
- *Default:* no directives

the directives for this field.

---

### GraphqlTypeOptions <a name="GraphqlTypeOptions" id="awscdk-appsync-utils.GraphqlTypeOptions"></a>

Options for GraphQL Types.

#### Initializer <a name="Initializer" id="awscdk-appsync-utils.GraphqlTypeOptions.Initializer"></a>

```typescript
import { GraphqlTypeOptions } from 'awscdk-appsync-utils'

const graphqlTypeOptions: GraphqlTypeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.GraphqlTypeOptions.property.isList">isList</a></code> | <code>boolean</code> | property determining if this attribute is a list i.e. if true, attribute would be [Type]. |
| <code><a href="#awscdk-appsync-utils.GraphqlTypeOptions.property.isRequired">isRequired</a></code> | <code>boolean</code> | property determining if this attribute is non-nullable i.e. if true, attribute would be Type! |
| <code><a href="#awscdk-appsync-utils.GraphqlTypeOptions.property.isRequiredList">isRequiredList</a></code> | <code>boolean</code> | property determining if this attribute is a non-nullable list i.e. if true, attribute would be [ Type ]! or if isRequired true, attribe would be [ Type! ]! |
| <code><a href="#awscdk-appsync-utils.GraphqlTypeOptions.property.intermediateType">intermediateType</a></code> | <code><a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a></code> | the intermediate type linked to this attribute. |

---

##### `isList`<sup>Optional</sup> <a name="isList" id="awscdk-appsync-utils.GraphqlTypeOptions.property.isList"></a>

```typescript
public readonly isList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a list i.e. if true, attribute would be [Type].

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="awscdk-appsync-utils.GraphqlTypeOptions.property.isRequired"></a>

```typescript
public readonly isRequired: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is non-nullable i.e. if true, attribute would be Type!

---

##### `isRequiredList`<sup>Optional</sup> <a name="isRequiredList" id="awscdk-appsync-utils.GraphqlTypeOptions.property.isRequiredList"></a>

```typescript
public readonly isRequiredList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a non-nullable list i.e. if true, attribute would be [ Type ]! or if isRequired true, attribe would be [ Type! ]!

---

##### `intermediateType`<sup>Optional</sup> <a name="intermediateType" id="awscdk-appsync-utils.GraphqlTypeOptions.property.intermediateType"></a>

```typescript
public readonly intermediateType: IIntermediateType;
```

- *Type:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>
- *Default:* no intermediate type

the intermediate type linked to this attribute.

---

### IntermediateTypeOptions <a name="IntermediateTypeOptions" id="awscdk-appsync-utils.IntermediateTypeOptions"></a>

Properties for configuring an Intermediate Type.

#### Initializer <a name="Initializer" id="awscdk-appsync-utils.IntermediateTypeOptions.Initializer"></a>

```typescript
import { IntermediateTypeOptions } from 'awscdk-appsync-utils'

const intermediateTypeOptions: IntermediateTypeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.IntermediateTypeOptions.property.definition">definition</a></code> | <code>{[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}</code> | the attributes of this type. |
| <code><a href="#awscdk-appsync-utils.IntermediateTypeOptions.property.directives">directives</a></code> | <code><a href="#awscdk-appsync-utils.Directive">Directive</a>[]</code> | the directives for this object type. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="awscdk-appsync-utils.IntermediateTypeOptions.property.definition"></a>

```typescript
public readonly definition: {[ key: string ]: IField};
```

- *Type:* {[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}

the attributes of this type.

---

##### `directives`<sup>Optional</sup> <a name="directives" id="awscdk-appsync-utils.IntermediateTypeOptions.property.directives"></a>

```typescript
public readonly directives: Directive[];
```

- *Type:* <a href="#awscdk-appsync-utils.Directive">Directive</a>[]
- *Default:* no directives

the directives for this object type.

---

### ObjectTypeOptions <a name="ObjectTypeOptions" id="awscdk-appsync-utils.ObjectTypeOptions"></a>

Properties for configuring an Object Type.

#### Initializer <a name="Initializer" id="awscdk-appsync-utils.ObjectTypeOptions.Initializer"></a>

```typescript
import { ObjectTypeOptions } from 'awscdk-appsync-utils'

const objectTypeOptions: ObjectTypeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.ObjectTypeOptions.property.definition">definition</a></code> | <code>{[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}</code> | the attributes of this type. |
| <code><a href="#awscdk-appsync-utils.ObjectTypeOptions.property.directives">directives</a></code> | <code><a href="#awscdk-appsync-utils.Directive">Directive</a>[]</code> | the directives for this object type. |
| <code><a href="#awscdk-appsync-utils.ObjectTypeOptions.property.interfaceTypes">interfaceTypes</a></code> | <code><a href="#awscdk-appsync-utils.InterfaceType">InterfaceType</a>[]</code> | The Interface Types this Object Type implements. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="awscdk-appsync-utils.ObjectTypeOptions.property.definition"></a>

```typescript
public readonly definition: {[ key: string ]: IField};
```

- *Type:* {[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}

the attributes of this type.

---

##### `directives`<sup>Optional</sup> <a name="directives" id="awscdk-appsync-utils.ObjectTypeOptions.property.directives"></a>

```typescript
public readonly directives: Directive[];
```

- *Type:* <a href="#awscdk-appsync-utils.Directive">Directive</a>[]
- *Default:* no directives

the directives for this object type.

---

##### `interfaceTypes`<sup>Optional</sup> <a name="interfaceTypes" id="awscdk-appsync-utils.ObjectTypeOptions.property.interfaceTypes"></a>

```typescript
public readonly interfaceTypes: InterfaceType[];
```

- *Type:* <a href="#awscdk-appsync-utils.InterfaceType">InterfaceType</a>[]
- *Default:* no interface types

The Interface Types this Object Type implements.

---

### ResolvableFieldOptions <a name="ResolvableFieldOptions" id="awscdk-appsync-utils.ResolvableFieldOptions"></a>

Properties for configuring a resolvable field.

#### Initializer <a name="Initializer" id="awscdk-appsync-utils.ResolvableFieldOptions.Initializer"></a>

```typescript
import { ResolvableFieldOptions } from 'awscdk-appsync-utils'

const resolvableFieldOptions: ResolvableFieldOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions.property.returnType">returnType</a></code> | <code><a href="#awscdk-appsync-utils.GraphqlType">GraphqlType</a></code> | The return type for this field. |
| <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions.property.args">args</a></code> | <code>{[ key: string ]: <a href="#awscdk-appsync-utils.GraphqlType">GraphqlType</a>}</code> | The arguments for this field. |
| <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions.property.directives">directives</a></code> | <code><a href="#awscdk-appsync-utils.Directive">Directive</a>[]</code> | the directives for this field. |
| <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions.property.cachingConfig">cachingConfig</a></code> | <code>aws-cdk-lib.aws_appsync.CachingConfig</code> | The caching configuration for this resolver. |
| <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions.property.code">code</a></code> | <code>aws-cdk-lib.aws_appsync.Code</code> | The function code. |
| <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions.property.dataSource">dataSource</a></code> | <code>aws-cdk-lib.aws_appsync.BaseDataSource</code> | The data source creating linked to this resolvable field. |
| <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | The maximum number of elements per batch, when using batch invoke. |
| <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions.property.pipelineConfig">pipelineConfig</a></code> | <code>aws-cdk-lib.aws_appsync.IAppsyncFunction[]</code> | configuration of the pipeline resolver. |
| <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>aws-cdk-lib.aws_appsync.MappingTemplate</code> | The request mapping template for this resolver. |
| <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>aws-cdk-lib.aws_appsync.MappingTemplate</code> | The response mapping template for this resolver. |
| <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_appsync.FunctionRuntime</code> | The functions runtime. |

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="awscdk-appsync-utils.ResolvableFieldOptions.property.returnType"></a>

```typescript
public readonly returnType: GraphqlType;
```

- *Type:* <a href="#awscdk-appsync-utils.GraphqlType">GraphqlType</a>

The return type for this field.

---

##### `args`<sup>Optional</sup> <a name="args" id="awscdk-appsync-utils.ResolvableFieldOptions.property.args"></a>

```typescript
public readonly args: {[ key: string ]: GraphqlType};
```

- *Type:* {[ key: string ]: <a href="#awscdk-appsync-utils.GraphqlType">GraphqlType</a>}
- *Default:* no arguments

The arguments for this field.

i.e. type Example (first: String second: String) {}
- where 'first' and 'second' are key values for args
and 'String' is the GraphqlType

---

##### `directives`<sup>Optional</sup> <a name="directives" id="awscdk-appsync-utils.ResolvableFieldOptions.property.directives"></a>

```typescript
public readonly directives: Directive[];
```

- *Type:* <a href="#awscdk-appsync-utils.Directive">Directive</a>[]
- *Default:* no directives

the directives for this field.

---

##### `cachingConfig`<sup>Optional</sup> <a name="cachingConfig" id="awscdk-appsync-utils.ResolvableFieldOptions.property.cachingConfig"></a>

```typescript
public readonly cachingConfig: CachingConfig;
```

- *Type:* aws-cdk-lib.aws_appsync.CachingConfig
- *Default:* No caching configuration

The caching configuration for this resolver.

---

##### `code`<sup>Optional</sup> <a name="code" id="awscdk-appsync-utils.ResolvableFieldOptions.property.code"></a>

```typescript
public readonly code: Code;
```

- *Type:* aws-cdk-lib.aws_appsync.Code
- *Default:* no code is used

The function code.

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="awscdk-appsync-utils.ResolvableFieldOptions.property.dataSource"></a>

```typescript
public readonly dataSource: BaseDataSource;
```

- *Type:* aws-cdk-lib.aws_appsync.BaseDataSource
- *Default:* no data source

The data source creating linked to this resolvable field.

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="awscdk-appsync-utils.ResolvableFieldOptions.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number
- *Default:* No max batch size

The maximum number of elements per batch, when using batch invoke.

---

##### `pipelineConfig`<sup>Optional</sup> <a name="pipelineConfig" id="awscdk-appsync-utils.ResolvableFieldOptions.property.pipelineConfig"></a>

```typescript
public readonly pipelineConfig: IAppsyncFunction[];
```

- *Type:* aws-cdk-lib.aws_appsync.IAppsyncFunction[]
- *Default:* no pipeline resolver configuration An empty array | undefined sets resolver to be of kind, unit

configuration of the pipeline resolver.

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="requestMappingTemplate" id="awscdk-appsync-utils.ResolvableFieldOptions.property.requestMappingTemplate"></a>

```typescript
public readonly requestMappingTemplate: MappingTemplate;
```

- *Type:* aws-cdk-lib.aws_appsync.MappingTemplate
- *Default:* No mapping template

The request mapping template for this resolver.

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="responseMappingTemplate" id="awscdk-appsync-utils.ResolvableFieldOptions.property.responseMappingTemplate"></a>

```typescript
public readonly responseMappingTemplate: MappingTemplate;
```

- *Type:* aws-cdk-lib.aws_appsync.MappingTemplate
- *Default:* No mapping template

The response mapping template for this resolver.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="awscdk-appsync-utils.ResolvableFieldOptions.property.runtime"></a>

```typescript
public readonly runtime: FunctionRuntime;
```

- *Type:* aws-cdk-lib.aws_appsync.FunctionRuntime
- *Default:* no function runtime, VTL mapping templates used

The functions runtime.

---

### SourceApiAssociationMergeOperationProps <a name="SourceApiAssociationMergeOperationProps" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProps"></a>

Properties for SourceApiAssociationMergeOperation which handles triggering a merge operation as a custom resource during a Cloudformation stack update.

#### Initializer <a name="Initializer" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProps.Initializer"></a>

```typescript
import { SourceApiAssociationMergeOperationProps } from 'awscdk-appsync-utils'

const sourceApiAssociationMergeOperationProps: SourceApiAssociationMergeOperationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProps.property.sourceApiAssociation">sourceApiAssociation</a></code> | <code>aws-cdk-lib.aws_appsync.ISourceApiAssociation</code> | The source api association resource which will be merged. |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProps.property.alwaysMergeOnStackUpdate">alwaysMergeOnStackUpdate</a></code> | <code>boolean</code> | Flag indicating whether the source api should be merged on every CFN update or not. |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProps.property.mergeOperationProvider">mergeOperationProvider</a></code> | <code><a href="#awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider">ISourceApiAssociationMergeOperationProvider</a></code> | The merge operation provider construct which is responsible for configuring the Lambda resource that will be invoked during Cloudformation update. |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProps.property.versionIdentifier">versionIdentifier</a></code> | <code>string</code> | The version identifier for the schema merge operation. |

---

##### `sourceApiAssociation`<sup>Required</sup> <a name="sourceApiAssociation" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProps.property.sourceApiAssociation"></a>

```typescript
public readonly sourceApiAssociation: ISourceApiAssociation;
```

- *Type:* aws-cdk-lib.aws_appsync.ISourceApiAssociation

The source api association resource which will be merged.

---

##### `alwaysMergeOnStackUpdate`<sup>Optional</sup> <a name="alwaysMergeOnStackUpdate" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProps.property.alwaysMergeOnStackUpdate"></a>

```typescript
public readonly alwaysMergeOnStackUpdate: boolean;
```

- *Type:* boolean
- *Default:* False

Flag indicating whether the source api should be merged on every CFN update or not.

If set to true and there are no changes to the source API, this will result in a no-op merge operation.

---

##### `mergeOperationProvider`<sup>Optional</sup> <a name="mergeOperationProvider" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProps.property.mergeOperationProvider"></a>

```typescript
public readonly mergeOperationProvider: ISourceApiAssociationMergeOperationProvider;
```

- *Type:* <a href="#awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider">ISourceApiAssociationMergeOperationProvider</a>

The merge operation provider construct which is responsible for configuring the Lambda resource that will be invoked during Cloudformation update.

---

##### `versionIdentifier`<sup>Optional</sup> <a name="versionIdentifier" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProps.property.versionIdentifier"></a>

```typescript
public readonly versionIdentifier: string;
```

- *Type:* string
- *Default:* null

The version identifier for the schema merge operation.

Any change to the version identifier will trigger a merge on the next
update. Use the version identifier property to control when the source API metadata is merged.

---

### SourceApiAssociationMergeOperationProviderProps <a name="SourceApiAssociationMergeOperationProviderProps" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProviderProps"></a>

Properties for SourceApiAssociationMergeOperationProvider.

#### Initializer <a name="Initializer" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProviderProps.Initializer"></a>

```typescript
import { SourceApiAssociationMergeOperationProviderProps } from 'awscdk-appsync-utils'

const sourceApiAssociationMergeOperationProviderProps: SourceApiAssociationMergeOperationProviderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProviderProps.property.pollingInterval">pollingInterval</a></code> | <code>aws-cdk-lib.Duration</code> | Time between calls to the polling Lambda function which determines whether the merge operation is finished or not. |
| <code><a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProviderProps.property.totalTimeout">totalTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | Total timeout in waiting for the source api association merge operation to complete. |

---

##### `pollingInterval`<sup>Optional</sup> <a name="pollingInterval" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProviderProps.property.pollingInterval"></a>

```typescript
public readonly pollingInterval: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(5)

Time between calls to the polling Lambda function which determines whether the merge operation is finished or not.

---

##### `totalTimeout`<sup>Optional</sup> <a name="totalTimeout" id="awscdk-appsync-utils.SourceApiAssociationMergeOperationProviderProps.property.totalTimeout"></a>

```typescript
public readonly totalTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.minutes(15)

Total timeout in waiting for the source api association merge operation to complete.

---

### UnionTypeOptions <a name="UnionTypeOptions" id="awscdk-appsync-utils.UnionTypeOptions"></a>

Properties for configuring an Union Type.

#### Initializer <a name="Initializer" id="awscdk-appsync-utils.UnionTypeOptions.Initializer"></a>

```typescript
import { UnionTypeOptions } from 'awscdk-appsync-utils'

const unionTypeOptions: UnionTypeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.UnionTypeOptions.property.definition">definition</a></code> | <code><a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>[]</code> | the object types for this union type. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="awscdk-appsync-utils.UnionTypeOptions.property.definition"></a>

```typescript
public readonly definition: IIntermediateType[];
```

- *Type:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>[]

the object types for this union type.

---

## Classes <a name="Classes" id="Classes"></a>

### CodeFirstSchema <a name="CodeFirstSchema" id="awscdk-appsync-utils.CodeFirstSchema"></a>

- *Implements:* aws-cdk-lib.aws_appsync.ISchema

#### Initializers <a name="Initializers" id="awscdk-appsync-utils.CodeFirstSchema.Initializer"></a>

```typescript
import { CodeFirstSchema } from 'awscdk-appsync-utils'

new CodeFirstSchema()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.CodeFirstSchema.addMutation">addMutation</a></code> | Add a mutation field to the schema's Mutation. CDK will create an Object Type called 'Mutation'. For example,. |
| <code><a href="#awscdk-appsync-utils.CodeFirstSchema.addQuery">addQuery</a></code> | Add a query field to the schema's Query. CDK will create an Object Type called 'Query'. For example,. |
| <code><a href="#awscdk-appsync-utils.CodeFirstSchema.addSubscription">addSubscription</a></code> | Add a subscription field to the schema's Subscription. CDK will create an Object Type called 'Subscription'. For example,. |
| <code><a href="#awscdk-appsync-utils.CodeFirstSchema.addToSchema">addToSchema</a></code> | Escape hatch to add to Schema as desired. |
| <code><a href="#awscdk-appsync-utils.CodeFirstSchema.addType">addType</a></code> | Add type to the schema. |
| <code><a href="#awscdk-appsync-utils.CodeFirstSchema.bind">bind</a></code> | Called when the GraphQL Api is initialized to allow this object to bind to the stack. |

---

##### `addMutation` <a name="addMutation" id="awscdk-appsync-utils.CodeFirstSchema.addMutation"></a>

```typescript
public addMutation(fieldName: string, field: ResolvableField): ObjectType
```

Add a mutation field to the schema's Mutation. CDK will create an Object Type called 'Mutation'. For example,.

type Mutation {
  fieldName: Field.returnType
}

###### `fieldName`<sup>Required</sup> <a name="fieldName" id="awscdk-appsync-utils.CodeFirstSchema.addMutation.parameter.fieldName"></a>

- *Type:* string

the name of the Mutation.

---

###### `field`<sup>Required</sup> <a name="field" id="awscdk-appsync-utils.CodeFirstSchema.addMutation.parameter.field"></a>

- *Type:* <a href="#awscdk-appsync-utils.ResolvableField">ResolvableField</a>

the resolvable field to for this Mutation.

---

##### `addQuery` <a name="addQuery" id="awscdk-appsync-utils.CodeFirstSchema.addQuery"></a>

```typescript
public addQuery(fieldName: string, field: ResolvableField): ObjectType
```

Add a query field to the schema's Query. CDK will create an Object Type called 'Query'. For example,.

type Query {
  fieldName: Field.returnType
}

###### `fieldName`<sup>Required</sup> <a name="fieldName" id="awscdk-appsync-utils.CodeFirstSchema.addQuery.parameter.fieldName"></a>

- *Type:* string

the name of the query.

---

###### `field`<sup>Required</sup> <a name="field" id="awscdk-appsync-utils.CodeFirstSchema.addQuery.parameter.field"></a>

- *Type:* <a href="#awscdk-appsync-utils.ResolvableField">ResolvableField</a>

the resolvable field to for this query.

---

##### `addSubscription` <a name="addSubscription" id="awscdk-appsync-utils.CodeFirstSchema.addSubscription"></a>

```typescript
public addSubscription(fieldName: string, field: Field): ObjectType
```

Add a subscription field to the schema's Subscription. CDK will create an Object Type called 'Subscription'. For example,.

type Subscription {
  fieldName: Field.returnType
}

###### `fieldName`<sup>Required</sup> <a name="fieldName" id="awscdk-appsync-utils.CodeFirstSchema.addSubscription.parameter.fieldName"></a>

- *Type:* string

the name of the Subscription.

---

###### `field`<sup>Required</sup> <a name="field" id="awscdk-appsync-utils.CodeFirstSchema.addSubscription.parameter.field"></a>

- *Type:* <a href="#awscdk-appsync-utils.Field">Field</a>

the resolvable field to for this Subscription.

---

##### `addToSchema` <a name="addToSchema" id="awscdk-appsync-utils.CodeFirstSchema.addToSchema"></a>

```typescript
public addToSchema(addition: string, delimiter?: string): void
```

Escape hatch to add to Schema as desired.

Will always result
in a newline.

###### `addition`<sup>Required</sup> <a name="addition" id="awscdk-appsync-utils.CodeFirstSchema.addToSchema.parameter.addition"></a>

- *Type:* string

the addition to add to schema.

---

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="awscdk-appsync-utils.CodeFirstSchema.addToSchema.parameter.delimiter"></a>

- *Type:* string

the delimiter between schema and addition.

---

##### `addType` <a name="addType" id="awscdk-appsync-utils.CodeFirstSchema.addType"></a>

```typescript
public addType(type: IIntermediateType): IIntermediateType
```

Add type to the schema.

###### `type`<sup>Required</sup> <a name="type" id="awscdk-appsync-utils.CodeFirstSchema.addType.parameter.type"></a>

- *Type:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>

the intermediate type to add to the schema.

---

##### `bind` <a name="bind" id="awscdk-appsync-utils.CodeFirstSchema.bind"></a>

```typescript
public bind(api: IGraphqlApi, _options?: SchemaBindOptions): ISchemaConfig
```

Called when the GraphQL Api is initialized to allow this object to bind to the stack.

###### `api`<sup>Required</sup> <a name="api" id="awscdk-appsync-utils.CodeFirstSchema.bind.parameter.api"></a>

- *Type:* aws-cdk-lib.aws_appsync.IGraphqlApi

The binding GraphQL Api.

---

###### `_options`<sup>Optional</sup> <a name="_options" id="awscdk-appsync-utils.CodeFirstSchema.bind.parameter._options"></a>

- *Type:* aws-cdk-lib.aws_appsync.SchemaBindOptions

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.CodeFirstSchema.property.definition">definition</a></code> | <code>string</code> | The definition for this schema. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="awscdk-appsync-utils.CodeFirstSchema.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

The definition for this schema.

---


### Directive <a name="Directive" id="awscdk-appsync-utils.Directive"></a>

Directives for types.

i.e.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.Directive.toString">toString</a></code> | Generate the directive statement. |

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.Directive.toString"></a>

```typescript
public toString(): string
```

Generate the directive statement.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.Directive.apiKey">apiKey</a></code> | Add the. |
| <code><a href="#awscdk-appsync-utils.Directive.cognito">cognito</a></code> | Add the. |
| <code><a href="#awscdk-appsync-utils.Directive.custom">custom</a></code> | Add a custom directive. |
| <code><a href="#awscdk-appsync-utils.Directive.iam">iam</a></code> | Add the. |
| <code><a href="#awscdk-appsync-utils.Directive.oidc">oidc</a></code> | Add the. |
| <code><a href="#awscdk-appsync-utils.Directive.subscribe">subscribe</a></code> | Add the. |

---

##### `apiKey` <a name="apiKey" id="awscdk-appsync-utils.Directive.apiKey"></a>

```typescript
import { Directive } from 'awscdk-appsync-utils'

Directive.apiKey()
```

Add the.

##### `cognito` <a name="cognito" id="awscdk-appsync-utils.Directive.cognito"></a>

```typescript
import { Directive } from 'awscdk-appsync-utils'

Directive.cognito(groups: ...string[])
```

Add the.

###### `groups`<sup>Required</sup> <a name="groups" id="awscdk-appsync-utils.Directive.cognito.parameter.groups"></a>

- *Type:* ...string[]

the groups to allow access to.

---

##### `custom` <a name="custom" id="awscdk-appsync-utils.Directive.custom"></a>

```typescript
import { Directive } from 'awscdk-appsync-utils'

Directive.custom(statement: string)
```

Add a custom directive.

###### `statement`<sup>Required</sup> <a name="statement" id="awscdk-appsync-utils.Directive.custom.parameter.statement"></a>

- *Type:* string

the directive statement to append.

---

##### `iam` <a name="iam" id="awscdk-appsync-utils.Directive.iam"></a>

```typescript
import { Directive } from 'awscdk-appsync-utils'

Directive.iam()
```

Add the.

##### `oidc` <a name="oidc" id="awscdk-appsync-utils.Directive.oidc"></a>

```typescript
import { Directive } from 'awscdk-appsync-utils'

Directive.oidc()
```

Add the.

##### `subscribe` <a name="subscribe" id="awscdk-appsync-utils.Directive.subscribe"></a>

```typescript
import { Directive } from 'awscdk-appsync-utils'

Directive.subscribe(mutations: ...string[])
```

Add the.

###### `mutations`<sup>Required</sup> <a name="mutations" id="awscdk-appsync-utils.Directive.subscribe.parameter.mutations"></a>

- *Type:* ...string[]

the mutation fields to link to.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.Directive.property.mode">mode</a></code> | <code>aws-cdk-lib.aws_appsync.AuthorizationType</code> | The authorization type of this directive. |
| <code><a href="#awscdk-appsync-utils.Directive.property.mutationFields">mutationFields</a></code> | <code>string[]</code> | Mutation fields for a subscription directive. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="awscdk-appsync-utils.Directive.property.mode"></a>

```typescript
public readonly mode: AuthorizationType;
```

- *Type:* aws-cdk-lib.aws_appsync.AuthorizationType
- *Default:* not an authorization directive

The authorization type of this directive.

---

##### `mutationFields`<sup>Optional</sup> <a name="mutationFields" id="awscdk-appsync-utils.Directive.property.mutationFields"></a>

```typescript
public readonly mutationFields: string[];
```

- *Type:* string[]
- *Default:* not a subscription directive

Mutation fields for a subscription directive.

---


### EnumType <a name="EnumType" id="awscdk-appsync-utils.EnumType"></a>

- *Implements:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>

Enum Types are abstract types that includes a set of fields that represent the strings this type can create.

#### Initializers <a name="Initializers" id="awscdk-appsync-utils.EnumType.Initializer"></a>

```typescript
import { EnumType } from 'awscdk-appsync-utils'

new EnumType(name: string, options: EnumTypeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.EnumType.Initializer.parameter.name">name</a></code> | <code>string</code> | the name of this type. |
| <code><a href="#awscdk-appsync-utils.EnumType.Initializer.parameter.options">options</a></code> | <code><a href="#awscdk-appsync-utils.EnumTypeOptions">EnumTypeOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-appsync-utils.EnumType.Initializer.parameter.name"></a>

- *Type:* string

the name of this type.

---

##### `options`<sup>Required</sup> <a name="options" id="awscdk-appsync-utils.EnumType.Initializer.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.EnumTypeOptions">EnumTypeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.EnumType.addField">addField</a></code> | Add a field to this Enum Type. |
| <code><a href="#awscdk-appsync-utils.EnumType.attribute">attribute</a></code> | Create an GraphQL Type representing this Enum Type. |
| <code><a href="#awscdk-appsync-utils.EnumType.toString">toString</a></code> | Generate the string of this enum type. |

---

##### `addField` <a name="addField" id="awscdk-appsync-utils.EnumType.addField"></a>

```typescript
public addField(options: AddFieldOptions): void
```

Add a field to this Enum Type.

To add a field to this Enum Type, you must only configure
addField with the fieldName options.

###### `options`<sup>Required</sup> <a name="options" id="awscdk-appsync-utils.EnumType.addField.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.AddFieldOptions">AddFieldOptions</a>

the options to add a field.

---

##### `attribute` <a name="attribute" id="awscdk-appsync-utils.EnumType.attribute"></a>

```typescript
public attribute(options?: BaseTypeOptions): GraphqlType
```

Create an GraphQL Type representing this Enum Type.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.EnumType.attribute.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.EnumType.toString"></a>

```typescript
public toString(): string
```

Generate the string of this enum type.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.EnumType.property.definition">definition</a></code> | <code>{[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}</code> | the attributes of this type. |
| <code><a href="#awscdk-appsync-utils.EnumType.property.name">name</a></code> | <code>string</code> | the name of this type. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="awscdk-appsync-utils.EnumType.property.definition"></a>

```typescript
public readonly definition: {[ key: string ]: IField};
```

- *Type:* {[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}

the attributes of this type.

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-appsync-utils.EnumType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

the name of this type.

---


### Field <a name="Field" id="awscdk-appsync-utils.Field"></a>

- *Implements:* <a href="#awscdk-appsync-utils.IField">IField</a>

Fields build upon Graphql Types and provide typing and arguments.

#### Initializers <a name="Initializers" id="awscdk-appsync-utils.Field.Initializer"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

new Field(options: FieldOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.Field.Initializer.parameter.options">options</a></code> | <code><a href="#awscdk-appsync-utils.FieldOptions">FieldOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="awscdk-appsync-utils.Field.Initializer.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.FieldOptions">FieldOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.Field.argsToString">argsToString</a></code> | Generate the args string of this resolvable field. |
| <code><a href="#awscdk-appsync-utils.Field.directivesToString">directivesToString</a></code> | Generate the directives for this field. |
| <code><a href="#awscdk-appsync-utils.Field.toString">toString</a></code> | Generate the string for this attribute. |

---

##### `argsToString` <a name="argsToString" id="awscdk-appsync-utils.Field.argsToString"></a>

```typescript
public argsToString(): string
```

Generate the args string of this resolvable field.

##### `directivesToString` <a name="directivesToString" id="awscdk-appsync-utils.Field.directivesToString"></a>

```typescript
public directivesToString(modes?: AuthorizationType[]): string
```

Generate the directives for this field.

###### `modes`<sup>Optional</sup> <a name="modes" id="awscdk-appsync-utils.Field.directivesToString.parameter.modes"></a>

- *Type:* aws-cdk-lib.aws_appsync.AuthorizationType[]

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.Field.toString"></a>

```typescript
public toString(): string
```

Generate the string for this attribute.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.Field.awsDate">awsDate</a></code> | `AWSDate` scalar type represents a valid extended `ISO 8601 Date` string. |
| <code><a href="#awscdk-appsync-utils.Field.awsDateTime">awsDateTime</a></code> | `AWSDateTime` scalar type represents a valid extended `ISO 8601 DateTime` string. |
| <code><a href="#awscdk-appsync-utils.Field.awsEmail">awsEmail</a></code> | `AWSEmail` scalar type represents an email address string (i.e.`username@example.com`). |
| <code><a href="#awscdk-appsync-utils.Field.awsIpAddress">awsIpAddress</a></code> | `AWSIPAddress` scalar type respresents a valid `IPv4` of `IPv6` address string. |
| <code><a href="#awscdk-appsync-utils.Field.awsJson">awsJson</a></code> | `AWSJson` scalar type represents a JSON string. |
| <code><a href="#awscdk-appsync-utils.Field.awsPhone">awsPhone</a></code> | `AWSPhone` scalar type represents a valid phone number. Phone numbers maybe be whitespace delimited or hyphenated. |
| <code><a href="#awscdk-appsync-utils.Field.awsTime">awsTime</a></code> | `AWSTime` scalar type represents a valid extended `ISO 8601 Time` string. |
| <code><a href="#awscdk-appsync-utils.Field.awsTimestamp">awsTimestamp</a></code> | `AWSTimestamp` scalar type represents the number of seconds since `1970-01-01T00:00Z`. |
| <code><a href="#awscdk-appsync-utils.Field.awsUrl">awsUrl</a></code> | `AWSURL` scalar type represetns a valid URL string. |
| <code><a href="#awscdk-appsync-utils.Field.boolean">boolean</a></code> | `Boolean` scalar type is a boolean value: true or false. |
| <code><a href="#awscdk-appsync-utils.Field.float">float</a></code> | `Float` scalar type is a signed double-precision fractional value. |
| <code><a href="#awscdk-appsync-utils.Field.id">id</a></code> | `ID` scalar type is a unique identifier. `ID` type is serialized similar to `String`. |
| <code><a href="#awscdk-appsync-utils.Field.int">int</a></code> | `Int` scalar type is a signed non-fractional numerical value. |
| <code><a href="#awscdk-appsync-utils.Field.intermediate">intermediate</a></code> | an intermediate type to be added as an attribute (i.e. an interface or an object type). |
| <code><a href="#awscdk-appsync-utils.Field.string">string</a></code> | `String` scalar type is a free-form human-readable text. |

---

##### `awsDate` <a name="awsDate" id="awscdk-appsync-utils.Field.awsDate"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.awsDate(options?: BaseTypeOptions)
```

`AWSDate` scalar type represents a valid extended `ISO 8601 Date` string.

In other words, accepts date strings in the form of `YYYY-MM-DD`. It accepts time zone offsets.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.awsDate.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsDateTime` <a name="awsDateTime" id="awscdk-appsync-utils.Field.awsDateTime"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.awsDateTime(options?: BaseTypeOptions)
```

`AWSDateTime` scalar type represents a valid extended `ISO 8601 DateTime` string.

In other words, accepts date strings in the form of `YYYY-MM-DDThh:mm:ss.sssZ`. It accepts time zone offsets.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.awsDateTime.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsEmail` <a name="awsEmail" id="awscdk-appsync-utils.Field.awsEmail"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.awsEmail(options?: BaseTypeOptions)
```

`AWSEmail` scalar type represents an email address string (i.e.`username@example.com`).

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.awsEmail.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsIpAddress` <a name="awsIpAddress" id="awscdk-appsync-utils.Field.awsIpAddress"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.awsIpAddress(options?: BaseTypeOptions)
```

`AWSIPAddress` scalar type respresents a valid `IPv4` of `IPv6` address string.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.awsIpAddress.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsJson` <a name="awsJson" id="awscdk-appsync-utils.Field.awsJson"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.awsJson(options?: BaseTypeOptions)
```

`AWSJson` scalar type represents a JSON string.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.awsJson.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsPhone` <a name="awsPhone" id="awscdk-appsync-utils.Field.awsPhone"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.awsPhone(options?: BaseTypeOptions)
```

`AWSPhone` scalar type represents a valid phone number. Phone numbers maybe be whitespace delimited or hyphenated.

The number can specify a country code at the beginning, but is not required for US phone numbers.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.awsPhone.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsTime` <a name="awsTime" id="awscdk-appsync-utils.Field.awsTime"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.awsTime(options?: BaseTypeOptions)
```

`AWSTime` scalar type represents a valid extended `ISO 8601 Time` string.

In other words, accepts date strings in the form of `hh:mm:ss.sss`. It accepts time zone offsets.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.awsTime.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsTimestamp` <a name="awsTimestamp" id="awscdk-appsync-utils.Field.awsTimestamp"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.awsTimestamp(options?: BaseTypeOptions)
```

`AWSTimestamp` scalar type represents the number of seconds since `1970-01-01T00:00Z`.

Timestamps are serialized and deserialized as numbers.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.awsTimestamp.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsUrl` <a name="awsUrl" id="awscdk-appsync-utils.Field.awsUrl"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.awsUrl(options?: BaseTypeOptions)
```

`AWSURL` scalar type represetns a valid URL string.

URLs wihtout schemes or contain double slashes are considered invalid.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.awsUrl.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `boolean` <a name="boolean" id="awscdk-appsync-utils.Field.boolean"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.boolean(options?: BaseTypeOptions)
```

`Boolean` scalar type is a boolean value: true or false.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.boolean.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `float` <a name="float" id="awscdk-appsync-utils.Field.float"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.float(options?: BaseTypeOptions)
```

`Float` scalar type is a signed double-precision fractional value.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.float.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `id` <a name="id" id="awscdk-appsync-utils.Field.id"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.id(options?: BaseTypeOptions)
```

`ID` scalar type is a unique identifier. `ID` type is serialized similar to `String`.

Often used as a key for a cache and not intended to be human-readable.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.id.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `int` <a name="int" id="awscdk-appsync-utils.Field.int"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.int(options?: BaseTypeOptions)
```

`Int` scalar type is a signed non-fractional numerical value.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.int.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `intermediate` <a name="intermediate" id="awscdk-appsync-utils.Field.intermediate"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.intermediate(options?: GraphqlTypeOptions)
```

an intermediate type to be added as an attribute (i.e. an interface or an object type).

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.intermediate.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.GraphqlTypeOptions">GraphqlTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList - intermediateType.

---

##### `string` <a name="string" id="awscdk-appsync-utils.Field.string"></a>

```typescript
import { Field } from 'awscdk-appsync-utils'

Field.string(options?: BaseTypeOptions)
```

`String` scalar type is a free-form human-readable text.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.Field.string.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.Field.property.isList">isList</a></code> | <code>boolean</code> | property determining if this attribute is a list i.e. if true, attribute would be `[Type]`. |
| <code><a href="#awscdk-appsync-utils.Field.property.isRequired">isRequired</a></code> | <code>boolean</code> | property determining if this attribute is non-nullable i.e. if true, attribute would be `Type!` and this attribute must always have a value. |
| <code><a href="#awscdk-appsync-utils.Field.property.isRequiredList">isRequiredList</a></code> | <code>boolean</code> | property determining if this attribute is a non-nullable list i.e. if true, attribute would be `[ Type ]!` and this attribute's list must always have a value. |
| <code><a href="#awscdk-appsync-utils.Field.property.type">type</a></code> | <code><a href="#awscdk-appsync-utils.Type">Type</a></code> | the type of attribute. |
| <code><a href="#awscdk-appsync-utils.Field.property.intermediateType">intermediateType</a></code> | <code><a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a></code> | the intermediate type linked to this attribute (i.e. an interface or an object). |
| <code><a href="#awscdk-appsync-utils.Field.property.fieldOptions">fieldOptions</a></code> | <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions">ResolvableFieldOptions</a></code> | The options for this field. |

---

##### `isList`<sup>Required</sup> <a name="isList" id="awscdk-appsync-utils.Field.property.isList"></a>

```typescript
public readonly isList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a list i.e. if true, attribute would be `[Type]`.

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="awscdk-appsync-utils.Field.property.isRequired"></a>

```typescript
public readonly isRequired: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is non-nullable i.e. if true, attribute would be `Type!` and this attribute must always have a value.

---

##### `isRequiredList`<sup>Required</sup> <a name="isRequiredList" id="awscdk-appsync-utils.Field.property.isRequiredList"></a>

```typescript
public readonly isRequiredList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a non-nullable list i.e. if true, attribute would be `[ Type ]!` and this attribute's list must always have a value.

---

##### `type`<sup>Required</sup> <a name="type" id="awscdk-appsync-utils.Field.property.type"></a>

```typescript
public readonly type: Type;
```

- *Type:* <a href="#awscdk-appsync-utils.Type">Type</a>

the type of attribute.

---

##### `intermediateType`<sup>Optional</sup> <a name="intermediateType" id="awscdk-appsync-utils.Field.property.intermediateType"></a>

```typescript
public readonly intermediateType: IIntermediateType;
```

- *Type:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>
- *Default:* no intermediate type

the intermediate type linked to this attribute (i.e. an interface or an object).

---

##### `fieldOptions`<sup>Optional</sup> <a name="fieldOptions" id="awscdk-appsync-utils.Field.property.fieldOptions"></a>

```typescript
public readonly fieldOptions: ResolvableFieldOptions;
```

- *Type:* <a href="#awscdk-appsync-utils.ResolvableFieldOptions">ResolvableFieldOptions</a>
- *Default:* no arguments

The options for this field.

---


### GraphqlType <a name="GraphqlType" id="awscdk-appsync-utils.GraphqlType"></a>

- *Implements:* <a href="#awscdk-appsync-utils.IField">IField</a>

The GraphQL Types in AppSync's GraphQL.

GraphQL Types are the
building blocks for object types, queries, mutations, etc. They are
types like String, Int, Id or even Object Types you create.

i.e. `String`, `String!`, `[String]`, `[String!]`, `[String]!`

GraphQL Types are used to define the entirety of schema.

#### Initializers <a name="Initializers" id="awscdk-appsync-utils.GraphqlType.Initializer"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

new GraphqlType(type: Type, options?: GraphqlTypeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.GraphqlType.Initializer.parameter.type">type</a></code> | <code><a href="#awscdk-appsync-utils.Type">Type</a></code> | the type of attribute. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.Initializer.parameter.options">options</a></code> | <code><a href="#awscdk-appsync-utils.GraphqlTypeOptions">GraphqlTypeOptions</a></code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="awscdk-appsync-utils.GraphqlType.Initializer.parameter.type"></a>

- *Type:* <a href="#awscdk-appsync-utils.Type">Type</a>

the type of attribute.

---

##### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.Initializer.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.GraphqlTypeOptions">GraphqlTypeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.GraphqlType.argsToString">argsToString</a></code> | Generate the arguments for this field. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.directivesToString">directivesToString</a></code> | Generate the directives for this field. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.toString">toString</a></code> | Generate the string for this attribute. |

---

##### `argsToString` <a name="argsToString" id="awscdk-appsync-utils.GraphqlType.argsToString"></a>

```typescript
public argsToString(): string
```

Generate the arguments for this field.

##### `directivesToString` <a name="directivesToString" id="awscdk-appsync-utils.GraphqlType.directivesToString"></a>

```typescript
public directivesToString(_modes?: AuthorizationType[]): string
```

Generate the directives for this field.

###### `_modes`<sup>Optional</sup> <a name="_modes" id="awscdk-appsync-utils.GraphqlType.directivesToString.parameter._modes"></a>

- *Type:* aws-cdk-lib.aws_appsync.AuthorizationType[]

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.GraphqlType.toString"></a>

```typescript
public toString(): string
```

Generate the string for this attribute.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.GraphqlType.awsDate">awsDate</a></code> | `AWSDate` scalar type represents a valid extended `ISO 8601 Date` string. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.awsDateTime">awsDateTime</a></code> | `AWSDateTime` scalar type represents a valid extended `ISO 8601 DateTime` string. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.awsEmail">awsEmail</a></code> | `AWSEmail` scalar type represents an email address string (i.e.`username@example.com`). |
| <code><a href="#awscdk-appsync-utils.GraphqlType.awsIpAddress">awsIpAddress</a></code> | `AWSIPAddress` scalar type respresents a valid `IPv4` of `IPv6` address string. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.awsJson">awsJson</a></code> | `AWSJson` scalar type represents a JSON string. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.awsPhone">awsPhone</a></code> | `AWSPhone` scalar type represents a valid phone number. Phone numbers maybe be whitespace delimited or hyphenated. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.awsTime">awsTime</a></code> | `AWSTime` scalar type represents a valid extended `ISO 8601 Time` string. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.awsTimestamp">awsTimestamp</a></code> | `AWSTimestamp` scalar type represents the number of seconds since `1970-01-01T00:00Z`. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.awsUrl">awsUrl</a></code> | `AWSURL` scalar type represetns a valid URL string. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.boolean">boolean</a></code> | `Boolean` scalar type is a boolean value: true or false. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.float">float</a></code> | `Float` scalar type is a signed double-precision fractional value. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.id">id</a></code> | `ID` scalar type is a unique identifier. `ID` type is serialized similar to `String`. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.int">int</a></code> | `Int` scalar type is a signed non-fractional numerical value. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.intermediate">intermediate</a></code> | an intermediate type to be added as an attribute (i.e. an interface or an object type). |
| <code><a href="#awscdk-appsync-utils.GraphqlType.string">string</a></code> | `String` scalar type is a free-form human-readable text. |

---

##### `awsDate` <a name="awsDate" id="awscdk-appsync-utils.GraphqlType.awsDate"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.awsDate(options?: BaseTypeOptions)
```

`AWSDate` scalar type represents a valid extended `ISO 8601 Date` string.

In other words, accepts date strings in the form of `YYYY-MM-DD`. It accepts time zone offsets.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.awsDate.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsDateTime` <a name="awsDateTime" id="awscdk-appsync-utils.GraphqlType.awsDateTime"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.awsDateTime(options?: BaseTypeOptions)
```

`AWSDateTime` scalar type represents a valid extended `ISO 8601 DateTime` string.

In other words, accepts date strings in the form of `YYYY-MM-DDThh:mm:ss.sssZ`. It accepts time zone offsets.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.awsDateTime.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsEmail` <a name="awsEmail" id="awscdk-appsync-utils.GraphqlType.awsEmail"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.awsEmail(options?: BaseTypeOptions)
```

`AWSEmail` scalar type represents an email address string (i.e.`username@example.com`).

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.awsEmail.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsIpAddress` <a name="awsIpAddress" id="awscdk-appsync-utils.GraphqlType.awsIpAddress"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.awsIpAddress(options?: BaseTypeOptions)
```

`AWSIPAddress` scalar type respresents a valid `IPv4` of `IPv6` address string.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.awsIpAddress.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsJson` <a name="awsJson" id="awscdk-appsync-utils.GraphqlType.awsJson"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.awsJson(options?: BaseTypeOptions)
```

`AWSJson` scalar type represents a JSON string.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.awsJson.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsPhone` <a name="awsPhone" id="awscdk-appsync-utils.GraphqlType.awsPhone"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.awsPhone(options?: BaseTypeOptions)
```

`AWSPhone` scalar type represents a valid phone number. Phone numbers maybe be whitespace delimited or hyphenated.

The number can specify a country code at the beginning, but is not required for US phone numbers.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.awsPhone.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsTime` <a name="awsTime" id="awscdk-appsync-utils.GraphqlType.awsTime"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.awsTime(options?: BaseTypeOptions)
```

`AWSTime` scalar type represents a valid extended `ISO 8601 Time` string.

In other words, accepts date strings in the form of `hh:mm:ss.sss`. It accepts time zone offsets.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.awsTime.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsTimestamp` <a name="awsTimestamp" id="awscdk-appsync-utils.GraphqlType.awsTimestamp"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.awsTimestamp(options?: BaseTypeOptions)
```

`AWSTimestamp` scalar type represents the number of seconds since `1970-01-01T00:00Z`.

Timestamps are serialized and deserialized as numbers.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.awsTimestamp.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsUrl` <a name="awsUrl" id="awscdk-appsync-utils.GraphqlType.awsUrl"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.awsUrl(options?: BaseTypeOptions)
```

`AWSURL` scalar type represetns a valid URL string.

URLs wihtout schemes or contain double slashes are considered invalid.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.awsUrl.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `boolean` <a name="boolean" id="awscdk-appsync-utils.GraphqlType.boolean"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.boolean(options?: BaseTypeOptions)
```

`Boolean` scalar type is a boolean value: true or false.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.boolean.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `float` <a name="float" id="awscdk-appsync-utils.GraphqlType.float"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.float(options?: BaseTypeOptions)
```

`Float` scalar type is a signed double-precision fractional value.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.float.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `id` <a name="id" id="awscdk-appsync-utils.GraphqlType.id"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.id(options?: BaseTypeOptions)
```

`ID` scalar type is a unique identifier. `ID` type is serialized similar to `String`.

Often used as a key for a cache and not intended to be human-readable.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.id.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `int` <a name="int" id="awscdk-appsync-utils.GraphqlType.int"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.int(options?: BaseTypeOptions)
```

`Int` scalar type is a signed non-fractional numerical value.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.int.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `intermediate` <a name="intermediate" id="awscdk-appsync-utils.GraphqlType.intermediate"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.intermediate(options?: GraphqlTypeOptions)
```

an intermediate type to be added as an attribute (i.e. an interface or an object type).

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.intermediate.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.GraphqlTypeOptions">GraphqlTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList - intermediateType.

---

##### `string` <a name="string" id="awscdk-appsync-utils.GraphqlType.string"></a>

```typescript
import { GraphqlType } from 'awscdk-appsync-utils'

GraphqlType.string(options?: BaseTypeOptions)
```

`String` scalar type is a free-form human-readable text.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.GraphqlType.string.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.GraphqlType.property.isList">isList</a></code> | <code>boolean</code> | property determining if this attribute is a list i.e. if true, attribute would be `[Type]`. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.property.isRequired">isRequired</a></code> | <code>boolean</code> | property determining if this attribute is non-nullable i.e. if true, attribute would be `Type!` and this attribute must always have a value. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.property.isRequiredList">isRequiredList</a></code> | <code>boolean</code> | property determining if this attribute is a non-nullable list i.e. if true, attribute would be `[ Type ]!` and this attribute's list must always have a value. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.property.type">type</a></code> | <code><a href="#awscdk-appsync-utils.Type">Type</a></code> | the type of attribute. |
| <code><a href="#awscdk-appsync-utils.GraphqlType.property.intermediateType">intermediateType</a></code> | <code><a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a></code> | the intermediate type linked to this attribute (i.e. an interface or an object). |

---

##### `isList`<sup>Required</sup> <a name="isList" id="awscdk-appsync-utils.GraphqlType.property.isList"></a>

```typescript
public readonly isList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a list i.e. if true, attribute would be `[Type]`.

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="awscdk-appsync-utils.GraphqlType.property.isRequired"></a>

```typescript
public readonly isRequired: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is non-nullable i.e. if true, attribute would be `Type!` and this attribute must always have a value.

---

##### `isRequiredList`<sup>Required</sup> <a name="isRequiredList" id="awscdk-appsync-utils.GraphqlType.property.isRequiredList"></a>

```typescript
public readonly isRequiredList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a non-nullable list i.e. if true, attribute would be `[ Type ]!` and this attribute's list must always have a value.

---

##### `type`<sup>Required</sup> <a name="type" id="awscdk-appsync-utils.GraphqlType.property.type"></a>

```typescript
public readonly type: Type;
```

- *Type:* <a href="#awscdk-appsync-utils.Type">Type</a>

the type of attribute.

---

##### `intermediateType`<sup>Optional</sup> <a name="intermediateType" id="awscdk-appsync-utils.GraphqlType.property.intermediateType"></a>

```typescript
public readonly intermediateType: IIntermediateType;
```

- *Type:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>
- *Default:* no intermediate type

the intermediate type linked to this attribute (i.e. an interface or an object).

---


### InputType <a name="InputType" id="awscdk-appsync-utils.InputType"></a>

- *Implements:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>

Input Types are abstract types that define complex objects.

They are used in arguments to represent

#### Initializers <a name="Initializers" id="awscdk-appsync-utils.InputType.Initializer"></a>

```typescript
import { InputType } from 'awscdk-appsync-utils'

new InputType(name: string, props: IntermediateTypeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.InputType.Initializer.parameter.name">name</a></code> | <code>string</code> | the name of this type. |
| <code><a href="#awscdk-appsync-utils.InputType.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-appsync-utils.IntermediateTypeOptions">IntermediateTypeOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-appsync-utils.InputType.Initializer.parameter.name"></a>

- *Type:* string

the name of this type.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-appsync-utils.InputType.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-appsync-utils.IntermediateTypeOptions">IntermediateTypeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.InputType.addField">addField</a></code> | Add a field to this Input Type. |
| <code><a href="#awscdk-appsync-utils.InputType.attribute">attribute</a></code> | Create a GraphQL Type representing this Input Type. |
| <code><a href="#awscdk-appsync-utils.InputType.toString">toString</a></code> | Generate the string of this input type. |

---

##### `addField` <a name="addField" id="awscdk-appsync-utils.InputType.addField"></a>

```typescript
public addField(options: AddFieldOptions): void
```

Add a field to this Input Type.

Input Types must have both fieldName and field options.

###### `options`<sup>Required</sup> <a name="options" id="awscdk-appsync-utils.InputType.addField.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.AddFieldOptions">AddFieldOptions</a>

the options to add a field.

---

##### `attribute` <a name="attribute" id="awscdk-appsync-utils.InputType.attribute"></a>

```typescript
public attribute(options?: BaseTypeOptions): GraphqlType
```

Create a GraphQL Type representing this Input Type.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.InputType.attribute.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute.

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.InputType.toString"></a>

```typescript
public toString(): string
```

Generate the string of this input type.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.InputType.property.definition">definition</a></code> | <code>{[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}</code> | the attributes of this type. |
| <code><a href="#awscdk-appsync-utils.InputType.property.name">name</a></code> | <code>string</code> | the name of this type. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="awscdk-appsync-utils.InputType.property.definition"></a>

```typescript
public readonly definition: {[ key: string ]: IField};
```

- *Type:* {[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}

the attributes of this type.

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-appsync-utils.InputType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

the name of this type.

---


### InterfaceType <a name="InterfaceType" id="awscdk-appsync-utils.InterfaceType"></a>

- *Implements:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>

Interface Types are abstract types that includes a certain set of fields that other types must include if they implement the interface.

#### Initializers <a name="Initializers" id="awscdk-appsync-utils.InterfaceType.Initializer"></a>

```typescript
import { InterfaceType } from 'awscdk-appsync-utils'

new InterfaceType(name: string, props: IntermediateTypeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.InterfaceType.Initializer.parameter.name">name</a></code> | <code>string</code> | the name of this type. |
| <code><a href="#awscdk-appsync-utils.InterfaceType.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-appsync-utils.IntermediateTypeOptions">IntermediateTypeOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-appsync-utils.InterfaceType.Initializer.parameter.name"></a>

- *Type:* string

the name of this type.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-appsync-utils.InterfaceType.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-appsync-utils.IntermediateTypeOptions">IntermediateTypeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.InterfaceType.addField">addField</a></code> | Add a field to this Interface Type. |
| <code><a href="#awscdk-appsync-utils.InterfaceType.attribute">attribute</a></code> | Create a GraphQL Type representing this Intermediate Type. |
| <code><a href="#awscdk-appsync-utils.InterfaceType.toString">toString</a></code> | Generate the string of this object type. |

---

##### `addField` <a name="addField" id="awscdk-appsync-utils.InterfaceType.addField"></a>

```typescript
public addField(options: AddFieldOptions): void
```

Add a field to this Interface Type.

Interface Types must have both fieldName and field options.

###### `options`<sup>Required</sup> <a name="options" id="awscdk-appsync-utils.InterfaceType.addField.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.AddFieldOptions">AddFieldOptions</a>

the options to add a field.

---

##### `attribute` <a name="attribute" id="awscdk-appsync-utils.InterfaceType.attribute"></a>

```typescript
public attribute(options?: BaseTypeOptions): GraphqlType
```

Create a GraphQL Type representing this Intermediate Type.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.InterfaceType.attribute.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute.

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.InterfaceType.toString"></a>

```typescript
public toString(): string
```

Generate the string of this object type.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.InterfaceType.property.definition">definition</a></code> | <code>{[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}</code> | the attributes of this type. |
| <code><a href="#awscdk-appsync-utils.InterfaceType.property.name">name</a></code> | <code>string</code> | the name of this type. |
| <code><a href="#awscdk-appsync-utils.InterfaceType.property.directives">directives</a></code> | <code><a href="#awscdk-appsync-utils.Directive">Directive</a>[]</code> | the directives for this object type. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="awscdk-appsync-utils.InterfaceType.property.definition"></a>

```typescript
public readonly definition: {[ key: string ]: IField};
```

- *Type:* {[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}

the attributes of this type.

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-appsync-utils.InterfaceType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

the name of this type.

---

##### `directives`<sup>Optional</sup> <a name="directives" id="awscdk-appsync-utils.InterfaceType.property.directives"></a>

```typescript
public readonly directives: Directive[];
```

- *Type:* <a href="#awscdk-appsync-utils.Directive">Directive</a>[]
- *Default:* no directives

the directives for this object type.

---


### ObjectType <a name="ObjectType" id="awscdk-appsync-utils.ObjectType"></a>

- *Implements:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>

Object Types are types declared by you.

#### Initializers <a name="Initializers" id="awscdk-appsync-utils.ObjectType.Initializer"></a>

```typescript
import { ObjectType } from 'awscdk-appsync-utils'

new ObjectType(name: string, props: ObjectTypeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.ObjectType.Initializer.parameter.name">name</a></code> | <code>string</code> | the name of this type. |
| <code><a href="#awscdk-appsync-utils.ObjectType.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-appsync-utils.ObjectTypeOptions">ObjectTypeOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-appsync-utils.ObjectType.Initializer.parameter.name"></a>

- *Type:* string

the name of this type.

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-appsync-utils.ObjectType.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-appsync-utils.ObjectTypeOptions">ObjectTypeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.ObjectType.addField">addField</a></code> | Add a field to this Object Type. |
| <code><a href="#awscdk-appsync-utils.ObjectType.attribute">attribute</a></code> | Create a GraphQL Type representing this Intermediate Type. |
| <code><a href="#awscdk-appsync-utils.ObjectType.toString">toString</a></code> | Generate the string of this object type. |

---

##### `addField` <a name="addField" id="awscdk-appsync-utils.ObjectType.addField"></a>

```typescript
public addField(options: AddFieldOptions): void
```

Add a field to this Object Type.

Object Types must have both fieldName and field options.

###### `options`<sup>Required</sup> <a name="options" id="awscdk-appsync-utils.ObjectType.addField.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.AddFieldOptions">AddFieldOptions</a>

the options to add a field.

---

##### `attribute` <a name="attribute" id="awscdk-appsync-utils.ObjectType.attribute"></a>

```typescript
public attribute(options?: BaseTypeOptions): GraphqlType
```

Create a GraphQL Type representing this Intermediate Type.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ObjectType.attribute.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute.

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.ObjectType.toString"></a>

```typescript
public toString(): string
```

Generate the string of this object type.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.ObjectType.property.definition">definition</a></code> | <code>{[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}</code> | the attributes of this type. |
| <code><a href="#awscdk-appsync-utils.ObjectType.property.name">name</a></code> | <code>string</code> | the name of this type. |
| <code><a href="#awscdk-appsync-utils.ObjectType.property.directives">directives</a></code> | <code><a href="#awscdk-appsync-utils.Directive">Directive</a>[]</code> | the directives for this object type. |
| <code><a href="#awscdk-appsync-utils.ObjectType.property.interfaceTypes">interfaceTypes</a></code> | <code><a href="#awscdk-appsync-utils.InterfaceType">InterfaceType</a>[]</code> | The Interface Types this Object Type implements. |
| <code><a href="#awscdk-appsync-utils.ObjectType.property.resolvers">resolvers</a></code> | <code>aws-cdk-lib.aws_appsync.Resolver[]</code> | The resolvers linked to this data source. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="awscdk-appsync-utils.ObjectType.property.definition"></a>

```typescript
public readonly definition: {[ key: string ]: IField};
```

- *Type:* {[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}

the attributes of this type.

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-appsync-utils.ObjectType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

the name of this type.

---

##### `directives`<sup>Optional</sup> <a name="directives" id="awscdk-appsync-utils.ObjectType.property.directives"></a>

```typescript
public readonly directives: Directive[];
```

- *Type:* <a href="#awscdk-appsync-utils.Directive">Directive</a>[]
- *Default:* no directives

the directives for this object type.

---

##### `interfaceTypes`<sup>Optional</sup> <a name="interfaceTypes" id="awscdk-appsync-utils.ObjectType.property.interfaceTypes"></a>

```typescript
public readonly interfaceTypes: InterfaceType[];
```

- *Type:* <a href="#awscdk-appsync-utils.InterfaceType">InterfaceType</a>[]
- *Default:* no interface types

The Interface Types this Object Type implements.

---

##### `resolvers`<sup>Optional</sup> <a name="resolvers" id="awscdk-appsync-utils.ObjectType.property.resolvers"></a>

```typescript
public readonly resolvers: Resolver[];
```

- *Type:* aws-cdk-lib.aws_appsync.Resolver[]

The resolvers linked to this data source.

---


### ResolvableField <a name="ResolvableField" id="awscdk-appsync-utils.ResolvableField"></a>

- *Implements:* <a href="#awscdk-appsync-utils.IField">IField</a>

Resolvable Fields build upon Graphql Types and provide fields that can resolve into operations on a data source.

#### Initializers <a name="Initializers" id="awscdk-appsync-utils.ResolvableField.Initializer"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

new ResolvableField(options: ResolvableFieldOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.ResolvableField.Initializer.parameter.options">options</a></code> | <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions">ResolvableFieldOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.Initializer.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.ResolvableFieldOptions">ResolvableFieldOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.ResolvableField.argsToString">argsToString</a></code> | Generate the args string of this resolvable field. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.directivesToString">directivesToString</a></code> | Generate the directives for this field. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.toString">toString</a></code> | Generate the string for this attribute. |

---

##### `argsToString` <a name="argsToString" id="awscdk-appsync-utils.ResolvableField.argsToString"></a>

```typescript
public argsToString(): string
```

Generate the args string of this resolvable field.

##### `directivesToString` <a name="directivesToString" id="awscdk-appsync-utils.ResolvableField.directivesToString"></a>

```typescript
public directivesToString(modes?: AuthorizationType[]): string
```

Generate the directives for this field.

###### `modes`<sup>Optional</sup> <a name="modes" id="awscdk-appsync-utils.ResolvableField.directivesToString.parameter.modes"></a>

- *Type:* aws-cdk-lib.aws_appsync.AuthorizationType[]

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.ResolvableField.toString"></a>

```typescript
public toString(): string
```

Generate the string for this attribute.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.ResolvableField.awsDate">awsDate</a></code> | `AWSDate` scalar type represents a valid extended `ISO 8601 Date` string. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.awsDateTime">awsDateTime</a></code> | `AWSDateTime` scalar type represents a valid extended `ISO 8601 DateTime` string. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.awsEmail">awsEmail</a></code> | `AWSEmail` scalar type represents an email address string (i.e.`username@example.com`). |
| <code><a href="#awscdk-appsync-utils.ResolvableField.awsIpAddress">awsIpAddress</a></code> | `AWSIPAddress` scalar type respresents a valid `IPv4` of `IPv6` address string. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.awsJson">awsJson</a></code> | `AWSJson` scalar type represents a JSON string. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.awsPhone">awsPhone</a></code> | `AWSPhone` scalar type represents a valid phone number. Phone numbers maybe be whitespace delimited or hyphenated. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.awsTime">awsTime</a></code> | `AWSTime` scalar type represents a valid extended `ISO 8601 Time` string. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.awsTimestamp">awsTimestamp</a></code> | `AWSTimestamp` scalar type represents the number of seconds since `1970-01-01T00:00Z`. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.awsUrl">awsUrl</a></code> | `AWSURL` scalar type represetns a valid URL string. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.boolean">boolean</a></code> | `Boolean` scalar type is a boolean value: true or false. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.float">float</a></code> | `Float` scalar type is a signed double-precision fractional value. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.id">id</a></code> | `ID` scalar type is a unique identifier. `ID` type is serialized similar to `String`. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.int">int</a></code> | `Int` scalar type is a signed non-fractional numerical value. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.intermediate">intermediate</a></code> | an intermediate type to be added as an attribute (i.e. an interface or an object type). |
| <code><a href="#awscdk-appsync-utils.ResolvableField.string">string</a></code> | `String` scalar type is a free-form human-readable text. |

---

##### `awsDate` <a name="awsDate" id="awscdk-appsync-utils.ResolvableField.awsDate"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.awsDate(options?: BaseTypeOptions)
```

`AWSDate` scalar type represents a valid extended `ISO 8601 Date` string.

In other words, accepts date strings in the form of `YYYY-MM-DD`. It accepts time zone offsets.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.awsDate.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsDateTime` <a name="awsDateTime" id="awscdk-appsync-utils.ResolvableField.awsDateTime"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.awsDateTime(options?: BaseTypeOptions)
```

`AWSDateTime` scalar type represents a valid extended `ISO 8601 DateTime` string.

In other words, accepts date strings in the form of `YYYY-MM-DDThh:mm:ss.sssZ`. It accepts time zone offsets.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.awsDateTime.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsEmail` <a name="awsEmail" id="awscdk-appsync-utils.ResolvableField.awsEmail"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.awsEmail(options?: BaseTypeOptions)
```

`AWSEmail` scalar type represents an email address string (i.e.`username@example.com`).

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.awsEmail.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsIpAddress` <a name="awsIpAddress" id="awscdk-appsync-utils.ResolvableField.awsIpAddress"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.awsIpAddress(options?: BaseTypeOptions)
```

`AWSIPAddress` scalar type respresents a valid `IPv4` of `IPv6` address string.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.awsIpAddress.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsJson` <a name="awsJson" id="awscdk-appsync-utils.ResolvableField.awsJson"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.awsJson(options?: BaseTypeOptions)
```

`AWSJson` scalar type represents a JSON string.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.awsJson.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsPhone` <a name="awsPhone" id="awscdk-appsync-utils.ResolvableField.awsPhone"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.awsPhone(options?: BaseTypeOptions)
```

`AWSPhone` scalar type represents a valid phone number. Phone numbers maybe be whitespace delimited or hyphenated.

The number can specify a country code at the beginning, but is not required for US phone numbers.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.awsPhone.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsTime` <a name="awsTime" id="awscdk-appsync-utils.ResolvableField.awsTime"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.awsTime(options?: BaseTypeOptions)
```

`AWSTime` scalar type represents a valid extended `ISO 8601 Time` string.

In other words, accepts date strings in the form of `hh:mm:ss.sss`. It accepts time zone offsets.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.awsTime.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsTimestamp` <a name="awsTimestamp" id="awscdk-appsync-utils.ResolvableField.awsTimestamp"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.awsTimestamp(options?: BaseTypeOptions)
```

`AWSTimestamp` scalar type represents the number of seconds since `1970-01-01T00:00Z`.

Timestamps are serialized and deserialized as numbers.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.awsTimestamp.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `awsUrl` <a name="awsUrl" id="awscdk-appsync-utils.ResolvableField.awsUrl"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.awsUrl(options?: BaseTypeOptions)
```

`AWSURL` scalar type represetns a valid URL string.

URLs wihtout schemes or contain double slashes are considered invalid.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.awsUrl.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `boolean` <a name="boolean" id="awscdk-appsync-utils.ResolvableField.boolean"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.boolean(options?: BaseTypeOptions)
```

`Boolean` scalar type is a boolean value: true or false.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.boolean.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `float` <a name="float" id="awscdk-appsync-utils.ResolvableField.float"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.float(options?: BaseTypeOptions)
```

`Float` scalar type is a signed double-precision fractional value.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.float.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `id` <a name="id" id="awscdk-appsync-utils.ResolvableField.id"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.id(options?: BaseTypeOptions)
```

`ID` scalar type is a unique identifier. `ID` type is serialized similar to `String`.

Often used as a key for a cache and not intended to be human-readable.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.id.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `int` <a name="int" id="awscdk-appsync-utils.ResolvableField.int"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.int(options?: BaseTypeOptions)
```

`Int` scalar type is a signed non-fractional numerical value.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.int.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `intermediate` <a name="intermediate" id="awscdk-appsync-utils.ResolvableField.intermediate"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.intermediate(options?: GraphqlTypeOptions)
```

an intermediate type to be added as an attribute (i.e. an interface or an object type).

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.intermediate.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.GraphqlTypeOptions">GraphqlTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList - intermediateType.

---

##### `string` <a name="string" id="awscdk-appsync-utils.ResolvableField.string"></a>

```typescript
import { ResolvableField } from 'awscdk-appsync-utils'

ResolvableField.string(options?: BaseTypeOptions)
```

`String` scalar type is a free-form human-readable text.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.ResolvableField.string.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.ResolvableField.property.isList">isList</a></code> | <code>boolean</code> | property determining if this attribute is a list i.e. if true, attribute would be `[Type]`. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.property.isRequired">isRequired</a></code> | <code>boolean</code> | property determining if this attribute is non-nullable i.e. if true, attribute would be `Type!` and this attribute must always have a value. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.property.isRequiredList">isRequiredList</a></code> | <code>boolean</code> | property determining if this attribute is a non-nullable list i.e. if true, attribute would be `[ Type ]!` and this attribute's list must always have a value. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.property.type">type</a></code> | <code><a href="#awscdk-appsync-utils.Type">Type</a></code> | the type of attribute. |
| <code><a href="#awscdk-appsync-utils.ResolvableField.property.intermediateType">intermediateType</a></code> | <code><a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a></code> | the intermediate type linked to this attribute (i.e. an interface or an object). |
| <code><a href="#awscdk-appsync-utils.ResolvableField.property.fieldOptions">fieldOptions</a></code> | <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions">ResolvableFieldOptions</a></code> | The options to make this field resolvable. |

---

##### `isList`<sup>Required</sup> <a name="isList" id="awscdk-appsync-utils.ResolvableField.property.isList"></a>

```typescript
public readonly isList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a list i.e. if true, attribute would be `[Type]`.

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="awscdk-appsync-utils.ResolvableField.property.isRequired"></a>

```typescript
public readonly isRequired: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is non-nullable i.e. if true, attribute would be `Type!` and this attribute must always have a value.

---

##### `isRequiredList`<sup>Required</sup> <a name="isRequiredList" id="awscdk-appsync-utils.ResolvableField.property.isRequiredList"></a>

```typescript
public readonly isRequiredList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a non-nullable list i.e. if true, attribute would be `[ Type ]!` and this attribute's list must always have a value.

---

##### `type`<sup>Required</sup> <a name="type" id="awscdk-appsync-utils.ResolvableField.property.type"></a>

```typescript
public readonly type: Type;
```

- *Type:* <a href="#awscdk-appsync-utils.Type">Type</a>

the type of attribute.

---

##### `intermediateType`<sup>Optional</sup> <a name="intermediateType" id="awscdk-appsync-utils.ResolvableField.property.intermediateType"></a>

```typescript
public readonly intermediateType: IIntermediateType;
```

- *Type:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>
- *Default:* no intermediate type

the intermediate type linked to this attribute (i.e. an interface or an object).

---

##### `fieldOptions`<sup>Optional</sup> <a name="fieldOptions" id="awscdk-appsync-utils.ResolvableField.property.fieldOptions"></a>

```typescript
public readonly fieldOptions: ResolvableFieldOptions;
```

- *Type:* <a href="#awscdk-appsync-utils.ResolvableFieldOptions">ResolvableFieldOptions</a>
- *Default:* not a resolvable field

The options to make this field resolvable.

---


### UnionType <a name="UnionType" id="awscdk-appsync-utils.UnionType"></a>

- *Implements:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>

Union Types are abstract types that are similar to Interface Types, but they cannot to specify any common fields between types.

Note that fields of a union type need to be object types. In other words,
you can't create a union type out of interfaces, other unions, or inputs.

#### Initializers <a name="Initializers" id="awscdk-appsync-utils.UnionType.Initializer"></a>

```typescript
import { UnionType } from 'awscdk-appsync-utils'

new UnionType(name: string, options: UnionTypeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.UnionType.Initializer.parameter.name">name</a></code> | <code>string</code> | the name of this type. |
| <code><a href="#awscdk-appsync-utils.UnionType.Initializer.parameter.options">options</a></code> | <code><a href="#awscdk-appsync-utils.UnionTypeOptions">UnionTypeOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-appsync-utils.UnionType.Initializer.parameter.name"></a>

- *Type:* string

the name of this type.

---

##### `options`<sup>Required</sup> <a name="options" id="awscdk-appsync-utils.UnionType.Initializer.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.UnionTypeOptions">UnionTypeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.UnionType.addField">addField</a></code> | Add a field to this Union Type. |
| <code><a href="#awscdk-appsync-utils.UnionType.attribute">attribute</a></code> | Create a GraphQL Type representing this Union Type. |
| <code><a href="#awscdk-appsync-utils.UnionType.toString">toString</a></code> | Generate the string of this Union type. |

---

##### `addField` <a name="addField" id="awscdk-appsync-utils.UnionType.addField"></a>

```typescript
public addField(options: AddFieldOptions): void
```

Add a field to this Union Type.

Input Types must have field options and the IField must be an Object Type.

###### `options`<sup>Required</sup> <a name="options" id="awscdk-appsync-utils.UnionType.addField.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.AddFieldOptions">AddFieldOptions</a>

the options to add a field.

---

##### `attribute` <a name="attribute" id="awscdk-appsync-utils.UnionType.attribute"></a>

```typescript
public attribute(options?: BaseTypeOptions): GraphqlType
```

Create a GraphQL Type representing this Union Type.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.UnionType.attribute.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute.

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.UnionType.toString"></a>

```typescript
public toString(): string
```

Generate the string of this Union type.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.UnionType.property.definition">definition</a></code> | <code>{[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}</code> | the attributes of this type. |
| <code><a href="#awscdk-appsync-utils.UnionType.property.name">name</a></code> | <code>string</code> | the name of this type. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="awscdk-appsync-utils.UnionType.property.definition"></a>

```typescript
public readonly definition: {[ key: string ]: IField};
```

- *Type:* {[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}

the attributes of this type.

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-appsync-utils.UnionType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

the name of this type.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IField <a name="IField" id="awscdk-appsync-utils.IField"></a>

- *Implemented By:* <a href="#awscdk-appsync-utils.Field">Field</a>, <a href="#awscdk-appsync-utils.GraphqlType">GraphqlType</a>, <a href="#awscdk-appsync-utils.ResolvableField">ResolvableField</a>, <a href="#awscdk-appsync-utils.IField">IField</a>

A Graphql Field.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.IField.argsToString">argsToString</a></code> | Generate the arguments for this field. |
| <code><a href="#awscdk-appsync-utils.IField.directivesToString">directivesToString</a></code> | Generate the directives for this field. |
| <code><a href="#awscdk-appsync-utils.IField.toString">toString</a></code> | Generate the string for this attribute. |

---

##### `argsToString` <a name="argsToString" id="awscdk-appsync-utils.IField.argsToString"></a>

```typescript
public argsToString(): string
```

Generate the arguments for this field.

##### `directivesToString` <a name="directivesToString" id="awscdk-appsync-utils.IField.directivesToString"></a>

```typescript
public directivesToString(modes?: AuthorizationType[]): string
```

Generate the directives for this field.

###### `modes`<sup>Optional</sup> <a name="modes" id="awscdk-appsync-utils.IField.directivesToString.parameter.modes"></a>

- *Type:* aws-cdk-lib.aws_appsync.AuthorizationType[]

the authorization modes of the graphql api.

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.IField.toString"></a>

```typescript
public toString(): string
```

Generate the string for this attribute.

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.IField.property.isList">isList</a></code> | <code>boolean</code> | property determining if this attribute is a list i.e. if true, attribute would be `[Type]`. |
| <code><a href="#awscdk-appsync-utils.IField.property.isRequired">isRequired</a></code> | <code>boolean</code> | property determining if this attribute is non-nullable i.e. if true, attribute would be `Type!` and this attribute must always have a value. |
| <code><a href="#awscdk-appsync-utils.IField.property.isRequiredList">isRequiredList</a></code> | <code>boolean</code> | property determining if this attribute is a non-nullable list i.e. if true, attribute would be `[ Type ]!` and this attribute's list must always have a value. |
| <code><a href="#awscdk-appsync-utils.IField.property.type">type</a></code> | <code><a href="#awscdk-appsync-utils.Type">Type</a></code> | the type of attribute. |
| <code><a href="#awscdk-appsync-utils.IField.property.fieldOptions">fieldOptions</a></code> | <code><a href="#awscdk-appsync-utils.ResolvableFieldOptions">ResolvableFieldOptions</a></code> | The options to make this field resolvable. |
| <code><a href="#awscdk-appsync-utils.IField.property.intermediateType">intermediateType</a></code> | <code><a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a></code> | the intermediate type linked to this attribute (i.e. an interface or an object). |

---

##### `isList`<sup>Required</sup> <a name="isList" id="awscdk-appsync-utils.IField.property.isList"></a>

```typescript
public readonly isList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a list i.e. if true, attribute would be `[Type]`.

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="awscdk-appsync-utils.IField.property.isRequired"></a>

```typescript
public readonly isRequired: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is non-nullable i.e. if true, attribute would be `Type!` and this attribute must always have a value.

---

##### `isRequiredList`<sup>Required</sup> <a name="isRequiredList" id="awscdk-appsync-utils.IField.property.isRequiredList"></a>

```typescript
public readonly isRequiredList: boolean;
```

- *Type:* boolean
- *Default:* false

property determining if this attribute is a non-nullable list i.e. if true, attribute would be `[ Type ]!` and this attribute's list must always have a value.

---

##### `type`<sup>Required</sup> <a name="type" id="awscdk-appsync-utils.IField.property.type"></a>

```typescript
public readonly type: Type;
```

- *Type:* <a href="#awscdk-appsync-utils.Type">Type</a>

the type of attribute.

---

##### `fieldOptions`<sup>Optional</sup> <a name="fieldOptions" id="awscdk-appsync-utils.IField.property.fieldOptions"></a>

```typescript
public readonly fieldOptions: ResolvableFieldOptions;
```

- *Type:* <a href="#awscdk-appsync-utils.ResolvableFieldOptions">ResolvableFieldOptions</a>
- *Default:* not a resolvable field

The options to make this field resolvable.

---

##### `intermediateType`<sup>Optional</sup> <a name="intermediateType" id="awscdk-appsync-utils.IField.property.intermediateType"></a>

```typescript
public readonly intermediateType: IIntermediateType;
```

- *Type:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>
- *Default:* no intermediate type

the intermediate type linked to this attribute (i.e. an interface or an object).

---

### IIntermediateType <a name="IIntermediateType" id="awscdk-appsync-utils.IIntermediateType"></a>

- *Implemented By:* <a href="#awscdk-appsync-utils.EnumType">EnumType</a>, <a href="#awscdk-appsync-utils.InputType">InputType</a>, <a href="#awscdk-appsync-utils.InterfaceType">InterfaceType</a>, <a href="#awscdk-appsync-utils.ObjectType">ObjectType</a>, <a href="#awscdk-appsync-utils.UnionType">UnionType</a>, <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>

Intermediate Types are types that includes a certain set of fields that define the entirety of your schema.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.IIntermediateType.addField">addField</a></code> | Add a field to this Intermediate Type. |
| <code><a href="#awscdk-appsync-utils.IIntermediateType.attribute">attribute</a></code> | Create an GraphQL Type representing this Intermediate Type. |
| <code><a href="#awscdk-appsync-utils.IIntermediateType.toString">toString</a></code> | Generate the string of this object type. |

---

##### `addField` <a name="addField" id="awscdk-appsync-utils.IIntermediateType.addField"></a>

```typescript
public addField(options: AddFieldOptions): void
```

Add a field to this Intermediate Type.

###### `options`<sup>Required</sup> <a name="options" id="awscdk-appsync-utils.IIntermediateType.addField.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.AddFieldOptions">AddFieldOptions</a>

---

##### `attribute` <a name="attribute" id="awscdk-appsync-utils.IIntermediateType.attribute"></a>

```typescript
public attribute(options?: BaseTypeOptions): GraphqlType
```

Create an GraphQL Type representing this Intermediate Type.

###### `options`<sup>Optional</sup> <a name="options" id="awscdk-appsync-utils.IIntermediateType.attribute.parameter.options"></a>

- *Type:* <a href="#awscdk-appsync-utils.BaseTypeOptions">BaseTypeOptions</a>

the options to configure this attribute - isList - isRequired - isRequiredList.

---

##### `toString` <a name="toString" id="awscdk-appsync-utils.IIntermediateType.toString"></a>

```typescript
public toString(): string
```

Generate the string of this object type.

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.IIntermediateType.property.definition">definition</a></code> | <code>{[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}</code> | the attributes of this type. |
| <code><a href="#awscdk-appsync-utils.IIntermediateType.property.name">name</a></code> | <code>string</code> | the name of this type. |
| <code><a href="#awscdk-appsync-utils.IIntermediateType.property.directives">directives</a></code> | <code><a href="#awscdk-appsync-utils.Directive">Directive</a>[]</code> | the directives for this object type. |
| <code><a href="#awscdk-appsync-utils.IIntermediateType.property.interfaceTypes">interfaceTypes</a></code> | <code><a href="#awscdk-appsync-utils.InterfaceType">InterfaceType</a>[]</code> | The Interface Types this Intermediate Type implements. |
| <code><a href="#awscdk-appsync-utils.IIntermediateType.property.intermediateType">intermediateType</a></code> | <code><a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a></code> | the intermediate type linked to this attribute (i.e. an interface or an object). |
| <code><a href="#awscdk-appsync-utils.IIntermediateType.property.resolvers">resolvers</a></code> | <code>aws-cdk-lib.aws_appsync.Resolver[]</code> | The resolvers linked to this data source. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="awscdk-appsync-utils.IIntermediateType.property.definition"></a>

```typescript
public readonly definition: {[ key: string ]: IField};
```

- *Type:* {[ key: string ]: <a href="#awscdk-appsync-utils.IField">IField</a>}

the attributes of this type.

---

##### `name`<sup>Required</sup> <a name="name" id="awscdk-appsync-utils.IIntermediateType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

the name of this type.

---

##### `directives`<sup>Optional</sup> <a name="directives" id="awscdk-appsync-utils.IIntermediateType.property.directives"></a>

```typescript
public readonly directives: Directive[];
```

- *Type:* <a href="#awscdk-appsync-utils.Directive">Directive</a>[]
- *Default:* no directives

the directives for this object type.

---

##### `interfaceTypes`<sup>Optional</sup> <a name="interfaceTypes" id="awscdk-appsync-utils.IIntermediateType.property.interfaceTypes"></a>

```typescript
public readonly interfaceTypes: InterfaceType[];
```

- *Type:* <a href="#awscdk-appsync-utils.InterfaceType">InterfaceType</a>[]
- *Default:* no interface types

The Interface Types this Intermediate Type implements.

---

##### `intermediateType`<sup>Optional</sup> <a name="intermediateType" id="awscdk-appsync-utils.IIntermediateType.property.intermediateType"></a>

```typescript
public readonly intermediateType: IIntermediateType;
```

- *Type:* <a href="#awscdk-appsync-utils.IIntermediateType">IIntermediateType</a>
- *Default:* no intermediate type

the intermediate type linked to this attribute (i.e. an interface or an object).

---

##### `resolvers`<sup>Optional</sup> <a name="resolvers" id="awscdk-appsync-utils.IIntermediateType.property.resolvers"></a>

```typescript
public readonly resolvers: Resolver[];
```

- *Type:* aws-cdk-lib.aws_appsync.Resolver[]

The resolvers linked to this data source.

---

### ISourceApiAssociationMergeOperationProvider <a name="ISourceApiAssociationMergeOperationProvider" id="awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* <a href="#awscdk-appsync-utils.SourceApiAssociationMergeOperationProvider">SourceApiAssociationMergeOperationProvider</a>, <a href="#awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider">ISourceApiAssociationMergeOperationProvider</a>

This interface for the provider of the custom resource that will be used to initiate a merge operation during Cloudformation update.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider.associateSourceApiAssociation">associateSourceApiAssociation</a></code> | This function associates a source api association with the provider. |

---

##### `associateSourceApiAssociation` <a name="associateSourceApiAssociation" id="awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider.associateSourceApiAssociation"></a>

```typescript
public associateSourceApiAssociation(sourceApiAssociation: ISourceApiAssociation): void
```

This function associates a source api association with the provider.

This method can be used for adding permissions to merge a specific source api association to the custom resource provider.

###### `sourceApiAssociation`<sup>Required</sup> <a name="sourceApiAssociation" id="awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider.associateSourceApiAssociation.parameter.sourceApiAssociation"></a>

- *Type:* aws-cdk-lib.aws_appsync.ISourceApiAssociation

The association to associate.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider.property.serviceToken">serviceToken</a></code> | <code>string</code> | Service token which is used for identifying the handler used for the merge operation custom resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="awscdk-appsync-utils.ISourceApiAssociationMergeOperationProvider.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

Service token which is used for identifying the handler used for the merge operation custom resource.

---

## Enums <a name="Enums" id="Enums"></a>

### Type <a name="Type" id="awscdk-appsync-utils.Type"></a>

Enum containing the Types that can be used to define ObjectTypes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-appsync-utils.Type.ID">ID</a></code> | `ID` scalar type is a unique identifier. `ID` type is serialized similar to `String`. |
| <code><a href="#awscdk-appsync-utils.Type.STRING">STRING</a></code> | `String` scalar type is a free-form human-readable text. |
| <code><a href="#awscdk-appsync-utils.Type.INT">INT</a></code> | `Int` scalar type is a signed non-fractional numerical value. |
| <code><a href="#awscdk-appsync-utils.Type.FLOAT">FLOAT</a></code> | `Float` scalar type is a signed double-precision fractional value. |
| <code><a href="#awscdk-appsync-utils.Type.BOOLEAN">BOOLEAN</a></code> | `Boolean` scalar type is a boolean value: true or false. |
| <code><a href="#awscdk-appsync-utils.Type.AWS_DATE">AWS_DATE</a></code> | `AWSDate` scalar type represents a valid extended `ISO 8601 Date` string. |
| <code><a href="#awscdk-appsync-utils.Type.AWS_TIME">AWS_TIME</a></code> | `AWSTime` scalar type represents a valid extended `ISO 8601 Time` string. |
| <code><a href="#awscdk-appsync-utils.Type.AWS_DATE_TIME">AWS_DATE_TIME</a></code> | `AWSDateTime` scalar type represents a valid extended `ISO 8601 DateTime` string. |
| <code><a href="#awscdk-appsync-utils.Type.AWS_TIMESTAMP">AWS_TIMESTAMP</a></code> | `AWSTimestamp` scalar type represents the number of seconds since `1970-01-01T00:00Z`. |
| <code><a href="#awscdk-appsync-utils.Type.AWS_EMAIL">AWS_EMAIL</a></code> | `AWSEmail` scalar type represents an email address string (i.e.`username@example.com`). |
| <code><a href="#awscdk-appsync-utils.Type.AWS_JSON">AWS_JSON</a></code> | `AWSJson` scalar type represents a JSON string. |
| <code><a href="#awscdk-appsync-utils.Type.AWS_URL">AWS_URL</a></code> | `AWSURL` scalar type represetns a valid URL string. |
| <code><a href="#awscdk-appsync-utils.Type.AWS_PHONE">AWS_PHONE</a></code> | `AWSPhone` scalar type represents a valid phone number. Phone numbers maybe be whitespace delimited or hyphenated. |
| <code><a href="#awscdk-appsync-utils.Type.AWS_IP_ADDRESS">AWS_IP_ADDRESS</a></code> | `AWSIPAddress` scalar type respresents a valid `IPv4` of `IPv6` address string. |
| <code><a href="#awscdk-appsync-utils.Type.INTERMEDIATE">INTERMEDIATE</a></code> | Type used for Intermediate Types (i.e. an interface or an object type). |

---

##### `ID` <a name="ID" id="awscdk-appsync-utils.Type.ID"></a>

`ID` scalar type is a unique identifier. `ID` type is serialized similar to `String`.

Often used as a key for a cache and not intended to be human-readable.

---


##### `STRING` <a name="STRING" id="awscdk-appsync-utils.Type.STRING"></a>

`String` scalar type is a free-form human-readable text.

---


##### `INT` <a name="INT" id="awscdk-appsync-utils.Type.INT"></a>

`Int` scalar type is a signed non-fractional numerical value.

---


##### `FLOAT` <a name="FLOAT" id="awscdk-appsync-utils.Type.FLOAT"></a>

`Float` scalar type is a signed double-precision fractional value.

---


##### `BOOLEAN` <a name="BOOLEAN" id="awscdk-appsync-utils.Type.BOOLEAN"></a>

`Boolean` scalar type is a boolean value: true or false.

---


##### `AWS_DATE` <a name="AWS_DATE" id="awscdk-appsync-utils.Type.AWS_DATE"></a>

`AWSDate` scalar type represents a valid extended `ISO 8601 Date` string.

In other words, accepts date strings in the form of `YYYY-MM-DD`. It accepts time zone offsets.

> [https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates)

---


##### `AWS_TIME` <a name="AWS_TIME" id="awscdk-appsync-utils.Type.AWS_TIME"></a>

`AWSTime` scalar type represents a valid extended `ISO 8601 Time` string.

In other words, accepts date strings in the form of `hh:mm:ss.sss`. It accepts time zone offsets.

> [https://en.wikipedia.org/wiki/ISO_8601#Times](https://en.wikipedia.org/wiki/ISO_8601#Times)

---


##### `AWS_DATE_TIME` <a name="AWS_DATE_TIME" id="awscdk-appsync-utils.Type.AWS_DATE_TIME"></a>

`AWSDateTime` scalar type represents a valid extended `ISO 8601 DateTime` string.

In other words, accepts date strings in the form of `YYYY-MM-DDThh:mm:ss.sssZ`. It accepts time zone offsets.

> [https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations)

---


##### `AWS_TIMESTAMP` <a name="AWS_TIMESTAMP" id="awscdk-appsync-utils.Type.AWS_TIMESTAMP"></a>

`AWSTimestamp` scalar type represents the number of seconds since `1970-01-01T00:00Z`.

Timestamps are serialized and deserialized as numbers.

---


##### `AWS_EMAIL` <a name="AWS_EMAIL" id="awscdk-appsync-utils.Type.AWS_EMAIL"></a>

`AWSEmail` scalar type represents an email address string (i.e.`username@example.com`).

---


##### `AWS_JSON` <a name="AWS_JSON" id="awscdk-appsync-utils.Type.AWS_JSON"></a>

`AWSJson` scalar type represents a JSON string.

---


##### `AWS_URL` <a name="AWS_URL" id="awscdk-appsync-utils.Type.AWS_URL"></a>

`AWSURL` scalar type represetns a valid URL string.

URLs wihtout schemes or contain double slashes are considered invalid.

---


##### `AWS_PHONE` <a name="AWS_PHONE" id="awscdk-appsync-utils.Type.AWS_PHONE"></a>

`AWSPhone` scalar type represents a valid phone number. Phone numbers maybe be whitespace delimited or hyphenated.

The number can specify a country code at the beginning, but is not required for US phone numbers.

---


##### `AWS_IP_ADDRESS` <a name="AWS_IP_ADDRESS" id="awscdk-appsync-utils.Type.AWS_IP_ADDRESS"></a>

`AWSIPAddress` scalar type respresents a valid `IPv4` of `IPv6` address string.

---


##### `INTERMEDIATE` <a name="INTERMEDIATE" id="awscdk-appsync-utils.Type.INTERMEDIATE"></a>

Type used for Intermediate Types (i.e. an interface or an object type).

---

