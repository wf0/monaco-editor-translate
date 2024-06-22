# getModels
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.getModels.html
:::

- 语法：`getModels(): ITextModel[]`

- 参数：-

- 返回值：[ITextModel](/api/editor/ITextModel.md)[]

- 描述：获取所有文本模型实例

- 示例：

::: details 查看代码
```js
const dom = document.querySelector(".editor");
const myEditor = editor.create(dom, {
  value: "console.log('hello world')",
  language: "javascript",
});

const model = editor.createModel("// demo", "javascript");
const model2 = editor.createModel("// 这是第二次创建model", "javascript");
myEditor.setModel(model); // 如果注释这两行，则 create 的结果也会算 model
myEditor.setModel(model2); // 如果注释这两行，则 create 的结果也会算 model

const diffEditor = editor.createDiffEditor(document.querySelector(".main"), {
  renderSideBySide: true, // renderSideBySide: false 行内比较
});
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

console.group("Model 分析");

editor.getModels().forEach((model) => {
  console.log(model.getValue());
});
```

:::
- 输出：

<img src='/getModels.png' />
<img src='/getModels2.png' />