# getEncodedLanguageId

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.getEncodedLanguageId.html
:::


- 语法：`getEncodedLanguageId(languageId): number`

- 参数：`languageId`: `string`

- 返回值：`number`

- 描述：用于获取指定语言的编码ID

- 示例：

```js
const allLanguages = languages.getLanguages();
console.log(allLanguages);
// 这个 ID 就是 languages.getLanguages(); 数组中的下标
const jsID = languages.getEncodedLanguageId("javascript");
console.log(jsID);
```

- 输出：

<img src='/getEncodeLanguagesID.png'/>

