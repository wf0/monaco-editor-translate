# ModeConfiguration

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.ModeConfiguration.html
:::

```ts
interface ModeConfiguration {
    colors?: boolean;
    completionItems?: boolean;
    diagnostics?: boolean;
    documentFormattingEdits?: boolean;
    documentRangeFormattingEdits?: boolean;
    documentSymbols?: boolean;
    foldingRanges?: boolean;
    hovers?: boolean;
    selectionRanges?: boolean;
    tokens?: boolean;
}
```

## colors
- 类型: `boolean`
- 描述：定义是否启用内置颜色提供程序。
## completionItems
- 类型: `boolean`
- 描述：定义是否启用内置的completionItemProvider。
## diagnostics
- 类型: `boolean`
- 描述：定义是否启用内置诊断提供程序。
## documentFormattingEdits
- 类型: `boolean`
- 描述：定义是否启用内置的documentFormattingEdit提供程序。
## documentRangeFormattingEdits
- 类型: `boolean`
- 描述：定义是否启用内置documentRangeFormattingEdit提供程序。
## documentSymbols
- 类型: `boolean`
- 描述：定义是否启用内置documentSymbolProvider。
## foldingRanges
- 类型: `boolean`
- 描述：定义是否启用内置foldingRange提供程序。
## hovers
- 类型: `boolean`
- 描述：定义是否启用内置的hoverProvider。
## selectionRanges
- 类型: `boolean`
- 描述：定义是否启用内置的选择范围提供程序。
## tokens
- 类型: `boolean`
- 描述：定义是否启用内置令牌提供程序。