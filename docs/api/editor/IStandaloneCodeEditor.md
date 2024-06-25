# IStandaloneCodeEditor
        
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
- 泛型：`T extends` [ContextKeyValue](/api/editor/ContextKeyValue.md)  [ContextKeyValue](/api/editor/ContextKeyValue.md)
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
- 返回值：[IModelDecoration]()[]
- 描述：获取装饰集合。



## getDomNode


## getEditorType


## getId


## getLayoutInfo


## getLineDecorations


## getModel


## getOffsetForColumn


## getOption


## getOptions


## getPosition


## getRawOptions


## getScrollHeight


## getScrollLeft


## getScrollTop


## getScrollWidth


## getScrolledVisiblePosition


## getSelection


## getSelections


## getSupportedActions


## getTargetAtClientPoint


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

