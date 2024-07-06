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

## owner
- 类型：`string`

## relatedInformation
- 类型：[IRelatedInformation](/api/editor/IRelatedInformation.md)[]

## resource
- 类型：[Uri](/api/Uri.md)

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
