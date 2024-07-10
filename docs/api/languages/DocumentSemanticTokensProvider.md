# DocumentSemanticTokensProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentSemanticTokensProvider.html
:::

```ts
interface DocumentSemanticTokensProvider {
    onDidChange?: IEvent<void>;
    getLegend(): SemanticTokensLegend;
    provideDocumentSemanticTokens(model, lastResultId, token): ProviderResult<SemanticTokens | SemanticTokensEdits>;
    releaseDocumentSemanticTokens(resultId): void;
}
```

## onDidChange
- 类型：[IEvent](/api/IEvent.md)`<void>`

## getLegend
- 语法：`getLegend(): SemanticTokensLegend`
- 返回值：[SemanticTokensLegend](/api/languages/SemanticTokensLegend.md)

## provideDocumentSemanticTokens
- 语法：`provideDocumentSemanticTokens(model, lastResultId, token): ProviderResult<SemanticTokens | SemanticTokensEdits>`
- 参数：
  - model：[ITextModel](/api/editor/ITextModel.md)
  - lastResultId：`string`
  - token：[CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)`<`[SemanticTokens](/api/languages/SemanticTokens.md)` | `[SemanticTokensEdits](/api/languages/SemanticTokensEdits.md)`>`

## releaseDocumentSemanticTokens
- 语法: `releaseDocumentSemanticTokens(resultId): void`
- 参数：`resultId`: `string`