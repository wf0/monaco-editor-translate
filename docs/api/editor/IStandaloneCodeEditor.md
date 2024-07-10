# IStandaloneCodeEditor

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html
:::

```ts
interface IStandaloneCodeEditor {
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
    addAction(descriptor): IDisposable;
    addCommand(keybinding, handler, context?): string;
    addContentWidget(widget): void;
    addGlyphMarginWidget(widget): void;
    addOverlayWidget(widget): void;
    applyFontInfo(target): void;
    changeViewZones(callback): void;
    createContextKey<T>(key, defaultValue): IContextKey<T>;
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

## onBeginUpdate
- 语法：`onBeginUpdate: IEvent<void>`
- 描述：某些编辑器操作同时启动多个事件，为了允许用户对单个操作触发的多个事件做出反应，编辑器在操作之前触发一个开始更新，在操作之后触发一个结束更新。每当编辑器启动onBeginUpdate时，一旦操作完成，它也会启动onEndUpdate。


## onEndUpdate
- 语法：`onEndUpdate: IEvent<void>`
- 描述：同上。


## onDidCompositionEnd
- 语法：`onDidCompositionEnd: IEvent<void>`
- 描述：合成结束后发出的事件。


## onDidCompositionStart
- 语法：`onDidCompositionStart: IEvent<void>`
- 描述：合成开始时发出的事件。


## addAction
- 语法：`addAction(descriptor): IDisposable`
- 参数：`descriptor`: [IActionDescriptor](/api/editor/IActionDescriptor.md)
- 描述：添加一个编辑器动作。
- 返回值：[IDisposable](/api/IDisposable.md)
- 示例：
```js
myEditor.addAction({
  id: "action",
  label: "action",
  contextMenuGroupId: "navigation",
  keybindings: [KeyMod.CtrlCmd | KeyCode.KeyA],
  run: () => {
    console.log("action");
  },
});
```
<img src='/myEditorAddAction.png' />


## addCommand
- 语法：`addCommand(keybinding, handler, context?): string`
- 参数：
  - `keybinding`: `number`
  - `handle`: [ICommandHandler](/api/editor/ICommandHandler.md)
  - `context`: `string`
- 描述：添加一个编辑器命令(通过快捷键触发)。
- 示例：
```js
myEditor.addCommand(KeyMod.CtrlCmd | KeyCode.KeyM, () => {
  console.log("command");
});
```

## addContentWidget
- 语法：`addContentWidget(widget): void`
- 参数：`widget`: [IContentWidget](/api/editor/IContentWidget.md)
- 描述：添加一个内容小部件。
- 示例：
```js
<div id="contentID_123">测试内容</div>

<style>
#contentID_123 {
  width: 200px;
  position: absolute;
  padding: 10px;
  color: red;
  background-color: blue;
  z-index: 99;
}
</style>

myEditor.addContentWidget({
  getId: () => "contentID_123",
  getDomNode: () => document.querySelector("#contentID_123"),
  getPosition: () => ({
    position: new Position(1, 1),
    // 用于呈现内容小部件的定位首选项。 'ABOVE'(上面) | 'BELOW'(下面) | 'EXACT'(覆盖文本)
    preference: [editor.ContentWidgetPositionPreference.EXACT],
  }),
});
```
<img src='/addContentWidget_BELOW.png' /> 
<img src='/addContentWidget_EXACT.png' /> 
<img src='/addContentWidget_ABOVE.png' /> 


## addGlyphMarginWidget
- 语法：`addGlyphMarginWidget(widget): void`
- 参数：`widget`: [IGlyphMarginWidget](/api/editor/IGlyphMarginWidget.md)
- 描述：添加一个 glyph margin 小部件。
- 示例：
```js
<div id="glayphID_123122">测试glayphID内容</div>

<style>
#glayphID_123122 {
  width: 200px;
  background-color: red;
  color: #fff;
  display: block !important; /* 覆盖文本，默认为 none 原因未知 */
}
</style>

