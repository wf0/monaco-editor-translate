# IModelChangedEvent
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelChangedEvent.html
:::

```ts
interface IModelChangedEvent {
    newModelUrl: Uri;
    oldModelUrl: Uri;
}
```
## newModelUrl
- 类型: [Uri](/api/Uri.md)
- 描述: 新的模型 URL
## oldModelUrl
- 类型: [Uri](/api/Uri.md)
- 描述: 旧的模型 URL