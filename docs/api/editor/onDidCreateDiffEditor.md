# onDidCreateDiffEditor
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.onDidCreateDiffEditor.html
:::

- 语法：`onDidCreateDiffEditor(listener): IDisposable`

- 参数：`listener: ((diffEditor) => void)`

  - `diffEditor`: [IDiffEditor](/api/editor/IDiffEditor.md)
  
- 返回值：`IDisposable`:[IDisposable](/api/IDisposable.md)

- 描述：监听创建diff编辑器事件。