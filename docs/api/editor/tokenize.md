# tokenize

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.tokenize.html
:::

- 语法：`tokenize(text, languageId): Token[][]`

- 参数：
  - `text`: `string`
  - `languageId`: `string`
  
- 返回值：[Token](/api/Token.md)[][]

- 描述：对指定的文本进行语法分析，返回一个 Token 数组

- 示例：

```js
const text = 'function add(a, b) { return a + b; }';
const languageId = 'javascript';

const tokens = editor.tokenize(text, languageId);

console.log(tokens);

```