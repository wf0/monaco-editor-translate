# IGlyphMarginWidgetPosition
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IGlyphMarginWidgetPosition.html
:::

用于呈现字形边距小部件的位置

```ts
interface IGlyphMarginWidgetPosition {
    lane: GlyphMarginLane;
    range: IRange;
    zIndex: number;
}
```

## lane
- 类型：[GlyphMarginLane](/api/editor/GlyphMarginLane.md)
- 描述：应显示小部件的字形边距通道。

## range
- 类型：[IRange](/api/IRange.md)
- 描述：小部件应显示在行中的位置。

## zIndex
- 类型：`number`
- 描述：小部件的 z-index。
