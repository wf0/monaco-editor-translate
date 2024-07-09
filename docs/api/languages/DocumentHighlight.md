# DocumentHighlight
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentHighlight.html
:::

文档高亮显示是文本文档中值得特别注意的范围。通常，文档高亮显示是通过更改其范围的背景色来可视化的。

```ts
interface DocumentHighlight {
    kind?: DocumentHighlightKind;
    range: IRange;
}
```
## kind
- 类型：[DocumentHighlightKind](/api/languages/DocumentHighlightKind.md)
- 描述：高亮显示类型，默认为文本。
## range
- 类型：[IRange](/api/IRange.md)
- 描述：高亮显示的范围。