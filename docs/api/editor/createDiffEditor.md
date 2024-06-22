# createDiffEditor
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.createDiffEditor.html
:::

- 语法：`createDiffEditor(domElement, options?, override?): IStandaloneDiffEditor`

- 参数：
  - `domElement`: `HTMLElement`
  - `options`: [IStandaloneDiffEditorConstructionOptions](/api/editor/IStandaloneDiffEditorConstructionOptions.md)
  - `override`: [IEditorOverrideServices](/api/editor/IEditorOverrideServices.md)

- 返回值：[IStandaloneDiffEditor](/api/editor/IStandaloneDiffEditor.md)

- 描述：创建差异编辑器实例

- 示例：

```js
const diffEditor = editor.createDiffEditor(
  document.querySelector(".editor"),
  {
    renderSideBySide: true, // renderSideBySide: false 行内比较
  }
);
diffEditor.setModel({
  original: editor.createModel(
    "function add(a, b) { return a + b; }",
    "javascript"
  ),
  modified: editor.createModel(
    "function add(a, b){ return a + b; }",
    "javascript"
  ),
});
```

- 输出：

<p>
 renderSideBySide: false 行内比较
  <img src='/diffEditoronLine.png'/>

 renderSideBySide: true 并排视图比较
  <img src='/diffEditoronTowside.png'/>
</p>
