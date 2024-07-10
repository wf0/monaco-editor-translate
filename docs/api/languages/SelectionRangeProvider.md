# SelectionRangeProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.SelectionRangeProvider.html
:::

```ts
interface SelectionRangeProvider {
    provideSelectionRanges(model, positions, token): ProviderResult<SelectionRange[][]>;
}
```

## provideSelectionRanges
- 语法：`provideSelectionRanges(model, positions, token): ProviderResult<SelectionRange[][]>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `positions`: [Position](/api/Position.md)[]
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[SelectionRange](/api/languages/SelectionRange.md)[][]>