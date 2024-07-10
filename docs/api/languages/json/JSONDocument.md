# JSONDocument

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#types/languages.json.JSONDocument.html
:::

```ts
JSONDocument: {
    root: ASTNode | undefined;
    getNodeFromOffset(offset, includeRightBound?): ASTNode;
}
```
## root
- 类型：[ASTNode](/api/languages/json/ASTNode.md) | `undefined`
## getNodeFromOffset
- 语法：`getNodeFromOffset(offset, includeRightBound?): ASTNode`
- 参数：
  - `offset`: `number`
  - `includeRightBound`: `boolean`
- 返回值：[ASTNode](/api/languages/json/ASTNode.md)
