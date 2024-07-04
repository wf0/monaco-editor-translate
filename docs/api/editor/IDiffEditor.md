# IDiffEditor
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDiffEditor.html
:::


一个丰富的差异编辑器。

```ts
interface IDiffEditor {
    onDidChangeModel: IEvent<void>;
    onDidUpdateDiff: IEvent<void>;
    accessibleDiffViewerNext(): void;
    accessibleDiffViewerPrev(): void;
    createDecorationsCollection(decorations?): IEditorDecorationsCollection;
    createViewModel(model): IDiffEditorViewModel;
    dispose(): void;
    focus(): void;
    getContainerDomNode(): HTMLElement;
    getEditorType(): string;
    getId(): string;
    getLineChanges(): ILineChange[];
    getModel(): IDiffEditorModel;
    getModifiedEditor(): ICodeEditor;
    getOriginalEditor(): ICodeEditor;
    getPosition(): Position;
    getSelection(): Selection;
    getSelections(): Selection[];
    getSupportedActions(): IEditorAction[];
    getVisibleColumnFromPosition(position): number;
    goToDiff(target): void;
    handleInitialized(): void;
    hasTextFocus(): boolean;
    layout(dimension?, postponeRendering?): void;
    onDidDispose(listener): IDisposable;
    restoreViewState(state): void;
    revealFirstDiff(): unknown;
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
    saveViewState(): IDiffEditorViewState;
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
const data = [
  { icon: "M", link: "accessibleDiffViewerNext" },
  { icon: "M", link: "accessibleDiffViewerPrev" },
  { icon: "M", link: "createDecorationsCollection" },
  { icon: "M", link: "createViewModel" },
  { icon: "M", link: "dispose" },
  { icon: "M", link: "focus" },
  { icon: "M", link: "getContainerDomNode" },
  { icon: "M", link: "getEditorType" },
  { icon: "M", link: "getId" },
  { icon: "M", link: "getLineChanges" },
  { icon: "M", link: "getModel" },
  { icon: "M", link: "getModifiedEditor" },
  { icon: "M", link: "getOriginalEditor" },
  { icon: "M", link: "getPosition" },
  { icon: "M", link: "getSelection" },
  { icon: "M", link: "getSelections" },
  { icon: "M", link: "getSupportedActions" },
  { icon: "M", link: "getVisibleColumnFromPosition" },
  { icon: "M", link: "goToDiff" },
  { icon: "M", link: "handleInitialized" },
  { icon: "M", link: "hasTextFocus" },
  { icon: "M", link: "layout" },
  { icon: "M", link: "restoreViewState" },
  { icon: "M", link: "revealFirstDiff" },
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
  { icon: "P", link: "onDidChangeModel" },
  { icon: "P", link: "onDidUpdateDiff" },
  { icon: "M", link: "onDidDispose" },
];

</script>
<dataItems :data="data" />



## accessibleDiffViewerNext
- 语法：`accessibleDiffViewerNext(): void`

## accessibleDiffViewerPrev
- 语法：`accessibleDiffViewerPrev(): void`


## createDecorationsCollection
- 语法：`createDecorationsCollection(decorations?): IEditorDecorationsCollection`
- 参数：`decorations?`：[IModelDeltaDecoration](/api/editor/IModelDeltaDecoration.md)[]
- 返回值：[IEditorDecorationsCollection](/api/editor/IEditorDecorationsCollection.md)
- 描述：创建一个装饰集合。通过此集合添加的所有装饰都将获得编辑器的所有者ID（这意味着它们不会显示在其他编辑器中）。当编辑器的模型更改时，这些装饰将自动清除。

## createViewModel
- 语法：`createViewModel(model): IDiffEditorViewModel`
- 参数：`model`：[IModel](/api/editor/IModel.md)
- 返回值：[IDiffEditorViewModel](/api/editor/IDiffEditorViewModel.md)
- 描述：创建一个视图模型。


## dispose
- 语法：`dispose(): void`
- 描述：销毁编辑器。


## focus
- 语法：`focus(): void`
- 描述：聚焦编辑器。


## getContainerDomNode
- 语法：`getContainerDomNode(): HTMLElement`
- 返回值：`HTMLElement`
- 描述：获取编辑器容器的 DOM 节点。


## getEditorType
- 语法：`getEditorType(): string`
- 描述：获取编辑器的类型。


## getId
- 语法：`getId(): string`
- 描述：获取编辑器的 ID。


## getLineChanges
- 语法：`getLineChanges(): ILineChange[]`
- 返回值：[ILineChange](/api/editor/ILineChange.md)
- 描述：获取编辑器中的行更改。

## getModel
- 语法：`getModel(): ITextModel`
- 返回值：[ITextModel](/api/editor/ITextModel.md)
- 描述：获取编辑器的模型。


## getModifiedEditor
- 语法：`getModifiedEditor(): ICodeEditor`
- 返回值：[ICodeEditor](/api/editor/ICodeEditor.md)
- 描述：获取编辑器中的修改编辑器。


## getOriginalEditor
- 语法：`getOriginalEditor(): ICodeEditor`
- 返回值：[ICodeEditor](/api/editor/ICodeEditor.md)
- 描述：获取编辑器中的原始编辑器。


## getPosition
- 语法：`getPosition(): Position`
- 返回值：[Position](/api/Position.md)
- 描述：获取编辑器中的当前位置。


## getSelection
- 语法：`getSelection(): Selection`
- 返回值：[Selection](/api/Selection.md)
- 描述：获取编辑器中的当前选择。


## getSelections
- 语法：`getSelections(): Selection[]`
- 返回值：[Selection](/api/Selection.md)[]
- 描述：获取编辑器中的当前选择。


## getSupportedActions
- 语法：`getSupportedActions(): IEditorAction[]`
- 返回值：[IEditorAction](/api/editor/IEditorAction.md)[]
- 描述：获取编辑器支持的操作。


## getVisibleColumnFromPosition
- 语法：`getVisibleColumnFromPosition(position): number`
- 参数：`position`：[IPosition](/api/IPosition.md)
- 描述：获取编辑器中的当前位置的可见列。

## goToDiff
- 语法：`goToDiff(target): void`
- 参数：`target`: `"next" | "previous"`
- 描述：跳转到差异。


## handleInitialized
- 语法：`handleInitialized(): void`
- 描述：处理编辑器初始化。


## hasTextFocus
- 语法：`hasTextFocus(): boolean`
- 描述：检查编辑器是否具有焦点。


## layout
- 语法：`layout(dimension?, postponeRendering?): void`
- 参数：
  - `dimension`：[IDimension](/api/editor/IDimension.md)
  - `postponeRendering`：`boolean` 延迟渲染
- 描述：布局编辑器。


## restoreViewState
- 语法：`restoreViewState(state): void`
- 参数：`state`：[IDiffEditorViewState](/api/editor/IDiffEditorViewState.md)
- 描述：恢复编辑器的视图状态。


## revealFirstDiff
- 语法：`revealFirstDiff(): unknown`
- 描述：显示差异。


## revealLine
- 语法：`revealLine(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`：`number`
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直滚动并显示一条线。


## revealLineInCenter
- 语法：`revealLineInCenter(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`：`number`
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直滚动并显示一条线，并确保该线位于视图中心。


## revealLineInCenterIfOutsideViewport
- 语法：`revealLineInCenterIfOutsideViewport(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`：`number`
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直滚动并显示一条线，并确保该线位于视图中心，如果它不在视图中。


## revealLineNearTop
- 语法：`revealLineNearTop(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`：`number`
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直滚动并显示一条线，并确保该线位于视图顶部。


## revealLines
- 语法：`revealLines(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`：`number`
  - `endLineNumber`：`number`
- 描述：根据需要垂直滚动并显示一条线。


## revealLinesInCenter
- 语法：`revealLinesInCenter(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`：`number`
  - `endLineNumber`：`number`
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直滚动并显示一条线，并确保该线位于视图中心。


## revealLinesInCenterIfOutsideViewport
- 语法：`revealLinesInCenterIfOutsideViewport(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`：`number`
  - `endLineNumber`：`number`
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直滚动并显示一条线，并确保该线位于视图中心，如果它不在视图中。


## revealLinesNearTop
- 语法：`revealLinesNearTop(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`：`number`
  - `endLineNumber`：`number`
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直滚动并显示一条线，并确保该线位于视图顶部。


## revealPosition
- 语法：`revealPosition(position, scrollType?): void`
- 参数：
  - `position`：[IPosition](/api/IPosition.md)
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示位置。


## revealPositionInCenter
- 语法：`revealPositionInCenter(position, scrollType?): void`
- 参数：
  - `position`：[IPosition](/api/IPosition.md)
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示位置，并确保该位置位于视图中心。


## revealPositionInCenterIfOutsideViewport
- 语法：`revealPositionInCenterIfOutsideViewport(position, scrollType?): void`
- 参数：
  - `position`：[IPosition](/api/IPosition.md)
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示位置，并确保该位置位于视图中心，如果它不在视图中。


## revealPositionNearTop
- 语法：`revealPositionNearTop(position, scrollType?): void`
- 参数：
  - `position`：[IPosition](/api/IPosition.md)
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示位置，并确保该位置位于视图顶部。


## revealRange
- 语法：`revealRange(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围。


## revealRangeAtTop
- 语法：`revealRangeAtTop(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围，并确保该范围位于视图顶部。


## revealRangeInCenter
- 语法：`revealRangeInCenter(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围，并确保该范围位于视图中心。


## revealRangeInCenterIfOutsideViewport
- 语法：`revealRangeInCenterIfOutsideViewport(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围，并确保该范围位于视图中心，如果它不在视图中。


## revealRangeNearTop
- 语法：`revealRangeNearTop(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围，并确保该范围位于视图顶部。


## revealRangeNearTopIfOutsideViewport
- 语法：`revealRangeNearTopIfOutsideViewport(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`：[ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围，并确保该范围位于视图顶部，如果它不在视图中。


## saveViewState
- 语法：`saveViewState(): IDiffEditorViewState`
- 返回值：[IDiffEditorViewState](/api/editor/IDiffEditorViewState.md)
- 描述：保存视图状态。


## setModel
- 语法：`setModel(model): void`
- 参数：`model`: [IDiffEditorModel](/api/editor/IDiffEditorModel.md) | [IDiffEditorViewModel](/api/editor/IDiffEditorViewModel.md)
- 描述：设置编辑器模型。

## setPosition
- 语法：`setPosition(position, source?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `source`: `string`
- 描述：设置编辑器位置。


## setSelection
- 语法：`setSelection(selection, source?): void`
- 参数：
  - `selection`: [ISelection](/api/ISelection.md)
  - `source`: `string`
- 描述：设置编辑器选择。


## setSelections
- 语法：`setSelections(selections, source?): void`
- 参数：
  - `selections`: [ISelection](/api/ISelection.md)[]
  - `source`: `string`
- 描述：设置编辑器选择。


## trigger
- 语法：`trigger(source, handlerId, payload): void`
- 参数：
  - `source`: `string`
  - `handlerId`: `string`
  - `payload`: `any`
- 描述：触发编辑器命令。


## updateOptions
- 语法：`updateOptions(newOptions): void`
- 参数：`newOptions`: [IDiffEditorOptions](/api/editor/IDiffEditorOptions.md)
- 描述：更新编辑器选项。


## onDidChangeModel
- 类型：`onDidChangeModel: IEvent<void>`
- 描述：diff模型更改时发出的事件（即diff编辑器显示新内容）。


## onDidUpdateDiff
- 类型：`onDidDispose: IEvent<void>`
- 描述：更新此diff编辑器计算的diff信息时发出的事件。


## onDidDispose
- 语法：`onDidDispose(listener): IDisposable`
- 参数：`listener: (() => void)`
- 描述：编辑器被销毁时发出的事件。

