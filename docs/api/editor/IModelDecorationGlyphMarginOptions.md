# IModelDecorationGlyphMarginOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelDecorationGlyphMarginOptions.html
:::

```ts
interface IModelDecorationGlyphMarginOptions {
    persistLane?: boolean;
    position: GlyphMarginLane;
}
```

## persistLane
- 类型：`boolean`
- 描述：即使在该装饰的范围之外，也应渲染到位的字形边距车道。

## position
- 类型：[GlyphMarginLane](/api/editor/GlyphMarginLane.md)
- 描述：装饰的边距车道。
