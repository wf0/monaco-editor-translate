# IEditorScrollbarOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorScrollbarOptions.html
:::


编辑器滚动条的配置选项

```ts
interface IEditorScrollbarOptions {
    alwaysConsumeMouseWheel?: boolean;
    arrowSize?: number;
    handleMouseWheel?: boolean;
    horizontal?: "auto" | "visible" | "hidden";
    horizontalHasArrows?: boolean;
    horizontalScrollbarSize?: number;
    horizontalSliderSize?: number;
    ignoreHorizontalScrollbarInContentHeight?: boolean;
    scrollByPage?: boolean;
    useShadows?: boolean;
    vertical?: "auto" | "visible" | "hidden";
    verticalHasArrows?: boolean;
    verticalScrollbarSize?: number;
    verticalSliderSize?: number;
}
```

## alwaysConsumeMouseWheel
- 类型: `boolean`
- 描述：始终使用鼠标滚轮事件（始终对浏览器事件调用preventDefault（）和stopPropagation（））。默认为true。注意：无法使用updateOptions（）更新此选项

## arrowSize
- 类型: `number`
- 描述：滚动条箭头的大小。默认为11。

## handleMouseWheel
- 类型: `boolean`
- 描述：是否处理鼠标滚轮事件。默认为true。

## horizontal
- 类型: `"auto" | "visible" | "hidden"`
- 描述：水平滚动条的显示方式。默认为"auto"。

## horizontalHasArrows
- 类型: `boolean`
- 描述：是否显示水平滚动条的箭头。默认为true。

## horizontalScrollbarSize
- 类型: `number`
- 描述：水平滚动条的大小。默认为10。

## horizontalSliderSize
- 类型: `number`
- 描述：水平滚动条滑块的大小。默认为10。

## ignoreHorizontalScrollbarInContentHeight
- 类型: `boolean`
- 描述：是否忽略水平滚动条在内容高度中的影响。默认为false。

## scrollByPage
- 类型: `boolean`
- 描述：是否使用页面滚动。默认为false。

## useShadows
- 类型: `boolean`
- 描述：是否使用阴影。默认为true。

## vertical
- 类型: `"auto" | "visible" | "hidden"`
- 描述：垂直滚动条的显示方式。默认为"auto"。

## verticalHasArrows
- 类型: `boolean`
- 描述：是否显示垂直滚动条的箭头。默认为true。

## verticalScrollbarSize
- 类型: `number`
- 描述：垂直滚动条的大小。默认为10。

## verticalSliderSize
- 类型: `number`
- 描述：垂直滚动条滑块的大小。默认为10。
