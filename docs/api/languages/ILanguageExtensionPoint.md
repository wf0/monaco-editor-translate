# ILanguageExtensionPoint
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.ILanguageExtensionPoint.html
:::

```ts
interface ILanguageExtensionPoint {
    aliases?: string[];
    configuration?: Uri;
    extensions?: string[];
    filenamePatterns?: string[];
    filenames?: string[];
    firstLine?: string;
    id: string;
    mimetypes?: string[];
}
```

## aliases
- 类型：`string[]`
## configuration
- 类型：[Uri](/api/Uri.md)
## extensions
- 类型：`string[]`
## filenamePatterns
- 类型：`string[]`
## filenames
- 类型：`string[]`
## firstLine
- 类型：`string`
## id
- 类型：`string`
## mimetypes
- 类型：`string[]`