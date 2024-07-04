# IDiffEditorModel
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDiffEditorModel.html
:::

diff编辑器的模型。

```ts
interface IDiffEditorModel {
    modified: ITextModel;
    original: ITextModel;
}
```



## modified
- 类型：[ITextModel](/api/editor/ITextModel.md)
- 描述：修改后的模型。
## original
- 类型：[ITextModel](/api/editor/ITextModel.md)
- 描述：原始模型。