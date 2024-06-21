# addCommand
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/typedoc/functions/editor.addCommand.html
:::

- 语法：`addCommand(descriptor:ICommandDescriptor): IDisposable`

- 参数：`descriptor`: [ICommandDescriptor](/api/editor/ICommandDescriptor.md)

- 返回值：`IDisposable`:[IDisposable](/api/IDisposable.md)

    返回值是一个IDisposable对象，调用dispose()方法可以移除命令。

- 描述：向编辑器命令服务添加命令处理器。

- 示例：

```js
// addCommand
editor.addCommand({
  id: "command-123",
  run: (...args) => {
    console.log("执行了 command-123", args);
  },
});

/**
 * Directly trigger a handler or an editor action.
 * @param source The source of the call.
 * @param handlerId The id of the handler or the id of a contribution.
 * @param payload Extra data to be sent to the handler.
 */
myEditor.trigger(null, "command-123", { a: 100 });
```

- 输出：

<p align="left">
    <img src='../assets/editor-addcommand.png' />
</p>

::: warning
目前我也还未知 source 的作用哈！

create 的返回值也有一个 addCommand 方法，用法是完全不一样的，大家注意区分！后面会详细说
:::