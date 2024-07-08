# CodeActionList
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeActionList.html
:::

```ts
interface CodeActionList {
    actions: readonly CodeAction[];
    dispose(): void;
}
```

## actions
- 类型：`readonly`[CodeAction](/api/languages/CodeAction.md)[]

## dispose
- 语法：`dispose(): void`