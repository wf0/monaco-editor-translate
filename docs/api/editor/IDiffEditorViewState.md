# IDiffEditorViewState
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDiffEditorViewState.html
:::


（Serializable）查看差异编辑器的状态。


```ts
interface IDiffEditorViewState {
    modelState?: unknown;
    modified: ICodeEditorViewState;
    original: ICodeEditorViewState;
}
```

## modelState
- 类型：`unknown`
## modified
- 类型： [ICodeEditorViewState](/api/editor/ICodeEditorViewState.md)
## original
- 类型： [ICodeEditorViewState](/api/editor/ICodeEditorViewState.md)