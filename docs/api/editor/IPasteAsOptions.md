# IPasteAsOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IPasteAsOptions.html
:::


编辑器粘贴为行为的配置选项


```ts
interface IPasteAsOptions {
    enabled?: boolean;
    showPasteSelector?: "never" | "afterPaste";
}
```

## enabled
- 类型: `boolean`
- 描述：在编辑器中启用粘贴功能。默认为true。
## showPasteSelector
- 类型: `"never" | "afterPaste"`
- 描述：控制小部件是否在放置后显示。默认为“afterPaste”。