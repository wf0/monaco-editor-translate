# DefinitionProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DefinitionProvider.html
:::

```ts
interface DefinitionProvider {
    provideDefinition(model, position, token): ProviderResult<Definition>;
}
```

## provideDefinition
- 语法：`provideDefinition(model, position, token): ProviderResult<Definition>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `postion`: [IPosition](/api/IPosition.md)
  - `token`: [CancellationToken](/api/languages/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[Location](/api/languages/Location.md)>
- 描述：提供给定位置的符号定义和文档。