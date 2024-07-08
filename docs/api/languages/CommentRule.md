# CommentRule
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CommentRule.html
:::

描述语言的注释是如何工作的。

```ts
interface CommentRule {
    blockComment?: CharacterPair;
    lineComment?: string;
}
```

## blockComment
- 类型：[CharacterPair](/api/languages/CharacterPair.md)
- 描述：块注释字符对，如`/* 块注释 */`
## lineComment
- 类型：`string`
- 描述：行注释标记，如 `// 这是一个注释`