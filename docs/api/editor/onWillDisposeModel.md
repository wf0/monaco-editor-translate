# onWillDisposeModel

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.onWillDisposeModel.html
:::

- 语法：`onWillDisposeModel(listener): IDisposable`

- 参数：`listener: ((model) => void)`

  - `model`: [ITextModel](/api/editor/ITextModel.md)
  
- 返回值：`IDisposable`:[IDisposable](/api/IDisposable.md)

- 描述：取消model挂载之前触发。