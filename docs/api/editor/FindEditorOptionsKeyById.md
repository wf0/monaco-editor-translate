# FindEditorOptionsKeyById
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#types/editor.FindEditorOptionsKeyById.html
:::

```ts
FindEditorOptionsKeyById<T>: {
    [K in keyof EditorOptionsType]: EditorOptionsType[K]["id"] extends T
        ? K
        : never
}[keyof EditorOptionsType]
```
- [EditorOptionsType](/api/editor/EditorOptionsType.md)
- `T extends` [EditorOption](/api/editor/EditorOption.md)