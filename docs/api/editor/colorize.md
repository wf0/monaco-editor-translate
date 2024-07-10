# colorize

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.colorize.html
:::

- 语法：`colorize(text, languageId, options?): Promise<string>`

- 参数：
    - `text`: string
    - `languageId`: string
    - `options`:[IColorizerOptions](/api/editor/IColorizerOptions)

- 返回值：`Promise<string>`

- 描述：对文本进行语法高亮处理，其中text是需要高亮的文本，languageId是语言类型，options是可选参数。

- 示例：

```js
const myEditor = editor.create(document.querySelector(".editor"), {
  value: `<template>App</template>`,
});

editor.colorize("<template>App</template>", "html").then((html) => {
  document.querySelector(".main").innerHTML = html;
});
```

- 输出：

<p>
  <img src='/colorize.png'/>
</p>
