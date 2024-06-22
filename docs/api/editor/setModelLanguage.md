# setModelLanguage
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.setModelLanguage.html
:::

- 语法：`setModelLanguage(model, mimeTypeOrLanguageId): void`

- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `mimeTypeOrLanguageId`: `string`
  
- 返回值：`void`

- 描述：设置模型语言。

- 示例：

```js
const model = editor.createModel('Hello world!', 'javascript');
editor.setModelLanguage(model, 'typescript');
```