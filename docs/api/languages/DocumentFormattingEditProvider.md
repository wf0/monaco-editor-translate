# DocumentFormattingEditProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentFormattingEditProvider.html
:::

文档格式设置提供程序接口定义扩展和格式设置功能之间的约定。

```ts
interface DocumentFormattingEditProvider {
    displayName?: string;
    provideDocumentFormattingEdits(model, options, token): ProviderResult<TextEdit[]>;
}
```

## displayName
- 类型: `string`

## provideDocumentFormattingEdits
- 语法：`provideDocumentFormattingEdits(model, options, token): ProviderResult<TextEdit[]>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `options`: [FormattingOptions](/api/languages/FormattingOptions.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)`<`[TextEdit](/api/languages/TextEdit.md)`[]>`
- 描述：为整个文档提供格式编辑。