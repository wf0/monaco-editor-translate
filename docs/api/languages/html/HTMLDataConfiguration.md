# HTMLDataConfiguration
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.html.HTMLDataConfiguration.html
:::

```ts
interface HTMLDataConfiguration {
    dataProviders?: {
        [providerId: string]: HTMLDataV1;
    };
    useDefaultDataProvider?: boolean;
}
```

## dataProviders
- 类型：
```ts
dataProviders?: {
    [providerId: string]: HTMLDataV1;
}
```
- 属性：`[providerId: string]`: [HTMLDataV1](/api/languages/html/HTMLDataV1.html);
- 描述：提供一组自定义数据提供程序。

## useDefaultDataProvider
- 类型：`boolean`
- 描述：定义是否显示标准HTML标记和属性

