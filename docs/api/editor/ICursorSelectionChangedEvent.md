# ICursorSelectionChangedEvent
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICursorSelectionChangedEvent.html
:::

描述光标选择已更改的事件。

```ts
interface ICursorSelectionChangedEvent {
    modelVersionId: number;
    oldModelVersionId: number;
    oldSelections: Selection[];
    reason: CursorChangeReason;
    secondarySelections: Selection[];
    selection: Selection;
    source: string;
}
```


## modelVersionId
- 类型: `number`
- 描述：模型版本ID。

## oldModelVersionId
- 类型: `number`
- 描述：旧模型版本ID。

## oldSelections
- 类型: [Selection](/api/Selection.md)[]
- 描述：旧选择。

## reason
- 类型: [CursorChangeReason](/api/editor/CursorChangeReason.md)
- 描述：描述光标更改位置的原因。

## secondarySelections
- 类型: [Selection](/api/Selection.md)[]
- 描述：次要选择。

## selection
- 类型: [Selection](/api/Selection.md)
- 描述：选择。

## source
- 类型: `string`
- 描述：来源。
