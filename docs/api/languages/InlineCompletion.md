# InlineCompletion

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlineCompletion.html
:::

```ts
interface InlineCompletion {
    additionalTextEdits?: ISingleEditOperation[];
    command?: Command;
    completeBracketPairs?: boolean;
    filterText?: string;
    insertText: string | {
        snippet: string;
    };
    range?: IRange;
}
```

## additionalTextEdits
- 类型：[ISingleEditOperation](/api/editor/ISingleEditOperation.md)[]
- 描述：选择此完成时应用的附加文本编辑的可选数组。编辑不得与主编辑重叠，也不得与其本身重叠。

## command
- 类型：[Command](/api/languages/Command.md)


## completeBracketPairs
- 类型：`boolean`
- 描述：是否应自动完成括号对。

## filterText
- 类型：`string`
- 描述：用于排序和筛选的过滤文本。


## insertText
- 类型：`string` | `{ snippet: string; }`
- 描述：插入文本。

## range
- 类型：[IRange](/api/IRange.md)
- 描述：可选的插入文本范围。

