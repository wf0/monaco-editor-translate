# InlayHint
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlayHint.html
:::

```ts
interface InlayHint {
    kind?: InlayHintKind;
    label: string | InlayHintLabelPart[];
    paddingLeft?: boolean;
    paddingRight?: boolean;
    position: IPosition;
    textEdits?: TextEdit[];
    tooltip?: string | IMarkdownString;
}
```

## kind
- 类型：[InlayHintKind](/api/languages/InlayHintKind.md)

## label
- 类型：`string |` [InlayHintLabelPart](/api/languages/InlayHintLabelPart.md)

## paddingLeft
- 类型：`boolean`

## paddingRight
- 类型：`boolean`

## position
- 类型：[IPosition](/api/IPosition.md)

## textEdits
- 类型：[TextEdit](/api/languages/TextEdit.md)[]

## tooltip
- 类型：`string |` [IMarkdownString](/api/IMarkdownString.md)