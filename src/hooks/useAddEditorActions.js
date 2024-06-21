// 直接复制代码过去 执行就可以
editor.addEditorAction({
  id: "action123", // 唯一ID
  label: "action123", // 显示的名称
  // 快捷键
  keybindings: [KeyMod.chord(KeyMod.CtrlCmd | KeyCode.KeyM)],
  // 操作在菜单中的显示顺序
  contextMenuOrder: 2,
  // 指定操作应显示在上下文菜单的哪个组中 navigation表示默认组 navigation | 1_modification | 9_cutcopypaste
  contextMenuGroupId: "navigation",
  // 执行方法
  run: (...args) => {
    console.log("执行了 action123", args);
  },
});
