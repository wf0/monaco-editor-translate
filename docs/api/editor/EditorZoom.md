# EditorZoom

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorZoom.html
:::

```ts
interface IEditorZoom {
    onDidChangeZoomLevel: IEvent<number>;
    getZoomLevel(): number;
    setZoomLevel(zoomLevel): void;
}
```

## onDidChangeZoomLevel
- 类型：[IEvent](/api/IEvent.md)`<number>`

## getZoomLevel
- 语法：`getZoomLevel(): number`

## setZoomLevel
- 语法：`setZoomLevel(zoomLevel): void`
- 参数：`zoomLevel`: `number`
