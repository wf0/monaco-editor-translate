# CompletionList

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionList.html
:::

```ts
interface CompletionList {
    incomplete?: boolean;
    suggestions: CompletionItem[];
    dispose?(): void;
}
```

## incomplete
- 类型: `boolean`
## suggestions
- 类型: [CompletionItem](/api/languages/CompletionItem.md)[]
## dispose
- 语法: `dispose(): void`
