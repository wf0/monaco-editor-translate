# IDiffEditorViewModel
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDiffEditorViewModel.html
:::

```ts
interface IDiffEditorViewModel {
    model: IDiffEditorModel;
    dispose(): void;
    waitForDiff(): Promise<void>;
}
```

## model
- 类型：[IDiffEditorModel](/api/editor/IDiffEditorModel.md)

## dispose
- 语法：`dispose(): void`


## waitForDiff
- 语法：`waitForDiff(): Promise<void>`

