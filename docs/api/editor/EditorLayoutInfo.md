# EditorLayoutInfo

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.EditorLayoutInfo.html
:::

编辑器的内部布局详细信息。

```ts
interface EditorLayoutInfo {
    contentLeft: number;
    contentWidth: number;
    decorationsLeft: number;
    decorationsWidth: number;
    glyphMarginDecorationLaneCount: number;
    glyphMarginLeft: number;
    glyphMarginWidth: number;
    height: number;
    horizontalScrollbarHeight: number;
    isViewportWrapping: boolean;
    isWordWrapMinified: boolean;
    lineNumbersLeft: number;
    lineNumbersWidth: number;
    minimap: EditorMinimapLayoutInfo;
    overviewRuler: OverviewRulerPosition;
    verticalScrollbarWidth: number;
    viewportColumn: number;
    width: number;
    wrappingColumn: number;
}
```

## 快捷链接
<script setup>
    const data = [
  { icon: "P", link: "contentLeft" },
  { icon: "P", link: "contentWidth" },
  { icon: "P", link: "decorationsLeft" },
  { icon: "P", link: "decorationsWidth" },
  { icon: "P", link: "glyphMarginDecorationLaneCount" },
  { icon: "P", link: "glyphMarginLeft" },
  { icon: "P", link: "glyphMarginWidth" },
  { icon: "P", link: "height" },
  { icon: "P", link: "horizontalScrollbarHeight" },
  { icon: "P", link: "isViewportWrapping" },
  { icon: "P", link: "isWordWrapMinified" },
  { icon: "P", link: "lineNumbersLeft" },
  { icon: "P", link: "lineNumbersWidth" },
  { icon: "P", link: "minimap" },
  { icon: "P", link: "overviewRuler" },
  { icon: "P", link: "verticalScrollbarWidth" },
  { icon: "P", link: "viewportColumn" },
  { icon: "P", link: "width" },
  { icon: "P", link: "wrappingColumn" },
];

</script>
<dataItems :data="data"/>

## contentLeft
- 类型：`number`
- 描述：内容的左侧位置（实际文本）

## contentWidth
- 类型：`number`
- 描述：内容的宽度（实际文本）

## decorationsLeft
- 类型：`number`
- 描述：线条装饰的左侧位置。

## decorationsWidth
- 类型：`number`
- 描述：线条装饰的宽度。

## glyphMarginDecorationLaneCount
- 类型：`number`
- 描述：要在图示符边距中渲染的装饰车道数。

## glyphMarginLeft
- 类型：`number`
- 描述：图示符边距的左侧位置。

## glyphMarginWidth
- 类型：`number`
- 描述：字形边距的宽度。

## height
- 类型：`number`
- 描述：完全编辑器高度。

## horizontalScrollbarHeight
- 类型：`number`
- 描述：水平滚动条的高度。

## isViewportWrapping
- 类型：`boolean`

## isWordWrapMinified
- 类型：`boolean`

## lineNumbersLeft
- 类型：`number`
- 描述：行号的左侧位置。

## lineNumbersWidth
- 类型：`number`
- 描述：行号的宽度。

## minimap
- 类型：[EditorMinimapLayoutInfo](/api/editor/EditorMinimapLayoutInfo.md)
- 描述：最小映射的布局信息

## overviewRuler
- 类型：[OverviewRulerPosition](/api/editor/OverviewRulerPosition.md)
- 描述：概览标尺的位置。

## verticalScrollbarWidth
- 类型：`number`
- 描述：垂直滚动条的宽度。

## viewportColumn
- 类型：`number`
- 描述：适合视口线上的列数（典型字符）。

## width
- 类型：`number`
- 描述：宽度

## wrappingColumn
- 类型：`number`
