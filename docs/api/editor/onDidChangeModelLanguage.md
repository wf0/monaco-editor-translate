# onDidChangeModelLanguage

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.onDidChangeModelLanguage.html
:::

- 语法：`onDidChangeModelLanguage(listener): IDisposable`

- 参数：`listener: ((e) => void)`

  - `e.model`: [ITextModel](/api/editor/ITextModel.md)
  - `e.oldLanguage`: `string`
  
- 返回值：`IDisposable`:[IDisposable](/api/IDisposable.md)

- 描述：监听模型语言变化。
