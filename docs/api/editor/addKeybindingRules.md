# addKeybindingRules
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.addKeybindingRules.html
:::

- 语法：`addKeybindingRules(rules): void`

- 参数：`rules`:[IKeybindingRule](/api/editor/IKeybindingRule.md)[]

- 返回值：`IDisposable`:[IDisposable](/api/IDisposable.md)

    返回值是一个IDisposable对象，调用dispose()方法可以移除命令。

- 描述：添加一组快捷键规则。

- 示例：

```js
editor.addKeybindingRules([
  {
    keybinding: KeyMod.chord(KeyMod.CtrlCmd | KeyCode.KeyM),
    // command?: string | null;  // 暂未理解字段含义及用法
    // commandArgs?: any;  // 暂未理解字段含义及用法
    // when?: string | null;  // 暂未理解字段含义及用法
  },
  {
    keybinding: KeyCode.KeyM,
  },
]);
```
