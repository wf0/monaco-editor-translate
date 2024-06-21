# addEditorAction
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.addEditorAction.html
:::


- 语法：`addEditorAction(descriptor): IDisposable`

- 参数：`descriptor`: [IActionDescriptor](/api/editor/IActionDescriptor.md)

- 返回值：`IDisposable`:[IDisposable](/api/IDisposable.md)

    返回值是一个IDisposable对象，调用dispose()方法可以移除命令。

- 描述：向所有编辑器添加一个操作。

- 示例：

```js
editor.addEditorAction({
    id: "action123", // 唯一ID
    label: "action123", // 显示的名称
    keybindings: [KeyMod.chord(KeyMod.CtrlCmd | KeyCode.KeyM),],   // 快捷键
    contextMenuOrder: 2, // 操作在菜单中的显示顺序
    // 指定操作应显示在上下文菜单的哪个组中 navigation表示默认组 
    // 可选值 navigation | 1_modification | 9_cutcopypaste
    contextMenuGroupId: "navigation",
    run: (...args) => {
      console.log("执行了 action123", args);
    },
  });
```

- 输出：

<p align="left">
    <img src='../../public/assets/editor-addEditorAction.png' />
</p>

::: details 传送门
[KeyMod.chord 快捷键](/api/KeyMod.md)
:::