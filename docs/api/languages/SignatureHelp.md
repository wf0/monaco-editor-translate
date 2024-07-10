# SignatureHelp

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.SignatureHelp.html
:::

签名帮助表示可调用的东西的签名。可以有多个签名，但只能有一个活动参数和一个活动的参数。

```ts
interface SignatureHelp {
    activeParameter: number;
    activeSignature: number;
    signatures: SignatureInformation[];
}
```

## activeParameter
- 类型：`number`
- 描述：活动签名的活动参数。
## activeSignature
- 类型：`number`
- 描述：活动签名的索引。
## signatures
- 类型：[SignatureInformation](/api/languages/SignatureInformation.md)[]
- 描述：签名列表。