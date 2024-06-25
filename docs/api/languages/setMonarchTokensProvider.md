# setMonarchTokensProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.setMonarchTokensProvider.html
:::

- 语法：`setMonarchTokensProvider(languageId, languageDef): IDisposable`

- 参数：
  - `languageId`: `string`
  - `languageDef`: [IMonarchLanguage](/api/languages/IMonarchLanguage.md) | [Thenable](/api/Thenable.md)<[IMonarchLanguage](/api/languages/IMonarchLanguage.md)>

- 返回值：[IDisposable](/api/IDisposable.md)

- 描述：为编辑器设置自定义语法高亮规则。

- 示例：

::: details 查看代码
```js
// 定义要注册的语言的扩展点对象
const language = {
  id: "vue",
  extensions: [".vue"],
  aliases: ["vue", "Vue"],
  mimetypes: ["text/vue"],
};

// 注册新语言
languages.register(language);

// 自定义高亮
languages.setMonarchTokensProvider("vue", {
  tokenizer: {
    root: [
      ["template", "vue-constant"], // 常量
      [
        /<\s*\/?\s*\w+(?:\s+\w+(?:\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)*\s*\/?\s*>/,
        "vue-template",
      ], // 匹配 html 标签
    ],
  },
});
editor.defineTheme("vue-theme", {
  base: "vs",
  inherit: true,
  rules: [
    // 针对不同的规则设置不同的高亮
    { token: "vue-template", foreground: "#ad28ee" },
    { token: "vue-constant", foreground: "#ad28ee", fontStyle: "bold" }, // 加粗
  ],
  colors: {
    // 统一的颜色配置
    // "editor.background": "#1e1e1e",
    "editor.foreground": "#ff0000", // 编辑器字体
    "editorCursor.foreground": "#00ffff", // 编辑器光标
    // "editor.lineHighlightBackground": "#3c3c3c",
    "editorLineNumber.foreground": "#d4d4d4",
    // "editor.selectionBackground": "#3c3c3c",
  },
});

const edi = editor.create(dom, {
  value: `<template>
  <div>
      vue template monaco
  </div>
</template>

<script>
export default {
  name:"App",
  data(){
      return {
          
      }
  },
}
<\/script>

<style>
.app{
  color:red
}
<\/style>`,
  language: "vue",
});

editor.setTheme("vue-theme");
```
:::

<img src='/setMonarchTokensProvider.png' />
