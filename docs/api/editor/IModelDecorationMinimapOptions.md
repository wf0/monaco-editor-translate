# IModelDecorationMinimapOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelDecorationMinimapOptions.html
:::

```ts
interface IModelDecorationMinimapOptions {
    color: string | ThemeColor;
    darkColor?: string | ThemeColor;
    position: MinimapPosition;
    sectionHeaderStyle?: MinimapSectionHeaderStyle;
    sectionHeaderText?: string;
}
```

## color
- 类型： `string`
- 描述：要渲染的CSS颜色。例如：rgba（100，100，0.5）或颜色注册表中的颜色
## darkColor
- 类型: `string`
- 描述：在深色主题下要渲染的CSS颜色。
## position
- 类型： [MinimapPosition](/api/editor/MinimapPosition.md)
- 描述：最小化地图中渲染的装饰器的位置
## sectionHeaderStyle
- 类型: [MinimapSectionHeaderStyle](/api/editor/MinimapSectionHeaderStyle.md)
- 描述：最小化地图中渲染的装饰器的位置
## sectionHeaderText
- 类型: `string`
- 描述：最小化地图中渲染的装饰器的位置