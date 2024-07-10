# IEditorLightbulbOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorLightbulbOptions.html
:::

编辑器灯泡的配置选项

```ts
interface IEditorLightbulbOptions {
    enabled?: ShowLightbulbIconMode;
}
```

## enabled
- 类型：[ShowLightbulbIconMode](/api/editor/ShowLightbulbIconMode.md)
- 描述：启用灯泡代码操作。三个可能的值分别为off、on和onCode，默认值为onCode。off将禁用代码操作菜单。上显示代码和空行上的代码操作菜单。onCode仅显示代码上的代码操作菜单。