# IMouseTargetOutsideEditor

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetOutsideEditor.html
:::

```ts
interface IMouseTargetOutsideEditor {
    element: HTMLElement;
    mouseColumn: number;
    outsideDistance: number;
    outsidePosition: "right" | "left" | "above" | "below";
    position: Position;
    range: Range;
    type: OUTSIDE_EDITOR;
}
```

## element
- 类型: `HTMLElement`
- 描述:目标元素
## mouseColumn
- 类型: `number`
- 描述:鼠标相对于目标元素的列
## outsideDistance
- 类型: `number`
- 描述:鼠标相对于目标元素的距离
## outsidePosition
- 类型: `"right`
- 描述:鼠标相对于目标元素的位置
## position
- 类型: [Position](/api/Position.md)
- 描述:鼠标相对于目标元素的位置
## range
- 类型: [Range](/api/Range.md)
- 描述:鼠标相对于目标元素的范围
## type
- 类型: [OUTSIDE_EDITOR](/api/editor/MouseTargetType.md#outside-editor)
- 描述:目标类型