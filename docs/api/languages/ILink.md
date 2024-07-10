# ILink

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.ILink.html
:::

编辑器中的链接。

```ts
interface ILink {
    range: IRange;
    tooltip?: string;
    url?: string | Uri;
}
```

## range
- 类型：[IRange](/api/IRange.md)
## tooltip
- 类型：`string`
## url
- 类型：`string |` [Uri](/api/Uri.md)