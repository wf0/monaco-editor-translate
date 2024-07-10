# IMouseTargetContentText

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetContentText.html
:::

```ts
interface IMouseTargetContentText {
    detail: IMouseTargetContentTextData;
    element: HTMLElement;
    mouseColumn: number;
    position: Position;
    range: Range;
    type: CONTENT_TEXT;
}
```

## detail
- 类型: [IMouseTargetContentTextData](/api/editor/IMouseTargetContentTextData.md)
## element
- 类型: HTMLElement
- 描述: 鼠标目标元素
## mouseColumn
- 类型: number
- 描述: 鼠标列
## position
- 类型: [Position](/api/Position.md)
- 描述: 鼠标目标位置
## range
- 类型: [Range](/api/Range.md)
- 描述: 鼠标目标范围
## type
- 类型: [CONTENT_TEXT](/api/editor/MouseTargetType.md#content-text)
- 描述: 鼠标目标类型