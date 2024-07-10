# JSONSchema

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.JSONSchema.html
:::

```ts
interface JSONSchema {
    $comment?: string;
    $id?: string;
    $ref?: string;
    $schema?: string;
    additionalItems?: JSONSchemaRef;
    additionalProperties?: JSONSchemaRef;
    allOf?: JSONSchemaRef[];
    allowComments?: boolean;
    allowTrailingCommas?: boolean;
    anyOf?: JSONSchemaRef[];
    const?: any;
    contains?: JSONSchemaRef;
    default?: any;
    defaultSnippets?: {
        body?: any;
        bodyText?: string;
        description?: string;
        label?: string;
        markdownDescription?: string;
    }[];
    definitions?: {
        [name: string]: JSONSchema;
    };
    dependencies?: JSONSchemaMap | {
        [prop: string]: string[];
    };
    deprecationMessage?: string;
    description?: string;
    doNotSuggest?: boolean;
    else?: JSONSchemaRef;
    enum?: any[];
    enumDescriptions?: string[];
    errorMessage?: string;
    examples?: any[];
    exclusiveMaximum?: number | boolean;
    exclusiveMinimum?: number | boolean;
    format?: string;
    id?: string;
    if?: JSONSchemaRef;
    items?: JSONSchemaRef | JSONSchemaRef[];
    markdownDescription?: string;
    markdownEnumDescriptions?: string[];
    maxItems?: number;
    maxLength?: number;
    maxProperties?: number;
    maximum?: number;
    minItems?: number;
    minLength?: number;
    minProperties?: number;
    minimum?: number;
    multipleOf?: number;
    not?: JSONSchemaRef;
    oneOf?: JSONSchemaRef[];
    pattern?: string;
    patternErrorMessage?: string;
    patternProperties?: JSONSchemaMap;
    properties?: JSONSchemaMap;
    propertyNames?: JSONSchemaRef;
    required?: string[];
    suggestSortText?: string;
    then?: JSONSchemaRef;
    title?: string;
    type?: string | string[];
    uniqueItems?: boolean;
}
```
## 快捷链接
<script setup>
const data = [
  { icon: "P", title: "$comment" , link:"comment"},
  { icon: "P", title: "$id" , link:"id"},
  { icon: "P", title: "$ref" , link:"ref"},
  { icon: "P", title: "$schema" , link:"schema"},
  { icon: "P", link: "additionalItems" },
  { icon: "P", link: "additionalProperties" },
  { icon: "P", link: "allOf" },
  { icon: "P", link: "allowComments" },
  { icon: "P", link: "allowTrailingCommas" },
  { icon: "P", link: "anyOf" },
  { icon: "P", link: "const" },
  { icon: "P", link: "contains" },
  { icon: "P", link: "default" },
  { icon: "P", link: "defaultSnippets" },
  { icon: "P", link: "definitions" },
  { icon: "P", link: "dependencies" },
  { icon: "P", link: "deprecationMessage" },
  { icon: "P", link: "description" },
  { icon: "P", link: "doNotSuggest" },
  { icon: "P", link: "else" },
  { icon: "P", link: "enum" },
  { icon: "P", link: "enumDescriptions" },
  { icon: "P", link: "errorMessage" },
  { icon: "P", link: "examples" },
  { icon: "P", link: "exclusiveMaximum" },
  { icon: "P", link: "exclusiveMinimum" },
  { icon: "P", link: "format" },
  { icon: "P", link: "id" },
  { icon: "P", link: "if" },
  { icon: "P", link: "items" },
  { icon: "P", link: "markdownDescription" },
  { icon: "P", link: "markdownEnumDescriptions" },
  { icon: "P", link: "maxItems" },
  { icon: "P", link: "maxLength" },
  { icon: "P", link: "maxProperties" },
  { icon: "P", link: "maximum" },
  { icon: "P", link: "minItems" },
  { icon: "P", link: "minLength" },
  { icon: "P", link: "minProperties" },
  { icon: "P", link: "minimum" },
  { icon: "P", link: "multipleOf" },
  { icon: "P", link: "not" },
  { icon: "P", link: "oneOf" },
  { icon: "P", link: "pattern" },
  { icon: "P", link: "patternErrorMessage" },
  { icon: "P", link: "patternProperties" },
  { icon: "P", link: "properties" },
  { icon: "P", link: "propertyNames" },
  { icon: "P", link: "required" },
  { icon: "P", link: "suggestSortText" },
  { icon: "P", link: "then" },
  { icon: "P", link: "title" },
  { icon: "P", link: "type" },
  { icon: "P", link: "uniqueItems" },
];
</script>
<dataItems :data="data" />

## $comment
- 类型：`string`


## $id
- 类型：`string`


## $ref
- 类型：`string`


## $schema
- 类型：`string`


## additionalItems
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)


## additionalProperties
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)


## allOf
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)[]


## allowComments
- 类型：`boolean`


## allowTrailingCommas
- 类型：`boolean`


## anyOf
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)[]


## const
- 类型：`any`


## contains
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)


## default
- 类型：`any`


## defaultSnippets
- 类型：`{
    body?: any;
    bodyText?: string;
    description?: string;
    label?: string;
    markdownDescription?: string;
}[]`


## definitions
- 类型：`{ [name: string]`: [JSONSchema](/api/languages/json/JSONSchema.md)` }`

## dependencies
- 类型：[JSONSchemaMap](/api/languages/json/JSONSchemaMap.md) `| { [prop: string]`: `string[] }`


## deprecationMessage
- 类型：`string`


## description
- 类型：`string`


## doNotSuggest
- 类型：`boolean`


## else
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)


## enum
- 类型：`any[]`


## enumDescriptions
- 类型：`string[]`


## errorMessage
- 类型：`string`


## examples
- 类型：`any[]`


## exclusiveMaximum
- 类型：`number | boolean`


## exclusiveMinimum
- 类型：`number | boolean` 


## format
- 类型：`string`


## id
- 类型：`string`


## if
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)


## items
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md) | [JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)[]


## markdownDescription
- 类型：`string`


## markdownEnumDescriptions
- 类型：`string[]`


## maxItems
- 类型：`number`


## maxLength
- 类型：`number`


## maxProperties
- 类型：`number`


## maximum
- 类型：`number`


## minItems
- 类型：`number`


## minLength
- 类型：`number`


## minProperties
- 类型：`number`


## minimum
- 类型：`number`


## multipleOf
- 类型：`number`


## not
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)


## oneOf
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)[]


## pattern
- 类型：`string`


## patternErrorMessage
- 类型：`string`


## patternProperties
- 类型：[JSONSchemaMap](/api/languages/json/JSONSchemaMap.md)


## properties
- 类型：[JSONSchemaMap](/api/languages/json/JSONSchemaMap.md)


## propertyNames
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)


## required
- 类型：`string[]`


## suggestSortText
- 类型：`string`


## then
- 类型：[JSONSchemaRef](/api/languages/json/JSONSchemaRef.md)


## title
- 类型：`string`


## type
- 类型：`string | string[]`


## uniqueItems
- 类型：`boolean`

