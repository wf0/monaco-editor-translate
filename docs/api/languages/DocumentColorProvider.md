# DocumentColorProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentColorProvider.html
:::

编辑器模型的颜色提供程序。

```ts
interface DocumentColorProvider {
    provideColorPresentations(model, colorInfo, token): ProviderResult<IColorPresentation[]>;
    provideDocumentColors(model, token): ProviderResult<IColorInformation[]>;
}
```

## provideColorPresentations
- 语法：`provideColorPresentations(model, colorInfo, token): ProviderResult<IColorPresentation[]>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `colorInfo`: [IColorInformation](/api/languages/IColorInformation.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[IColorInformation](/api/languages/IColorInformation.md)[]>
- 描述：提供颜色的字符串表示形式。


## provideDocumentColors
- 语法：`provideDocumentColors(model, token): ProviderResult<IColorInformation[]>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[IColorInformation](/api/languages/IColorInformation.md)[]>
- 描述：提供颜色信息。

