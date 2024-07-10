# IMouseTargetViewZone

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetViewZone.html
:::

```ts
interface IMouseTargetViewZone {
    detail: IMouseTargetViewZoneData;
    element: HTMLElement;
    mouseColumn: number;
    position: Position;
    range: Range;
    type: GUTTER_VIEW_ZONE | CONTENT_VIEW_ZONE;
}
```

## detail
- 类型: [IMouseTargetViewZoneData](/api/editor/IMouseTargetViewZoneData.md)
## element
- 类型: `HTMLElement`
## mouseColumn
- 类型: `number`
## position
- 类型: [Position](/api/Position.md)
## range
- 类型: [Range](/api/Range.md)
## type
- 类型: [GUTTER_VIEW_ZONE](/api/editor/MouseTargetType.md#gutter-view-zone) | [CONTENT_VIEW_ZONE](/api/editor/MouseTargetType.md#content-view-zone)