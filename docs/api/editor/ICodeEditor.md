# ICodeEditor
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICodeEditor.html
:::

一个丰富的代码编辑器。

```ts
interface ICodeEditor {
    onBeginUpdate: IEvent<void>;
    onContextMenu: IEvent<IEditorMouseEvent>;
    onDidAttemptReadOnlyEdit: IEvent<void>;
    onDidBlurEditorText: IEvent<void>;
    onDidBlurEditorWidget: IEvent<void>;
    onDidChangeConfiguration: IEvent<ConfigurationChangedEvent>;
    onDidChangeCursorPosition: IEvent<ICursorPositionChangedEvent>;
    onDidChangeCursorSelection: IEvent<ICursorSelectionChangedEvent>;
    onDidChangeHiddenAreas: IEvent<void>;
    onDidChangeModel: IEvent<IModelChangedEvent>;
    onDidChangeModelContent: IEvent<IModelContentChangedEvent>;
    onDidChangeModelDecorations: IEvent<IModelDecorationsChangedEvent>;
    onDidChangeModelLanguage: IEvent<IModelLanguageChangedEvent>;
    onDidChangeModelLanguageConfiguration: IEvent<IModelLanguageConfigurationChangedEvent>;
    onDidChangeModelOptions: IEvent<IModelOptionsChangedEvent>;
    onDidCompositionEnd: IEvent<void>;
    onDidCompositionStart: IEvent<void>;
    onDidContentSizeChange: IEvent<IContentSizeChangedEvent>;
    onDidFocusEditorText: IEvent<void>;
    onDidFocusEditorWidget: IEvent<void>;
    onDidLayoutChange: IEvent<EditorLayoutInfo>;
    onDidPaste: IEvent<IPasteEvent>;
    onDidScrollChange: IEvent<IScrollEvent>;
    onEndUpdate: IEvent<void>;
    onKeyDown: IEvent<IKeyboardEvent>;
    onKeyUp: IEvent<IKeyboardEvent>;
    onMouseDown: IEvent<IEditorMouseEvent>;
    onMouseLeave: IEvent<IPartialEditorMouseEvent>;
    onMouseMove: IEvent<IEditorMouseEvent>;
    onMouseUp: IEvent<IEditorMouseEvent>;
    onWillChangeModel: IEvent<IModelChangedEvent>;
    addContentWidget(widget): void;
    addGlyphMarginWidget(widget): void;
    addOverlayWidget(widget): void;
    applyFontInfo(target): void;
    changeViewZones(callback): void;
    createDecorationsCollection(decorations?): IEditorDecorationsCollection;
    deltaDecorations(oldDecorations, newDecorations): string[];
    dispose(): void;
    executeCommand(source, command): void;
    executeCommands(source, commands): void;
    executeEdits(source, edits, endCursorState?): boolean;
    focus(): void;
    getAction(id): IEditorAction;
    getBottomForLineNumber(lineNumber): number;
    getContainerDomNode(): HTMLElement;
    getContentHeight(): number;
    getContentWidth(): number;
    getContribution<T>(id): T;
    getDecorationsInRange(range): IModelDecoration[];
    getDomNode(): HTMLElement;
    getEditorType(): string;
    getId(): string;
    getLayoutInfo(): EditorLayoutInfo;
    getLineDecorations(lineNumber): IModelDecoration[];
    getModel(): ITextModel;
    getOffsetForColumn(lineNumber, column): number;
    getOption<T>(id): FindComputedEditorOptionValueById<T>;
    getOptions(): IComputedEditorOptions;
    getPosition(): Position;
    getRawOptions(): IEditorOptions;
    getScrollHeight(): number;
    getScrollLeft(): number;
    getScrollTop(): number;
    getScrollWidth(): number;
    getScrolledVisiblePosition(position): {
        height: number;
        left: number;
        top: number;
    };
    getSelection(): Selection;
    getSelections(): Selection[];
    getSupportedActions(): IEditorAction[];
    getTargetAtClientPoint(clientX, clientY): IMouseTarget;
    getTopForLineNumber(lineNumber, includeViewZones?): number;
    getTopForPosition(lineNumber, column): number;
    getValue(options?): string;
    getVisibleColumnFromPosition(position): number;
    getVisibleRanges(): Range[];
    handleInitialized?(): void;
    hasPendingScrollAnimation(): boolean;
    hasTextFocus(): boolean;
    hasWidgetFocus(): boolean;
    layout(dimension?, postponeRendering?): void;
    layoutContentWidget(widget): void;
    layoutGlyphMarginWidget(widget): void;
    layoutOverlayWidget(widget): void;
    onDidDispose(listener): IDisposable;
    popUndoStop(): boolean;
    pushUndoStop(): boolean;
    removeContentWidget(widget): void;
    removeDecorations(decorationIds): void;
    removeGlyphMarginWidget(widget): void;
    removeOverlayWidget(widget): void;
    render(forceRedraw?): void;
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
    saveViewState(): ICodeEditorViewState;
    setBanner(bannerDomNode, height): void;
    setModel(model): void;
    setPosition(position, source?): void;
    setScrollLeft(newScrollLeft, scrollType?): void;
    setScrollPosition(position, scrollType?): void;
    setScrollTop(newScrollTop, scrollType?): void;
    setSelection(selection, source?): void;
    setSelection(selection, source?): void;
    setSelection(selection, source?): void;
    setSelection(selection, source?): void;
    setSelections(selections, source?): void;
    setValue(newValue): void;
    trigger(source, handlerId, payload): void;
    updateOptions(newOptions): void;
    writeScreenReaderContent(reason): void;
}
```

