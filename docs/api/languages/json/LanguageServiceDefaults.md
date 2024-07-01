# LanguageServiceDefaults
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.LanguageServiceDefaults.html
:::

```ts
interface LanguageServiceDefaults {
    diagnosticsOptions: languages.json.DiagnosticsOptions;
    languageId: string;
    modeConfiguration: languages.json.ModeConfiguration;
    onDidChange: IEvent<languages.json.LanguageServiceDefaults>;
    setDiagnosticsOptions(options): void;
    setModeConfiguration(modeConfiguration): void;
}
```