# IEditor

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditor.html
:::

```ts
interface IEditor {
    createDecorationsCollection(decorations?): IEditorDecorationsCollection;
    dispose(): void;
    focus(): void;
    getEditorType(): string;
    getId(): string;
    getModel(): IEditorModel;
    getPosition(): Position;
    getSelection(): Selection;
    getSelections(): Selection[];
    getSupportedActions(): IEditorAction[];
    getVisibleColumnFromPosition(position): number;
    hasTextFocus(): boolean;
    layout(dimension?, postponeRendering?): void;
    onDidDispose(listener): IDisposable;
    restoreViewState(state): void;
    revealLine(lineNumber, scrollType?): void;
    revealLineInCenter(lineNumber, scrollType?): void;
    revealLineInCenterIfOutsideViewport(lineNumber, scrollType?): void;
    revealLineNearTop(lineNumber, scrollType?): void;
    revealLines(startLineNumber, endLineNumber, scrollType?): void;
    revealLinesInCenter(lineNumber, endLineNumber, scrollType?): void;
    revealLinesInCenterIfOutsideViewport(lineNumber, endLineNumber, scrollType?): void;
    revealLinesNearTop(lineNumber, endLineNumber, scrollType?): void;
    revealPosition(position, scrollType?): void;
    revealPositionInCenter(position, scrollType?): void;
    revealPositionInCenterIfOutsideViewport(position, scrollType?): void;
    revealPositionNearTop(position, scrollType?): void;
    revealRange(range, scrollType?): void;
    revealRangeAtTop(range, scrollType?): void;
    revealRangeInCenter(range, scrollType?): void;
    revealRangeInCenterIfOutsideViewport(range, scrollType?): void;
    revealRangeNearTop(range, scrollType?): void;
    revealRangeNearTopIfOutsideViewport(range, scrollType?): void;
    saveViewState(): IEditorViewState;
    setModel(model): void;
    setPosition(position, source?): void;
    setSelection(selection, source?): void;
    setSelection(selection, source?): void;
    setSelection(selection, source?): void;
    setSelection(selection, source?): void;
    setSelections(selections, source?): void;
    trigger(source, handlerId, payload): void;
    updateOptions(newOptions): void;
}
```

## 快捷链接
<script setup>
const date = [
  { icon: "M", link: "createDecorationsCollection" },
  { icon: "M", link: "dispose" },
  { icon: "M", link: "focus" },
  { icon: "M", link: "getEditorType" },
  { icon: "M", link: "getId" },
  { icon: "M", link: "getModel" },
  { icon: "M", link: "getPosition" },
  { icon: "M", link: "getSelection" },
  { icon: "M", link: "getSelections" },
  { icon: "M", link: "getSupportedActions" },
  { icon: "M", link: "getVisibleColumnFromPosition" },
  { icon: "M", link: "hasTextFocus" },
  { icon: "M", link: "layout" },
  { icon: "M", link: "restoreViewState" },
  { icon: "M", link: "revealLine" },
  { icon: "M", link: "revealLineInCenter" },
  { icon: "M", link: "revealLineInCenterIfOutsideViewport" },
  { icon: "M", link: "revealLineNearTop" },
  { icon: "M", link: "revealLines" },
  { icon: "M", link: "revealLinesInCenter" },
  { icon: "M", link: "revealLinesInCenterIfOutsideViewport" },
  { icon: "M", link: "revealLinesNearTop" },
  { icon: "M", link: "revealPosition" },
  { icon: "M", link: "revealPositionInCenter" },
  { icon: "M", link: "revealPositionInCenterIfOutsideViewport" },
  { icon: "M", link: "revealPositionNearTop" },
  { icon: "M", link: "revealRange" },
  { icon: "M", link: "revealRangeAtTop" },
  { icon: "M", link: "revealRangeInCenter" },
  { icon: "M", link: "revealRangeInCenterIfOutsideViewport" },
  { icon: "M", link: "revealRangeNearTop" },
  { icon: "M", link: "revealRangeNearTopIfOutsideViewport" },
  { icon: "M", link: "saveViewState" },
  { icon: "M", link: "setModel" },
  { icon: "M", link: "setPosition" },
  { icon: "M", link: "setSelection" },
  { icon: "M", link: "setSelections" },
  { icon: "M", link: "trigger" },
  { icon: "M", link: "updateOptions" },
  { icon: "M", link: "onDidDispose" },
];
</script>
<dataItems :data="date" />

