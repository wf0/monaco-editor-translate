# ArrayASTNode
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.ArrayASTNode.html
:::

```ts
interface ArrayASTNode {
    children: ASTNode[];
    items: ASTNode[];
    length: number;
    offset: number;
    parent?: ASTNode;
    type: "array";
    value?: string | number | boolean;
}
```

## children
- 类型：[ASTNode](/api/languages/json/ASTNode.md)[]

## items
- 类型：[ASTNode](/api/languages/json/ASTNode.md)[]

## length
- 类型：`number`

## offset
- 类型：`number`

## parent
- 类型：[ASTNode](/api/languages/json/ASTNode.md)

## type
- 类型：`"array"`

## value
- 类型：`string` | `number` | `boolean`;
