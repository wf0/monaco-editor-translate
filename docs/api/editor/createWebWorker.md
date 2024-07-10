# createWebWorker

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.createWebWorker.html
:::

- 语法：`createWebWorker<T>(opts): MonacoWebWorker<T>`

- 泛型： `T extends object`

- 参数： `opts`: [IWebWorkerOptions](/api/editor/IWebWorkerOptions.md)

- 返回值：[MonacoWebWorker](/api/editor/MonacoWebWorker)`<T>`

- 描述：创建一个新的 Web Worker 实例

- 示例：

```js
const worker = editor.createWebWorker({
  moduleId: "myWorker",
  label: "My Worker",
  createData: {
    languageId: "javascript",
  },
});
console.log(worker);
```

- 输出

<p>
    <img src='/createWorker.png'/>
</p>