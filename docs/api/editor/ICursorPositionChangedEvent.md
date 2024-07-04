# ICursorPositionChangedEvent
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICursorPositionChangedEvent.html
:::

描述光标位置已更改的事件。

```ts
interface ICursorPositionChangedEvent {
    position: Position;
    reason: CursorChangeReason;
    secondaryPositions: Position[];
    source: string;
}
```


## position
- 类型：[Position](/api/Position.md)

## reason
- 类型：[CursorChangeReason](/api/editor/CursorChangeReason.md)

## secondaryPositions
- 类型：[Position](/api/Position.md)[]

## source
- 类型：`string`
