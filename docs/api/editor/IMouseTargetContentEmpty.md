# IMouseTargetContentEmpty
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetContentEmpty.html
:::

```ts
interface IMouseTargetContentEmpty {
    detail: IMouseTargetContentEmptyData;
    element: HTMLElement;
    mouseColumn: number;
    position: Position;
    range: Range;
    type: CONTENT_EMPTY;
}
```

## detail
- 类型：[IMouseTargetContentEmptyData](/api/editor/IMouseTargetContentEmptyData.md)

## element
- 类型：`HTMLElement`
- 描述：目标元素

## mouseColumn
- 类型：`number`
- 描述：鼠标相对于文本的列

## position
- 类型：[Position](/api/Position.md)
- 描述：鼠标位置

## range
- 类型：[Range](/api/Range.md)
- 描述：鼠标范围

## type
- 类型：[CONTENT_EMPTY](/api/editor/MouseTargetType.md#content-empty)
- 描述：目标类型
