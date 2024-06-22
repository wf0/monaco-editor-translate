# register
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.register.html
:::


- 语法：`register(language): void`

- 参数：[ILanguageExtensionPoint](/api/languages/ILanguageExtensionPoint.md)

- 返回值：`void`

- 描述：注册一种新的语言。

- 示例：

```js
// 定义要注册的语言的扩展点对象
const language = {
  id: "vue",
  extensions: [".vue"],
  aliases: ["vue", "Vue"],
  mimetypes: ["text/vue"],
};

// 注册新语言
languages.register(language);
```