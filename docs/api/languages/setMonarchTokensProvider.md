# setMonarchTokensProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.setMonarchTokensProvider.html
:::

- 语法：`setMonarchTokensProvider(languageId, languageDef): IDisposable`

- 参数：
  - `languageId`: `string`
  - `languageDef`: [IMonarchLanguage](/api/languages/IMonarchLanguage.md) | [Thenable](/api/Thenable.md)<[IMonarchLanguage](/api/languages/IMonarchLanguage.md)>

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：为编辑器设置自定义语法高亮规则。