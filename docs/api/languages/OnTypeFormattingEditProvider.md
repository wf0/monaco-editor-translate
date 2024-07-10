# OnTypeFormattingEditProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.OnTypeFormattingEditProvider.html
:::

文档格式设置提供程序接口定义扩展和格式设置功能之间的约定。

```ts
interface OnTypeFormattingEditProvider {
    autoFormatTriggerCharacters: string[];
    provideOnTypeFormattingEdits(model, position, ch, options, token): ProviderResult<TextEdit[]>;
}
```

## autoFormatTriggerCharacters
- 类型：`string[]`

## provideOnTypeFormattingEdits
- 语法：`provideOnTypeFormattingEdits(model, position, ch, options, token): ProviderResult<TextEdit[]>`
- 参数：
  - `model`：[ITextModel](/api/editor/ITextModel.md)
  - `position`：[Position](/api/Position.md)
  - `ch`：`string`
  - `options`：[FormattingOptions](/api/languages/FormattingOptions.md)
  - `token`：[CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[TextEdit](/api/languages/TextEdit.md)[]>
- 描述：键入字符后提供格式编辑。