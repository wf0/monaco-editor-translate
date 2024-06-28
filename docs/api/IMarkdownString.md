# IMarkdownString
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/IMarkdownString.html
:::

```ts
interface IMarkdownString {
    baseUri?: UriComponents;
    isTrusted?: boolean | MarkdownStringTrustedOptions;
    supportHtml?: boolean;
    supportThemeIcons?: boolean;
    uris?: {
        [href: string]: UriComponents;
    };
    value: string;
}
```

## baseUri
- 类型：[UriComponents](/api/UriComponents.md)


## isTrusted
- 类型：`boolean` | [MarkdownStringTrustedOptions](/api/MarkdownStringTrustedOptions.md)


## supportHtml
- 类型：`boolean`


## supportThemeIcons
- 类型：`boolean`


## uris
- 类型：`{ [href: string]: UriComponents; }`
- 参数：`[href: string]: `[UriComponents](/api/UriComponents.md)


## value
- 类型：`string`

