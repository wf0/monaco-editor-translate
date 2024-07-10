# ParameterInformation

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.ParameterInformation.html
:::

表示可调用签名的参数。一个参数可以有一个标签和一个文档注释。

```ts
interface ParameterInformation {
    documentation?: string | IMarkdownString;
    label: string | [number, number];
}
```

## documentation
- 类型：`string |` [IMarkdownString](/api/IMarkdownString.md)
- 描述：此签名的可读文档注释。
## label
- 类型：`string | [number, number]`
- 描述：此签名的标签。