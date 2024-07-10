# DiagnosticMessageChain

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.DiagnosticMessageChain.html
:::

格式化诊断消息的链接列表，用作多行消息的一部分。它是自下而上构建的，让头部成为“主要”诊断。

```ts
interface DiagnosticMessageChain {
    category: 0 | 1 | 2 | 3;
    code: number;
    messageText: string;
    next?: DiagnosticMessageChain[];
}
```
## category
- 类型：`0 | 1 | 2 | 3`
- 描述：诊断类别：警告=0，错误=1，建议=2，消息=3
## code
- 类型：`number`
## messageText
- 类型：`string`
## next
- 类型：[DiagnosticMessageChain](#)[]