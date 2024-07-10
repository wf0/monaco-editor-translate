# WorkspaceEdit

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.WorkspaceEdit.html
:::

```ts
interface WorkspaceEdit {
    edits: (IWorkspaceFileEdit | IWorkspaceTextEdit)[];
}
```

## edits
- 类型：`(`[IWorkspaceFileEdit](/api/languages/IWorkspaceFileEdit.md)` | `[IWorkspaceTextEdit](/api/languages/IWorkspaceTextEdit.md)`)[]`