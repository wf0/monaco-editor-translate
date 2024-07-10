# IMouseTargetOverviewRuler

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetOverviewRuler.html
:::

```ts
interface IMouseTargetOverviewRuler {
    element: HTMLElement;
    mouseColumn: number;
    position: Position;
    range: Range;
    type: OVERVIEW_RULER;
}
```

## element
- 类型: `HTMLElement`
## mouseColumn
- 类型: `number`
- 描述：所需的鼠标列（例如，当position.column被固定为文本长度时——在一行的文本后面单击）。
## position
- 类型: [Position](/api/Position.md)
## range
- 类型: [Range](/api/Range.md)
## type
- 类型: [OVERVIEW_RULER](/api/editor/MouseTargetType.md#overview-ruler)