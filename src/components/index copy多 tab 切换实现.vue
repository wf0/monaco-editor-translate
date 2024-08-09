// 所有的样例demo均写在 APP 中

<template>
  <div class="box">
    <div class="editor"></div>
    <div class="opts">
      <button @click="switchFile(1)">tab1</button>
      <button @click="switchFile(2)">tab2</button>
      <button @click="switchFile(3)">tab3</button>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";
import { editor } from "monaco-editor";
import { useFixError } from "../utils/useFixError";
const { fixError } = useFixError();

var myEditor = ref(null);

/**
 * 定义 FileStateMap
 *  这里的 key 值，应该使用文件的唯一标识哈
 *  我这里演示，就直接使用 index 了
 */
const fileStateMap = new Map();
const currentFileIndex = ref(1);
const setFileState = (index, state) => fileStateMap.set(index, state);
const getFileState = (index) => fileStateMap.get(index);
const deleteFileState = (index) => fileStateMap.delete(index);
const hasFileState = (index) => fileStateMap.has(index);

const switchFile = (index) => {
  if (currentFileIndex.value === index) return;
  currentFileIndex.value = index; // 记录当前文件标识
  // 判断当前 map 是否已经存在 stat
  if (hasFileState(index)) {
    // 将当前state 赋值给 editor
    const { state, model } = getFileState(index);
    myEditor.setModel(model); // 设置编辑器模型
    myEditor.restoreViewState(state); // 恢复文件的编辑状态
  } else {
    // 创建新的模型
    const model = editor.createModel(contentMap[index], "javascript");
    myEditor.setModel(model); // 设置编辑器模型
    // 创建新的 state
    const state = myEditor.saveViewState();
    setFileState(index, { state, model });
  }
  myEditor.focus();
};

const contentMap = {
  1: "// 这里是 tab 1的内容",
  2: "// 这里是 tab 2的内容",
  3: "// 这里是 tab 3的内容",
};

onMounted(async () => {
  fixError();

  const dom = document.querySelector(".editor");
  myEditor = editor.create(dom, {
    value: contentMap[1],
    language: "javascript",
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
