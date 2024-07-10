# IEditorMinimapOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorMinimapOptions.html
:::

编辑器最小映射的配置选项

```ts
interface IEditorMinimapOptions {
    autohide?: boolean;
    enabled?: boolean;
    maxColumn?: number;
    renderCharacters?: boolean;
    scale?: number;
    sectionHeaderFontSize?: number;
    sectionHeaderLetterSpacing?: number;
    showMarkSectionHeaders?: boolean;
    showRegionSectionHeaders?: boolean;
    showSlider?: "always" | "mouseover";
    side?: "right" | "left";
    size?: "proportional" | "fill" | "fit";
}
```

## autohide
- 类型：`boolean`
- 描述：是否自动隐藏
## enabled
- 类型：`boolean`
- 描述：是否启用
## maxColumn
- 类型：`number`
- 描述：最大列数
## renderCharacters
- 类型：`boolean`
- 描述：是否渲染字符
## scale
- 类型：`number`
- 描述：缩放
## sectionHeaderFontSize
- 类型：`number`
- 描述：字体大小
## sectionHeaderLetterSpacing
- 类型：`number`
- 描述：字间距
## showMarkSectionHeaders
- 类型：`boolean`
- 描述：是否显示标记区标题
## showRegionSectionHeaders
- 类型：`boolean`
- 描述：是否显示区域标题
## showSlider
- 类型：`"always" | "mouseover"`
- 描述：是否显示滑块
## side
- 类型：`"right" | "left"`
- 描述：侧边
## size
- 类型：`"proportional" | "fill" | "fit"`
- 描述：大小