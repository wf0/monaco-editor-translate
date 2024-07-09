# IWorkspaceTextEdit
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IWorkspaceTextEdit.html
:::

```ts
interface IWorkspaceTextEdit {
    metadata?: WorkspaceEditMetadata;
    resource: Uri;
    textEdit: TextEdit & {
        insertAsSnippet?: boolean;
    };
    versionId: number;
}
```

## metadata
- 类型：[WorkspaceEditMetadata](/api/languages/WorkspaceEditMetadata.md)

## resource
- 类型：[Uri](/api/Uri.md)

## textEdit
- 类型：[TextEdit](/api/languages/TextEdit.md) `& { insertAsSnippet?: boolean }`

## versionId
- 类型：`number`

