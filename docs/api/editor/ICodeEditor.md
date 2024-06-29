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
- 参数：`range`: [IRange](/api/editor/IRange.md)
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



## getTopForPosition


## getValue


## getVisibleColumnFromPosition


## getVisibleRanges


## handleInitialized


## hasPendingScrollAnimation


## hasTextFocus


## hasWidgetFocus


## layout


## layoutContentWidget


## layoutGlyphMarginWidget


## layoutOverlayWidget


## popUndoStop


## pushUndoStop


## removeContentWidget


## removeDecorations


## removeGlyphMarginWidget


## removeOverlayWidget


## render


## restoreViewState


## revealLine


## revealLineInCenter


## revealLineInCenterIfOutsideViewport


## revealLineNearTop


## revealLines


## revealLinesInCenter


## revealLinesInCenterIfOutsideViewport


## revealLinesNearTop


## revealPosition


## revealPositionInCenter


## revealPositionInCenterIfOutsideViewport


## revealPositionNearTop


## revealRange


## revealRangeAtTop


## revealRangeInCenter


## revealRangeInCenterIfOutsideViewport


## revealRangeNearTop


## revealRangeNearTopIfOutsideViewport


## saveViewState


## setBanner


## setModel


## setPosition


## setScrollLeft


## setScrollPosition


## setScrollTop


## setSelection


## setSelections


## setValue


## trigger


## updateOptions


## writeScreenReaderContent


## onContextMenu


## onDidAttemptReadOnlyEdit


## onDidBlurEditorText


## onDidBlurEditorWidget


## onDidChangeConfiguration


## onDidChangeCursorPosition


## onDidChangeCursorSelection


## onDidChangeHiddenAreas


## onDidChangeModel


## onDidChangeModelContent


## onDidChangeModelDecorations


## onDidChangeModelLanguage


## onDidChangeModelLanguageConfiguration


## onDidChangeModelOptions


## onDidContentSizeChange


## onDidFocusEditorText


## onDidFocusEditorWidget


## onDidLayoutChange


## onDidPaste


## onDidScrollChange


## onKeyDown


## onKeyUp


## onMouseDown


## onMouseLeave


## onMouseMove


## onMouseUp


## onWillChangeModel


## onDidDispose

