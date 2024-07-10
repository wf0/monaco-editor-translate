# Hover

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.Hover.html
:::

悬停表示符号或单词的附加信息。悬停在类似工具提示的小部件中进行渲染。

```ts
interface Hover {
    canDecreaseVerbosity?: boolean;
    canIncreaseVerbosity?: boolean;
    contents: IMarkdownString[];
    range?: IRange;
}
```

## canDecreaseVerbosity
- 类型: `boolean`
- 描述：可以减少悬停的冗长程度
## canIncreaseVerbosity
- 类型: `boolean`
- 描述：可以增加悬停的冗长程度
## contents
- 类型: [IMarkdownString](/api/IMarkdownString.md)[]
- 描述：内容
## range
- 类型: [IRange](/api/IRange.md)
- 描述：范围