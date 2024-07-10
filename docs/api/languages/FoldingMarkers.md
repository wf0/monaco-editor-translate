# FoldingMarkers

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.FoldingMarkers.html
:::

描述特定于语言的折叠标记，如“#region”和“#endregion”。开始和结束正则表达式将根据所有行的内容进行测试，并且必须有效地进行设计：

```ts
interface FoldingMarkers {
    end: RegExp;
    start: RegExp;
}
```
## end
- 类型: `RegExp`
## start
- 类型: `RegExp`