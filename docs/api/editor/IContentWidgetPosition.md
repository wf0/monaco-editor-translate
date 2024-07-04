# IContentWidgetPosition
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IContentWidgetPosition.html
:::

用于呈现内容小部件的位置。

```ts
interface IContentWidgetPosition {
    position: IPosition;
    positionAffinity?: PositionAffinity;
    preference: ContentWidgetPositionPreference[];
    secondaryPosition?: IPosition;
}
```

## position
- 类型：[IPosition](/api/IPosition.md)
- 描述：内容小部件的位置。


## positionAffinity
- 类型：[PositionAffinity](/api/editor/PositionAffinity.md)
- 描述：多个视图位置引用同一（模型）位置时的放置首选项。当涉及到注入的文本时，这起到了一定的作用。


## preference
- 类型：[ContentWidgetPositionPreference](/api/editor/ContentWidgetPositionPreference.md)[]
- 描述：位置的首选项，按首选项的顺序排列。


## secondaryPosition
- 类型：[IPosition](/api/IPosition.md)
- 描述：如果存在，则表示内容小部件的位置。