## createDecorationsCollection
- 语法：`createDecorationsCollection(decorations?): IEditorDecorationsCollection`
- 参数：`decorations?`：[IModelDeltaDecoration](/api/editor/IModelDeltaDecoration.md)[]
- 描述：创建一个装饰集合。通过此集合添加的所有装饰都将获得编辑器的所有者ID（这意味着它们不会显示在其他编辑器中）。当编辑器的模型更改时，这些装饰将自动清除。


## dispose
- 语法：`dispose(): void`
- 描述：销毁编辑器。


## focus
- 语法：`focus(): void`
- 描述：聚焦编辑器。


## getEditorType
- 语法：`getEditorType(): string`
- 描述：返回编辑器的类型。


## getId
- 语法：`getId(): string`
- 描述：返回编辑器的ID。


## getModel
- 语法：`getModel(): IEditorModel`
- 返回值：[IEditorModel](/api/editor/IEditorModel.md)
- 描述：返回编辑器的模型。


## getPosition
- 语法：`getPosition(): Position`
- 返回值：[Position](/api/Position.md)
- 描述：返回编辑器的当前光标位置。


## getSelection
- 语法：`getSelection(): Selection`
- 返回值：[Selection](/api/Selection.md)
- 描述：返回编辑器的当前选择。


## getSelections
- 语法：`getSelections(): Selection[]`
- 返回值：[Selection](/api/Selection.md)[]
- 描述：返回编辑器的当前选择。


## getSupportedActions
- 语法：`getSupportedActions(): IEditorAction[]`
- 返回值：[IEditorAction](/api/editor/IEditorAction.md)[]
- 描述：返回编辑器支持的所有操作。


## getVisibleColumnFromPosition
- 语法：`getVisibleColumnFromPosition(position): number`
- 参数: `position`：[IPosition](/api/IPosition.md)


## hasTextFocus
- 语法：`hasTextFocus(): boolean`
- 描述：返回编辑器是否具有焦点。


## layout
- 语法：`layout(dimension?, postponeRendering?): void`
- 参数：
  - `dimension?`：[IDimension](/api/editor/IDimension.md)
  - `postponeRendering`: `boolean`
- 描述：调整编辑器的布局。


## restoreViewState
- 语法：`restoreViewState(state): void`
- 参数：`state`：[IEditorViewState](/api/editor/IEditorViewState.md)
- 描述：恢复编辑器的视图状态。


## revealLine
- 语法：`revealLine(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`：`number`
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的行。


## revealLineInCenter
- 语法：`revealLineInCenter(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`：`number`
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的行，并将其置于视图中心。


## revealLineInCenterIfOutsideViewport
- 语法：`revealLineInCenterIfOutsideViewport(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`：`number`
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的行，并将其置于视图中心，如果行不在视图中。


## revealLineNearTop
- 语法：`revealLineNearTop(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`：`number`
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的行，并将其置于视图顶部。


## revealLines
- 语法：`revealLines(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`：`number`
  - `endLineNumber`：`number`
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的行。


## revealLinesInCenter
- 语法：`revealLinesInCenter(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`：`number`
  - `endLineNumber`：`number`
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的行，并将其置于视图中心。


## revealLinesInCenterIfOutsideViewport
- 语法：`revealLinesInCenterIfOutsideViewport(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`：`number`
  - `endLineNumber`：`number`
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的行，并将其置于视图中心，如果行不在视图中。


