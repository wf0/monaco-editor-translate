# NullASTNode
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.NullASTNode.html
:::

```ts
interface NullASTNode {
    children?: ASTNode[];
    length: number;
    offset: number;
    parent?: ASTNode;
    type: "null";
    value: null;
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
- 类型：`'null'`

## value
- 类型：`null`
