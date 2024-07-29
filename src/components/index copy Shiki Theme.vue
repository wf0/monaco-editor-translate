// 所有的样例demo均写在 APP 中

<template>
  <div class="box">
    <div class="editor"></div>
    <div class="opts">
      <select name="" id="" v-model="theme">
        <option v-for="theme in themes" :value="theme" :key="theme">
          {{ theme }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { editor, languages } from "monaco-editor";
import { useFixError } from "../utils/useFixError";
import * as monaco from "monaco-editor";
import { createHighlighter } from "shiki";
import { shikiToMonaco } from "@shikijs/monaco";

const { fixError } = useFixError();
window.monaco = monaco;
const theme = ref("vitesse-dark");

watch(
  () => theme.value,
  () => editor.setTheme(theme.value)
);

const themes = ["vitesse-dark", "vitesse-light", "andromeeda", "aurora-x"];
onMounted(async () => {
  fixError();
  // 创建一个可复用的语法高亮器
  const highlighter = await createHighlighter({
    themes,
    langs: ["javascript", "typescript", "vue", "html"],
  });

  // 注册 Shiki 主题，并为 Monaco 提供语法高亮
  shikiToMonaco(highlighter, monaco);

  const dom = document.querySelector(".editor");

  const myEditor = editor.create(dom, {
    value: `// create a model`,
    language: "javascript",
    theme: "vitesse-dark",
  });
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
