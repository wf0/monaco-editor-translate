# DiagnosticRelatedInformation
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.DiagnosticRelatedInformation.html
:::

```ts
interface DiagnosticRelatedInformation {
    category: 0 | 1 | 2 | 3;
    code: number;
    file: {
        fileName: string;
    };
    length: number;
    messageText: string | DiagnosticMessageChain;
    start: number;
}
```
## category
- 类型：`0 | 1 | 2 | 3`
- 描述：诊断类别：警告=0，错误=1，建议=2，消息=3
## code
- 类型：`number`
## file
- 类型：` fileName: string }`
- 描述：TypeScriptWorker删除除fileName属性以外的所有属性，以避免序列化循环JSON结构。
## length
- 类型：`number`
## messageText
- 类型：`string |` [DiagnosticMessageChain](/api/languages/typescript/DiagnosticMessageChain.md)

## start
- 类型：`number`
