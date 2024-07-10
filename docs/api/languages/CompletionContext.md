# CompletionContext

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionContext.html
:::

包含有关触发完成提供程序([completion provider](/api/languages/CompletionItemProvider.md#providecompletionitems))的上下文的其他信息。

```ts
interface CompletionContext {
    triggerCharacter?: string;
    triggerKind: CompletionTriggerKind;
}
```

## triggerCharacter
- 类型：`string`
- 描述：触发完成项提供程序的字符。


## triggerKind
- 类型：[CompletionTriggerKind](/api/languages/CompletionTriggerKind.md)
- 描述：触发完成项提供程序的类型。

