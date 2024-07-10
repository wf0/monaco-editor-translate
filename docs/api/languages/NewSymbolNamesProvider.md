# NewSymbolNamesProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.NewSymbolNamesProvider.html
:::

```ts
interface NewSymbolNamesProvider {
    supportsAutomaticNewSymbolNamesTriggerKind?: Promise<boolean>;
    provideNewSymbolNames(model, range, triggerKind, token): ProviderResult<NewSymbolName[]>;
}
```

## supportsAutomaticNewSymbolNamesTriggerKind
- 类型：`Promise<boolean>`

## provideNewSymbolNames
- 语法：`provideNewSymbolNames(model, range, triggerKind, token): ProviderResult<NewSymbolName[]>`
- 参数：
  - `model`：[ITextModel](/api/editor/ITextModel.md)
  - `range`：[IRange](/api/IRange.md)
  - `triggerKind`：[NewSymbolNameTriggerKind](/api/languages/NewSymbolNameTriggerKind.md)
  - `token`：[CancellationToken](/api/CancellationToken.md)
- 返回值: [ProviderResult](/api/languages/ProviderResult.md)<[NewSymbolName](/api/languages/NewSymbolName.md)[]>
