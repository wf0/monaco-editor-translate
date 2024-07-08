# CodeLensProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeLensProvider.html
:::

```ts
interface CodeLensProvider {
    onDidChange?: IEvent<CodeLensProvider>;
    provideCodeLenses(model, token): ProviderResult<CodeLensList>;
    resolveCodeLens?(model, codeLens, token): ProviderResult<CodeLens>;
}
```

## onDidChange
- 类型：[IEvent](/api/IEvent.md)`<`[CodeLensProvider](#)`>`

## provideCodeLenses
- 语法：`provideCodeLenses(model, token): ProviderResult<CodeLensList>`
- 参数：
  - `model` [ITextModel](/api/editor/ITextModel.md)
  - `token` [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)`<`[CodeLens](/api/languages/CodeLens.md)`>`

## resolveCodeLens
- 语法：`resolveCodeLens(model, codeLens, token): ProviderResult<CodeLens>`
- 参数：
  - `model` [ITextModel](/api/editor/ITextModel.md)
  - `codeLens` [CodeLens](/api/languages/CodeLens.md)
  - `token` [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)`<`[CodeLens](/api/languages/CodeLens.md)`>`

