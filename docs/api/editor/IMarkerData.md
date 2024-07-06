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

## code
- 类型：`string | { target: Uri; value: string; }`
  - `target`: [Uri](/api/Uri.md)
  - `value`: `string`

## endColumn
- 类型：`number`
## endLineNumber
- 类型：`number`
## message
- 类型：`string`
## modelVersionId
- 类型：`number`
## relatedInformation
- 类型：[IRelatedInformation](/api/editor/IRelatedInformation.md)[]
## severity
- 类型：[MarkerSeverity](/api/MarkerSeverity.md)

## source
- 类型：`string`
## startColumn
- 类型：`number`
## startLineNumber
- 类型：`number`
## tags
- 类型：[MarkerTag](/api/MarkerTag.md)[]
