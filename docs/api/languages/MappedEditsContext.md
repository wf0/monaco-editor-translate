# MappedEditsContext

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.MappedEditsContext.html
:::

```ts
interface MappedEditsContext {
    documents: DocumentContextItem[][];
}
```

## documents
- 类型：[DocumentContextItem](/api/languages/DocumentContextItem.md)[][]
- 描述：外部数组按优先级排序——从最高到最低。内部数组包含具有相同优先级的元素。