# IDocComment

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IDocComment.html
:::

文档注释的定义（例如Javadoc/JSdoc）

```ts
interface IDocComment {
    close?: string;
    open: string;
}
```
## close
- 类型：`string`
- 描述：出现在最后一行并关闭文档注释的字符串（例如“*/”）。
## open
- 类型：`string`
- 描述：出现在第一行并打开文档注释的字符串（例如“/**”）。