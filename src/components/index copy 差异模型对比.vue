// 所有的样例demo均写在 APP 中

<template>
  <div class="box">
    <div class="editor"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { editor } from "monaco-editor";
import { useFixError } from "../utils/useFixError";

const { fixError } = useFixError();

onMounted(async () => {
  fixError();

  const dom = document.querySelector(".editor");

  const diffEditor = editor.createDiffEditor(dom, {
    theme: "vs-light",
    automaticLayout: true,
    readOnly: true, // 只读
  });

  const original = editor.createModel(
    "function add(a, b) { return a + b; }",
    "javascript"
  );

  const modified = editor.createModel(
    "function add(a, b) { return a+b; }\nfunction log(a) { console.log(a); }",
    "javascript"
  );

  diffEditor.setModel({ original, modified });
});
</script>

<style scoped>
.editor,
.box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.opts {
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 99;
}
</style>