## 快捷链接
<script setup>
const data = [
  { icon: "P", link: "onBeginUpdate" },
  { icon: "P", link: "onDidCompositionEnd" },
  { icon: "P", link: "onDidCompositionStart" },
  { icon: "P", link: "onEndUpdate" },
  { icon: "M", link: "addContentWidget" },
  { icon: "M", link: "addGlyphMarginWidget" },
  { icon: "M", link: "addOverlayWidget" },
  { icon: "M", link: "applyFontInfo" },
  { icon: "M", link: "changeViewZones" },
  { icon: "M", link: "createDecorationsCollection" },
  { icon: "M", link: "deltaDecorations" },
  { icon: "M", link: "dispose" },
  { icon: "M", link: "executeCommand" },
  { icon: "M", link: "executeCommands" },
  { icon: "M", link: "executeEdits" },
  { icon: "M", link: "focus" },
  { icon: "M", link: "getAction" },
  { icon: "M", link: "getBottomForLineNumber" },
  { icon: "M", link: "getContainerDomNode" },
  { icon: "M", link: "getContentHeight" },
  { icon: "M", link: "getContentWidth" },
  { icon: "M", link: "getContribution" },
  { icon: "M", link: "getDecorationsInRange" },
  { icon: "M", link: "getDomNode" },
  { icon: "M", link: "getEditorType" },
  { icon: "M", link: "getId" },
  { icon: "M", link: "getLayoutInfo" },
  { icon: "M", link: "getLineDecorations" },
  { icon: "M", link: "getModel" },
  { icon: "M", link: "getOffsetForColumn" },
  { icon: "M", link: "getOption" },
  { icon: "M", link: "getOptions" },
  { icon: "M", link: "getPosition" },
  { icon: "M", link: "getRawOptions" },
  { icon: "M", link: "getScrollHeight" },
  { icon: "M", link: "getScrollLeft" },
  { icon: "M", link: "getScrollTop" },
  { icon: "M", link: "getScrollWidth" },
  { icon: "M", link: "getScrolledVisiblePosition" },
  { icon: "M", link: "getSelection" },
  { icon: "M", link: "getSelections" },
  { icon: "M", link: "getSupportedActions" },
  { icon: "M", link: "getTargetAtClientPoint" },
  { icon: "M", link: "getTopForLineNumber" },
  { icon: "M", link: "getTopForPosition" },
  { icon: "M", link: "getValue" },
  { icon: "M", link: "getVisibleColumnFromPosition" },
  { icon: "M", link: "getVisibleRanges" },
  { icon: "M", link: "handleInitialized" },
  { icon: "M", link: "hasPendingScrollAnimation" },
  { icon: "M", link: "hasTextFocus" },
  { icon: "M", link: "hasWidgetFocus" },
  { icon: "M", link: "layout" },
  { icon: "M", link: "layoutContentWidget" },
  { icon: "M", link: "layoutGlyphMarginWidget" },
  { icon: "M", link: "layoutOverlayWidget" },
  { icon: "M", link: "popUndoStop" },
  { icon: "M", link: "pushUndoStop" },
  { icon: "M", link: "removeContentWidget" },
  { icon: "M", link: "removeDecorations" },
  { icon: "M", link: "removeGlyphMarginWidget" },
  { icon: "M", link: "removeOverlayWidget" },
  { icon: "M", link: "render" },
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
  { icon: "M", link: "setBanner" },
  { icon: "M", link: "setModel" },
  { icon: "M", link: "setPosition" },
  { icon: "M", link: "setScrollLeft" },
  { icon: "M", link: "setScrollPosition" },
  { icon: "M", link: "setScrollTop" },
  { icon: "M", link: "setSelection" },
  { icon: "M", link: "setSelections" },
  { icon: "M", link: "setValue" },
  { icon: "M", link: "trigger" },
  { icon: "M", link: "updateOptions" },
  { icon: "M", link: "writeScreenReaderContent" },
  { icon: "P", link: "onContextMenu" },
  { icon: "P", link: "onDidAttemptReadOnlyEdit" },
  { icon: "P", link: "onDidBlurEditorText" },
  { icon: "P", link: "onDidBlurEditorWidget" },
  { icon: "P", link: "onDidChangeConfiguration" },
  { icon: "P", link: "onDidChangeCursorPosition" },
  { icon: "P", link: "onDidChangeCursorSelection" },
  { icon: "P", link: "onDidChangeHiddenAreas" },
  { icon: "P", link: "onDidChangeModel" },
  { icon: "P", link: "onDidChangeModelContent" },
  { icon: "P", link: "onDidChangeModelDecorations" },
  { icon: "P", link: "onDidChangeModelLanguage" },
  { icon: "P", link: "onDidChangeModelLanguageConfiguration" },
  { icon: "P", link: "onDidChangeModelOptions" },
  { icon: "P", link: "onDidContentSizeChange" },
  { icon: "P", link: "onDidFocusEditorText" },
  { icon: "P", link: "onDidFocusEditorWidget" },
  { icon: "P", link: "onDidLayoutChange" },
  { icon: "P", link: "onDidPaste" },
  { icon: "P", link: "onDidScrollChange" },
  { icon: "P", link: "onKeyDown" },
  { icon: "P", link: "onKeyUp" },
  { icon: "P", link: "onMouseDown" },
  { icon: "P", link: "onMouseLeave" },
  { icon: "P", link: "onMouseMove" },
  { icon: "P", link: "onMouseUp" },
  { icon: "P", link: "onWillChangeModel" },
  { icon: "M", link: "onDidDispose" },
];

