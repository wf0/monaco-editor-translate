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
  const myEditor = editor.create(dom, {
    value: "// https://www.baidu.com hhhh",
    language: "javascript",
  });

  // 假设 monaco 是已经正确配置好的 Monaco 编辑器对象
  languages.registerLinkProvider("javascript", {
    provideLinks(model) {
      const links = [
        {
          range: {
            startColumn: 26,
            endColumn: 30,
            startLineNumber: 1,
            endLineNumber: 1,
          },
          tooltip:"hhh 自定义超链接",
          url:"http://www.hhh.com"
        },
      ];
      return { links };
    },
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
