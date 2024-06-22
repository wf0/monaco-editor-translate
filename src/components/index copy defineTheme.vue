// 所有的样例demo均写在 APP 中

<template>
  <div class="editor"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { editor, KeyMod, KeyCode, Uri } from "monaco-editor";
import { useFixError } from "../utils/useFixError";
const { fixError } = useFixError();
onMounted(() => {
  fixError();
  const dom = document.querySelector(".editor");
  editor.create(dom, {
    value: "// hello world",
    language: "javascript",
  });
  editor.defineTheme("myTheme", {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "ffa500", fontStyle: "italic" },
      { token: "keyword", foreground: "00ff00" },
      { token: "string", foreground: "ff0000" },
    ],
    colors: {
      "editor.background": "#1e1e1e",
      "editor.foreground": "#d4d4d4",
      "editorCursor.foreground": "#d4d4d4",
      "editor.lineHighlightBackground": "#3c3c3c",
      "editorLineNumber.foreground": "#d4d4d4",
      "editor.selectionBackground": "#3c3c3c",
    },
  });
  editor.setTheme("myTheme");
});
</script>

<style scoped>
.editor {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
