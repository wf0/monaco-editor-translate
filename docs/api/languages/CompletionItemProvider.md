# CompletionItemProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionItemProvider.html
:::

完成项提供程序接口定义扩展和IntelliSense之间的约定。

```ts
interface CompletionItemProvider {
    triggerCharacters?: string[];
    provideCompletionItems(model, position, context, token): ProviderResult<CompletionList>;
    resolveCompletionItem?(item, token): ProviderResult<CompletionItem>;
}
```

## triggerCharacters
- 类型: `string[]`

## provideCompletionItems
- 语法：`provideCompletionItems(model, position, context, token): ProviderResult<CompletionList>`
- 参数：
  - `model`: `ITextModel`
  - `position`: [IPosition](/api/IPosition.md)
  - `content`: [CompletionContext](/api/languages/CompletionContext.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值: [ProviderResult](/api/languages/ProviderResult.md)`<`[CompletionItem](/api/languages/CompletionItem.md)`>`
- 描述：提供给定职位和文件的完成项目。

## resolveCompletionItem
- 语法：`resolveCompletionItem(item, token): ProviderResult<CompletionItem>`
- 参数：
  - `item`: [CompletionItem](/api/languages/CompletionItem.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值: [ProviderResult](/api/languages/ProviderResult.md)`<`[CompletionItem](/api/languages/CompletionItem.md)`>`
- 描述：为给定的完成项目提供更多信息。
