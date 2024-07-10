# TypeDefinitionProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.TypeDefinitionProvider.html
:::

类型定义提供程序接口定义扩展和转到类型定义功能之间的约定。

```ts
interface TypeDefinitionProvider {
    provideTypeDefinition(model, position, token): ProviderResult<Definition>;
}
```

## provideTypeDefinition
- 语法：`provideTypeDefinition(model, position, token): ProviderResult<Definition>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `position`: [Position](/api/Position.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[Definition](/api/languages/Definition.md)>
- 描述：提供给定位置处符号的类型定义和文档。