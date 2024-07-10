# getEditors

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.getEditors.html
:::


- 语法：`getEditors(): readonly ICodeEditor[]`

- 参数： -

- 返回值：`readonly`[ICodeEditor](/api/editor/ICodeEditor.md)[]

- 描述：获取所有的编辑器实例(非差异，指的是 create 创建的)

- 示例：

```js
const editor1 = editor.create(...)

const editor2 = editor.create(...)

console.log(editor.getEditors()) // [editor1, editor2]
```