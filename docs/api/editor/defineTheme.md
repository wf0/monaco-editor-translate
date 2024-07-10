# defineTheme

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.defineTheme.html
:::


- 语法：`defineTheme(themeName, themeData): void`

- 参数： 
  - `themeName`: `string`
  - `themeData`: [IStandaloneThemeData](/api/editor/IStandaloneThemeData.md)

- 返回值：`void`

- 描述：定义一个主题

- 示例：

```js
const dom = document.querySelector(".editor");
editor.create(dom, {
  value: "// hello world",
  language: "javascript",
});
editor.defineTheme("myTheme", {
  base: "vs",
  inherit: true,
  rules: [
    { token: "comment", foreground: "ffa500", fontStyle: "italic" },
    { token: "keyword", foreground: "00ff00" },
    { token: "string", foreground: "ff0000" },
  ],
  colors: {
    "editor.background": "#1e1e1e",
    "editor.foreground": "#d4d4d4",
    "editorCursor.foreground": "#d4d4d4",
    "editor.lineHighlightBackground": "#3c3c3c",
    "editorLineNumber.foreground": "#d4d4d4",
    "editor.selectionBackground": "#3c3c3c",
  },
});
editor.setTheme("myTheme");
```

- 输出：

<p>
    <img src='/defineTheme.png' />
</p>