</script>
<dataItems :data="data" />


## onBeginUpdate
- 语法：`onBeginUpdate: Event<void>;`
- 描述：当编辑器开始更新时触发。


## onDidCompositionEnd
- 语法：`onDidCompositionEnd: Event<void>;`
- 描述：合成结束后发出的事件。


## onDidCompositionStart
- 语法：`onDidCompositionStart: Event<void>;`
- 描述：合成开始时发出的事件。


## onEndUpdate
- 语法：`onEndUpdate: Event<void>;`
- 描述：当编辑器结束更新时触发。


## addContentWidget
- 语法：`addContentWidget(widget): void`
- 参数：`widget`: [IContentWidget](/api/editor/IContentWidget.md)
- 描述：添加内容小部件。


## addGlyphMarginWidget
- 语法：`addGlyphMarginWidget(widget): void`
- 参数：`widget`: [IGlyphMarginWidget](/api/editor/IGlyphMarginWidget.md)
- 描述：添加 glyph margin 小部件。


## addOverlayWidget
- 语法：`addOverlayWidget(widget): void`
- 参数：`widget`: [IOverlayWidget](/api/editor/IOverlayWidget.md)
- 描述：添加 overlay widget。


## applyFontInfo
- 语法：`applyFontInfo(target: HTMLElement): void`
- 参数：`target`: HTMLElement
- 描述：应用字体信息。


## changeViewZones
- 语法：`changeViewZones(callback): void`
- 参数：`callback`: (accessor: [IViewZoneChangeAccessor](/api/editor/IViewZoneChangeAccessor.md)) => void
- 描述：更改视图区。


