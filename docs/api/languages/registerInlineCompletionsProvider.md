# registerInlineCompletionsProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.registerInlineCompletionsProvider.html
:::

- 语法：`registerInlineCompletionsProvider(languageSelector, provider): IDisposable`

- 参数：
  - `languageSelector`: [LanguageSelector](/api/languages/LanguageSelector.md)
  - `provider`: [InlineCompletionsProvider](/api/languages/InlineCompletionsProvider.md)<[InlineCompletions](/api/languages/InlineCompletions.md)<[InlineCompletion](/api/languages/InlineCompletion.md)>>

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：注册内联完成提供程序。