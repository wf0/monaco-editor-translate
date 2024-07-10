# registerLinkOpener

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.registerLinkOpener.html
:::

- 语法：`registerLinkOpener(opener): IDisposable`

- 参数：`opener`: [ILinkOpener](/api/editor/ILinkOpener.md)
  
- 返回值：`IDisposable`:[IDisposable](/api/IDisposable.md)

- 描述：注册在任何编辑器中打开链接时调用的处理程序。如果链接已被处理，则处理程序回调应返回 true，否则返回 false。打开链接时，将最先调用最后注册的处理程序。

- 示例：

::: details 查看代码

```js
const myEditor = editor.create(dom, {
  value: "// https://www.baidu.com",
  language: "javascript",
});

editor.registerLinkOpener({
  open(resource) {
    console.log(resource);
    // 只有return false 才能默认打开链接
    // 包括 return false / return Promise.resolve(false)
    // 当然可以手动调用 window.open(resource.toString())
    // return window.open(resource.toString())
    return Promise.resolve(false);
  },
});
```

:::

- 输出：

<img src='/registerLinkOpenner.gif' />