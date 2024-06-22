# createModel
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.createModel.html
:::


- 语法：`createModel(value, language?, uri?): ITextModel`

- 参数：
  - `value`: `string`
  - `language`: `string`
  - `uri`: [uri](/api/Uri.md)

- 返回值：[ITextModel](/api/editor/ITextModel.md)

- 描述：创建一个新的文本模型实例

- 示例：

```js
  const myEditor = editor.create(document.querySelector(".editor"));
  // 通过 创建新的模型动态配置
  const model = editor.createModel("function a(){return 1}", "javascript");
  // 通过 setModel 设置模型
  myEditor.setModel(model);
```
