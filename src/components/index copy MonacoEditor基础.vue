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
});
</script>

<style scoped>
.editor {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
