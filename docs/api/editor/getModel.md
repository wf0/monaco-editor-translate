# getModel
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.getModel.html
:::

- 语法：`getModel(uri): ITextModel | null`

- 参数： [uri](/api/Uri.md)

- 返回值：[ITextModel](/api/editor/ITextModel.md) | `null`

- 描述：根据指定的 URI 获取对应的文本模型实例,如果不存在对应的文本模型实例，则返回 null.

- 示例：

```js
const uri = Uri.parse('file://path/to/file.js');

const model = editor.getModel(uri);

if (model) {
    console.log(model.getValue());
} else {
    console.log('Model not found');
}

```