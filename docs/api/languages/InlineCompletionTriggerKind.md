# InlineCompletionTriggerKind
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#enums/languages.InlineCompletionTriggerKind.html
:::

内联完成提供程序（[inline completion provider](/api/languages/InlineCompletionsProvider.md)）是如何触发的。

## Automatic
- 值：`0`
- 描述：编辑时自动触发完成。在这种情况下，只返回一个完成项目就足够了。

## Explicit
- 值：`1`
- 描述：用户手动触发完成。
