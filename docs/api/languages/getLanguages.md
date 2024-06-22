# getLanguages
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.getLanguages.html
:::

- 语法：`getLanguages(): ILanguageExtensionPoint[]`

- 参数：-

- 返回值：[ILanguageExtensionPoint](/api/languages/ILanguageExtensionPoint.md)

- 描述：获取所有已注册的语言ID的数组

- 示例：

```js
const allLanguages = languages.getLanguages();
console.log(allLanguages);
```