# IViewZone

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IViewZone.html
:::

视图区域是一个完整的水平矩形，它向下“推”文本。编辑器在渲染时为视图区域保留空间。

```ts
interface IViewZone {
    afterColumn?: number;
    afterColumnAffinity?: PositionAffinity;
    afterLineNumber: number;
    domNode: HTMLElement;
    heightInLines?: number;
    heightInPx?: number;
    marginDomNode?: HTMLElement;
    minWidthInPx?: number;
    onComputedHeight?: ((height) => void);
    onDomNodeTop?: ((top) => void);
    ordinal?: number;
    showInHiddenAreas?: boolean;
    suppressMouseDown?: boolean;
}
```

## afterColumn
- 类型: `number`
- 描述：此区域应出现在其后面的列。如果未设置，将使用afterLineNumber的maxLineColumn。这与换行有关。
## afterColumnAffinity
- 类型: [PositionAffinity](/api/editor/PositionAffinity.md)
- 描述：如果设置，则此区域应出现在其后。如果未设置，则此区域应出现在其后。
## afterLineNumber
- 类型: `number`
- 描述: 此区域应出现在此行之后。
## domNode
- 类型: `HTMLElement`
- 描述: 此区域应包含的HTML元素。
## heightInLines
- 类型: `number`
- 描述: 此区域应占多少行。
## heightInPx
- 类型: `number`
- 描述: 此区域应占多少像素。
## marginDomNode
- 类型: `HTMLElement`
- 描述: 视图区域的可选dom节点，该节点将放置在边距区域中。
## minWidthInPx
- 类型: `number`
- 描述: 此区域应具有的最小宽度。
## onComputedHeight
- 类型: `((height) => void)`
- 参数：`height`：`number`
- 描述: 此区域高度更改时调用。
## onDomNodeTop
- 类型: `((top) => void)`
- 参数：`top`：`number`
- 描述: 此区域位置更改时调用。
## ordinal
- 类型: `number`
- 描述: 此区域在渲染时显示的顺序。
## showInHiddenAreas
- 类型: `boolean`
- 描述: 此区域是否应显示在隐藏区域中。
## suppressMouseDown
- 类型: `boolean`
- 描述: 此区域是否应阻止鼠标事件。