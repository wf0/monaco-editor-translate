# InternalEditorRenderLineNumbersOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.InternalEditorRenderLineNumbersOptions.html
:::

```ts
interface InternalEditorRenderLineNumbersOptions {
    renderFn: ((lineNumber) => string);
    renderType: RenderLineNumbersType;
}
```

## renderFn
- 类型: `((lineNumber) => string)`
- 参数：`lineNumber`：`number`
## renderType
- 类型: [RenderLineNumbersType](/api/editor/RenderLineNumbersType.md)