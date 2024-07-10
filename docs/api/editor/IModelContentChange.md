# IModelContentChange

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelContentChange.html
:::

```ts
interface IModelContentChange {
    range: IRange;
    rangeLength: number;
    rangeOffset: number;
    text: string;
}
```

## range
- 类型: [IRange](/api/IRange.md)
- 描述：被替换的范围。
## rangeLength
- 类型: `number`
- 描述：被替换的范围的长度。
## rangeOffset
- 类型: `number`
- 描述：被替换的范围的偏移量。
## text
- 类型: `string`
- 描述：被替换的文本。