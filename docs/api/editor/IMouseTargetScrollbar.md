# IMouseTargetScrollbar
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetScrollbar.html
:::

```ts
interface IMouseTargetScrollbar {
    element: HTMLElement;
    mouseColumn: number;
    position: Position;
    range: Range;
    type: SCROLLBAR;
}
```

## element
- 类型: `HTMLElement`
## mouseColumn
- 类型: `number`
## position
- 类型: [Position](/api/Position.md)
## range
- 类型: [Range](/api/Range.md)
## type
- 类型: [SCROLLBAR](/api/editor/MouseTargetType.md#scrollbar)