# Options
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.css.Options.html
:::

```ts
interface Options {
    data?: CSSDataConfiguration;
    format?: CSSFormatConfiguration;
    lint?: {
        argumentsInColorFunction?: "ignore" | "warning" | "error";
        boxModel?: "ignore" | "warning" | "error";
        compatibleVendorPrefixes?: "ignore" | "warning" | "error";
        duplicateProperties?: "ignore" | "warning" | "error";
        emptyRules?: "ignore" | "warning" | "error";
        float?: "ignore" | "warning" | "error";
        fontFaceProperties?: "ignore" | "warning" | "error";
        hexColorLength?: "ignore" | "warning" | "error";
        idSelector?: "ignore" | "warning" | "error";
        ieHack?: "ignore" | "warning" | "error";
        importStatement?: "ignore" | "warning" | "error";
        important?: "ignore" | "warning" | "error";
        propertyIgnoredDueToDisplay?: "ignore" | "warning" | "error";
        universalSelector?: "ignore" | "warning" | "error";
        unknownProperties?: "ignore" | "warning" | "error";
        unknownVendorSpecificProperties?: "ignore" | "warning" | "error";
        vendorPrefix?: "ignore" | "warning" | "error";
        zeroUnits?: "ignore" | "warning" | "error";
    };
    validate?: boolean;
}
```

## data
- 类型：[CSSDataConfiguration](/api/languages/css/CSSDataConfiguration.md)
- 描述：配置langauge服务已知的CSS数据类型。
## format
- 类型：[CSSFormatConfiguration](/api/languages/css/CSSFormatConfiguration.md)
- 描述：配置langauge服务CSS格式化选项。
## lint
- 类型：
```ts
{
    argumentsInColorFunction?: "ignore" | "warning" | "error";
    boxModel?: "ignore" | "warning" | "error";
    compatibleVendorPrefixes?: "ignore" | "warning" | "error";
    duplicateProperties?: "ignore" | "warning" | "error";
    emptyRules?: "ignore" | "warning" | "error";
    float?: "ignore" | "warning" | "error";
    fontFaceProperties?: "ignore" | "warning" | "error";
    hexColorLength?: "ignore" | "warning" | "error";
    idSelector?: "ignore" | "warning" | "error";
    ieHack?: "ignore" | "warning" | "error";
    importStatement?: "ignore" | "warning" | "error";
    important?: "ignore" | "warning" | "error";
    propertyIgnoredDueToDisplay?: "ignore" | "warning" | "error";
    universalSelector?: "ignore" | "warning" | "error";
    unknownProperties?: "ignore" | "warning" | "error";
    unknownVendorSpecificProperties?: "ignore" | "warning" | "error";
    vendorPrefix?: "ignore" | "warning" | "error";
    zeroUnits?: "ignore" | "warning" | "error";
}
```

## validate
- 类型：`boolean`

