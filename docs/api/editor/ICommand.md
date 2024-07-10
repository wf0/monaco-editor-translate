# ICommand

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICommand.html
:::

用于修改模型上的文本/光标状态的命令。

```ts
interface ICommand {
    computeCursorState(model, helper): Selection;
    getEditOperations(model, builder): void;
}
```

## computeCursorState
- 语法：`computeCursorState(model, helper): Selection`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `helper`: [ICursorStateComputerData](/api/editor/ICursorStateComputerData.md)`
- 描述：用于获取反向编辑操作和获取先前跟踪的选择的辅助对象。

## getEditOperations
- 语法：`getEditOperations(model, builder): void`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `builder`: [IEditOperationBuilder](/api/editor/IEditOperationBuilder.md)
- 描述：用于收集所需编辑操作和跟踪选择的助手。

