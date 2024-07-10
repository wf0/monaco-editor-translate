# LanguageServiceDefaults

<backTop />
        
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

## diagnosticsOptions
- 类型：[languages](/api/languages.md).[json](/api/languages/json.md).[DiagnosticsOptions](/api/languages/json/DiagnosticsOptions.md)

## languageId
- 类型：`string`


## modeConfiguration
- 类型：[languages](/api/languages.md).[json](/api/languages/json.md).[ModeConfiguration](/api/languages/json/ModeConfiguration.md)


## onDidChange
- 类型：[IEvent](/api/IEvent.md)<[languages](/api/languages.md).[json](/api/languages/json.md).[LanguageServiceDefaults](/api/languages/json/LanguageServiceDefaults.md)>


## setDiagnosticsOptions
- 语法：`setDiagnosticsOptions(options): void`
- 参数：`options`: [languages](/api/languages.md).[json](/api/languages/json.md).[DiagnosticsOptions](/api/languages/json/DiagnosticsOptions.md)


## setModeConfiguration
- 语法：`setModeConfiguration(modeConfiguration): void`
- 参数：`modeConfiguration`: [languages](/api/languages.md).[json](/api/languages/json.md).[ModeConfiguration](/api/languages/json/ModeConfiguration.md)