## createDecorationsCollection
- 语法：`createDecorationsCollection(decorations?): IEditorDecorationsCollection`
- 参数：`decorations`: [IModelDeltaDecoration](/api/editor/IModelDeltaDecoration.md)[]
- 描述：创建装饰集合。


## ~~deltaDecorations~~
- 已弃用.


## dispose
- 语法：`dispose(): void`
- 描述：销毁编辑器。


## executeCommand
- 语法：`executeCommand(source, command): void`
- 参数：
  - `source`: `string`
  - `command`: [ICommand](/api/editor/ICommand.md)
- 描述：执行命令。


## executeCommands
- 语法：`executeCommands(source, commands): void`
- 参数：
  - `source`: `string`
  - `commands`: [ICommand](/api/editor/ICommand.md)[]
- 描述：执行命令。


## executeEdits
- 语法：`executeEdits(source, edits, endCursorState?): void`
- 参数：
  - `source`: `string`
  - `edits`: [IIdentifiedSingleEditOperation](/api/editor/IIdentifiedSingleEditOperation.md)[]
  - `endCursorState`: [ICursorStateComputer](/api/editor/ICursorStateComputer.md) | [Selection](/api/Selection.md)[]
- 描述: 执行编辑。

## focus
- 语法：`focus(): void`
- 描述：聚焦编辑器。


## getAction
- 语法：`getAction(id): IEditorAction`
- 参数：`id`: `string`
- 返回值：`IEditorAction`:[IEditorAction](/api/editor/IEditorAction.md)
- 描述：获取动作。


## getBottomForLineNumber
- 语法：`getBottomForLineNumber(lineNumber): number`
- 参数：`lineNumber`: `number`
- 描述：获取行底部位置。


## getContainerDomNode
- 语法：`getContainerDomNode(): HTMLElement`
- 描述：获取容器 DOM 节点。


## getContentHeight
- 语法：`getContentHeight(): number`
- 描述：获取内容高度。


## getContentWidth
- 语法：`getContentWidth(): number`
- 描述：获取内容宽度。


## getContribution
- 语法：`getContribution<T>(id): T`
- 泛型：`T extends` [IEditorContribution](/api/editor/IEditorContribution.md)
- 参数：`id`: `string`
- 描述：获取贡献。


## getDecorationsInRange
- 语法：`getDecorationsInRange(range): IModelDecoration[]`
- 参数：`range`: [Range](/api/Range.md)
- 返回值：`IModelDecoration`:[IModelDecoration](/api/editor/IModelDecoration.md)[]
- 描述：获取装饰集合。


## getDomNode
- 语法：`getDomNode(): HTMLElement`
- 描述：获取 DOM 节点。


## getEditorType
- 语法：`getEditorType(): string`
- 描述：获取编辑器类型。


## getId
- 语法：`getId(): string`
- 描述：获取编辑器 ID。


## getLayoutInfo
- 语法：`getLayoutInfo(): EditorLayoutInfo`
- 返回值：`EditorLayoutInfo`:[EditorLayoutInfo](/api/editor/EditorLayoutInfo.md)
- 描述：获取布局信息。


## getLineDecorations
- 语法：`getLineDecorations(lineNumber): IModelDecoration[]`
- 参数：`lineNumber`: `number`
- 返回值：`IModelDecoration`:[IModelDecoration](/api/editor/IModelDecoration.md)[]
- 描述：获取行装饰集合。


## getModel
- 语法：`getModel(): ITextModel`
- 返回值：`ITextModel`:[ITextModel](/api/editor/ITextModel.md)
- 描述：获取编辑器模型。


## getOffsetForColumn
- 语法：`getOffsetForColumn(lineNumber, column): number`
- 参数：
  - `lineNumber`: `number`
  - `column`: `number`
- 描述：获取偏移量。


## getOption
- 语法：`getOption<T>(id): FindComputedEditorOptionValueById<T>`
- 泛型：`T extends`: [EditorOption](/api/editor/EditorOption.md)
- 参数：`id`: `T`
- 返回值：[FindComputedEditorOptionValueById](/api/editor/FindComputedEditorOptionValueById.md) < T >
- 描述：获取一个特定的编辑器选项。


## getOptions
- 语法：`getOptions(): IComputedEditorOptions`
- 返回值：`IComputedEditorOptions`:[IComputedEditorOptions](/api/editor/IComputedEditorOptions.md)
- 描述：获取编辑器选项。


