# InlineEditProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlineEditProvider.html
:::

```ts
interface InlineEditProvider<T> {
    freeInlineEdit(edit): void;
    provideInlineEdit(model, context, token): ProviderResult<T>;
}
```

## 泛型
- `T extends IInlineEdit =` [IInlineEdit](/api/languages/IInlineEdit.md)

## freeInlineEdit
- 语法：`freeInlineEdit(edit): void`
- 参数：`edit`: `T`

## provideInlineEdit
- 语法：`provideInlineEdit(model, context, token): ProviderResult<T>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `context`: [IInlineEditContext](/api/languages/IInlineEditContext.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)`<T>`