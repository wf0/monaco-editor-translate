# setTokensProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.setTokensProvider.html
:::

- 语法：`setTokensProvider(languageId, provider): IDisposable`

- 参数：
  - `languageId`: `string`
  - `provider`: [TokensProvider](/api/languages/TokensProvider.md) | [EncodedTokensProvider](/api/languages/EncodedTokensProvider.md) | [Thenable](/api/Thenable.md) <[TokensProvider](/api/languages/TokensProvider.md) | [EncodedTokensProvider](/api/languages/EncodedTokensProvider.md)>

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：设置语言的令牌提供程序。