# registerCodeActionProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.registerCodeActionProvider.html
:::

- 语法：`registerCodeActionProvider(languageSelector, provider, metadata?): IDisposable`

- 参数：
  - `languageSelector`: [LanguageSelector](/api/languages/LanguageSelector.md)
  - `provider`: [CodeActionProvider](/api/languages/CodeActionProvider.md)
  - `metadata`: [CodeActionProviderMetadata](/api/languages/CodeActionProviderMetadata.md)

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：用于注册一个代码操作提供程序。
