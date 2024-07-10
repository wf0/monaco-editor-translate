# CompletionItem

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionItem.html
:::

完成项表示建议用于完成正在键入的文本的文本片段。

```ts
interface CompletionItem {
    additionalTextEdits?: ISingleEditOperation[];
    command?: Command;
    commitCharacters?: string[];
    detail?: string;
    documentation?: string | IMarkdownString;
    filterText?: string;
    insertText: string;
    insertTextRules?: CompletionItemInsertTextRule;
    kind: CompletionItemKind;
    label: string | CompletionItemLabel;
    preselect?: boolean;
    range: IRange | CompletionItemRanges;
    sortText?: string;
    tags?: readonly Deprecated[];
}
```

## additionalTextEdits
- 类型：[ISingleEditOperation](/api/editor/ISingleEditOperation.md)
- 描述：选择此完成时应用的附加文本编辑的可选数组。编辑不得与主编辑重叠，也不得与其本身重叠。

## command
- 类型：[Command](/api/languages/Command.md)
- 描述：当用户选择此完成时，可选择执行的命令。


## commitCharacters
- 类型：`string[]`
- 描述：当用户键入此完成时，可选择用于触发此完成项的提交字符。


## detail
- 类型：`string`
- 描述：此完成项的详细说明。


## documentation
- 类型：`string |` [IMarkdownString](/api/IMarkdownString.md)
- 描述：此完成项的文档字符串。


## filterText
- 类型：`string`
- 描述：此完成项的过滤文本。


## insertText
- 类型：`string`
- 描述：此完成项的插入文本。


## insertTextRules
- 类型：[CompletionItemInsertTextRule](/api/languages/CompletionItemInsertTextRule.md)
- 描述：此完成项的插入文本规则。


## kind
- 类型：[CompletionItemKind](/api/languages/CompletionItemKind.md)
- 描述：此完成项的类别。


## label
- 类型：`string |` [CompletionItemLabel](/api/languages/CompletionItemLabel.md)
- 描述：此完成项的标签。


## preselect
- 类型：`boolean`
- 描述：此完成项是否应预选。


## range
- 类型：[IRange](/api/IRange.md) | [CompletionItemRanges](/api/languages/CompletionItemRanges.md)
- 描述：此完成项的文本范围。


## sortText
- 类型：`string`
- 描述：此完成项的排序文本。


## tags
- 类型：[Deprecated](/api/languages/CompletionItemTag.md#deprecated)[]
- 描述：此完成项的标签。

