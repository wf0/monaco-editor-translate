# IModelDecorationOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelDecorationOptions.html
:::

模型装饰的选项。

```ts
interface IModelDecorationOptions {
    after?: InjectedTextOptions;
    afterContentClassName?: string;
    before?: InjectedTextOptions;
    beforeContentClassName?: string;
    blockClassName?: string;
    blockDoesNotCollapse?: boolean;
    blockIsAfterEnd?: boolean;
    blockPadding?: [top: number, right: number, bottom: number, left: number];
    className?: string;
    firstLineDecorationClassName?: string;
    glyphMargin?: IModelDecorationGlyphMarginOptions;
    glyphMarginClassName?: string;
    glyphMarginHoverMessage?: IMarkdownString | IMarkdownString[];
    hoverMessage?: IMarkdownString | IMarkdownString[];
    inlineClassName?: string;
    inlineClassNameAffectsLetterSpacing?: boolean;
    isWholeLine?: boolean;
    lineNumberClassName?: string;
    lineNumberHoverMessage?: IMarkdownString | IMarkdownString[];
    linesDecorationsClassName?: string;
    linesDecorationsTooltip?: string;
    marginClassName?: string;
    minimap?: IModelDecorationMinimapOptions;
    overviewRuler?: IModelDecorationOverviewRulerOptions;
    shouldFillLineOnLineBreak?: boolean;
    showIfCollapsed?: boolean;
    stickiness?: TrackedRangeStickiness;
    zIndex?: number;
}
```
## 快捷链接
<script setup>
const data = [
  { icon: "P", link: "after" },
  { icon: "P", link: "afterContentClassName" },
  { icon: "P", link: "before" },
  { icon: "P", link: "beforeContentClassName" },
  { icon: "P", link: "blockClassName" },
  { icon: "P", link: "blockDoesNotCollapse" },
  { icon: "P", link: "blockIsAfterEnd" },
  { icon: "P", link: "blockPadding" },
  { icon: "P", link: "className" },
  { icon: "P", link: "firstLineDecorationClassName" },
  { icon: "P", link: "glyphMargin" },
  { icon: "P", link: "glyphMarginClassName" },
  { icon: "P", link: "glyphMarginHoverMessage" },
  { icon: "P", link: "hoverMessage" },
  { icon: "P", link: "inlineClassName" },
  { icon: "P", link: "inlineClassNameAffectsLetterSpacing" },
  { icon: "P", link: "isWholeLine" },
  { icon: "P", link: "lineNumberClassName" },
  { icon: "P", link: "lineNumberHoverMessage" },
  { icon: "P", link: "linesDecorationsClassName" },
  { icon: "P", link: "linesDecorationsTooltip" },
  { icon: "P", link: "marginClassName" },
  { icon: "P", link: "minimap" },
  { icon: "P", link: "overviewRuler" },
  { icon: "P", link: "shouldFillLineOnLineBreak" },
  { icon: "P", link: "showIfCollapsed" },
  { icon: "P", link: "stickiness" },
  { icon: "P", link: "zIndex" },
];

</script>
<dataItems :data="data" />

## after
- 类型：[InjectedTextOptions](/api/editor/InjectedTextOptions.md)
- 描述：如果设置了，文本将被注入到该范围之后的视图中。

## afterContentClassName
- 类型：`string`
- 描述：如果设置，装饰将在具有此CSS类名的文本之后呈现。


## before
- 类型：[InjectedTextOptions](/api/editor/InjectedTextOptions.md)
- 描述：如果设置，文本将被注入到该范围之前的视图中。


## beforeContentClassName
- 类型：`string`
- 描述：如果设置，装饰将在具有此CSS类名的文本之前呈现。


## blockClassName
- 类型：`string`


## blockDoesNotCollapse
- 类型：`boolean`


## blockIsAfterEnd
- 类型：`boolean`
- 描述：如果设置，装饰将不会折叠。


## blockPadding
- 类型：`[top: number, right: number, bottom: number, left: number]`


## className
- 类型：`string`
- 描述：描述装饰的CSS类名。


## firstLineDecorationClassName
- 类型：`string`
- 描述：如果设置了，装饰将在具有此CSS类名的行装饰中呈现，但仅在换行的情况下用于第一行。


## glyphMargin
- 类型：[IModelDecorationGlyphMarginOptions](/api/editor/IModelDecorationGlyphMarginOptions.md)
- 描述：如果已设置，并且装饰已设置glyphMarginClassName，请在图示符边距中使用指定的IModelDecorationGlyphMargin选项渲染此装饰。


## glyphMarginClassName
- 类型：`string`
- 描述：如果设置了，装饰将在具有此CSS类名的字形边距中呈现。


## glyphMarginHoverMessage
- 类型：[IMarkdownString](/api/editor/IMarkdownString.md) | [IMarkdownString](/api/editor/IMarkdownString.md)[]
- 描述：将鼠标悬停在图示符边距装饰上时要呈现的消息。


## hoverMessage
- 类型：[IMarkdownString](/api/editor/IMarkdownString.md) | [IMarkdownString](/api/editor/IMarkdownString.md)[]
- 描述：要渲染为装饰消息的MarkdownString数组。


## inlineClassName
- 类型：`string`
- 描述：如果设置，装饰将与具有此CSS类名的文本内联呈现。请仅将其用于必须影响文本的CSS规则。例如，使用className进行背景色装饰。


## inlineClassNameAffectsLetterSpacing
- 类型：`boolean`
- 描述：如果存在影响字母间距的inlineClassName。


## isWholeLine
- 类型：`boolean`
- 描述：如果设置，装饰将呈现为整个行。


## lineNumberClassName
- 类型：`string`
- 描述：如果设置了该选项，则将在行号上渲染装饰。


## lineNumberHoverMessage
- 类型：[IMarkdownString](/api/editor/IMarkdownString.md) | [IMarkdownString](/api/editor/IMarkdownString.md)[]
- 描述：MarkdownString的数组，以呈现为行号消息。


## linesDecorationsClassName
- 类型：`string`
- 描述：如果设置，装饰将在具有此CSS类名的线条装饰中呈现。


## linesDecorationsTooltip
- 类型：`string`
- 描述：控制线条装饰的工具提示文本。


## marginClassName
- 类型：`string`
- 描述：如果设置，装饰将在具有此CSS类名的缩略图中呈现。


## minimap
- 类型：[IModelDecorationMinimapOptions](/api/editor/IModelDecorationMinimapOptions.md)
- 描述：如果已设置，并且装饰已设置marginClassName，请在缩略图中使用指定的IModelDecorationMinimap选项渲染此装饰。


## overviewRuler
- 类型：[IModelDecorationOverviewRulerOptions](/api/editor/IModelDecorationOverviewRulerOptions.md)
- 描述：如果已设置，并且装饰已设置marginClassName，请在概览标尺中使用指定的IModelDecorationOverviewRuler选项渲染此装饰。


## shouldFillLineOnLineBreak
- 类型：`boolean`
- 描述：如果设置，装饰将填充行。


## showIfCollapsed
- 类型：`boolean`
- 描述：如果设置，装饰将始终可见。


## stickiness
- 类型：[TrackedRangeStickiness](/api/editor/TrackedRangeStickiness.md)
- 描述：装饰的粘性。


## zIndex
- 类型：`number`
- 描述：装饰的zIndex。

