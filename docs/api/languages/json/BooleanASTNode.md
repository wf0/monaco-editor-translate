# BooleanASTNode
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.BooleanASTNode.html
:::

```ts
interface BooleanASTNode {
    children?: ASTNode[];
    length: number;
    offset: number;
    parent?: ASTNode;
    type: "boolean";
    value: boolean;
}
```