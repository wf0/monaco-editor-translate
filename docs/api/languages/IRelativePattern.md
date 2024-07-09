# IRelativePattern
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IRelativePattern.html
:::

```ts
interface IRelativePattern {
    base: string;
    pattern: string;
}
```

## base
- 类型: `string`
- 描述：与此模式相对匹配的基本文件路径。
## pattern
- 类型: `string`
- 描述：像*这样的文件glob模式。｛ts，js｝，它们将在相对于基本路径的文件路径上匹配。