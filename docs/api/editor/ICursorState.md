# ICursorState
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICursorState.html
:::

游标的（可序列化的）状态。

```ts
interface ICursorState {
    inSelectionMode: boolean;
    position: IPosition;
    selectionStart: IPosition;
}
```

## inSelectionMode
- 类型: `boolean`
## position
- 类型: [IPosition](/api/IPosition.md)
## selectionStart
- 类型: [IPosition](/api/IPosition.md)