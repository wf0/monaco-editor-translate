// 所有的样例demo均写在 APP 中

<template>
  <div>
    <div class="editor"></div>
    <div class="main"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { editor, languages } from "monaco-editor";
import { useFixError } from "../utils/useFixError";
const { fixError } = useFixError();
onMounted(() => {
  fixError();
  const dom = document.querySelector(".editor");
  const edi = editor.create(dom, {
    value: 'function foo() { console.log("Hello, world!"); }',
    language: "javascript",
  });
  edi.onKeyDown((e) => {
    console.group("Monaco Editor KeyCode");
    console.log("key", e.browserEvent.key);
    console.log("keyCode", e.keyCode);
    console.groupEnd();

    console.group("Window KeyCode");
    console.log("key", e.browserEvent.key);
    console.log("keyCode", e.browserEvent.keyCode);
    console.groupEnd();
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
