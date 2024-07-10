# create

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/editor.create.html
:::

::: warning 提示
这是创建编辑器的函数，在日常开发中，常用的是其返回值的属性进行项目开发，大家可以重点关注该方法！
:::

- 语法：`create(domElement, options?, override?): IStandaloneCodeEditor`

- 参数：
  - `domElement`: `HTMLElement`
  - `options`: [IStandaloneEditorConstructionOptions](/api/editor/IStandaloneEditorConstructionOptions.md)
  - `override`: [IEditorOverrideServices](/api/editor/IEditorOverrideServices.md)

- 返回值：[IStandaloneCodeEditor](/api/editor/IStandaloneCodeEditor.md)

- 描述：创建编辑器示例

- 示例：

```js
const myEditor = editor.create(document.querySelector(".editor"), {
  value: `function add(a, b) { return a + b; }`,
  language: "javascript",
});
```

- 输出：

<p>
  <img src='/createMyEditor.png'/>
</p>
