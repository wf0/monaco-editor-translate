# IEditorFindOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorFindOptions.html
:::

编辑器查找小部件的配置选项

```ts
interface IEditorFindOptions {
    addExtraSpaceOnTop?: boolean;
    autoFindInSelection?: "always" | "never" | "multiline";
    cursorMoveOnType?: boolean;
    loop?: boolean;
    seedSearchStringFromSelection?: "always" | "never" | "selection";
}
```

## addExtraSpaceOnTop
- 类型: `boolean`
## autoFindInSelection
- 类型: `"always" | "never" | "multiline"`
- 描述：控制是否在编辑器中启用“在当前选择中查找”标志。
## cursorMoveOnType
- 类型: `boolean`
- 描述：控制键入时是否应移动光标以查找匹配项。
## loop
- 类型: `boolean`
- 描述：控制在找不到其他匹配项时，搜索结果和diff结果是从开始（还是结束）自动重新启动
## seedSearchStringFromSelection
- 类型: `"always" | "never" | "selection"`
- 描述：控制我们是否在编辑器选择的“查找小部件”中设置搜索字符串的种子。