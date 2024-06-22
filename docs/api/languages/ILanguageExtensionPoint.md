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