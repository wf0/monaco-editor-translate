# IViewState
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IViewState.html
:::

视图的（可序列化的）状态。

```ts
interface IViewState {
    firstPosition: IPosition;
    firstPositionDeltaTop: number;
    scrollLeft: number;
    scrollTop?: number;
    scrollTopWithoutViewZones?: number;
}
```
## firstPosition
- 类型: [IPosition](/api/IPosition.md)
## firstPositionDeltaTop
- 类型: `number`
## scrollLeft
- 类型: `number`
## scrollTop
- 类型: `number`
## scrollTopWithoutViewZones
- 类型: `number`