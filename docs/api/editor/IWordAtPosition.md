# IWordAtPosition

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IWordAtPosition.html
:::

模型中的单词。

```ts
interface IWordAtPosition {
    endColumn: number;
    startColumn: number;
    word: string;
}
```

## endColumn
- 类型: `number`
- 描述：单词结束的列。
## startColumn
- 类型: `number`
- 描述：单词的起始列。
## word
- 类型: `string`
- 描述：单词的字符串。