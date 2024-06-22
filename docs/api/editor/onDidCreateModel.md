# onDidCreateModel
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.onDidCreateModel.html
:::

- 语法：`onDidCreateModel(listener): IDisposable`

- 参数：`listener: ((model) => void)`

  - `model`: [ITextModel](/api/editor/ITextModel.md)
  
- 返回值：`IDisposable`:[IDisposable](/api/IDisposable.md)

- 描述：当model创建之后触发。