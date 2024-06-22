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
    value: "// https://www.baidu.com",
    language: "javascript",
  });

  editor.registerLinkOpener({
    open(resource) {
      console.log(resource);
      // 只有return false 才能默认打开链接
      // 包括 return false / return Promise.resolve(false)
      // 当然可以手动调用 window.open(resource.toString())
      return window.open(resource.toString());
      // return Promise.resolve(false);
    },
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
