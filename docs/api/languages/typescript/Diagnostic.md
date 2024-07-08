# Diagnostic
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.Diagnostic.html
:::

```ts
interface Diagnostic {
    category: 0 | 1 | 2 | 3;
    code: number;
    file: {
        fileName: string;
    };
    length: number;
    messageText: string | DiagnosticMessageChain;
    relatedInformation?: DiagnosticRelatedInformation[];
    reportsDeprecated?: {};
    reportsUnnecessary?: {};
    source?: string;
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
## relatedInformation
- 类型：[DiagnosticRelatedInformation](/api/languages/typescript/DiagnosticRelatedInformation.md)[]
## reportsDeprecated
- 类型：`{}`
## reportsUnnecessary
- 类型：`{}`
- 描述：未来可能会储存更多，目前，这只是用于指示诊断何时为未使用的标识符诊断。
## source
- 类型：`string`
## start
- 类型：`number`