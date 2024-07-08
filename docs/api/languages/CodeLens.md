# CodeLens
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeLens.html
:::

```ts
interface CodeLens {
    command?: Command;
    id?: string;
    range: IRange;
}
```

## command
- 类型：[Command](/api/languages/Command.md)

## id
- 类型：`string`

## range
- 类型：[IRange](/api/IRange.md)
