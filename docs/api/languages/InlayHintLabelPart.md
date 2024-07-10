# InlayHintLabelPart
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlayHintLabelPart.html
:::

```ts
interface InlayHintLabelPart {
    command?: Command;
    label: string;
    location?: Location;
    tooltip?: string | IMarkdownString;
}
```

## command
- 类型：[Command](/api/languages/Command.md)
## label
- 类型: `string`
## location
- 类型：[Location](/api/languages/Location.md)
## tooltip
- 类型：`string |` [IMarkdownString](/api/IMarkdownString.md)