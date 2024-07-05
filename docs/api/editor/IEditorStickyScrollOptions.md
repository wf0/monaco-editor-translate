# IEditorStickyScrollOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorStickyScrollOptions.html
:::

```ts
interface IEditorStickyScrollOptions {
    defaultModel?: "outlineModel" | "foldingProviderModel" | "indentationModel";
    enabled?: boolean;
    maxLineCount?: number;
    scrollWithEditor?: boolean;
}
```

## defaultModel
- 类型: `"outlineModel" | "foldingProviderModel" | "indentationModel"`
- 描述：默认情况下用于粘性滚动的型号
## enabled
- 类型: `boolean`
- 描述：是否启用粘性滚动
## maxLineCount
- 类型: `number`
- 描述：最大行数
## scrollWithEditor
- 类型: `boolean`
- 描述：是否与编辑器一起滚动