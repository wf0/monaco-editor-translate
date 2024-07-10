# LocationLink
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LocationLink.html
:::

```ts
interface LocationLink {
    originSelectionRange?: IRange;
    range: IRange;
    targetSelectionRange?: IRange;
    uri: Uri;
}
```

## originSelectionRange
- 类型：[IRange](/api/IRange.md)
- 描述：选择此链接来源的范围。
## range
- 类型：[IRange](/api/IRange.md)
- 描述：此链接指向的全部范围。
## targetSelectionRange
- 类型：[IRange](/api/IRange.md)
- 描述：选择此链接指向的范围。必须包含在LocationLink.range中。
## uri
- 类型：[Uri](/api/Uri.md)
- 描述：此链接指向的目标uri。