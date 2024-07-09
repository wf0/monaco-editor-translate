# IWorkspaceFileEdit
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IWorkspaceFileEdit.html
:::

```ts
interface IWorkspaceFileEdit {
    metadata?: WorkspaceEditMetadata;
    newResource?: Uri;
    oldResource?: Uri;
    options?: WorkspaceFileEditOptions;
}
```

## metadata
- 类型：[WorkspaceEditMetadata](/api/languages/WorkspaceEditMetadata.md)
## newResource
- 类型：[Uri](/api/Uri.md)
## oldResource
- 类型：[Uri](/api/Uri.md)
## options
- 类型：[WorkspaceFileEditOptions](/api/languages/WorkspaceFileEditOptions.md)