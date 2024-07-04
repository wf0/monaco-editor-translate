# ICursorStateComputer
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICursorStateComputer.html
:::

一个回调，可以在应用一系列编辑操作后计算光标状态。

```ts
interface ICursorStateComputer ((inverseEditOperations) => Selection[])
```

## ICursorStateComputer
- 语法：`ICursorStateComputer(inverseEditOperations): Selection[]`
- 参数：`inverseEditOperations`: [IValidEditOperation](/api/editor/IValidEditOperation.md)[]
- 返回值：[Selection](/api/Selection.md)[]
- 描述：一个回调，可以在执行某些编辑操作后计算得到的游标状态。