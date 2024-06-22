# ITextModel
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ITextModel.html
:::

```ts
interface ITextModel {
    id: string;
    onDidChangeAttached: IEvent<void>;
    onDidChangeDecorations: IEvent<IModelDecorationsChangedEvent>;
    onDidChangeLanguage: IEvent<IModelLanguageChangedEvent>;
    onDidChangeLanguageConfiguration: IEvent<IModelLanguageConfigurationChangedEvent>;
    onDidChangeOptions: IEvent<IModelOptionsChangedEvent>;
    onWillDispose: IEvent<void>;
    uri: Uri;
    applyEdits(operations): void;
    applyEdits(operations, computeUndoEdits): void;
    applyEdits(operations, computeUndoEdits): IValidEditOperation[];
    createSnapshot(preserveBOM?): ITextSnapshot;
    deltaDecorations(oldDecorations, newDecorations, ownerId?): string[];
    detectIndentation(defaultInsertSpaces, defaultTabSize): void;
    dispose(): void;
    findMatches(searchString, searchOnlyEditableRange, isRegex, matchCase, wordSeparators, captureMatches, limitResultCount?): FindMatch[];
    findMatches(searchString, searchScope, isRegex, matchCase, wordSeparators, captureMatches, limitResultCount?): FindMatch[];
    findNextMatch(searchString, searchStart, isRegex, matchCase, wordSeparators, captureMatches): FindMatch;
    findPreviousMatch(searchString, searchStart, isRegex, matchCase, wordSeparators, captureMatches): FindMatch;
    getAllDecorations(ownerId?, filterOutValidation?): IModelDecoration[];
    getAllMarginDecorations(ownerId?): IModelDecoration[];
    getAlternativeVersionId(): number;
    getCharacterCountInRange(range, eol?): number;
    getDecorationOptions(id): IModelDecorationOptions;
    getDecorationRange(id): Range;
    getDecorationsInRange(range, ownerId?, filterOutValidation?, onlyMinimapDecorations?, onlyMarginDecorations?): IModelDecoration[];
    getEOL(): string;
    getEndOfLineSequence(): EndOfLineSequence;
    getFullModelRange(): Range;
    getInjectedTextDecorations(ownerId?): IModelDecoration[];
    getLanguageId(): string;
    getLineContent(lineNumber): string;
    getLineCount(): number;
    getLineDecorations(lineNumber, ownerId?, filterOutValidation?): IModelDecoration[];
    getLineFirstNonWhitespaceColumn(lineNumber): number;
    getLineLastNonWhitespaceColumn(lineNumber): number;
    getLineLength(lineNumber): number;
    getLineMaxColumn(lineNumber): number;
    getLineMinColumn(lineNumber): number;
    getLinesContent(): string[];
    getLinesDecorations(startLineNumber, endLineNumber, ownerId?, filterOutValidation?): IModelDecoration[];
    getOffsetAt(position): number;
    getOptions(): TextModelResolvedOptions;
    getOverviewRulerDecorations(ownerId?, filterOutValidation?): IModelDecoration[];
    getPositionAt(offset): Position;
    getValue(eol?, preserveBOM?): string;
    getValueInRange(range, eol?): string;
    getValueLength(eol?, preserveBOM?): number;
    getValueLengthInRange(range, eol?): number;
    getVersionId(): number;
    getWordAtPosition(position): IWordAtPosition;
    getWordUntilPosition(position): IWordAtPosition;
    isAttachedToEditor(): boolean;
    isDisposed(): boolean;
    modifyPosition(position, offset): Position;
    normalizeIndentation(str): string;
    onDidChangeContent(listener): IDisposable;
    popStackElement(): void;
    pushEOL(eol): void;
    pushEditOperations(beforeCursorState, editOperations, cursorStateComputer): Selection[];
    pushStackElement(): void;
    setEOL(eol): void;
    setValue(newValue): void;
    updateOptions(newOpts): void;
    validatePosition(position): Position;
    validateRange(range): Range;
}
```
## id
- 类型：`string`
- 描述：文本模型的ID

## onDidChangeAttached


## onDidChangeDecorations


## onDidChangeLanguage


## onDidChangeLanguageConfiguration


## onDidChangeOptions


## onWillDispose


## uri
- 类型：[uri](/api/Uri.md)
- 描述：文本模型的URI


## applyEdits



## createSnapshot


## deltaDecorations


## detectIndentation


## dispose


## findMatches


## findMatches


## findNextMatch


## findPreviousMatch


## getAllDecorations


## getAllMarginDecorations


## getAlternativeVersionId


## getCharacterCountInRange


## getDecorationOptions


## getDecorationRange


## getDecorationsInRange


## getEOL


## getEndOfLineSequence


## getFullModelRange


## getInjectedTextDecorations


## getLanguageId


## getLineContent


## getLineCount


## getLineDecorations


## getLineFirstNonWhitespaceColumn


## getLineLastNonWhitespaceColumn


## getLineLength


## getLineMaxColumn


## getLineMinColumn


## getLinesContent


## getLinesDecorations


## getOffsetAt


## getOptions


## getOverviewRulerDecorations


## getPositionAt


## getValue


## getValueInRange


## getValueLength


## getValueLengthInRange


## getVersionId


## getWordAtPosition


## getWordUntilPosition


## isAttachedToEditor


## isDisposed


## modifyPosition


## normalizeIndentation


## onDidChangeContent


## popStackElement


## pushEOL


## pushEditOperations


## pushStackElement


## setEOL


## setValue


## updateOptions


## validatePosition


## validateRange

