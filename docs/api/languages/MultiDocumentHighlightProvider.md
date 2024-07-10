# MultiDocumentHighlightProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.MultiDocumentHighlightProvider.html
:::


可以跨多个文档提供文档高亮显示的提供程序。


```ts
interface MultiDocumentHighlightProvider {
    selector: LanguageSelector;
    provideMultiDocumentHighlights(primaryModel, position, otherModels, token): ProviderResult<Map<Uri, DocumentHighlight[]>>;
}
```

## selector
- 类型：[LanguageSelector](/api/languages/LanguageSelector.md)
## provideMultiDocumentHighlights
- 语法：`provideMultiDocumentHighlights(primaryModel, position, otherModels, token): ProviderResult<Map<Uri, DocumentHighlight[]>>`
- 参数：
  - `primaryModel`: [ITextModel](/api/editor/ITextModel.md)
  - `position`: [Position](/api/Position.md)
  - `otherModels`: [ITextModel](/api/editor/ITextModel.md)[]
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)`<Map<`[Uri](/api/Uri.md), [DocumentHighlight](/api/languages/DocumentHighlight.md)[]`>>`
- 描述：Uri到文档高亮显示的映射。