# IComputedEditorOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IComputedEditorOptions.html
:::

所有计算编辑器选项。

```ts
interface IComputedEditorOptions {
    get<T>(id): FindComputedEditorOptionValueById<T>;
}
```

## get
- 类型：`get<T>(id): `[FindComputedEditorOptionValueById](/api/editor/FindComputedEditorOptionValueById.md)`<T>`
- 泛型：`T extends `[EditorOption](/api/editor/EditorOption.md)
- 返回值：[FindComputedEditorOptionValueById](/api/editor/FindComputedEditorOptionValueById.md)< T >