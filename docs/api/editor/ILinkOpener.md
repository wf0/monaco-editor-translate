# ILinkOpener
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ILinkOpener.html
:::

```ts
interface ILinkOpener {
    open(resource): boolean | Promise<boolean>;
}
```

## open
- 语法：`open(resource): boolean | Promise<boolean>`
- 参数：`resource`: [Uri](/api/Uri.md)