# LanguageServiceDefaults

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.html.LanguageServiceDefaults.html
:::

```ts
interface LanguageServiceDefaults {
    languageId: string;
    modeConfiguration: languages.html.ModeConfiguration;
    onDidChange: IEvent<languages.html.LanguageServiceDefaults>;
    options: languages.html.Options;
    setModeConfiguration(modeConfiguration): void;
    setOptions(options): void;
}
```
## languageId
- 类型：`string`


## modeConfiguration
- 类型：[languages](/api/languages.md).[html](/api/languages/html.md).[ModeConfiguration](/api/languages/html/ModeConfiguration.md)[]


## onDidChange
- 类型：[IEvent](/api/IEvent.md)<[languages](/api/languages.md).[html](/api/languages/html.md).[LanguageServiceDefaults](/api/languages/html/LanguageServiceDefaults.md)>



## options
- 类型：[languages](/api/languages.md).[html](/api/languages/html.md).[Options](/api/languages/html/Options.md)


## setModeConfiguration
- 语法：`setModeConfiguration(modeConfiguration): void`
- 参数：`modeConfiguration`: [languages](/api/languages.md).[html](/api/languages/html.md).[ModeConfiguration](/api/languages/html/ModeConfiguration.md)


## setOptions
- 语法：`setOptions(options): void`
- 参数：`options`: [languages](/api/languages.md).[html](/api/languages/html.md).[Options](/api/languages/html/Options.md)

