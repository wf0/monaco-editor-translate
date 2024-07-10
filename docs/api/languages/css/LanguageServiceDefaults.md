# LanguageServiceDefaults

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.css.LanguageServiceDefaults.html
:::

```ts
interface LanguageServiceDefaults {
    diagnosticsOptions: languages.css.Options;
    languageId: string;
    modeConfiguration: languages.css.ModeConfiguration;
    onDidChange: IEvent<languages.css.LanguageServiceDefaults>;
    options: languages.css.Options;
    setDiagnosticsOptions(options): void;
    setModeConfiguration(modeConfiguration): void;
    setOptions(options): void;
}
```


## ~~diagnosticsOptions~~

## languageId
- 类型：`string`
## modeConfiguration
- 类型： 
## onDidChange
- 类型： [IEvent](/api/IEvent.md)<[languages](/api/languages.md).[css](/api/languages/css.md).[LanguageServiceDefaults](/api/languages/css/LanguageServiceDefaults.md)>
## options
- 类型：[languages](/api/languages.md).[css](/api/languages/css.md).[Options](/api/languages/css/Options.md)
## setDiagnosticsOptions
- 语法：`setDiagnosticsOptions(options): void`
- 参数：`options`: [languages](/api/languages.md).[css](/api/languages/css.md).[Options](/api/languages/css/Options.md)
- 描述：设置诊断选项

## setModeConfiguration
- 语法：`setModeConfiguration(modeConfiguration): void`
- 参数：`modeConfiguration`: [languages](/api/languages.md).[css](/api/languages/css.md).[ModeConfiguration](/api/languages/css/ModeConfiguration.md)
- 描述：设置模式配置
## setOptions
- 语法：`setOptions(options): void`
- 参数：`options`: [languages](/api/languages.md).[css](/api/languages/css.md).[Options](/api/languages/css/Options.md)
- 描述：设置选项