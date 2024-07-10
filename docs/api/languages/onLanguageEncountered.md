# onLanguageEncountered

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.onLanguageEncountered.html
:::


- 语法：`onLanguageEncountered(languageId, callback): IDisposable`

- 参数：
  - `languageId`: `string`
  - `callback`: `(() => void)`

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：当一种语言首次与文本模型相关联时，或在另一种语言的标记化过程中遇到一种语言时触发的事件。

- 示例：

```js
monaco.languages.onLanguageEncountered('javascript', () => {
    // ...
})
```