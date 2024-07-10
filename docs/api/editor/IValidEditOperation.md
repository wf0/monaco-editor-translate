# IValidEditOperation

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IValidEditOperation.html
:::

```ts
interface IValidEditOperation {
    range: Range;
    text: string;
}
```

## range
- 类型: [Range](/api/Range.md)
- 描述: 要替换的范围。这可以是空的，以模拟一个简单的插入。
## text
- 类型: `string`
- 描述: 要插入的文本。