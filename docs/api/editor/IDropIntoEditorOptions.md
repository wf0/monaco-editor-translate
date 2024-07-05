# IDropIntoEditorOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDropIntoEditorOptions.html
:::


编辑器下拉行为的配置选项

```ts
interface IDropIntoEditorOptions {
    enabled?: boolean;
    showDropSelector?: "never" | "afterDrop";
}
```

## enabled
- 类型：`boolean`
- 描述：是否启用下拉
## showDropSelector
- 类型：`"never" | "afterDrop"`
- 描述：控制小部件是否在放置后显示。默认为“afterDrop”。