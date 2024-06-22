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
    value: "console.log('hello world')",
    language: "javascript",
  });

  const model = editor.createModel("// demo", "javascript");
  const model2 = editor.createModel("// 这是第二次创建model", "javascript");
  // myEditor.setModel(model);
  // myEditor.setModel(model2);

  const diffEditor = editor.createDiffEditor(document.querySelector(".main"), {
    renderSideBySide: true, // renderSideBySide: false 行内比较
  });
  diffEditor.setModel({
    original: editor.createModel(
      "function add(a, b) { return a + b; }",
      "javascript"
    ),
    modified: editor.createModel(
      "function add(a, b){ return a + b; }",
      "javascript"
    ),
  });
  console.group("Model 分析");
  editor.getModels().forEach((model) => {
    console.log(model.getValue());
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
