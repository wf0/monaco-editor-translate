# DocumentRangeFormattingEditProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentRangeFormattingEditProvider.html
:::

文档格式设置提供程序接口定义扩展和格式设置功能之间的约定。


```ts
interface DocumentRangeFormattingEditProvider {
    displayName?: string;
    provideDocumentRangeFormattingEdits(model, range, options, token): ProviderResult<TextEdit[]>;
    provideDocumentRangesFormattingEdits?(model, ranges, options, token): ProviderResult<TextEdit[]>;
}
```

## displayName
- 类型：`string`

## provideDocumentRangeFormattingEdits
- 语法：`provideDocumentRangeFormattingEdits(model, range, options, token): ProviderResult<TextEdit[]>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `range`: [IRange](/api/IRange.md)
  - `options`: [FormattingOptions](/api/languages/FormattingOptions.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[TextEdit](/api/languages/TextEdit.md)[]>
- 描述：提供文档格式化编辑。


## provideDocumentRangesFormattingEdits
- 语法：`provideDocumentRangesFormattingEdits(model, ranges, options, token): ProviderResult<TextEdit[]>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `ranges`: [IRange](/api/IRange.md)[]
  - `options`: [FormattingOptions](/api/languages/FormattingOptions.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[TextEdit](/api/languages/TextEdit.md)[]>

