# IOverlayWidget

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IOverlayWidget.html
:::


覆盖窗口小部件在文本的顶部进行渲染。

```ts
interface IOverlayWidget {
    allowEditorOverflow?: boolean;
    onDidLayout?: IEvent<void>;
    getDomNode(): HTMLElement;
    getId(): string;
    getMinContentWidthInPx?(): number;
    getPosition(): IOverlayWidgetPosition;
}
```

## allowEditorOverflow
- 类型：`boolean`
- 描述：在可能溢出编辑器的视图dom节点的位置渲染此覆盖小部件。

## onDidLayout
- 类型：`IEvent<void>`
- 描述：当小部件布局发生变化时触发。

## getDomNode
- 语法：`getDomNode(): HTMLElement`
- 描述：返回小部件的dom节点。


## getId
- 语法：`getId(): string`
- 描述：返回小部件的id。


## getMinContentWidthInPx
- 语法：`getMinContentWidthInPx?(): number`
- 描述：返回小部件的最小内容宽度。


## getPosition
- 语法：`getPosition(): IOverlayWidgetPosition`
- 返回值：[IOverlayWidgetPosition](/api/editor/IOverlayWidgetPosition.md)
- 描述：返回小部件的位置。

