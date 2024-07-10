# LinkedEditingRangeProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LinkedEditingRangeProvider.html
:::

链接编辑范围提供程序接口定义扩展和链接编辑功能之间的约定。

```ts
interface LinkedEditingRangeProvider {
    provideLinkedEditingRanges(model, position, token): ProviderResult<LinkedEditingRanges>;
}
```

## provideLinkedEditingRanges
- 语法：`provideLinkedEditingRanges(model, position, token): ProviderResult<LinkedEditingRanges>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `position`: [IPosition](/api/IPosition.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/ProviderResult.md)<[LinkedEditingRanges](/api/languages/LinkedEditingRanges.md)>
- 描述：提供链接编辑范围。