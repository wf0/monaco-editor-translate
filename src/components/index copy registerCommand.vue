// 所有的样例demo均写在 APP 中

<template>
  <div>
    <div class="editor"></div>
    <div class="main"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { editor, KeyMod, KeyCode, Uri } from "monaco-editor";
import { useFixError } from "../utils/useFixError";
const { fixError } = useFixError();
onMounted(() => {
  fixError();
  const dom = document.querySelector(".editor");
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
});
</script>

<style scoped>
.editor {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
