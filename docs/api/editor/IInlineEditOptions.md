# IInlineEditOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IInlineEditOptions.html
:::

```ts
interface IInlineEditOptions {
    backgroundColoring?: boolean;
    enabled?: boolean;
    fontFamily?: string;
    keepOnBlur?: boolean;
    showToolbar?: "always" | "never" | "onHover";
}
```

## backgroundColoring
- 类型: `boolean`
## enabled
- 类型: `boolean`
- 描述：启用或禁用自动内联编辑的呈现。
## fontFamily
- 类型: `string`
- 描述：内联建议的字体系列。
## keepOnBlur
- 类型: `boolean`
- 描述：当编辑器失去焦点时，是否保留内联编辑工具栏。
## showToolbar
- 类型: `"always" | "never" | "onHover"`
- 描述：当鼠标悬停在内联编辑器上时，是否显示工具栏。