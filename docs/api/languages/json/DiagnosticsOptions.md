# DiagnosticsOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.DiagnosticsOptions.html
:::

```ts
interface DiagnosticsOptions {
    allowComments?: boolean;
    comments?: SeverityLevel;
    enableSchemaRequest?: boolean;
    schemaRequest?: SeverityLevel;
    schemaValidation?: SeverityLevel;
    schemas?: {
        fileMatch?: string[];
        schema?: any;
        uri: string;
    }[];
    trailingCommas?: SeverityLevel;
    validate?: boolean;
}
```

## 快捷链接
<script setup>
const data = [
  { icon: "P", link: "allowComments" },
  { icon: "P", link: "comments" },
  { icon: "P", link: "enableSchemaRequest" },
  { icon: "P", link: "schemaRequest" },
  { icon: "P", link: "schemaValidation" },
  { icon: "P", link: "schemas" },
  { icon: "P", link: "trailingCommas" },
  { icon: "P", link: "validate" },
];

</script>

<dataItems :data="data" />

## allowComments
- 类型: `boolean`
- 描述: 如果设置了，则允许注释。如果设置为false，将为注释发出语法错误。DiagnosticsOptions.allowComments将覆盖此设置。

## comments
- 类型: [SeverityLevel](/api/languages/json/SeverityLevel.md)
- 描述: 报告评论的严重性。如果未设置，“DiagnosticsOptions.allowComments”定义注释是被忽略还是被报告为错误。


## enableSchemaRequest
- 类型: `boolean`
- 描述: 如果设置了，架构服务将按需加载架构内容，如果可用，则使用“fetch”


## schemaRequest
- 类型: [SeverityLevel](/api/languages/json/SeverityLevel.md)
- 描述: 解析和加载架构时发生的问题的严重性。如果设置为“忽略”，则不会报告架构解决问题。如果未设置，则使用“warning”。

## schemaValidation
- 类型: [SeverityLevel](/api/languages/json/SeverityLevel.md)
- 描述: 架构验证问题的严重性。如果设置为“忽略”，则将跳过架构验证。如果未设置，则使用“warning”。


## schemas
- 类型: `{ fileMatch?: string[]; schema?: any; uri: string; }[]`
- 描述: 架构定义。


## trailingCommas
- 类型: [SeverityLevel](/api/languages/json/SeverityLevel.md)
- 描述: 报告的尾随逗号的严重性。如果未设置，尾随逗号将被报告为错误。


## validate
- 类型: `boolean`
- 描述: 如果设置为true，则启用JSON验证。

