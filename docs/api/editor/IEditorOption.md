# IEditorOption
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOption.html
:::

```ts
interface IEditorOption<K, V> {
    defaultValue: V;
    id: K;
    name: string;
    applyUpdate(value, update): ApplyUpdateResult<V>;
}
```

## 泛型
- `K extends` [EditorOption](/api/editor/EditorOption.md)
## defaultValue
- 类型：`V`
## id
- 类型：`K`
## name
- 类型：`string`
## applyUpdate
- 语法：`applyUpdate(value, update): ApplyUpdateResult<V>`
- 参数：
  - `value`: `V`
  - `update`: `V`
- 返回值：[ApplyUpdateResult](/api/editor/ApplyUpdateResult.md)`<V>`