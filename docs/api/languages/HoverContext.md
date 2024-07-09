# HoverContext
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.HoverContext.html
:::

```ts
interface HoverContext<THover> {
    verbosityRequest?: HoverVerbosityRequest<THover>;
}
```

## 泛型
- `THover =` [Hover](/api/languages/Hover.md)

## verbosityRequest
- 类型：[HoverVerbosityRequest](/api/languages/HoverVerbosityRequest.md)<[THover](#泛型)>
- 描述：悬停冗长请求