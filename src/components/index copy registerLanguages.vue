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

  // 定义要注册的语言的扩展点对象
  const language = {
    id: "vue",
    extensions: [".vue"],
    aliases: ["vue", "Vue"],
    mimetypes: ["text/vue"],
  };

  // 注册新语言
  languages.register(language);

  editor.create(dom, {
    value: `<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>`,
    language: "vue",
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
