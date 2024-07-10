# registerDocumentSemanticTokensProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.registerDocumentSemanticTokensProvider.html
:::

- 语法：`registerDocumentSemanticTokensProvider(languageSelector, provider): IDisposable`

- 参数：
  - `languageSelector`: [LanguageSelector](/api/languages/LanguageSelector.md)
  - `provider`: [DocumentSemanticTokensProvider](/api/languages/DocumentSemanticTokensProvider.md)

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：语义标记提供者将补充和增强简单的自上而下标记器。