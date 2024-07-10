# IInlineSuggestOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IInlineSuggestOptions.html
:::

```ts
interface IInlineSuggestOptions {
    enabled?: boolean;
    fontFamily?: string;
    keepOnBlur?: boolean;
    mode?: "prefix" | "subword" | "subwordSmart";
    showToolbar?: "always" | "never" | "onHover";
    suppressSuggestions?: boolean;
}
```

## enabled
- 类型：`boolean`
- 描述：启用或禁用自动内联完成的呈现。

## fontFamily
- 类型：`string`
- 描述：内联建议的字体。

## keepOnBlur
- 类型：`boolean`
- 描述：当输入框失去焦点时，是否保留内联建议。

## mode
- 类型：`"prefix" | "subword" | "subwordSmart"`
- 描述：内联建议的匹配模式。

## showToolbar
- 类型：`"always" | "never" | "onHover"`
- 描述：是否显示内联建议工具栏。

## suppressSuggestions
- 类型：`boolean`
- 描述：是否阻止内联建议的显示。
