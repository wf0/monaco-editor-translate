# MappedEditsProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.MappedEditsProvider.html
:::

```ts
interface MappedEditsProvider {
    provideMappedEdits(document, codeBlocks, context, token): Promise<WorkspaceEdit>;
}
```

## provideMappedEdits
- 语法：`provideMappedEdits(document, codeBlocks, context, token): Promise<WorkspaceEdit>`
- 参数：
  - `document`: [ITextModel](/api/editor/ITextModel.md)
  - `codeBlocks`: `string[]`
  - `context`: [MappedEditsContext](/api/languages/MappedEditsContext.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：`Promise<`[WorkspaceEdit](/api/languages/WorkspaceEdit.md)`>`
- 描述：文本编辑的提供程序结果。