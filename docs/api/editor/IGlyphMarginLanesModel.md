# IGlyphMarginLanesModel

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IGlyphMarginLanesModel.html
:::

```ts
interface IGlyphMarginLanesModel {
    requiredLanes: number;
    getLanesAtLine(lineNumber): GlyphMarginLane[];
    push(lane, range, persist?): void;
    reset(maxLine): void;
}
```

## requiredLanes
- 类型：`number`
- 描述：应在编辑器中渲染的车道数。

## getLanesAtLine
- 语法：`getLanesAtLine(lineNumber): GlyphMarginLane[]`
- 参数：`lineNumber: number`
- 返回值：[GlyphMarginLane](/api/editor/GlyphMarginLane.md)[]
- 描述：获取应从给定行号开始呈现的通道。

## push
- 语法：`push(lane, range, persist?): void`
- 参数：
  - `lane`: [GlyphMarginLane](/api/editor/GlyphMarginLane.md)
  - `range`: [Range](/api/Range.md)
  - `persist`: `boolean`
- 描述：如果为true，请注意车道应该始终可见，即使在没有特定车道请求的线路上也是如此。


## reset
- 语法：`reset(maxLine): void`
- 参数：`maxLine: number`
- 描述：重置模型。

