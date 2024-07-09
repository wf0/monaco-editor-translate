# IColorPresentation
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IColorPresentation.html
:::


颜色的字符串表示

```ts
interface IColorPresentation {
    additionalTextEdits?: TextEdit[];
    label: string;
    textEdit?: TextEdit;
}
```

## additionalTextEdits
- 类型: [TextEdit](/api/languages/TextEdit.md)[]
- 描述：选择此颜色演示文稿时应用的附加文本编辑的可选数组。

## label
- 类型: `string`
- 描述：此颜色演示文稿的标签。

## textEdit
- 类型: [TextEdit](/api/languages/TextEdit.md)
- 描述：选择此颜色演示文稿时应用的文本编辑。
