# IGlyphMarginWidget
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IGlyphMarginWidget.html
:::

字形边距小部件在编辑器中渲染字形边距。

```ts
interface IGlyphMarginWidget {
    getDomNode(): HTMLElement;
    getId(): string;
    getPosition(): IGlyphMarginWidgetPosition;
}
```

## getDomNode
- 语法：`getDomNode(): HTMLElement`
- 返回值：`HTMLElement`
- 描述：返回小部件的 DOM 节点。

## getId
- 语法：`getId(): string`
- 描述：返回小部件的 ID。

## getPosition
- 语法：`getPosition(): IGlyphMarginWidgetPosition`
- 返回值：[IGlyphMarginWidgetPosition](/api/editor/IGlyphMarginWidgetPosition.md)
- 描述：返回小部件的位置。
