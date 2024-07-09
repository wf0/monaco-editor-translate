# IInlineEdit
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IInlineEdit.html
:::

```ts
interface IInlineEdit {
    accepted?: Command;
    range: IRange;
    rejected?: Command;
    text: string;
}
```

## accepted
- 类型：[Command](/api/languages/Command.md)
## range
- 类型：[IRange](/api/IRange.md)
## rejected
- 类型：[Command](/api/languages/Command.md)
## text
- 类型：`string`