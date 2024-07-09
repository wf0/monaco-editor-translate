# FoldingRules
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.FoldingRules.html
:::

描述一种语言的折叠规则。

```ts
interface FoldingRules {
    markers?: FoldingMarkers;
    offSide?: boolean;
}
```

## markers
- 类型：[FoldingMarkers](/api/languages/FoldingMarkers.md)
- 描述：语言使用的区域标记。
## offSide
- 类型：`boolean`
- 描述：由基于缩进的策略用于决定空行是属于前一个块还是属于下一个块。