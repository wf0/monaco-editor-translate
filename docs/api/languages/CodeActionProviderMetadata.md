# CodeActionProviderMetadata
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeActionProviderMetadata.html
:::

有关CodeActionProvider提供的代码操作类型的元数据。

```ts
interface CodeActionProviderMetadata {
    documentation?: readonly {
        command: Command;
        kind: string;
    }[];
    providedCodeActionKinds?: readonly string[];
}
```

## documentation
- 类型：`readonly { command: `[Command](/api/languages/Command.md)`; kind: string; }[]`

## providedCodeActionKinds
- 类型：`readonly string[]`
