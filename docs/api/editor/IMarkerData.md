# IMarkerData
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMarkerData.html
:::

```ts
interface IMarkerData {
    code?: string | {
        target: Uri;
        value: string;
    };
    endColumn: number;
    endLineNumber: number;
    message: string;
    modelVersionId?: number;
    relatedInformation?: IRelatedInformation[];
    severity: MarkerSeverity;
    source?: string;
    startColumn: number;
    startLineNumber: number;
    tags?: MarkerTag[];
}
```