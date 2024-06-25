// 所有的样例demo均写在 APP 中

<template>
  <div>
    <div class="editor"></div>
    <div class="main"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { editor, languages, KeyCode, Position } from "monaco-editor";
import * as monaco from "monaco-editor";
import { useFixError } from "../utils/useFixError";
import { KeyMod } from "monaco-editor";
const { fixError } = useFixError();
window.monaco = monaco;
onMounted(() => {
  fixError();
  const dom = document.querySelector(".editor");

  const myEditor = editor.create(dom, {
    value: `// create a model`,
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
