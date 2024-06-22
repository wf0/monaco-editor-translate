# getDiffEditors
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.getDiffEditors.html
:::

- 语法：`getDiffEditors(): readonly IDiffEditor[]`

- 参数： -

- 返回值：`readonly`[IDiffEditor](/api/editor/IDiffEditor.md)[]

- 描述：获取所有的差异编辑器实例

- 示例：

```js
const editor1 = monaco.editor.create(document.getElementById('container1'), {
    value: 'function add(a, b) { return a + b; }',
    language: 'javascript'
});

const editor2 = monaco.editor.create(document.getElementById('container2'), {
    value: 'function sub(a, b) { return a - b; }',
    language: 'javascript'
});

const diffEditor = monaco.editor.createDiffEditor(document.getElementById('container3'), {
    original: editor1.getModel(),
    modified: editor2.getModel()
});

const editors = monaco.editor.getDiffEditors();

console.log(editors.length);
```
