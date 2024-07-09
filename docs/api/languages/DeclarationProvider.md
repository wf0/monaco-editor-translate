# DeclarationProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DeclarationProvider.html
:::



```ts
interface DeclarationProvider {
    provideDeclaration(model, position, token): ProviderResult<Definition>;
}
```

## provideDeclaration
- 语法：`provideDeclaration(model, position, token): ProviderResult<Definition>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `position`: [IPosition](/api/IPosition.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[Definition](/api/languages/Definition.md)>
- 描述：提供给定位置的符号声明和文件。