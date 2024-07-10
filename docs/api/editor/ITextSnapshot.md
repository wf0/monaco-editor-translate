# ITextSnapshot

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ITextSnapshot.html
:::


像迭代器一样工作的文本快照。将尝试返回大约64KB大小的块。完成后将返回null。

```ts
interface ITextSnapshot {
    read(): string;
}
```

## read
- 语法：`read(): string`