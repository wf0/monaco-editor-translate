# InlineCompletions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlineCompletions.html
:::

```ts
interface InlineCompletions<TItem> {
    commands?: Command[];
    enableForwardStability?: boolean;
    items: readonly TItem[];
    suppressSuggestions?: boolean;
}
```

## 泛型
- `TItem extends InlineCompletion =` [InlineCompletion](/api/languages/InlineCompletion.md)

## commands
- 类型：[Command](/api/languages/Command.md)[]
- 描述：与此列表的内联完成相关联的命令列表。

## enableForwardStability
- 类型：`boolean`
- 描述：当设置并且用户键入建议而不从中派生时，内联建议不会更新。

## items
- 类型：`readonly` [TItem](/api/languages/TItem.md)

## suppressSuggestions
- 类型：`boolean`