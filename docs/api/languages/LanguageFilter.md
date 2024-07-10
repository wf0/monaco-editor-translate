# LanguageFilter

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LanguageFilter.html
:::

```ts
interface LanguageFilter {
    exclusive?: boolean;
    hasAccessToAllModels?: boolean;
    isBuiltin?: boolean;
    language?: string;
    notebookType?: string;
    pattern?: string | IRelativePattern;
    scheme?: string;
}
```

## exclusive
- 类型: `boolean`
## hasAccessToAllModels
- 类型: `boolean`
- 描述：此提供程序是在UI线程中实现的。
## isBuiltin
- 类型: `boolean`
- 描述：此提供程序是内置的。
## language
- 类型: `string`
- 描述：此提供程序支持的语言。
## notebookType
- 类型: `string`
- 描述：此提供程序支持的笔记本类型。
## pattern
- 类型: `string` | [IRelativePattern](/api/languages/IRelativePattern.md)
- 描述：此提供程序支持的URI方案。
## scheme
- 类型: `string`
- 描述：此提供程序支持的URI方案。