// 所有的样例demo均写在 APP 中

<template>
  <div class="box">
    <div class="editor"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { editor } from "monaco-editor";
import * as actions from "monaco-editor/esm/vs/platform/actions/common/actions";
import { useFixError } from "../utils/useFixError";
import { content } from "../utils/content";
const { fixError } = useFixError();

onMounted(async () => {
  fixError();

  const dom = document.querySelector(".editor");
  const myEditor = editor.create(dom, {
    value: "content",
    language: "javascript",
  });
  let menus = actions.MenuRegistry._menuItems;
  console.log(menus);
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
