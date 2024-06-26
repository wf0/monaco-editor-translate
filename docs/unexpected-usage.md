---
layout: doc

prev:
  text: '🔎 Monaco Editor API'
  link: 'api#使用'

next: false
---

# 解决 Uncaught Error: Unexpected usage 报错

::: details 相关 issues
https://github.com/microsoft/monaco-editor/issues/4026
:::

```js
// index.js
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

export default () => {
    window.MonacoEnvironment = {
        getWorker(_, label) {
            if (label === "json") {
            return new jsonWorker();
            }
            if (label === "css" || label === "scss" || label === "less") {
            return new cssWorker();
            }
            if (label === "html" || label === "handlebars" || label === "razor") {
            return new htmlWorker();
            }
            if (label === "typescript" || label === "javascript") {
            return new tsWorker();
            }
            return new editorWorker();
        },
    };
}

// import fixUncaughtError from 'index.js'
// fixUncaughtError() // fixes the error
// editor.create(....)
```