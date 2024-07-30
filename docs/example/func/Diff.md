# 差异对比

版本对比在编辑器中可谓是最常用、重要的功能之一，而 Monaco Editor 自身就支持该功能，下面看看如何使用[createDiffEditor](/api/editor.html#creatediffeditor)吧。

## 创建差异编辑器

```js
import { editor } from "monaco-editor";

const diffEditor = editor.createDiffEditor(
  document.querySelector(".editor"),
  {
    renderSideBySide: true, // renderSideBySide: false 行内比较
  }
);
```

## 设置差异编辑器模型
设置模型的方法是 `setModel` ,但是差异编辑器需要 `original` 和 `modified` 两个模型参数，因此，可以先创建两个模型参数，方法是 `setmodel`。

```js
import { editor } from "monaco-editor";

// 原始模型
const original = editor.createModel(
"function add(a, b) { return a + b; }",
"javascript"
);

// 修改后模型
const modified = editor.createModel(
"function add(a, b) { return a+b; }\nfunction log(a) { console.log(a); }",
"javascript"
);

diffEditor.setModel({ original, modified });
```

<img src='/createDiffEditor.png' />
