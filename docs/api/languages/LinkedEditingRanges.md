# LinkedEditingRanges
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LinkedEditingRanges.html
:::

表示可以与用于描述有效内容的单词模式一起编辑的范围列表。

```ts
interface LinkedEditingRanges {
    ranges: IRange[];
    wordPattern?: RegExp;
}
```

## ranges
- 类型：[IRange](/api/IRange.md)[]
- 描述：可以一起编辑的范围列表。范围必须具有相同的长度和文本内容。范围不能重叠
## wordPattern
- 类型：`RegExp`
- 描述：一种可选的单词模式，用于描述给定范围的有效内容。如果没有提供模式，将使用语言配置的单词模式。