# ICodeEditorViewState
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICodeEditorViewState.html
:::

代码编辑器的（可序列化的）状态。

```ts
interface ICodeEditorViewState {
    contributionsState: {
        [id: string]: any;
    };
    cursorState: ICursorState[];
    viewState: IViewState;
}
```

## contributionsState
- 类型：`{ [id: string]: any; }`

## cursorState
- 类型：[ICursorState](/api/editor/ICursorState.md)[]


## viewState
- 类型：[IViewState](/api/editor/IViewState.md)

