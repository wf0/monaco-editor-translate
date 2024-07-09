# DocumentSymbol
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentSymbol.html
:::

```ts
interface DocumentSymbol {
    children?: DocumentSymbol[];
    containerName?: string;
    detail: string;
    kind: SymbolKind;
    name: string;
    range: IRange;
    selectionRange: IRange;
    tags: readonly Deprecated[];
}
```

## children
- 类型：[DocumentSymbol](/api/languages/DocumentSymbol.md)
## containerName
- 类型：`string`
## detail
- 类型：`string`
## kind
- 类型：[SymbolKind](/api/languages/SymbolKind.md)
## name
- 类型：`string`
## range
- 类型：[IRange](/api/IRange.md)
## selectionRange
- 类型：[IRange](/api/IRange.md)
## tags
- 类型：`readonly` [Deprecated](/api/languages/SymbolTag.md#deprecated)