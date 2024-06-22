# setTheme
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.setTheme.html
:::

- 语法：`setTheme(themeName): void`

- 参数：`themeName`: `string`
  
- 返回值：`void`

- 描述：设置主题

- 示例：

```js
// 也可以是自定义的主题
editor.defineTheme('my-theme', {
    // ...
})
editor.setTheme('vs-dark');
```