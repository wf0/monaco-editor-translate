# onDidChangeMarkers
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.onDidChangeMarkers.html
:::

- 语法：`onDidChangeMarkers(listener): IDisposable`

- 参数：`listener: ((e) => void)`

  - `e`: `readonly` [Uri](/api/Uri.md)[]
  
- 返回值：`IDisposable`:[IDisposable](/api/IDisposable.md)

- 描述：监听编辑器 markers 变化事件。
