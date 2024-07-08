# ComputedEditorOptionValue
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#types/editor.ComputedEditorOptionValue.html
:::

```ts
ComputedEditorOptionValue<T>: T extends IEditorOption<any, infer R>
    ? R
    : never
```
## 泛型
`T extends `[IEditorOption](/api/editor/IEditorOption.md)`<any, any>`