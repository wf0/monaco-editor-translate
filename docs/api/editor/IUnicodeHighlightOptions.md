# IUnicodeHighlightOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IUnicodeHighlightOptions.html
:::

unicode高亮显示的配置选项。

```ts
interface IUnicodeHighlightOptions {
    allowedCharacters?: Record<string, true>;
    allowedLocales?: Record<string, true>;
    ambiguousCharacters?: boolean;
    includeComments?: boolean | "inUntrustedWorkspace";
    includeStrings?: boolean | "inUntrustedWorkspace";
    invisibleCharacters?: boolean;
    nonBasicASCII?: boolean | "inUntrustedWorkspace";
}
```

## allowedCharacters
- 类型: `Record<string, true>`
- 描述：定义不高亮显示的允许字符。
## allowedLocales
- 类型: `Record<string, true>`
- 描述：在允许的区域设置中常见的Unicode字符没有被突出显示。
## ambiguousCharacters
- 类型: `boolean`
- 描述：控制是否高亮显示可能与基本ASCII字符混淆的字符，当前用户区域设置中常见的字符除外。
## includeComments
- 类型: `boolean | "inUntrustedWorkspace"`
- 描述：控制注释中的字符是否也应使用unicode高亮显示。
## includeStrings
- 类型: `boolean | "inUntrustedWorkspace"`
- 描述：控制字符串中的字符是否应使用unicode高亮显示。
## invisibleCharacters
- 类型: `boolean`
- 描述：控制是否高亮显示仅保留空间或完全没有宽度的字符。
## nonBasicASCII
- 类型: `boolean | "inUntrustedWorkspace"`
- 描述：控制是否高亮显示非基本ASCII字符。