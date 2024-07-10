# FoldingRangeProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.FoldingRangeProvider.html
:::

编辑器模型折叠范围的提供商。

```ts
interface FoldingRangeProvider {
    onDidChange?: IEvent<FoldingRangeProvider>;
    provideFoldingRanges(model, context, token): ProviderResult<FoldingRange[]>;
}
```

## onDidChange
- 类型：[IEvent](/api/IEvent.md)<[FoldingRangeProvider](#)>
- 描述：一个可选事件，用于表示此提供程序的折叠范围已更改。
## provideFoldingRanges
- 语法：`provideFoldingRanges(model, context, token): ProviderResult<FoldingRange[]>`
- 参数：
  - `model`：[ITextModel](/api/editor/ITextModel.md)
  - `context`：[FoldingContext](/api/languages/FoldingContext.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[FoldingRange](/api/languages/FoldingRange.md)[]>
- 描述：提供特定型号的折叠范围。