## getPosition
- 语法：`getPosition(): Position`
- 返回值：`Position`:[Position](/api/Position.md)
- 描述：获取编辑器位置。


## getRawOptions
- 语法：`getRawOptions(): IEditorOptions`
- 返回值：`IEditorOptions`:[IEditorOptions](/api/editor/IEditorOptions.md)
- 描述：获取编辑器原始选项。


## getScrollHeight
- 语法：`getScrollHeight(): number`
- 描述：获取滚动高度。


## getScrollLeft
- 语法：`getScrollLeft(): number`
- 描述：获取滚动左侧。


## getScrollTop
- 语法：`getScrollTop(): number`
- 描述：获取滚动顶部。


## getScrollWidth
- 语法：`getScrollWidth(): number`
- 描述：获取滚动宽度。


## getScrolledVisiblePosition
- 语法：`getScrolledVisiblePosition(position): { height: number; top: number; left: number; }`
- 参数：`position`: [IPosition](/api/IPosition.md) 
- 描述：获取滚动可见位置。


## getSelection
- 语法：`getSelection(): Selection`
- 返回值：`Selection`:[Selection](/api/Selection.md)
- 描述：获取选区


## getSelections
- 语法：`getSelections(): Selection[]`
- 返回值：`Selection`:[Selection](/api/Selection.md)[]
- 描述：同上


## getSupportedActions
- 语法：`getSupportedActions(): IEditorAction[]`
- 返回值：`IEditorAction`: [IEditorAction](/api/editor/IEditorAction.md)
- 描述：返回与此编辑器关联的所有操作。


## getTargetAtClientPoint
- 语法：`getTargetAtClientPoint(clientX, clientY): IMouseTarget`    
- 参数：
  - `clientX`: `number`
  - `clientY`: `number`
- 返回值：`IMouseTarget`: [IMouseTarget](/api/editor/IMouseTarget.md)


## getTopForLineNumber
- 语法：`getTopForLineNumber(lineNumber, includeViewZones?): number`
- 参数：
  - `lineNumber`: `number`
  - `includeViewZones`: `boolean`
- 描述：获取直线顶部相对于第一条直线的垂直位置（顶部偏移）。


## getTopForPosition
- 语法：`getTopForPosition(lineNumber, column): number`
- 参数：
  - `lineNumber`: `number`
  - `column`: `number`
- 描述：获取位置顶部相对于第一条直线的垂直位置（顶部偏移）。


## getValue
- 语法：`getValue(options?): string`
- 参数：`options`: `{ eol?: boolean; preserveFocus?: boolean; lineFeedUnix?: boolean; }`
- 描述：获取编辑器值。


## getVisibleColumnFromPosition
- 语法：`getVisibleColumnFromPosition(position): number`
- 参数：`position`: [IPosition](/api/IPosition.md)
- 描述：获取位置可见列。


## getVisibleRanges
- 语法：`getVisibleRanges(): Range[]`
- 返回值：`Range`:[Range](/api/Range.md)[]
- 描述：获取可见范围。



## handleInitialized
- 语法：`handleInitialized(): void`
- 描述：在设置模型、恢复视图状态和更新选项时调用,这是计算视口数据（如标记）的最佳位置。


## hasPendingScrollAnimation
- 语法：`hasPendingScrollAnimation(): boolean`
- 描述：检查是否有滚动动画。


## hasTextFocus
- 语法：`hasTextFocus(): boolean`
- 描述：检查编辑器是否具有焦点。


## hasWidgetFocus
- 语法：`hasWidgetFocus(): boolean`
- 描述：如果此编辑器或编辑器小部件中的文本具有焦点，则返回true。


## layout
- 语法：`layout(dimension?, postponeRendering?): void`
- 参数：
  - `dimension`: [IDimension](/api/editor/IDimension.md)
  - `postponeRendering`: `boolean` 是否延迟渲染
- 描述：重新渲染编辑器。


## layoutContentWidget
- 语法：`layoutContentWidget(widget): void`
- 参数：`widget`: [IContentWidget](/api/editor/IContentWidget.md)
- 描述：重新渲染内容小部件。


## layoutGlyphMarginWidget
- 语法：`layoutGlyphMarginWidget(widget): void`
- 参数：`widget`: [IContentWidget](/api/editor/IContentWidget.md)
- 描述：重新渲染 glyph margin 小部件。


