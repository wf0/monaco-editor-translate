# registerInlineEditProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.registerInlineEditProvider.html
:::

- 语法：`registerInlineEditProvider(languageSelector, provider): IDisposable`

- 参数：
  - `languageSelector`: [LanguageSelector](/api/languages/LanguageSelector.md)
  - `provider`: [InlineEditProvider](/api/languages/InlineEditProvider.md)<[IInlineEdit](/api/languages/IInlineEdit.md)>

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：用于注册内联编辑提供程序