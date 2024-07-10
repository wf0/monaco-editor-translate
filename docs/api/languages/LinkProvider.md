# LinkProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LinkProvider.html
:::


链接的提供者。

```ts
interface LinkProvider {
    resolveLink?: ((link, token) => ProviderResult<ILink>);
    provideLinks(model, token): ProviderResult<ILinksList>;
}
```

## resolveLink
- 类型：`((link, token) => ProviderResult<ILink>)`
- 参数：
  - `link`: [ILink](/api/languages/ILink.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[ILinksList](/api/languages/ILinksList.md)>
## provideLinks
- 语法：`provideLinks(model, token): ProviderResult<ILinksList>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[ILinksList](/api/languages/ILinksList.md)>
