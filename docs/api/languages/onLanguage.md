# onLanguage
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.onLanguage.html
:::

- 语法：`onLanguage(languageId, callback): IDisposable`

- 参数：
  - `languageId`: `string`
  - `callback`: `(() => void)`

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：监听语言注册事件。

- 示例：

```js
languages.onLanguage('javascript', () => {
    console.log('language registered')
})
```