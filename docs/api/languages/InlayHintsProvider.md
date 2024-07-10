# InlayHintsProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlayHintsProvider.html
:::

```ts
interface InlayHintsProvider {
    displayName?: string;
    onDidChangeInlayHints?: IEvent<void>;
    provideInlayHints(model, range, token): ProviderResult<InlayHintList>;
    resolveInlayHint?(hint, token): ProviderResult<InlayHint>;
}
```

## displayName
- 类型：`string`

## onDidChangeInlayHints
- 类型：[IEvent](/api/IEvent.md)`<void>`

## provideInlayHints
- 语法：`provideInlayHints(model, range, token): ProviderResult<InlayHintList>`
- 参数：
  - `model`：[ITextModel](/api/editor/ITextModel.md)
  - `range`: [Range](/api/Range.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[InlayHint](/api/languages/InlayHint.md)>
## resolveInlayHint
- 语法：`resolveInlayHint(hint, token): ProviderResult<InlayHint>`
- 参数：
  - `hint`：[InlayHint](/api/languages/InlayHint.md)
  - `token`：[CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[InlayHint](/api/languages/InlayHint.md)>