## revealLinesNearTop
- 语法：`revealLinesNearTop(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`：`number`
  - `endLineNumber`：`number`
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的行，并将其置于视图顶部。


## revealPosition
- 语法：`revealPosition(position, scrollType?): void`
- 参数：
  - `position`：[IPosition](/api/IPosition.md)
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的位置。


## revealPositionInCenter
- 语法：`revealPositionInCenter(position, scrollType?): void`
- 参数：
  - `position`：[IPosition](/api/IPosition.md)
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的位置，并将其置于视图中心。


## revealPositionInCenterIfOutsideViewport
- 语法：`revealPositionInCenterIfOutsideViewport(position, scrollType?): void`
- 参数：
  - `position`：[IPosition](/api/IPosition.md)
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的位置，并将其置于视图中心，如果位置不在视图中。


## revealPositionNearTop
- 语法：`revealPositionNearTop(position, scrollType?): void`
- 参数：
  - `position`：[IPosition](/api/IPosition.md)
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的位置，并将其置于视图顶部。


## revealRange
- 语法：`revealRange(range, scrollType?): void`
- 参数：
  - `range`：[IRange](/api/IRange.md)
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的范围。


## revealRangeAtTop
- 语法：`revealRangeAtTop(range, scrollType?): void`
- 参数：
  - `range`：[IRange](/api/IRange.md)
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的范围，并将其置于视图顶部。


## revealRangeInCenter
- 语法：`revealRangeInCenter(range, scrollType?): void`
- 参数：
  - `range`：[IRange](/api/IRange.md)
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的范围，并将其置于视图中心。


## revealRangeInCenterIfOutsideViewport
- 语法：`revealRangeInCenterIfOutsideViewport(range, scrollType?): void`
- 参数：
  - `range`：[IRange](/api/IRange.md)
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的范围，并将其置于视图中心，如果范围不在视图中。


## revealRangeNearTop
- 语法：`revealRangeNearTop(range, scrollType?): void`
- 参数：
  - `range`：[IRange](/api/IRange.md)
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的范围，并将其置于视图顶部。


## revealRangeNearTopIfOutsideViewport
- 语法：`revealRangeNearTopIfOutsideViewport(range, scrollType?): void`
- 参数：
  - `range`：[IRange](/api/IRange.md)
  - `scrollType?`：[ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定的范围，并将其置于视图顶部，如果范围不在视图中。


## saveViewState
- 语法：`saveViewState(): IEditorViewState`
- 返回值：[IEditorViewState](/api/editor/IEditorViewState.md)
- 描述：保存编辑器的视图状态。


## setModel
- 语法：`setModel(model): void`
- 参数：`model`: [ITextModel](/api/editor/ITextModel.md)
- 描述：设置编辑器的模型。


## setPosition
- 语法：`setPosition(position, source?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `source`：`string`
- 描述：设置编辑器的位置。


## setSelection
- 语法：`setSelection(selection, source): void`
- 参数：
  - `selection`: [Range](/api/Range.md)
  - `source`：`string`
- 描述：设置编辑器的选择。


## setSelections
- 语法：`setSelections(selections, source): void`
- 参数：
  - `selections`: [Selection](/api/Selection.md)[]
  - `source`：`string`
- 描述：设置编辑器的选择。


## trigger
- 语法：`trigger(source, handlerId, payload): void`
- 参数：
  - `source`：`string`
  - `handlerId`：`string`
  - `payload`：`any`
- 描述：触发编辑器事件。


## updateOptions
- 语法：`updateOptions(newOptions): void`
- 参数：`newOptions`: [IEditorOptions](/api/editor/IEditorOptions.md)
- 描述：更新编辑器的选项。


## onDidDispose
- 语法：`onDidDispose(listener: () => void): IDisposable`
- 参数：`listener: (() => void)`
- 返回值：[IDisposable](/api/IDisposable.md)
- 描述：监听编辑器被销毁的事件。