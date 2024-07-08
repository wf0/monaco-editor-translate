# CodeActionContext
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeActionContext.html
:::

包含有关运行代码操作的上下文的其他诊断信息。

```ts
interface CodeActionContext {
    markers: IMarkerData[];
    only?: string;
    trigger: CodeActionTriggerType;
}
```

## markers
- 类型： [IMarkerData](/api/editor/IMarkerData.md)
- 描述：一系列诊断。
## only
- 类型： `string`
- 描述：请求返回的操作类型。
## trigger
- 类型： [CodeActionTriggerType](/api/languages/CodeActionTriggerType.md)
- 描述：请求代码操作的原因。