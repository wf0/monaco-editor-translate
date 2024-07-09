# ImplementationProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.ImplementationProvider.html
:::

实现提供程序接口定义了扩展和转到实现特性之间的契约。

```ts
interface ImplementationProvider {
    provideImplementation(model, position, token): ProviderResult<Definition>;
}
```

## provideImplementation
- 语法：`provideImplementation(model, position, token): ProviderResult<Definition>`
- 参数：
  - `model`：[ITextModel](/api/editor/ITextModel.md)
  - `position`：[Position](/api/Position.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[Definition](/api/languages/Definition.md)>
- 描述：在给定的位置和文件中提供符号的实现。