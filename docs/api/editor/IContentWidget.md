# IContentWidget
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IContentWidget.html
:::

内容小部件与文本内联呈现，并且可以很容易地放置在编辑器位置的“附近”。

```ts
interface IContentWidget {
    allowEditorOverflow?: boolean;
    suppressMouseDown?: boolean;
    afterRender?(position): void;
    beforeRender?(): IDimension;
    getDomNode(): HTMLElement;
    getId(): string;
    getPosition(): IContentWidgetPosition;
}
```

## allowEditorOverflow
- 类型: `boolean`
- 描述：在可能溢出编辑器的视图dom节点的位置渲染此内容小部件。


## suppressMouseDown
- 类型: `boolean`
- 描述：如果为true，则阻止内容小部件处理鼠标点击。


## afterRender
- 语法：`afterRender(position): void`
- 参数：`position`: [ContentWidgetPositionPreference](/api/editor/ContentWidgetPositionPreference.md)
- 描述：呈现内容小部件后调用的可选函数。使用选定的位置首选项调用，如果未渲染，则为null。


## beforeRender
- 语法：`beforeRender(): IDimension`
- 返回值: [IDimension](/api/editor/IDimension.md)
- 描述：在呈现内容小部件之前调用的可选函数。如果返回一个维度，编辑器将尝试使用它。


## getDomNode
- 语法：`getDomNode(): HTMLElement`
- 返回值: `HTMLElement`
- 描述：返回内容小部件的dom节点。


## getId
- 语法：`getId(): string`
- 返回值: `string`
- 描述：返回内容小部件的id。



## getPosition
- 语法：`getPosition(): IContentWidgetPosition`
- 返回值: [IContentWidgetPosition](/api/editor/IContentWidgetPosition.md)
- 描述：获取内容小部件的位置。如果返回null，则内容小部件将被置于屏幕外。

