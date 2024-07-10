# RenameProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.RenameProvider.html
:::

```ts
interface RenameProvider {
    provideRenameEdits(model, position, newName, token): ProviderResult<WorkspaceEdit & Rejection>;
    resolveRenameLocation?(model, position, token): ProviderResult<RenameLocation & Rejection>;
}
```

## provideRenameEdits
- 语法：`provideRenameEdits(model, position, newName, token): ProviderResult<WorkspaceEdit & Rejection>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `position`: [Position](/api/Position.md)
  - `newName`: `string`
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[WorkspaceEdit](/api/languages/WorkspaceEdit.md) & [Rejection](/api/languages/Rejection.md)>
## resolveRenameLocation
- 语法：`resolveRenameLocation(model, position, token): ProviderResult<RenameLocation & Rejection>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `position`: [Position](/api/Position.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[RenameLocation](/api/languages/RenameLocation.md) & [Rejection](/api/languages/Rejection.md)>