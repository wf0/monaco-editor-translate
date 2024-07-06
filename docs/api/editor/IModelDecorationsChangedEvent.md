# IModelDecorationsChangedEvent
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelDecorationsChangedEvent.html
:::

描述模型装饰发生变化的事件。

```ts
interface IModelDecorationsChangedEvent {
    affectsGlyphMargin: boolean;
    affectsLineNumber: boolean;
    affectsMinimap: boolean;
    affectsOverviewRuler: boolean;
}
```
## affectsGlyphMargin
- 类型: `boolean`
## affectsLineNumber
- 类型: `boolean`
## affectsMinimap
- 类型: `boolean`
## affectsOverviewRuler
- 类型: `boolean`