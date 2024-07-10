# ReferenceProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.ReferenceProvider.html
:::

引用提供程序接口定义了扩展和查找引用功能之间的约定。

```ts
interface ReferenceProvider {
    provideReferences(model, position, context, token): ProviderResult<Location[]>;
}
```

## provideReferences
- 语法：`provideReferences(model, position, context, token): ProviderResult<Location[]>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `position`: [Position](/api/Position.md)
  - `context`: [ReferenceContext](/api/languages/ReferenceContext.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[Location](/api/languages/Location.md)[]>
- 描述：为给定的职位和文件提供一组项目范围的参考资料。