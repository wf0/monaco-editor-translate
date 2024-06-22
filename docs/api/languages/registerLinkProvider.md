# registerLinkProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.registerLinkProvider.html
:::

- 语法：`registerLinkProvider(languageSelector, provider): IDisposable`

- 参数：
  - `languageSelector`: [LanguageSelector](/api/languages/LanguageSelector.md)
  - `provider`: [LinkProvider](/api/languages/LinkProvider.md)

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：注册一个可以在文本中查找链接的链接提供程序。