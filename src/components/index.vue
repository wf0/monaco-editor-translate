// 所有的样例demo均写在 APP 中

<template>
  <div>
    <div class="editor"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { editor, languages, KeyCode, Range } from "monaco-editor";
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

  const range = new Range(1, 0, 1, 6);
  const newRange = range.delta(3);
  console.group("Range.delta");
  console.log(range);
  console.log("执行 range.delta(3)");
  console.log(newRange);
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
