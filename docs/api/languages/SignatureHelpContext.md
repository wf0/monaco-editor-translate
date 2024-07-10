# SignatureHelpContext

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.SignatureHelpContext.html
:::

```ts
interface SignatureHelpContext {
    activeSignatureHelp?: SignatureHelp;
    isRetrigger: boolean;
    triggerCharacter?: string;
    triggerKind: SignatureHelpTriggerKind;
}
```

## activeSignatureHelp
- 类型：[SignatureHelp](/api/languages/SignatureHelp.md)
## isRetrigger
- 类型：`boolean`
## triggerCharacter
- 类型：`string`
## triggerKind
- 类型：[SignatureHelpTriggerKind](/api/languages/SignatureHelpTriggerKind.md)