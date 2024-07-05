# IEditOperationBuilder
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditOperationBuilder.html
:::

用于命令编辑操作的生成器和助手

```ts
interface IEditOperationBuilder {
    addEditOperation(range, text, forceMoveMarkers?): void;
    addTrackedEditOperation(range, text, forceMoveMarkers?): void;
    trackSelection(selection, trackPreviousOnEmpty?): string;
}
```

## addEditOperation
- 语法：`addEditOperation(range, text, forceMoveMarkers?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `text`: `string`
  - `forceMoveMarkers`: `boolean`
- 描述：添加新的编辑操作（替换操作）。

## addTrackedEditOperation
- 语法：`addTrackedEditOperation(range, text, forceMoveMarkers?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `text`: `string`
  - `forceMoveMarkers`: `boolean`
- 描述：添加新的编辑操作（替换操作）。反向编辑将在ICursorStateComputerData.getInverseEditOperations（）中访问

## trackSelection
- 语法：`trackSelection(selection, trackPreviousOnEmpty?): string`
- 参数：
  - `selection`: [Selection](/api/Selection.md)
  - `trackPreviousOnEmpty`: `boolean`
- 描述：应用编辑操作时跟踪选择。将尽最大努力不扩大选择范围。空选择将钳制到附近的角色。
