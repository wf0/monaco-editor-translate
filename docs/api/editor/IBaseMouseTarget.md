# IBaseMouseTarget
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IBaseMouseTarget.html
:::

```ts
interface IBaseMouseTarget {
    element: HTMLElement;
    mouseColumn: number;
    position: Position;
    range: Range;
}
```

## element
- 类型: `HTMLElement`
- 描述：目标元素

## mouseColumn
- 类型: `number`
- 描述：所需的鼠标列（例如，当position.column被固定为文本长度时——在一行的文本后面单击）。

## position
- 类型: [Position](/api/Position.md)
- 描述：“近似”编辑器位置

## range
- 类型: [Range](/api/Range.md)
- 描述：“近似”编辑器范围