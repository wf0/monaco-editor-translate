# IDecorationOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDecorationOptions.html
:::

```ts
interface IDecorationOptions {
    color: string | ThemeColor;
    darkColor?: string | ThemeColor;
}
```

## color
- 类型: `string |` [ThemeColor](/api/editor/ThemeColor.md)
- 描述：要渲染的CSS颜色。例如：rgba（100，100，0.5）或颜色注册表中的颜色

## darkColor
- 类型: `string |` [ThemeColor](/api/editor/ThemeColor.md)
- 描述：在深色模式下要渲染的CSS颜色。例如：rgba（100，100，0.5）或颜色注册表中的颜色
