# DocumentHighlightProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentHighlightProvider.html
:::

文档高亮显示提供程序接口定义了扩展和单词高亮显示功能之间的约定。

```ts
interface DocumentHighlightProvider {
    provideDocumentHighlights(model, position, token): ProviderResult<DocumentHighlight[]>;
}
```

## provideDocumentHighlights
- 语法：`provideDocumentHighlights(model, position, token): ProviderResult<DocumentHighlight[]>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `position`: [Position](/api/IPosition.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[DocumentHighlight](/api/languages/DocumentHighlight.md)[]>
- 描述：提供一组文档亮点，如变量的所有出现或函数的所有退出点。