myEditor.addGlyphMarginWidget({
  getDomNode: () => document.querySelector("#glayphID_123122"),
  getId: () => "glayphID_123122",
  getPosition: () => ({
    lane: editor.GlyphMarginLane.Center,
    range: new monaco.Range(1, 3, 1, 5),
    zIndex: 999,
  }),
});
```
<img src='/addGlyphMarginWidget.png' />

## addOverlayWidget
- 语法：`addOverlayWidget(widget): void`
- 参数：`widget`: [IOverlayWidget](/api/editor/IOverlayWidget.md)
- 描述：添加一个 overlay widget。
- 示例：
```js
<div id="overlay">overlay</div>

myEditor.addOverlayWidget({
  getDomNode: () => document.querySelector("#overlay"),
  getId: () => "overlay",
  getPosition: () => ({
    preference: editor.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER,
  }),
});

```
<img src='/addOverlayWidget.png' />

## applyFontInfo
- 语法：`applyFontInfo(target: HTMLElement): void`
- 参数：`target`: `HTMLElement`
- 描述：应用字体信息。


## changeViewZones
- 语法：`changeViewZones(callback): void`
- 参数：`callback`: (accessor:[IViewZoneChangeAccessor](/api/editor/IViewZoneChangeAccessor.md)): void 
- 描述：更改视图区。
- 示例：
```js
myEditor.changeViewZones((accessor) => {
  accessor.addZone({
    domNode: document.querySelector("#overlay"),
    afterLineNumber: 0,
    heightInPx: 100,
    onDomNodeTop: (top) => {
      document.querySelector("#overlay").style.top = top + "px";
    },
  });
});
```
<img src="/changeViewZones.png" />

## createContextKey
- 语法：`createContextKey<T>(key, defaultValue): IContextKey<T>`
- 泛型：`T extends` [ContextKeyValue](/api/editor/ContextKeyValue.md) = [ContextKeyValue](/api/editor/ContextKeyValue.md)
- 参数：
  - `key`: `string`
  - `defaultValue`: `T`
- 返回值：[IContextKey](/api/editor/IContextKey.md)`<T>`
- 描述：创建一个上下文键。


## createDecorationsCollection
- 语法：`createDecorationsCollection(decorations?): IEditorDecorationsCollection`
- 参数：`decorations`: [IModelDeltaDecoration](/api/editor/IModelDeltaDecoration.md)[]
- 返回值：[IEditorDecorationsCollection](/api/editor/IEditorDecorationsCollection.md)
- 描述：创建一个装饰集合。


## deltaDecorations
::: warning
已弃用
:::

## dispose
- 语法：`dispose(): void`
- 描述：销毁编辑器。


## executeCommand
- 语法：`executeCommand(source, command): void`
- 参数：
  - `source`: `string`
  - `command`: [ICommand](/api/editor/ICommand.md)
- 描述：执行命令。
- 示例：
```js
myEditor.executeCommand(null, {
  getEditOperations(model, builder) {
    console.log("getEditOperations", model, builder);
  },
});
```


## executeCommands
- 语法：`executeCommands(source, commands): void`
- 参数：
  - `source`: `string`
  - `commands`: [ICommand](/api/editor/ICommand.md)[]
- 描述：执行命令。


## executeEdits
- 语法：`executeEdits(source, edits, endCursorState?): boolean`
- 参数：
  - `source`: `string`
  - `edits`: [IIdentifiedSingleEditOperation](/api/editor/IIdentifiedSingleEditOperation.md)[]
  - `endCursorState`: [ICursorStateComputer](/api/editor/ICursorStateComputer.md)
- 返回值：`boolean`
- 描述：执行编辑。
- 示例：
```js
myEditor.executeEdits(null, [
  {
    text: "测试 executeEdits",
    range: new monaco.Range(1, 1, 1, 1),
  },
  {
    text: "测试 222",
    range: new monaco.Range(1, 10, 1, 10),
  },
]);

