// 所有的样例demo均写在 APP 中

<template>
  <div>
    <div class="editor"></div>
    <div id="glayphID_123122">测试glayphID内容</div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { editor, languages, KeyCode, Position } from "monaco-editor";
import * as monaco from "monaco-editor";
import { useFixError } from "../utils/useFixError";
import { KeyMod } from "monaco-editor";
const { fixError } = useFixError();
window.monaco = monaco;
onMounted(() => {
  fixError();
  const dom = document.querySelector(".editor");

  const myEditor = editor.create(dom, {
    value: `// create a model`,
    language: "javascript",
  });

  // myEditor.addAction({
  //   id: "action",
  //   label: "action",
  //   contextMenuGroupId: "navigation",
  //   keybindings: [KeyMod.CtrlCmd | KeyCode.KeyA],
  //   run: () => {
  //     console.log("action");
  //   },
  // });

  // myEditor.addCommand(KeyMod.CtrlCmd | KeyCode.KeyM, () => {
  //   console.log("command");
  // });

  // myEditor.addContentWidget({
  //   getId: () => "contentID_123",
  //   getDomNode: () => document.querySelector("#contentID_123"),
  //   getPosition: () => ({
  //     position: new Position(10, 10),
  //     preference: [editor.ContentWidgetPositionPreference.BELOW],
  //   }),
  // });

  // myEditor.addGlyphMarginWidget({
  //   getDomNode: () => document.querySelector("#glayphID_123122"),
  //   getId: () => "glayphID_123122",
  //   getPosition: () => ({
  //     lane: editor.GlyphMarginLane.Center,
  //     range: new monaco.Range(1, 3, 1, 5),
  //     zIndex: 999,
  //   }),
  // });

  // myEditor.addOverlayWidget({
  //   getDomNode: () => document.querySelector("#overlay"),
  //   getId: () => "overlay",
  //   getPosition: () => ({
  //     preference: editor.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER,
  //   }),
  // });
});
</script>

<style scoped>
.editor {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#contentID_123 {
  width: 200px;
  position: absolute;
  padding: 10px;
  color: red;
  background-color: blue;
  z-index: 99;
}
#glayphID_123122 {
  width: 200px;
  background-color: red;
  color: #fff;
  display: block !important;
}
</style>
