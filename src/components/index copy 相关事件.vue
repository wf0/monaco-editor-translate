// 所有的样例demo均写在 APP 中

<template>
  <div>
    <div class="editor"></div>
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

  window.editor = myEditor;

  myEditor.onContextMenu(({ event, target }) => {
    console.log(event, target);
  });

  myEditor.onDidAttemptReadOnlyEdit(() => {
    console.log("onDidAttemptReadOnlyEdit");
  });

  // myEditor.onDidChangeConfiguration((e) => {
  //   console.log("onDidChangeConfiguration", e);
  // });

  // myEditor.updateOptions({
  //   theme:"vs-dark"
  // })

  // myEditor.onDidChangeCursorPosition((e) => {
  //   console.log("onDidChangeCursorPosition", e);
  // });

  // myEditor.onDidChangeCursorSelection((e) => {
  //   console.log("onDidChangeCursorSelection", e);
  // });

  myEditor.onDidChangeModel((e) => {
    console.log("onDidChangeModel", e);
  });
  myEditor.onDidChangeModelContent((e) => {
    console.log("onDidChangeModelContent", e);
  });
});
</script>

<style scoped>
.editor {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#contentID_123 {
  width: 200px;
  position: absolute;
  padding: 10px;
  color: red;
  background-color: blue;
  z-index: 99;
}
#glayphID_123122 {
  width: 200px;
  background-color: red;
  color: #fff;
  display: block !important;
}
#overlay {
  padding: 10px;
  background-color: red;
}
</style>
