# MultiDocumentHighlight
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.MultiDocumentHighlight.html
:::

表示特定Uri的一组文档高亮显示。

```ts
interface MultiDocumentHighlight {
    highlights: DocumentHighlight[];
    uri: Uri;
}
```

## highlights
- 类型: [DocumentHighlight](/api/languages/DocumentHighlight.md)[]
- 描述：文档的一组高亮显示。
## uri
- 类型: [Uri](/api/Uri.md)
- 描述：文档的Uri。