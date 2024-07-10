# registerEditorOpener

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.registerEditorOpener.html
:::


- 语法：`registerEditorOpener(opener): IDisposable`

- 参数：`opener`: [ICodeEditorOpener](/api/editor/ICodeEditorOpener.md)
  
- 返回值：`IDisposable`:[IDisposable](/api/IDisposable.md)

- 描述：注册一个处理程序，当应在编辑器中打开当前模型以外的资源时调用该处理程序（例如“转到定义”）。如果请求已处理，则处理程序回调应返回 true，否则返回 false。 如果没有注册处理程序，则默认行为是对当前附加的模型以外的模型不执行任何操作。
