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

  const myEditor = editor.create(document.querySelector(".editor"), {
    value: `function add(a, b) { return a + b; }`,
    language: "javascript",
  });

  const myCommand = editor.addCommand({
    id: "command-123",
    run(...args) {
      console.log("执行了 command-123", args);
    },
  });

  /**
   * Directly trigger a handler or an editor action.
   * @param source The source of the call.
   * @param handlerId The id of the handler or the id of a contribution.
   * @param payload Extra data to be sent to the handler.
   */
  //  trigger(source: string | null | undefined, handlerId: string, payload: any): void;
  myEditor.trigger(null, "command-123", { a: 100 });

  myCommand.dispose();

  // 会报错
  myEditor.trigger(null, "command-123", { a: 100 });
});
</script>

<style scoped>
.editor {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
