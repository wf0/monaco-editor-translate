# StringASTNode

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.StringASTNode.html
:::

```ts
interface StringASTNode {
    children?: ASTNode[];
    length: number;
    offset: number;
    parent?: ASTNode;
    type: "string";
    value: string;
}
```

## children
- 类型：[ASTNode](/api/languages/json/ASTNode.md)
## length
- 类型：`number`
## offset
- 类型：`number`
## parent
- 类型：[ASTNode](/api/languages/json/ASTNode.md)
## type
- 类型：`'string'`
## value
- 类型：`string`