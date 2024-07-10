# colorizeModelLine

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.colorizeModelLine.html
:::


- 语法：`colorizeModelLine(model, lineNumber, tabSize?): string`

- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `lineNumber`: `number`
  - `tabSize`: `number`

- 返回值：`string`

- 描述：对指定的文本模型的指定行进行语法高亮处理

- 示例：

```js
const model = editor.createModel('function add(a, b) { return a + b; }', 'text/javascript');

const html = editor.colorizeModelLine(model, 1, 4);

console.log(html);
```

- 输出：

<p>
  <img src='/colorizeModelLine.png'/>
</p>
