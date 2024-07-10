# ReferenceContext
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.ReferenceContext.html
:::

值对象，该对象在请求引用时包含附加信息。

```ts
interface ReferenceContext {
    includeDeclaration: boolean;
}
```

## includeDeclaration
- 类型: `boolean`
- 描述：包括当前符号的声明。