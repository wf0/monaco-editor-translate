# CursorChangeReason
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#enums/editor.CursorChangeReason.html
:::

描述光标更改位置的原因。

## ContentFlush
- 值: `1`
- 描述：调用了model.setValue（）。


## Explicit
- 值: `3`
- 描述：有一个明确的用户手势。


## NotSet
- 值：`0`
- 描述：未知或未设置。


## Paste
- 值：`4`
- 描述：粘贴。


## RecoverFromMarkers
- 值：`2`
- 描述：模型已在此光标外更改，光标将从相关标记恢复其位置。

## Redo
- 值：`6`
- 描述：重做。


## Undo
- 值：`5`
- 描述：撤消。