## layoutOverlayWidget
- 语法：`layoutOverlayWidget(widget): void`
- 参数：`widget`: [IContentWidget](/api/editor/IContentWidget.md)
- 描述：重新渲染 overlay widget。


## popUndoStop
- 语法：`popUndoStop(): void`
- 描述：弹出撤消操作。


## pushUndoStop
- 语法：`pushUndoStop(): void`
- 描述：压入撤消操作。


## removeContentWidget
- 语法：`removeContentWidget(widget): void`
- 参数：`widget`: [IContentWidget](/api/editor/IContentWidget.md)
- 描述：删除内容小部件。


## removeDecorations
- 语法：`removeDecorations(decorationIds): void`
- 参数：`decorationIds`: `string[]`
- 描述：删除装饰。


## removeGlyphMarginWidget
- 语法：`removeGlyphMarginWidget(widget): void`
- 参数：`widget`: [IContentWidget](/api/editor/IContentWidget.md)
- 描述：删除 glyph margin 小部件。


## removeOverlayWidget
- 语法：`removeOverlayWidget(widget): void`
- 参数：`widget`: [IContentWidget](/api/editor/IContentWidget.md)
- 描述：删除 overlay widget。


## render
- 语法：`render(forceRedraw?): void`
- 参数：`forceRedraw`: `boolean`
- 描述：强制渲染编辑器。


## restoreViewState
- 语法：`restoreViewState(state): void`
- 参数：`state`: [ICodeEditorViewState](/api/editor/ICodeEditorViewState.md)
- 描述：恢复视图状态。


