# InlineCompletionsProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlineCompletionsProvider.html
:::

```ts
interface InlineCompletionsProvider<T> {
    groupId?: string;
    yieldsToGroupIds?: string[];
    freeInlineCompletions(completions): void;
    handleItemDidShow?(completions, item, updatedInsertText): void;
    handlePartialAccept?(completions, item, acceptedCharacters, info): void;
    provideInlineCompletions(model, position, context, token): ProviderResult<T>;
    toString?(): string;
}
```
## 泛型
- `T extends InlineCompletions =` [InlineCompletions](/api/languages/InlineCompletions.md)

## groupId
- 类型: `string`
- 描述: 仅用于 [yieltsToGroupId](/api/languages/InlineCompletionsProvider.md#yieldstogroupids) 。多个提供程序可以具有相同的组id。

## yieldsToGroupIds
- 类型: `string[]`
- 描述：返回首选提供程序组ID的列表。只有在没有具有首选组id的提供程序返回结果的情况下，才会请求当前提供程序完成。

## freeInlineCompletions
- 语法：`freeInlineCompletions(completions): void`
- 参数：`completions ：T`
- 描述：将在完成列表不再使用并且可以进行垃圾收集时调用。


## handleItemDidShow
- 语法：`handleItemDidShow(completions, item, updatedInsertText): void`
- 参数：
  - `completions ：T`
  - `item: T["items"][number]`
  - `updatedInsertText: string`
- 描述：当用户选择或预览一个建议时调用。

## handlePartialAccept
- 语法：`handlePartialAccept(completions, item, acceptedCharacters, info): void`
- 参数：
  - `completions ：T`
  - `item: T["items"][number]`
  - `acceptedCharacters: string`
  - `info`：[InlineCompletionContext](/api/languages/InlineCompletionContext.md)
- 描述：当用户部分接受一个建议时调用。


## provideInlineCompletions
- 语法：`provideInlineCompletions(model, position, context, token): ProviderResult<T>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `position`: [Position](/api/Position.md)
  - `context`: [InlineCompletionContext](/api/languages/InlineCompletionContext.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)`<T>`
- 描述：提供建议的函数。


## toString
- 语法：`toString(): string`


