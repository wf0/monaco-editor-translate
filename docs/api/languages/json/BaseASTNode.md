# BaseASTNode
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.BaseASTNode.html
:::

```ts
interface BaseASTNode {
    children?: ASTNode[];
    length: number;
    offset: number;
    parent?: ASTNode;
    type: "string" | "number" | "boolean" | "object" | "array" | "property" | "null";
    value?: string | number | boolean;
}
```

## children
- 类型：[ASTNode](/api/languages/json/ASTNode.md)[]

## length
- 类型：`number`

## offset
- 类型：`number`

## parent
- 类型：[ASTNode](/api/languages/json/ASTNode.md)

## type
- 类型：`"string"` | `"number"` | `"boolean"` | `"object"` | `"array"` | `"property"` | `"null"`;

## value
- 类型：`string` | `number` | `boolean`;