## revealLine
- 语法：`revealLine(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定行。


## revealLineInCenter
- 语法：`revealLineInCenter(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定行，并使其位于视图中心。


## revealLineInCenterIfOutsideViewport
- 语法：`revealLineInCenterIfOutsideViewport(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定行，并使其位于视图中心，如果行不在视图中，则不滚动。


## revealLineNearTop
- 语法：`revealLineNearTop(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定行，并使其位于视图顶部。


## revealLines
- 语法：`revealLines(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`: `number`
  - `endLineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定行。


## revealLinesInCenter
- 语法：`revealLinesInCenter(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`: `number`
  - `endLineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定行，并使其位于视图中心。


## revealLinesInCenterIfOutsideViewport
- 语法：`revealLinesInCenterIfOutsideViewport(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`: `number`
  - `endLineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定行，并使其位于视图中心，如果行不在视图中，则不滚动。


## revealLinesNearTop
- 语法：`revealLinesNearTop(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`: `number`
  - `endLineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定行，并使其位于视图顶部。


## revealPosition
- 语法：`revealPosition(position, scrollType?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定位置。


## revealPositionInCenter
- 语法：`revealPositionInCenter(position, scrollType?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定位置，并使其位于视图中心。


## revealPositionInCenterIfOutsideViewport
- 语法：`revealPositionInCenterIfOutsideViewport(position, scrollType?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定位置，并使其位于视图中心，如果位置不在视图中，则不滚动。


## revealPositionNearTop
- 语法：`revealPositionNearTop(position, scrollType?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定位置，并使其位于视图顶部。


## revealRange
- 语法：`revealRange(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)`
- 描述：将编辑器滚动到指定范围。


## revealRangeAtTop
- 语法：`revealRangeAtTop(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定范围，并使其位于视图顶部。


## revealRangeInCenter
- 语法：`revealRangeInCenter(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定范围，并使其位于视图中心。


## revealRangeInCenterIfOutsideViewport
- 语法：`revealRangeInCenterIfOutsideViewport(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定范围，并使其位于视图中心，如果范围不在视图中，则不滚动。


## revealRangeNearTop
- 语法：`revealRangeNearTop(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定范围，并使其位于视图顶部。


## revealRangeNearTopIfOutsideViewport
- 语法：`revealRangeNearTopIfOutsideViewport(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：将编辑器滚动到指定范围，并使其位于视图顶部，如果范围不在视图中，则不滚动。


## saveViewState
- 语法：`saveViewState(): ICodeEditorViewState`
- 返回值：[ICodeEditorViewState](/api/editor/ICodeEditorViewState.md)
- 描述：保存编辑器的视图状态。


## setBanner
- 语法：`setBanner(bannerDomNode, height): void`
- 参数：
  - `bannerDomNode`: `HTMLElement`
  - `height`: `number`
- 描述：设置编辑器的横幅。


## setModel
- 语法：`setModel(model): void`
- 参数：`model`: [ITextModel](/api/editor/ITextModel.md)
- 描述：设置编辑器的模型。


## setPosition
- 语法：`setPosition(position, source?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `source`: `string`
- 描述：设置编辑器的位置。


## setScrollLeft
- 语法：`setScrollLeft(newScrollLeft, scrollType?): void`
- 参数：
  - `newScrollLeft`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：设置编辑器的水平滚动位置。


## setScrollPosition
- 语法：`setScrollPosition(position, scrollType?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：设置编辑器的滚动位置。


## setScrollTop
- 语法：`setScrollTop(newScrollTop, scrollType?): void`
- 参数：
  - `newScrollTop`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：设置编辑器的垂直滚动位置。


## setSelection
- 语法：`setSelection(selection, source?): void`
- 参数：
  - `selection`: [ISelection](/api/ISelection.md)
  - `source`: `string`
- 描述：设置编辑器的选择。


## setSelections
- 语法：`setSelections(selections, source?): void`
- 参数：
  - `selections`: [ISelection](/api/ISelection.md)[]
  - `source`: `string`
- 描述：设置编辑器的选择。


## setValue
- 语法：`setValue(newValue): void`
- 参数：`newValue`: `string`
- 描述：设置编辑器的值。


## trigger
- 语法：`trigger(source, handlerId, payload): void`
- 参数：
  - `source`: `string`
  - `handlerId`: `string`
  - `payload`: `any`
- 描述：触发编辑器事件。


## updateOptions
- 语法：`updateOptions(newOptions): void`
- 参数：`newOptions`: [IEditorOptions](/api/editor/IEditorOptions.md)
- 描述：更新编辑器的选项。


## writeScreenReaderContent
- 语法：`writeScreenReaderContent(reason): void`
- 参数：`reason`: `string`
- 描述：将编辑器的内容写入屏幕阅读器。


## onContextMenu
- 类型：`onContextMenu: IEvent<IEditorMouseEvent>`
- 参数：[IEditorMouseEvent](/api/editor/IEditorMouseEvent.md)
- 描述：编辑器上下文菜单事件。


## onDidAttemptReadOnlyEdit
- 类型：`onDidAttemptReadOnlyEdit: IEvent<void>`
- 描述：编辑器尝试只读编辑事件。


## onDidBlurEditorText
- 类型：`onDidBlurEditorText: IEvent<void>`
- 描述：编辑器失去焦点事件。


## onDidBlurEditorWidget
- 类型：`onDidBlurEditorWidget: IEvent<void>`
- 描述：当此编辑器或编辑器小部件内的文本失去焦点时发出的事件。


## onDidChangeConfiguration
- 类型：`onDidChangeConfiguration: IEvent<ConfigurationChangedEvent>`
- 参数：[ConfigurationChangedEvent](/api/editor/ConfigurationChangedEvent.md)
- 描述：编辑器配置更改事件。


## onDidChangeCursorPosition
- 类型：`onDidChangeCursorPosition: IEvent<ICursorPositionChangedEvent>`
- 参数：[ICursorPositionChangedEvent](/api/editor/ICursorPositionChangedEvent.md)
- 描述：编辑器光标位置更改事件。


## onDidChangeCursorSelection
- 类型：`onDidChangeCursorSelection: IEvent<ICursorSelectionChangedEvent>`
- 参数：[ICursorSelectionChangedEvent](/api/editor/ICursorSelectionChangedEvent.md)
- 描述：编辑器光标选择更改事件。


## onDidChangeHiddenAreas
- 类型：`onDidChangeHiddenAreas: IEvent<void>`
- 描述：编辑器隐藏区域更改事件。


## onDidChangeModel
- 类型：`onDidChangeModel: IEvent<IModelChangedEvent>`
- 参数：[IModelChangedEvent](/api/editor/IModelChangedEvent.md)
- 描述：编辑器模型更改事件。


## onDidChangeModelContent
- 类型：`onDidChangeModelContent: IEvent<IModelContentChangedEvent>`
- 参数：[IModelContentChangedEvent](/api/editor/IModelContentChangedEvent.md)
- 描述：编辑器模型内容更改事件。


## onDidChangeModelDecorations
- 类型：`onDidChangeModelDecorations: IEvent<IModelDecorationsChangedEvent>`
- 参数：[IModelDecorationsChangedEvent](/api/editor/IModelDecorationsChangedEvent.md)
- 描述：编辑器模型装饰更改事件。


## onDidChangeModelLanguage
- 类型：`onDidChangeModelLanguage: IEvent<IModelLanguageChangedEvent>`
- 参数：[IModelLanguageChangedEvent](/api/editor/IModelLanguageChangedEvent.md)
- 描述：编辑器模型语言更改事件。


## onDidChangeModelLanguageConfiguration
- 类型：`onDidChangeModelLanguageConfiguration: IEvent<IModelLanguageConfigurationChangedEvent>`
- 参数：[IModelLanguageConfigurationChangedEvent](/api/editor/IModelLanguageConfigurationChangedEvent.md)
- 描述：编辑器模型语言配置更改事件。


## onDidChangeModelOptions
- 类型：`onDidChangeModelOptions: IEvent<IModelOptionsChangedEvent>`
- 参数：[IModelOptionsChangedEvent](/api/editor/IModelOptionsChangedEvent.md)
- 描述：编辑器模型选项更改事件。


## onDidContentSizeChange
- 类型：`onDidContentSizeChange: IEvent<IContentSizeChangedEvent>`
- 参数：[IContentSizeChangedEvent](/api/editor/IContentSizeChangedEvent.md)
- 描述：当编辑器中的内容宽度或内容高度发生更改时发出的事件。


## onDidFocusEditorText
- 类型：`onDidFocusEditorText: IEvent<void>`
- 描述：编辑器获得焦点事件。


## onDidFocusEditorWidget
- 类型：`onDidFocusEditorWidget: IEvent<void>`
- 描述：当此编辑器或编辑器小部件内的文本获得焦点时发出的事件。


## onDidLayoutChange
- 类型：`onDidLayoutChange: IEvent<EditorLayoutInfo>`
- 参数：[EditorLayoutInfo](/api/editor/EditorLayoutInfo.md)
- 描述：编辑器布局更改事件。


## onDidPaste
- 类型：`onDidPaste: IEvent<IPasteEvent>`
- 参数：[IPasteEvent](/api/editor/IPasteEvent.md)
- 描述：编辑器粘贴事件。


## onDidScrollChange
- 类型：`onDidScrollChange: IEvent<IScrollEvent>`
- 参数：[IScrollEvent](/api/IScrollEvent.md)
- 描述：编辑器滚动更改事件。


## onKeyDown
- 类型：`onKeyDown: IEvent<IKeyboardEvent>`
- 参数：[IKeyboardEvent](/api/IKeyboardEvent.md)
- 描述：编辑器按键按下事件。


## onKeyUp
- 类型：`onKeyUp: IEvent<IKeyboardEvent>`
- 参数：[IKeyboardEvent](/api/IKeyboardEvent.md)
- 描述：编辑器按键抬起事件。


## onMouseDown
- 类型：`onMouseDown: IEvent<IEditorMouseEvent>`
- 参数：[IEditorMouseEvent](/api/editor/IEditorMouseEvent.md)
- 描述：编辑器鼠标按下事件。


## onMouseLeave
- 类型：`onMouseLeave: IEvent<IEditorMouseEvent>`
- 参数：[IEditorMouseEvent](/api/editor/IEditorMouseEvent.md)
- 描述：编辑器鼠标离开事件。


## onMouseMove
- 类型：`onMouseMove: IEvent<IEditorMouseEvent>`
- 参数：[IEditorMouseEvent](/api/editor/IEditorMouseEvent.md)
- 描述：编辑器鼠标移动事件。


## onMouseUp
- 类型：`onMouseUp: IEvent<IEditorMouseEvent>`
- 参数：[IEditorMouseEvent](/api/editor/IEditorMouseEvent.md)
- 描述：编辑器鼠标抬起事件。


## onWillChangeModel
- 类型：`onWillChangeModel: IEvent<IModelChangedEvent>`
- 参数：[IModelChangedEvent](/api/editor/IModelChangedEvent.md)
- 描述：编辑器模型即将更改事件。


## onDidDispose
- 类型：`onDidDispose: IEvent<void>`
- 描述：编辑器即将销毁事件。

