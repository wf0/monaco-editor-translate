# IMouseTargetContentWidget
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetContentWidget.html
:::

```ts
interface IMouseTargetContentWidget {
    detail: string;
    element: HTMLElement;
    mouseColumn: number;
    position: null;
    range: null;
    type: CONTENT_WIDGET;
}
```

## detail
- 类型: `string`
## element
- 类型: `HTMLElement`
- 描述: 鼠标目标元素
## mouseColumn
- 类型: `number`
- 描述: 鼠标目标列
## position
- 类型: `null`
- 描述: 鼠标目标位置
## range
- 类型: `null`
- 描述: 鼠标目标范围
## type
- 类型: [CONTENT_WIDGET](/api/editor/MouseTargetType.md#content-widget)
- 描述: 鼠标目标类型