```
<img src='/executeEdits.png' />

## focus
- 语法：`focus(): void`
- 描述：聚焦编辑器。


## getAction
- 语法：`getAction(id): IEditorAction`
- 参数：`id`: `string`
- 返回值：[IEditorAction](/api/editor/IEditorAction.md)
- 描述：获取编辑器动作。
- 示例：
```js
myEditor.addAction({
  id: "action",
  label: "action",
  contextMenuGroupId: "navigation",
  keybindings: [KeyMod.CtrlCmd | KeyCode.KeyA],
  run: () => {
    console.log("action");
  },
});
const action = myEditor.getAction("action");
console.log(action);
action.run();
```
<img src='/getAction.png' />

## getBottomForLineNumber
- 语法：`getBottomForLineNumber(lineNumber): number`
- 参数：`lineNumber`: `number`
- 返回值：`number`
- 描述：获取行底部位置。


## getContainerDomNode
- 语法：`getContainerDomNode(): HTMLElement`
- 返回值：`HTMLElement`
- 描述：获取容器 DOM 节点。


## getContentHeight
- 语法：`getContentHeight(): number`
- 返回值：`number`
- 描述：获取内容高度。


## getContentWidth
- 语法：`getContentWidth(): number`
- 返回值：`number`
- 描述：获取内容宽度。


## getContribution
- 语法：`getContribution<T>(id): T`
- 泛型：`T extends` [IEditorContribution](/api/editor/IEditorContribution.md)
- 参数：`id`: `string`
- 返回值：`T`
- 描述：获取贡献。


## getDecorationsInRange
- 语法：`getDecorationsInRange(range): IModelDecoration[]`
- 参数：`range`: [Range](/api/Range.md)
- 返回值：[IModelDecoration](/api/editor/IModelDecoration.md)[]
- 描述：获取装饰集合。



## getDomNode
- 语法：`getDomNode(): HTMLElement`
- 返回值：`HTMLElement`
- 描述：获取 DOM 节点。


## getEditorType
- 语法：`getEditorType(): string`
- 返回值：`string`
- 描述：获取编辑器类型。


## getId
- 语法：`getId(): string`
- 返回值：`string`
- 描述：获取编辑器 ID。


## getLayoutInfo
- 语法：`getLayoutInfo(): EditorLayoutInfo`
- 返回值：[EditorLayoutInfo](/api/editor/EditorLayoutInfo.md)
- 描述：获取编辑器布局信息。


## getLineDecorations
- 语法：`getLineDecorations(lineNumber): IModelDecoration[]`
- 参数：`lineNumber`: `number`
- 返回值：[IModelDecoration](/api/editor/IModelDecoration.md)[]
- 描述：获取行装饰集合。


## getModel
- 语法：`getModel(): ITextModel`
- 返回值：[ITextModel](/api/editor/ITextModel.md)
- 描述：获取编辑器模型。模型中有ID、文本、语言和编辑器等非常有用的信息，后面在实现tab、记录状态时都需要用到。
<img src='/myEditorGetModel.png' />


## getOffsetForColumn
- 语法：`getOffsetForColumn(lineNumber, column): number`
- 参数：
  - `lineNumber`: `number`
  - `column`: `number`
- 返回值：`number`
- 描述：获取偏移量。


## getOption
- 语法：`getOption<T>(id): FindComputedEditorOptionValueById<T>`
- 泛型：`T extends` [EditorOption](/api/editor/EditorOption.md)
- 参数：`id`: `T`
- 返回值：[FindComputedEditorOptionValueById](/api/editor/FindComputedEditorOptionValueById.md)`<T>`
- 描述：获取编辑器选项。


## getOptions
- 语法：`getOptions(): IComputedEditorOptions`
- 返回值：[IComputedEditorOptions](/api/editor/IComputedEditorOptions.md)
- 描述：获取编辑器选项。


## getPosition
- 语法：`getPosition(): Position`
- 返回值：[Position](/api/Position.md)
- 描述：获取编辑器位置。
<img src='/getPosition.png' />


## getRawOptions
- 语法：`getRawOptions(): IEditorOptions`
- 返回值：[IEditorOptions](/api/editor/IEditorOptions.md)
- 描述：获取编辑器原始选项。


## getScrollHeight
- 语法：`getScrollHeight(): number`
- 返回值：`number`
- 描述：获取编辑器视口的scrollHeight。


## getScrollLeft
- 语法：`getScrollLeft(): number`
- 返回值：`number`
- 描述：获取编辑器视口的scrollLeft。


## getScrollTop
- 语法：`getScrollTop(): number`
- 返回值：`number`
- 描述：获取编辑器视口的scrollTop。


## getScrollWidth
- 语法：`getScrollWidth(): number`
- 返回值：`number`
- 描述：获取编辑器视口的scrollWidth。


## getScrolledVisiblePosition
- 语法：`getScrolledVisiblePosition(position): { height: number; top: number; left: number; }`
- 参数：`position`: [Position](/api/Position.md)
- 描述：获取位置的可见位置，结果位置考虑了滚动，并且相对于编辑器的左上角。说明1：如果用户滚动编辑器，对于相同的位置，此方法的结果会发生变化。说明2：如果重新定位编辑器的容器，则此方法的结果不会改变。警告：对于当前编辑器视口之外的位置，此方法的结果不准确。
<img src='/getScrolledVisiblePosition.png' />


## getSelection
- 语法：`getSelection(): Selection`
- 返回值：[Selection](/api/Selection.md)
- 描述：获取编辑器选择。
<img src='/getSelect.png' />


## getSelections
- 语法：`getSelections(): Selection[]`
- 返回值：[Selection](/api/Selection.md)[]
- 描述：获取编辑器选择集合。
<img src='/getSelections.png' />


## getSupportedActions
- 语法：`getSupportedActions(): IEditorAction[]`
- 返回值：[IEditorAction](/api/editor/IEditorAction.md)[]
- 描述：获取支持的编辑器动作。
<img src='/getSupportedActions.png' />


## getTargetAtClientPoint
- 语法：`getTargetAtClientPoint(clientX, clientY): IMouseTarget`
- 参数：
  - `clientX`: `number`
  - `clientY`: `number`
- 返回值：[IMouseTarget](/api/editor/IMouseTarget.md)
- 描述：获取客户端点对应的目标。
<img src='/getTargetAtClientPoint.png' />


## getTopForLineNumber
- 语法：`getTopForLineNumber(lineNumber, includeViewZones?): number`
- 参数：
  - `lineNumber`: `number`
  - `includeViewZones?`: `boolean`
- 描述：获取行顶部位置。


## getTopForPosition
- 语法：`getTopForPosition(lineNumber, column): number`
- 参数：
  - `lineNumber`: `number`
  - `column`: `number`
- 描述：获取位置顶部位置。


## getValue
- 语法：`getValue(options?): string`
- 参数：`options:{ lineEnding: string; preserveBOM: boolean; }`
- 返回值：`string`
- 描述：获取编辑器值。
<img src='/editor-getValue.png' />


## getVisibleColumnFromPosition
- 语法：`getVisibleColumnFromPosition(position): number`
- 参数：`position`: [IPosition](/api/IPosition.md)
- 描述：获取位置的可见列。


## getVisibleRanges
- 语法：`getVisibleRanges(): Range[]`
- 返回值：[Range](/api/Range.md)[]
- 描述：获取编辑器可见范围。


## handleInitialized
- 语法：`handleInitialized(): void`
- 描述：在设置模型、恢复视图状态和更新选项时调用,这是计算视口数据（如标记）的最佳位置。


## hasPendingScrollAnimation
- 语法：`hasPendingScrollAnimation(): boolean`
- 返回值：`boolean`
- 描述：检查编辑器是否有滚动动画。


## hasTextFocus
- 语法：`hasTextFocus(): boolean`
- 返回值：`boolean`
- 描述：如果此编辑器内的文本是聚焦的（即光标在闪烁），则返回true。


## hasWidgetFocus
- 语法：`hasWidgetFocus(): boolean`
- 返回值：`boolean`
- 描述：如果此编辑器或编辑器小部件中的文本具有焦点，则返回true。


## layout
- 语法：`layout(dimension?, postponeRendering?): void`
- 参数：
  - `dimension`: [IDimension](/api/editor/IDimension.md)
  - `postponeRendering`: `boolean` 是否延迟渲染
- 描述：调整编辑器布局，当编辑器的容器被调整大小时，应该调用这个方法。
<img src='/layout.gif' />

## layoutContentWidget
- 语法：`layoutContentWidget(widget: IContentWidget): void`
- 参数：`widget`: [IContentWidget](/api/editor/IContentWidget.md)
- 描述：调整内容小部件布局。



## layoutGlyphMarginWidget
- 语法：`layoutGlyphMarginWidget(widget: IGlyphMarginWidget): void`
- 参数：`widget`: [IGlyphMarginWidget](/api/editor/IGlyphMarginWidget.md)
- 描述：调整 glyph margin 小部件布局。


## layoutOverlayWidget
- 语法：`layoutOverlayWidget(widget: IOverlayWidget): void`
- 参数：`widget`: [IOverlayWidget](/api/editor/IOverlayWidget.md)
- 描述：调整 overlay widget 小部件布局。


## popUndoStop
- 语法：`popUndoStop(): void`
- 描述：弹出撤消操作。


## pushUndoStop
- 语法：`pushUndoStop(): void`
- 描述：压入撤消操作。


## removeContentWidget
- 语法：`removeContentWidget(widget: IContentWidget): void`
- 参数：`widget`: [IContentWidget](/api/editor/IContentWidget.md)
- 描述：删除内容小部件。


## removeDecorations
- 语法：`removeDecorations(decorationIds: string[]): void`
- 参数：`decorationIds`: `string[]`
- 描述：删除装饰。


## removeGlyphMarginWidget
- 语法：`removeGlyphMarginWidget(widget: IGlyphMarginWidget): void`
- 参数：`widget`: [IGlyphMarginWidget](/api/editor/IGlyphMarginWidget.md)
- 描述：删除 glyph margin 小部件。


## removeOverlayWidget
- 语法：`removeOverlayWidget(widget: IOverlayWidget): void`
- 参数：`widget`: [IOverlayWidget](/api/editor/IOverlayWidget.md)
- 描述：删除 overlay widget 小部件。


## render
- 语法：`render(): void`
- 描述：重新渲染编辑器，以便更新编辑器中的内容


## restoreViewState
- 语法：`restoreViewState(state: ICodeEditorViewState): void`
- 参数：`state`: [ICodeEditorViewState](/api/editor/ICodeEditorViewState.md)
- 描述：恢复编辑器视图状态。


## revealLine
- 语法：`revealLine(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：在编辑器中显示给定的行。（在 Ctrl F 搜索中，需要跨多行聚焦）
<img src='/revealLine.gif' />



## revealLineInCenter
- 语法：`revealLineInCenter(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：在编辑器中显示给定的行，并使其位于视图中心。


## revealLineInCenterIfOutsideViewport
- 语法：`revealLineInCenterIfOutsideViewport(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：在编辑器中显示给定的行，并使其位于视图中心，如果行不在视图中，则将其移动到视图顶部。


## revealLineNearTop
- 语法：`revealLineNearTop(lineNumber, scrollType?): void`
- 参数：
  - `lineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：在编辑器中显示给定的行，并使其位于视图顶部，如果行不在视图中，则将其移动到视图顶部。


## revealLines
- 语法：`revealLines(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`: `number`
  - `endLineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：在编辑器中显示指定的多行。


## revealLinesInCenter
- 语法：`revealLinesInCenter(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`: `number`
  - `endLineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：在编辑器中显示指定的多行，并使其位于视图中心。


## revealLinesInCenterIfOutsideViewport
- 语法：`revealLinesInCenterIfOutsideViewport(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`: `number`
  - `endLineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：在编辑器中显示指定的多行，并使其位于视图中心，如果行不在视图中，则将其移动到视图顶部。


## revealLinesNearTop
- 语法：`revealLinesNearTop(startLineNumber, endLineNumber, scrollType?): void`
- 参数：
  - `startLineNumber`: `number`
  - `endLineNumber`: `number`
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：在编辑器中显示指定的多行，并使其位于视图顶部，如果行不在视图中，则将其移动到视图顶部。


## revealPosition
- 语法：`revealPosition(position, scrollType?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示位置。


## revealPositionInCenter
- 语法：`revealPositionInCenter(position, scrollType?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示位置，并使其位于视图中心。


## revealPositionInCenterIfOutsideViewport
- 语法：`revealPositionInCenterIfOutsideViewport(position, scrollType?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示位置，并使其位于视图中心，如果位置不在视图中，则将其移动到视图顶部。


## revealPositionNearTop
- 语法：`revealPositionNearTop(position, scrollType?): void`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示位置，并使其位于视图顶部，如果位置不在视图中，则将其移动到视图顶部。


## revealRange
- 语法：`revealRange(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围。


## revealRangeAtTop
- 语法：`revealRangeAtTop(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围，并使其位于视图顶部。


## revealRangeInCenter
- 语法：`revealRangeInCenter(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围，并使其位于视图中心。


## revealRangeInCenterIfOutsideViewport
- 语法：`revealRangeInCenterIfOutsideViewport(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围，并使其位于视图中心，如果范围不在视图中，则将其移动到视图顶部。


## revealRangeNearTop
- 语法：`revealRangeNearTop(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围，并使其位于视图顶部，如果范围不在视图中，则将其移动到视图顶部。


## revealRangeNearTopIfOutsideViewport
- 语法：`revealRangeNearTopIfOutsideViewport(range, scrollType?): void`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `scrollType`: [ScrollType](/api/editor/ScrollType.md)
- 描述：根据需要垂直或水平滚动并显示范围，并使其位于视图顶部，如果范围不在视图中，则将其移动到视图顶部。


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
- 语法：`setModel(model: ITextModel): void`
- 参数：[ItextModel](/api/editor/ITextModel.md)
- 描述：设置编辑器模型。


## setPosition
- 语法：`setPosition(position, source?): void`
- 参数：
  - [IPosition](/api/IPosition.md)
  - `source`: `string`
- 描述：设置编辑器位置。


## setScrollLeft
- 语法：`setScrollLeft(newScrollLeft, scrollType?): void`
- 参数：
  - `newScrollLeft`: `number`
  - `scrollType`: [scrollType](/api/editor/ScrollType.md)
- 描述：设置编辑器水平滚动。


## setScrollPosition
- 语法：`setScrollPosition(position, scrollType?): void`
- 参数：
  - `position`: [INewScrollPosition](/api/editor/INewScrollPosition.md)
  - `scrollType`: [scrollType](/api/editor/ScrollType.md)
- 描述：设置编辑器滚动位置。


## setScrollTop
- 语法：`setScrollTop(newScrollTop, scrollType?): void`
- 参数：
  - `newScrollTop`: `number`
  - `scrollType`: [scrollType](/api/editor/ScrollType.md)
- 描述：设置编辑器垂直滚动。


## setSelection
- 语法：`setSelection(selection, source?): void`
- 参数：
  - `selection`: [IRange](/api/IRange.md)
  - `source`: `string`
- 描述：设置编辑器选择。
<img src='/setSelection.gif' />

## setSelections
- 语法：`setSelections(selections, source?): void`
- 参数：
  - `selections`: `readonly` [ISelection](/api/ISelection.md)[]
  - `source`: `string`
- 描述：设置编辑器选择。


## setValue
- 语法：`setValue(newValue: string): void`
- 参数：`newValue`: `string`
- 描述：设置编辑器值(这种方式只能修改值，不能修改语言类型)。
<img src='/myEditorSetValue.gif' />


## trigger
- 语法：`trigger(source: string, handlerId: string, payload: any): void`
- 参数：
  - `source`: `string`
  - `handlerId`: `string`
  - `payload`: `any` 传递给命令处理程序的参数
- 描述：触发编辑器命令。


## updateOptions
- 语法：`updateOptions(newOptions): void`
- 参数：`newOptions`:[IEditorOptions](/api/editor/IEditorOptions.md) & [IGlobalEditorOptions](/api/editor/IGlobalEditorOptions.md)
- 描述：更新编辑器选项。

## writeScreenReaderContent
- 语法：`writeScreenReaderContent(reason): void`
- 参数：`reason`: `string`
- 描述：将编辑器内容写入屏幕阅读器。


## onContextMenu
- 语法：`onContextMenu: IEvent<IEditorMouseEvent>`
- 参数：[IEditorMouseEvent](/api/editor/IEditorMouseEvent.md)
- 描述：监听编辑器上下文菜单事件。
- 示例：
```js
  myEditor.onContextMenu(({ event, target }) => {
    console.log(event,target);
  });
```
<img src='/onContextMenu.gif' />

## onDidAttemptReadOnlyEdit
- 语法：`onDidAttemptReadOnlyEdit: IEvent<void>`
- 描述：监听编辑器尝试只读编辑事件。
- 示例：
```js
 const myEditor = editor.create(dom, {
    value: `// create a model`,
    language: "javascript",
    readOnly: true, // 配置只读
  });

    myEditor.onDidAttemptReadOnlyEdit(() => {
    console.log("onDidAttemptReadOnlyEdit");
  });
```
<img src='/onDidAttemptReadOnlyEdit.gif' />

## onDidBlurEditorText
- 语法：`onDidBlurEditorText: IEvent<void>`
- 描述：监听编辑器失去焦点事件。


## onDidBlurEditorWidget
- 语法：`onDidBlurEditorWidget: IEvent<void>`
- 描述：监听编辑器 Widget 失去焦点事件。


## onDidChangeConfiguration
- 语法：`onDidChangeConfiguration: IEvent<ConfigurationChangedEvent>`
- 参数：[ConfigurationChangedEvent](/api/editor/ConfigurationChangedEvent.md)
- 描述：监听编辑器配置改变事件。


## onDidChangeCursorPosition
- 语法：`onDidChangeCursorPosition: IEvent<ICursorPositionChangedEvent>`
- 参数：[ICursorPositionChangedEvent](/api/editor/ICursorPositionChangedEvent.md)
- 描述：监听编辑器光标位置改变事件。
```js
  myEditor.onDidChangeCursorPosition((e) => {
    console.log("onDidChangeCursorPosition", e);
  });
```
<img src='/onDidChangeCursorPosition.png' />

## onDidChangeCursorSelection
- 语法：`onDidChangeCursorSelection: IEvent<ICursorSelectionChangedEvent>`
- 参数：[ICursorSelectionChangedEvent](/api/editor/ICursorSelectionChangedEvent.md)
- 描述：监听编辑器光标选择改变事件。


## onDidChangeHiddenAreas
- 语法：`onDidChangeHiddenAreas: IEvent<void>`
- 描述：监听编辑器隐藏区域改变事件。


## onDidChangeModel
- 语法：`onDidChangeModel: IEvent<IModelChangedEvent>`
- 参数：[IModelChangedEvent](/api/editor/IModelChangedEvent.md)
- 描述：监听编辑器模型改变事件。


## onDidChangeModelContent
- 语法：`onDidChangeModelContent: IEvent<IModelContentChangedEvent>`
- 参数：[IModelContentChangedEvent](/api/editor/IModelContentChangedEvent.md)
- 描述：监听编辑器模型内容改变事件。


## onDidChangeModelDecorations
- 语法：`onDidChangeModelDecorations: IEvent<IModelDecorationsChangedEvent>`
- 参数：[IModelDecorationsChangedEvent](/api/editor/IModelDecorationsChangedEvent.md)
- 描述：监听编辑器模型装饰改变事件。


## onDidChangeModelLanguage
- 语法：`onDidChangeModelLanguage: IEvent<IModelLanguageChangedEvent>`
- 参数：[IModelLanguageChangedEvent](/api/editor/IModelLanguageChangedEvent.md)
- 描述：监听编辑器模型语言改变事件。


## onDidChangeModelLanguageConfiguration
- 语法：`onDidChangeModelLanguageConfiguration: IEvent<IModelLanguageConfigurationChangedEvent>`
- 参数：[IModelLanguageConfigurationChangedEvent](/api/editor/IModelLanguageConfigurationChangedEvent.md)
- 描述：监听编辑器模型语言配置改变事件。


## onDidChangeModelOptions
- 语法：`onDidChangeModelOptions: IEvent<IModelOptionsChangedEvent>`
- 参数：[IModelOptionsChangedEvent](/api/editor/IModelOptionsChangedEvent.md)
- 描述：监听编辑器模型选项改变事件。


## onDidContentSizeChange
- 语法：`onDidContentSizeChange: IEvent<IContentSizeChangedEvent>`
- 参数：[IContentSizeChangedEvent](/api/editor/IContentSizeChangedEvent.md)
- 描述：监听编辑器内容大小改变事件。


## onDidFocusEditorText
- 语法：`onDidFocusEditorText: IEvent<void>`
- 描述：监听编辑器获得焦点事件。


## onDidFocusEditorWidget
- 语法：`onDidFocusEditorWidget: IEvent<void>`
- 描述：监听编辑器 Widget 获得焦点事件。


## onDidLayoutChange
- 语法：`onDidLayoutChange: IEvent<EditorLayoutInfo>`
- 参数：[EditorLayoutInfo](/api/editor/EditorLayoutInfo.md)


## onDidPaste
- 语法：`onDidPaste: IEvent<IPasteEvent>`
- 参数：[IPasteEvent](/api/editor/IPasteEvent.md)
- 描述：监听编辑器粘贴事件。


## onDidScrollChange
- 语法：`onDidScrollChange: IEvent<IScrollEvent>`
- 参数：[IScrollEvent](/api/IScrollEvent.md)
- 描述：监听编辑器滚动事件。


## onKeyDown
- 语法：`onKeyDown: IEvent<IKeyboardEvent>`
- 参数：[IKeyboardEvent](/api/IKeyboardEvent.md)
- 描述：监听编辑器按键按下事件。


## onKeyUp
- 语法：`onKeyUp: IEvent<IKeyboardEvent>`
- 参数：[IKeyboardEvent](/api/IKeyboardEvent.md)
- 描述：监听编辑器按键抬起事件。


## onMouseDown
- 语法：`onMouseDown: IEvent<IEditorMouseEvent>`
- 参数：[IEditorMouseEvent](/api/editor/IEditorMouseEvent.md)
- 描述：监听编辑器鼠标按下事件。


## onMouseLeave
- 语法：`onMouseLeave: IEvent<IEditorMouseEvent>`
- 参数：[IEditorMouseEvent](/api/editor/IEditorMouseEvent.md)
- 描述：监听编辑器鼠标离开事件。


## onMouseMove
- 语法：`onMouseMove: IEvent<IEditorMouseEvent>`
- 参数：[IEditorMouseEvent](/api/editor/IEditorMouseEvent.md)
- 描述：监听编辑器鼠标移动事件。


## onMouseUp
- 语法：`onMouseUp: IEvent<IEditorMouseEvent>`
- 参数：[IEditorMouseEvent](/api/editor/IEditorMouseEvent.md)
- 描述：监听编辑器鼠标抬起事件。


## onWillChangeModel
- 语法：`onWillChangeModel: IEvent<IModelChangedEvent>`
- 参数：[IModelChangedEvent](/api/editor/IModelChangedEvent.md)
- 描述：监听编辑器模型即将改变事件。


## onDidDispose
- 语法：`onDidDispose: IEvent<void>`
- 描述：监听编辑器销毁事件。
