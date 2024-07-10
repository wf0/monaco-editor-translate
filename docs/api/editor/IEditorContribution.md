# IEditorContribution

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorContribution.html
:::

每次创建新编辑器时都会创建的编辑器贡献，并在编辑器被释放时被释放。

```ts
interface IEditorContribution {
    dispose(): void;
    restoreViewState?(state): void;
    saveViewState?(): any;
}
```

## dispose
- 语法：`dispose(): void`
- 描述：释放编辑器贡献。
## restoreViewState
- 语法：`restoreViewState(state): void`
- 参数：`state`: `any`
- 描述：恢复编辑器视图状态。
## saveViewState
- 语法：`saveViewState(): any`
- 描述：保存编辑器视图状态。