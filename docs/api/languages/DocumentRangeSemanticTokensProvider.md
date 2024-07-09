# DocumentRangeSemanticTokensProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentRangeSemanticTokensProvider.html
:::

```ts
interface DocumentRangeSemanticTokensProvider {
    getLegend(): SemanticTokensLegend;
    provideDocumentRangeSemanticTokens(model, range, token): ProviderResult<SemanticTokens>;
}
```

## getLegend
- 语法：`getLegend(): SemanticTokensLegend`
- 返回值：[SemanticTokensLegend](/api/languages/SemanticTokensLegend.md)


## provideDocumentRangeSemanticTokens
- 语法：`provideDocumentRangeSemanticTokens(model, range, token): ProviderResult<SemanticTokens>`
- 参数：
  - model: [ITextModel](/api/editor/ITextModel.md)
  - range: [Range](/api/Range.md)
  - token: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[SemanticTokens](/api/languages/SemanticTokens.md)>

