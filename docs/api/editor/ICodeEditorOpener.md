# ICodeEditorOpener

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICodeEditorOpener.html
:::

```ts
interface ICodeEditorOpener {
    openCodeEditor(source, resource, selectionOrPosition?): boolean | Promise<boolean>;
}
```

## openCodeEditor
- 语法：`openCodeEditor(source, resource, selectionOrPosition?): boolean | Promise<boolean>`
- 参数：
  - `source`: [ICodeEditor](/api/editor/ICodeEditor.md)
  - `resource`: [Uri](/api/Uri.md)
  - `selectionOrPosition`: [IPosition](/api/IPosition.md) | [IRange](/api/IRange.md)