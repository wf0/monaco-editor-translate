# SignatureHelpProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.SignatureHelpProvider.html
:::

签名帮助提供程序接口定义了扩展和参数提示功能之间的约定。

```ts
interface SignatureHelpProvider {
    signatureHelpRetriggerCharacters?: readonly string[];
    signatureHelpTriggerCharacters?: readonly string[];
    provideSignatureHelp(model, position, token, context): ProviderResult<SignatureHelpResult>;
}
```

## signatureHelpRetriggerCharacters
- 类型: `readonly string[]`


## signatureHelpTriggerCharacters
- 类型: `readonly string[]`


## provideSignatureHelp
- 语法：`provideSignatureHelp(model, position, token, context): ProviderResult<SignatureHelpResult>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `position`: [Position](/api/Position.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
  - `context`: [SignatureHelpContext](/api/languages/SignatureHelpContext.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[SignatureHelpResult](/api/languages/SignatureHelpResult.md)>
- 描述：为指定位置的签名和文件提供帮助。

