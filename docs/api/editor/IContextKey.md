# IContextKey
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IContextKey.html
:::

```ts
interface IContextKey<T> {
    get(): T;
    reset(): void;
    set(value): void;
}
```

## 泛型
- `T extends ContextKeyValue` = [ContextKeyValue](/api/editor/ContextKeyValue.md)

## get
- 语法：`get(): T`

## reset
- 语法：`reset(): void`

## set
- 语法：`set(value): void`
- 参数：`value: T`
