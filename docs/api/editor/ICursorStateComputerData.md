# ICursorStateComputerData

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICursorStateComputerData.html
:::


用于在命令之后计算光标状态的助手。

```ts
interface ICursorStateComputerData {
    getInverseEditOperations(): IValidEditOperation[];
    getTrackedSelection(id): Selection;
}
```

## getInverseEditOperations
- 语法：`getInverseEditOperations(): IValidEditOperation[]`
- 返回值：[IValidEditOperation](/api/editor/IValidEditOperation.md)[]
- 描述：获取添加的编辑操作的反向编辑操作。
## getTrackedSelection
- 语法：`getTrackedSelection(id): Selection`
- 参数：`id`: `string`
- 返回值：[Selection](/api/Selection.md) 
- 描述：获取跟踪的编辑操作。