# CodeAction

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeAction.html
:::

```ts
interface CodeAction {
    command?: Command;
    diagnostics?: IMarkerData[];
    disabled?: string;
    edit?: WorkspaceEdit;
    isAI?: boolean;
    isPreferred?: boolean;
    kind?: string;
    ranges?: IRange[];
    title: string;
}
```

## command
- 类型：[Command](/api/languages/Command.md)
## diagnostics
- 类型：[IMarkerData](/api/editor/IMarkerData.md)
## disabled
- 类型：`string`
## edit
- 类型：[WorkspaceEdit](/api/languages/WorkspaceEdit.md)
## isAI
- 类型：`boolean`
## isPreferred
- 类型：`boolean`
## kind
- 类型：`string`
## ranges
- 类型：[IRange](/api/IRange.md)[]
## title
- 类型：`string`