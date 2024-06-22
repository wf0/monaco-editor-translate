# IDiffEditor
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDiffEditor.html
:::

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