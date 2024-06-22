# IMarker
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMarker.html
:::

```ts
interface IMarker {
    code?: string | {
        target: Uri;
        value: string;
    };
    endColumn: number;
    endLineNumber: number;
    message: string;
    modelVersionId?: number;
    owner: string;
    relatedInformation?: IRelatedInformation[];
    resource: Uri;
    severity: MarkerSeverity;
    source?: string;
    startColumn: number;
    startLineNumber: number;
    tags?: MarkerTag[];
}
```