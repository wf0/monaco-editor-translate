// 所有的样例demo均写在 APP 中

<template>
  <div class="editor"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { editor, KeyMod, KeyCode } from "monaco-editor";
import { useFixError } from "../utils/useFixError";
const { fixError } = useFixError();
onMounted(() => {
  fixError();

  const myEditor = editor.create(document.querySelector(".editor"), {
    value: `function add(a, b) { return a + b; }`,
    language: "javascript",
  });

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
});
</script>

<style scoped>
.editor {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
