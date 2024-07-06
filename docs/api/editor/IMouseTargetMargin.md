# IMouseTargetMargin
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetMargin.html
:::

```ts
interface IMouseTargetMargin {
    detail: IMouseTargetMarginData;
    element: HTMLElement;
    mouseColumn: number;
    position: Position;
    range: Range;
    type: GUTTER_GLYPH_MARGIN | GUTTER_LINE_NUMBERS | GUTTER_LINE_DECORATIONS;
}
```


## detail
- 类型：[IMouseTargetMarginData](/api/editor/IMouseTargetMarginData.md)

## element
- 类型：`HTMLElement`
- 描述：鼠标目标元素

## mouseColumn
- 类型：`number`
- 描述：鼠标列

## position
- 类型：[Position](/api/Position.md)
- 描述：鼠标位置

## range
- 类型：[Range](/api/Range.md)
- 描述：鼠标范围

## type
- 类型：[GUTTER_GLYPH_MARGIN](/api/editor/MouseTargetType#gutter-glyph-margin) | [GUTTER_LINE_NUMBERS](/api/editor/MouseTargetType#gutter-line-numbers) | [GUTTER_LINE_DECORATIONS](/api/editor/MouseTargetType#gutter-line-decorations)
- 描述：鼠标类型
