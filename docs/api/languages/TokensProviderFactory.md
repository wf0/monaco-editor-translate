# TokensProviderFactory
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.TokensProviderFactory.html
:::

令牌提供商的工厂。

```ts
interface TokensProviderFactory {
    create(): ProviderResult<TokensProvider | EncodedTokensProvider | IMonarchLanguage>;
}
```

## create
- 语法：`create(): ProviderResult<TokensProvider | EncodedTokensProvider | IMonarchLanguage>`
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[TokensProvider](/api/languages/TokensProvider.md) | [EncodedTokensProvider](/api/languages/EncodedTokensProvider.md) | [IMonarchLanguage](/api/languages/IMonarchLanguage.md)>