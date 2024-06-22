# registerFoldingRangeProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.registerFoldingRangeProvider.html
:::

- 语法：`registerFoldingRangeProvider(languageSelector, provider): IDisposable`

- 参数：
  - `languageSelector`: [LanguageSelector](/api/languages/LanguageSelector.md)
  - `provider`: [FoldingRangeProvider](/api/languages/FoldingRangeProvider.md)

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：用于注册折叠范围提供程序。