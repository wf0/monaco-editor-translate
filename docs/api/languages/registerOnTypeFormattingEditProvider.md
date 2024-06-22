# registerOnTypeFormattingEditProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.registerOnTypeFormattingEditProvider.html
:::

- 语法：`registerOnTypeFormattingEditProvider(languageSelector, provider): IDisposable`

- 参数：
  - `languageSelector`: [LanguageSelector](/api/languages/LanguageSelector.md)
  - `provider`: [OnTypeFormattingEditProvider](/api/languages/OnTypeFormattingEditProvider.md)

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：注册一个格式化程序，该格式化程序可以在用户键入时进行格式化。