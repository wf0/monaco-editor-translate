# CSSDataConfiguration
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.css.CSSDataConfiguration.html
:::


```ts
interface CSSDataConfiguration {
    dataProviders?: {
        [providerId: string]: CSSDataV1;
    };
    useDefaultDataProvider?: boolean;
}
```

## dataProviders
- 类型：`[providerId: string]`: [CSSDataV1](/api/languages/css/CSSDataV1.md)
- 描述：提供一组自定义数据提供程序。

## useDefaultDataProvider
- 类型：`boolean`
- 描述：是否使用默认数据提供程序。
