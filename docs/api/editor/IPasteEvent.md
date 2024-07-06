# IPasteEvent
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IPasteEvent.html
:::


源自编辑器的粘贴事件。


```ts
interface IPasteEvent {
    clipboardEvent?: ClipboardEvent;
    languageId: string;
    range: Range;
}
```

## clipboardEvent
- 类型: `ClipboardEvent`
## languageId
- 类型: `string`
## range
- 类型: [Range](/api/Range.md)