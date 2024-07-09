# IColorInformation
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IColorInformation.html
:::

颜色范围是文本模型中表示颜色的范围。

```ts
interface IColorInformation {
    color: IColor;
    range: IRange;
}
```

## color
- 类型: [IColor](/api/languages/IColor.md)
- 描述：在此范围内表示的颜色。
## range
- 类型: [IRange](/api/IRange.md)
- 描述：模型内的范围。