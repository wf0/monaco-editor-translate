# IOverlayWidgetPosition
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IOverlayWidgetPosition.html
:::

用于渲染覆盖窗口小部件的位置。

```ts
interface IOverlayWidgetPosition {
    preference: IOverlayWidgetPositionCoordinates | OverlayWidgetPositionPreference;
    stackOridinal?: number;
}
```

## preference
- 类型：[IOverlayWidgetPositionCoordinates](/api/editor/IOverlayWidgetPositionCoordinates.md) | [OverlayWidgetPositionPreference](/api/editor/OverlayWidgetPositionPreference.md)
- 描述：覆盖小部件的位置首选项。
## stackOridinal
- 类型：`number`
- 描述：设置后，按照序数值确定的顺序与具有相同首选项的其他覆盖窗口小部件堆叠。