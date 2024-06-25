// 所有的样例demo均写在 APP 中

<template>
  <div>
    <div class="editor"></div>
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

  // myEditor.changeViewZones((accessor) => {
  //   accessor.addZone({
  //     domNode: document.querySelector("#overlay"),
  //     afterLineNumber: 0,
  //     heightInPx: 100,
  //     onDomNodeTop: (top) => {
  //       document.querySelector("#overlay").style.top = top + "px";
  //     },
  //   });
  // });

  // const command = myEditor.addCommand(KeyMod.CtrlCmd | KeyCode.KeyM, () => {
  //   console.log("command");
  // });

  // myEditor.executeCommand(null, {
  //   getEditOperations(model, builder) {
  //     console.log("getEditOperations", model, builder);
  //   },
  // });

  // myEditor.executeEdits(null, [
  //   {
  //     text: "测试 executeEdits",
  //     range: new monaco.Range(1, 1, 1, 1),
  //   },
  //   {
  //     text: "测试 222",
  //     range: new monaco.Range(1, 10, 1, 10),
  //   },
  // ]);

  // myEditor.addAction({
  //   id: "action",
  //   label: "action",
  //   contextMenuGroupId: "navigation",
  //   keybindings: [KeyMod.CtrlCmd | KeyCode.KeyA],
  //   run: () => {
  //     console.log("action");
  //   },
  // });
  // const action = myEditor.getAction("action");
  // console.log(action);
  // action.run();

  // console.log(myEditor.getBottomForLineNumber(1));

  // console.log(myEditor.getContainerDomNode());
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
#overlay {
  padding: 10px;
  background-color: red;
}
</style>
