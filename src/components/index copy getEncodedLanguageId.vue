// 所有的样例demo均写在 APP 中

<template>
  <div>
    <div class="editor"></div>
    <div class="main"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { editor, KeyMod, KeyCode, Uri, languages } from "monaco-editor";
import { useFixError } from "../utils/useFixError";
const { fixError } = useFixError();
onMounted(() => {
  fixError();
  const dom = document.querySelector(".editor");
 
  const myEditor = editor.create(dom, {
    value: "// write your code here",
    language: "javascript",
  });

  const allLanguages = languages.getLanguages();
  console.log(allLanguages);
  const jsID = languages.getEncodedLanguageId("javascript");
  console.log("javascript EncodedLanguageId:", jsID);
});
</script>

<style scoped>
.editor {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
