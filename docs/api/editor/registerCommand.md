# registerCommand
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.registerCommand.html
:::

- 语法：`registerCommand(id, handler): IDisposable`

- 参数：
  - `id`: `string`
  - `handler`: `((accessor, ...args) => void)`
    - `accessor`: `any`
    - `...args`: `any[]`
  
- 返回值：`IDisposable`:[IDisposable](/api/IDisposable.md)

- 描述：注册一个命令。

- 示例：

```js
const myEditor = editor.create(dom, {
  value: "// write your code here",
  language: "javascript",
});

editor.registerCommand("commandID", (accessor, ...args) => {
  console.log(accessor, args);
});
myEditor.trigger(null, "commandID", {
  value: 1999,
});
```

- 输出：
<img src='/registerCommand.png'/>
