# ObjectASTNode

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.ObjectASTNode.html
:::

```ts
interface ObjectASTNode {
    children: ASTNode[];
    length: number;
    offset: number;
    parent?: ASTNode;
    properties: PropertyASTNode[];
    type: "object";
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

## properties
- 类型：[PropertyASTNode](/api/languages/json/PropertyASTNode.md)[]

## type
- 类型：`'object'`

## value
- 类型：`string | number | boolean`
