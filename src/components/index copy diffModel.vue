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

  const diffEditor = editor.createDiffEditor(
    document.querySelector(".editor"),
    {
      renderSideBySide: true, // renderSideBySide: false 行内比较
    }
  );
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
});
</script>

<style scoped>
.editor {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
