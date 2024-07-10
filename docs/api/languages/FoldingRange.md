# FoldingRange

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.FoldingRange.html
:::

```ts
interface FoldingRange {
    end: number;
    kind?: FoldingRangeKind;
    start: number;
}
```

## end
- 类型：`number`
- 描述：要折叠的范围的基于一的终点线。折叠区域以行的最后一个字符结束。
## kind
- 类型：[FoldingRangeKind](/api/languages/FoldingRangeKind.md)
- 描述：描述折叠范围的种类，如Comment或Region。该类型用于对折叠范围进行分类，并由“折叠所有注释”等命令使用。有关标准化种类的枚举，请参见FoldingRangeKind。
## start
- 类型：`number`
- 描述：要折叠的范围的基于一的起始线。折叠区域以行的第一个字符开始。