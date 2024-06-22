# CodeActionProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeActionProvider.html
:::

```ts
interface CodeActionProvider {
    provideCodeActions(model, range, context, token): ProviderResult<CodeActionList>;
    resolveCodeAction?(codeAction, token): ProviderResult<CodeAction>;
}
```