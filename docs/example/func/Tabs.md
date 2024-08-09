# 多 Tab 标签

<backTop />

实现多tab页切换的核心，就是保存编辑器状态、编辑器模型，切换时进行恢复，核心方法是 [saveViewState](/api/editor/IStandaloneCodeEditor.html#saveviewstate) 、 [restoreViewState](/api/editor/IStandaloneCodeEditor.html#restoreviewstate) 和 [getModel](/api/editor/IStandaloneCodeEditor.html#getmodel) 、 [setModel](/api/editor/IStandaloneCodeEditor.html#setmodel)。

一个是编辑状态、一个是编辑模型哈，所以需要保存编辑器状态、编辑器模型。


## FileStateMap

为了存储编辑器状态，需要定义一个文件状态映射表，key 为文件唯一标识，value 为编辑器状态和语言模型。

```js
/**
 * 定义 FileStateMap
 *  这里的 key 值，应该使用文件的唯一标识哈，我这里演示，就直接使用 index 了
 *  类型为 {key：index, value: {state: EditorViewState, model: ITextModel}} 
 */
const fileStateMap = new Map();
const setFileState = (index, state) => fileStateMap.set(index, state);
const getFileState = (index) => fileStateMap.get(index);
const deleteFileState = (index) => fileStateMap.delete(index);
const hasFileState = (index) => fileStateMap.has(index);
```

## switchFile
切换文件的核心思想，就是查询 Map 是否有该文件标识的编辑器状态和语言模型，如果有，则进行恢复，如果没有，则创建新的编辑器，并且赋值给 Map。

```js
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
```

<img src='/tabs.gif' />

## 参考资料
https://blog.csdn.net/weixin_45855469/article/details/137344211