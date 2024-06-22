# colorizeElement
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.colorizeElement.html
:::

- 语法：`colorizeElement(domNode, options): Promise<void>`

- 参数：
  - `domNode`: `HTMLElement`
  - `options`: [IColorizerElementOptions](/api/editor/IColorizerElementOptions.md)

- 返回值：`Promise<void>`

- 描述：对指定的 HTML 元素进行语法高亮处理

- 示例：

```js
// 将普通的 htmlElement 转换为高亮显示
<div class="main">function add(a, b) { return a + b; }</div>

editor.colorizeElement(document.querySelector(".main"), {
  mimeType: "javascript",
});
```

- 输出：

<p>
  <img src='/colorizeElement.png'/>
</p>
