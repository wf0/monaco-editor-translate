# DiagnosticsOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.DiagnosticsOptions.html
:::

```ts
interface DiagnosticsOptions {
    diagnosticCodesToIgnore?: number[];
    noSemanticValidation?: boolean;
    noSuggestionDiagnostics?: boolean;
    noSyntaxValidation?: boolean;
    onlyVisible?: boolean;
}
```

## diagnosticCodesToIgnore
- 类型: `number`
## noSemanticValidation
- 类型: `boolean`
## noSuggestionDiagnostics
- 类型: `boolean`
## noSyntaxValidation
- 类型: `boolean`
## onlyVisible
- 类型: `boolean`
- 描述：将诊断计算限制为仅可见文件。默认为false。