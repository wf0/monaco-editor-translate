# Location
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.Location.html
:::

表示资源中的位置，例如文本文件中的一行。

```ts
interface Location {
    range: IRange;
    uri: Uri;
}
```

## range
- 类型: [IRange](/api/IRange.md)
- 描述：此位置的文档范围。
## uri
- 类型: [Uri](/api/Uri.md)
- 描述：此位置的资源标识符。