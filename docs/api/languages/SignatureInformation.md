# SignatureInformation
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.SignatureInformation.html
:::

表示可调用的东西的签名。签名可以有一个标签，比如函数名、文档注释和一组参数。

```ts
interface SignatureInformation {
    activeParameter?: number;
    documentation?: string | IMarkdownString;
    label: string;
    parameters: ParameterInformation[];
}
```

## activeParameter
- 类型: `number`
- 描述：活动参数的索引，如果提供，则使用它来代替SignatureHelp.activeSignature。
## documentation
- 类型: `string |` [IMarkdownString](/api/IMarkdownString.md)
- 描述：此签名的可读文档注释。
## label
- 类型: `string`
- 描述：此签名的标签。
## parameters
- 类型: [ParameterInformation](/api/languages/ParameterInformation.md)[]
- 描述：此签名的参数。