# DocumentSymbolProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentSymbolProvider.html
:::

文档符号提供程序接口定义扩展和转到符号功能之间的约定。

```ts
interface DocumentSymbolProvider {
    displayName?: string;
    provideDocumentSymbols(model, token): ProviderResult<DocumentSymbol[]>;
}
```

## displayName
- 类型: `string`


## provideDocumentSymbols
- 语法：`provideDocumentSymbols(model, token): ProviderResult<DocumentSymbol[]>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[DocumentSymbol](/api/languages/DocumentSymbol.md)[]>
- 描述：提供给定文档的符号信息。