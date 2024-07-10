# ITextModel

<backTop />
        
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

## 快捷链接
<script setup>
const data = [
  { icon: "P", link: "id" },
  { icon: "P", link: "uri" },
  { icon: "M", link: "applyEdits" },
  { icon: "M", link: "createSnapshot" },
  { icon: "M", link: "deltaDecorations" },
  { icon: "M", link: "detectIndentation" },
  { icon: "M", link: "dispose" },
  { icon: "M", link: "findMatches" },
  { icon: "M", link: "findNextMatch" },
  { icon: "M", link: "findPreviousMatch" },
  { icon: "M", link: "getAllDecorations" },
  { icon: "M", link: "getAllMarginDecorations" },
  { icon: "M", link: "getAlternativeVersionId" },
  { icon: "M", link: "getCharacterCountInRange" },
  { icon: "M", link: "getDecorationOptions" },
  { icon: "M", link: "getDecorationRange" },
  { icon: "M", link: "getDecorationsInRange" },
  { icon: "M", link: "getEOL" },
  { icon: "M", link: "getEndOfLineSequence" },
  { icon: "M", link: "getFullModelRange" },
  { icon: "M", link: "getInjectedTextDecorations" },
  { icon: "M", link: "getLanguageId" },
  { icon: "M", link: "getLineContent" },
  { icon: "M", link: "getLineCount" },
  { icon: "M", link: "getLineDecorations" },
  { icon: "M", link: "getLineFirstNonWhitespaceColumn" },
  { icon: "M", link: "getLineLastNonWhitespaceColumn" },
  { icon: "M", link: "getLineLength" },
  { icon: "M", link: "getLineMaxColumn" },
  { icon: "M", link: "getLineMinColumn" },
  { icon: "M", link: "getLinesContent" },
  { icon: "M", link: "getLinesDecorations" },
  { icon: "M", link: "getOffsetAt" },
  { icon: "M", link: "getOptions" },
  { icon: "M", link: "getOverviewRulerDecorations" },
  { icon: "M", link: "getPositionAt" },
  { icon: "M", link: "getValue" },
  { icon: "M", link: "getValueInRange" },
  { icon: "M", link: "getValueLength" },
  { icon: "M", link: "getValueLengthInRange" },
  { icon: "M", link: "getVersionId" },
  { icon: "M", link: "getWordAtPosition" },
  { icon: "M", link: "getWordUntilPosition" },
  { icon: "M", link: "isAttachedToEditor" },
  { icon: "M", link: "isDisposed" },
  { icon: "M", link: "modifyPosition" },
  { icon: "M", link: "normalizeIndentation" },
  { icon: "M", link: "popStackElement" },
  { icon: "M", link: "pushEOL" },
  { icon: "M", link: "pushEditOperations" },
  { icon: "M", link: "pushStackElement" },
  { icon: "M", link: "setEOL" },
  { icon: "M", link: "setValue" },
  { icon: "M", link: "updateOptions" },
  { icon: "M", link: "validatePosition" },
  { icon: "M", link: "validateRange" },
  { icon: "P", link: "onDidChangeAttached" },
  { icon: "P", link: "onDidChangeDecorations" },
  { icon: "P", link: "onDidChangeLanguage" },
  { icon: "P", link: "onDidChangeLanguageConfiguration" },
  { icon: "P", link: "onDidChangeOptions" },
  { icon: "P", link: "onWillDispose" },
  { icon: "M", link: "onDidChangeContent" },
];

</script>
<dataItems :data="data" />

## id
- 类型：`string`
- 描述：模型 ID


## uri
- 类型：[Uri](/api/Uri.md)
- 描述：模型 URI


## applyEdits
- 语法：`applyEdits(operations): void`
- 参数：`operations`: [IIdentifiedSingleEditOperation](/api/editor/IIdentifiedSingleEditOperation.md)[]
- 描述：编辑模型，而不将编辑添加到撤消堆栈中，这可能会对撤消堆栈造成可怕的后果！


## createSnapshot
- 语法：`createSnapshot(preserveBOM): ITextSnapshot`
- 参数：`preserveBOM`: `boolean`
- 返回值：[ITextSnapshot](/api/editor/ITextSnapshot.md)
- 描述：创建一个快照，该快照包含模型中的所有文本，但不包含任何编辑操作。


## deltaDecorations
- 语法：`deltaDecorations(oldDecorations, newDecorations, ownerId?): string[]`
- 参数：
  - `oldDecorations`: `string[]`
  - `newDecorations`: [IModelDeltaDecoration](/api/editor/IModelDeltaDecoration.md)[]
  - `ownerId`: `number`
- 描述：更新装饰，并返回新创建的装饰的 ID。


## detectIndentation
- 语法：`detectIndentation(defaultInsertSpaces, defaultTabSize): void`
- 参数：
  - `defaultInsertSpaces`: `boolean`
  - `defaultTabSize`: `number`
- 描述：检测模型中的缩进设置。


## dispose
- 语法：`dispose(): void`
- 描述：释放模型。


## findMatches
- 语法：`findMatches(searchString, searchOnlyEditableRange, isRegex, matchCase, wordSeparators, captureMatches, limitResultCount?): FindMatch[]`
- 参数：
  - `searchString`: `string` 用于搜索的字符串。如果是正则表达式，请将isRegex设置为true。
  - `searchOnlyEditableRange`: `boolean` 将搜索限制为仅在模型的可编辑范围内进行搜索。
  - `isRegex`: `boolean` 如果为true，则搜索字符串将视为正则表达式。
  - `matchCase`: `boolean` 如果为true，则搜索字符串将区分大小写。
  - `wordSeparators`: `string` 用于搜索的单词分隔符。
  - `captureMatches`: `boolean` 如果为true，则搜索字符串将捕获匹配项。
  - `limitResultCount`: `number` 搜索结果的最大数量。
- 返回值：[FindMatch](/api/editor/FindMatch.md)[]
- 描述：搜索模型中的文本。


## findNextMatch
- 语法：`findNextMatch(searchString, searchStart, isRegex, matchCase, wordSeparators, captureMatches): FindMatch`
- 参数：
  - `searchString`: `string` 用于搜索的字符串。如果是正则表达式，请将isRegex设置为true。
  - `searchStart`: [Position](/api/Position.md) 搜索的起始位置。
  - `isRegex`: `boolean` 如果为true，则搜索字符串将视为正则表达式。
  - `matchCase`: `boolean` 如果为true，则搜索字符串将区分大小写。
  - `wordSeparators`: `string` 用于搜索的单词分隔符。
  - `captureMatches`: `boolean` 如果为true，则搜索字符串将捕获匹配项。
- 返回值：[FindMatch](/api/editor/FindMatch.md)
- 描述：在模型中搜索下一个匹配项。如果需要，循环到模型的开头。


## findPreviousMatch
- 语法：`findPreviousMatch(searchString, searchStart, isRegex, matchCase, wordSeparators, captureMatches): FindMatch`
- 参数：
  - `searchString`: `string` 用于搜索的字符串。如果是正则表达式，请将isRegex设置为true。
  - `searchStart`: [Position](/api/Position.md) 搜索的起始位置。
  - `isRegex`: `boolean` 如果为true，则搜索字符串将视为正则表达式。
  - `matchCase`: `boolean` 如果为true，则搜索字符串将区分大小写。
  - `wordSeparators`: `string` 用于搜索的单词分隔符。
  - `captureMatches`: `boolean` 如果为true，则搜索字符串将捕获匹配项。
- 返回值: [FindMatch](/api/editor/FindMatch.md)
- 描述：在模型中搜索上一个匹配项。如果需要，循环到模型的末尾。


## getAllDecorations
- 语法：`getAllDecorations(ownerId?, filterOutValidation?): IModelDecoration[]`
- 参数：
  - `ownerId`: `number`
  - `filterOutValidation`: `boolean`
- 返回值: [IModelDecoration](/api/editor/IModelDecoration.md)[]
- 描述：获取所有装饰。


## getAllMarginDecorations
- 语法：`getAllMarginDecorations(ownerId?): IModelDecoration[]`
- 参数：`ownerId`: `number`
- 返回值: [IModelDecoration](/api/editor/IModelDecoration.md)[]
- 描述：获取所有边栏装饰。


## getAlternativeVersionId
- 语法：`getAlternativeVersionId(): number`
- 描述：获取模型的替代版本 ID。


## getCharacterCountInRange
- 语法：`getCharacterCountInRange(range, eol?): number`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `eol`: [EndOfLinePreference](/api/editor/EndOfLinePreference.md)
- 描述：获取范围内的字符数。


## getDecorationOptions
- 语法：`getDecorationOptions(id): IModelDecorationOptions`
- 参数：`id`: `string`
- 返回值: [IModelDecorationOptions](/api/editor/IModelDecorationOptions.md)
- 描述：获取装饰的选项。


## getDecorationRange
- 语法：`getDecorationRange(id): Range`
- 参数：`id`: `string`
- 返回值: [Range](/api/Range.md)
- 描述：获取装饰的范围。


## getDecorationsInRange
- 语法：`getDecorationsInRange(range, ownerId?, filterOutValidation?, onlyMinimapDecorations?, onlyMarginDecorations?): IModelDecoration[]`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `ownerId`: `number`
  - `filterOutValidation`: `boolean` 如果设置，它将忽略特定于验证的装饰（即警告、错误）。
  - `onlyMinimapDecorations`: `boolean` 如果设置，则只返回最小地图装饰。
  - `onlyMarginDecorations`: `boolean` 如果设置，则只返回边栏装饰。
- 返回值: [IModelDecoration](/api/editor/IModelDecoration.md)[]
- 描述：获取装饰在给定范围内的装饰。


## getEOL
- 语法：`getEOL(): string`
- 描述：获取模型的 EOL。


## getEndOfLineSequence
- 语法：`getEndOfLineSequence(): EndOfLineSequence`
- 返回值: [EndOfLineSequence](/api/editor/EndOfLineSequence.md)
- 描述：获取主要用于文本缓冲区的行尾序列。


## getFullModelRange
- 语法：`getFullModelRange(): Range`
- 返回值: [Range](/api/Range.md)
- 描述：获取模型的完整范围。


## getInjectedTextDecorations
- 语法：`getInjectedTextDecorations(ownerId?): IModelDecoration[]`
- 参数：`ownerId`: `number`
- 返回值: [IModelDecoration](/api/editor/IModelDecoration.md)[]
- 描述：获取注入文本装饰。


## getLanguageId
- 语法：`getLanguageId(): string`
- 描述：获取模型的语言 ID。


## getLineContent
- 语法：`getLineContent(lineNumber): string`
- 参数：`lineNumber`: `number`
- 描述：获取指定行的内容。


## getLineCount
- 语法：`getLineCount(): number`
- 描述：获取模型的行数。


## getLineDecorations
- 语法：`getLineDecorations(lineNumber, ownerId?, filterOutValidation?): IModelDecoration[]`
- 参数：
  - `lineNumber`: `number`
  - `ownerId`: `number`
  - `filterOutValidation`: `boolean`
- 返回值: [IModelDecoration](/api/editor/IModelDecoration.md)[]
- 描述：获取装饰在给定行的装饰。


## getLineFirstNonWhitespaceColumn
- 语法：`getLineFirstNonWhitespaceColumn(lineNumber): number`
- 参数：`lineNumber`: `number`
- 描述：获取指定行的第一个非空白字符列。


## getLineLastNonWhitespaceColumn
- 语法：`getLineLastNonWhitespaceColumn(lineNumber): number`
- 参数：`lineNumber`: `number`
- 描述：获取指定行的最后一个非空白字符列。


## getLineLength
- 语法：`getLineLength(lineNumber): number`
- 参数：`lineNumber`: `number`
- 描述：获取指定行的长度。


## getLineMaxColumn
- 语法：`getLineMaxColumn(lineNumber): number`
- 参数：`lineNumber`: `number`
- 描述：获取指定行的最大列。


## getLineMinColumn
- 语法：`getLineMinColumn(lineNumber): number`
- 参数：`lineNumber`: `number`
- 描述：获取指定行的最小列。


## getLinesContent
- 语法：`getLinesContent(): string[]`
- 描述：获取模型的所有行的内容。


## getLinesDecorations
- 语法：`getLinesDecorations(startLineNumber, endLineNumber, ownerId?, filterOutValidation?): IModelDecoration[]`
- 参数：
  - `startLineNumber`: `number`
  - `endLineNumber`: `number`
  - `ownerId`: `number`
  - `filterOutValidation`: `boolean`
- 返回值: [IModelDecoration](/api/editor/IModelDecoration.md)[]
- 描述：以数组形式获取startLineNumber和endLineNumber之间的行的所有装饰。


## getOffsetAt
- 语法：`getOffsetAt(position): number`
- 参数：`position`: [IPosition](/api/IPosition.md)
- 描述：获取给定位置的偏移量。


## getOptions
- 语法：`getOptions(): TextModelResolvedOptions`
- 返回值: [TextModelResolvedOptions](/api/editor/TextModelResolvedOptions.md)
- 描述：获取模型的选项。


## getOverviewRulerDecorations
- 语法：`getOverviewRulerDecorations(ownerId?, filterOutValidation?): IModelDecoration[]`
- 参数：
  - `ownerId`: `number`
  - `filterOutValidation`: `boolean`
- 返回值: [IModelDecoration](/api/editor/IModelDecoration.md)[]
- 描述：获取装饰在概览 ruler 中的装饰。


## getPositionAt
- 语法：`getPositionAt(offset): Position`
- 参数：`offset`: `number`
- 返回值: [Position](/api/Position.md)
- 描述：获取给定偏移量的位置。


## getValue
- 语法：`getValue(eol?, preserveBOM?): string`
- 参数：
  - `eol`: [EndOfLinePreference](/api/editor/EndOfLinePreference.md)
  - `preserveBOM`: `boolean`
- 描述：获取模型的值。


## getValueInRange
- 语法：`getValueInRange(range, eol?): string`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `eol`: [EndOfLinePreference](/api/editor/EndOfLinePreference.md)
- 描述：获取范围内的值。


## getValueLength
- 语法：`getValueLength(eol?, preserveBOM?): number`
- 参数：
  - `eol`: [EndOfLinePreference](/api/editor/EndOfLinePreference.md)
  - `preserveBOM`: `boolean`
- 描述：获取模型的值长度。


## getValueLengthInRange
- 语法：`getValueLengthInRange(range, eol?): number`
- 参数：
  - `range`: [IRange](/api/IRange.md)
  - `eol`: [EndOfLinePreference](/api/editor/EndOfLinePreference.md)
- 描述：获取范围内的值长度。


## getVersionId
- 语法：`getVersionId(): number`
- 描述：获取模型的版本 ID。


## getWordAtPosition
- 语法：`getWordAtPosition(position): IWordAtPosition`
- 参数：`position`: [IPosition](/api/IPosition.md)
- 返回值: [IWordAtPosition](/api/editor/IWordAtPosition.md)
- 描述：获取给定位置的单词。


## getWordUntilPosition
- 语法：`getWordUntilPosition(position): IWordAtPosition`
- 参数：`position`: [IPosition](/api/IPosition.md)
- 返回值: [IWordAtPosition](/api/editor/IWordAtPosition.md)
- 描述：获取给定位置的单词。


## isAttachedToEditor
- 语法：`isAttachedToEditor(): boolean`
- 描述：检查模型是否附加到编辑器。


## isDisposed
- 语法：`isDisposed(): boolean`
- 描述：检查模型是否被销毁。


## modifyPosition
- 语法：`modifyPosition(position, offset): Position`
- 参数：
  - `position`: [IPosition](/api/IPosition.md)
  - `offset`: `number`
- 返回值: [Position](/api/Position.md)
- 描述：修改给定位置。


## normalizeIndentation
- 语法：`normalizeIndentation(str): string`
- 参数：`str`: `string`
- 描述：将给定字符串转换为缩进。


## popStackElement
- 语法：`popStackElement(): void`
- 描述：弹出堆栈元素。


## pushEOL
- 语法：`pushEOL(eol): void`
- 参数：`eol`: [EndOfLineSequence](/api/editor/EndOfLineSequence.md)
- 描述：将 EOL 推入堆栈。


## pushEditOperations
- 语法：`pushEditOperations(beforeCursorState, editOperations, cursorStateComputer): Selection[]`
- 参数：
  - `beforeCursorState`: [Selection](/api/Selection.md)[]
  - `editOperations`: [IIdentifiedSingleEditOperation](/api/editor/IIdentifiedSingleEditOperation.md)[]
  - `cursorStateComputer`: [ICursorStateComputer](/api/editor/ICursorStateComputer.md)
- 返回值：[Selection](/api/Selection.md)[]
- 描述：将编辑操作推入堆栈。


## pushStackElement
- 语法：`pushStackElement(): void`
- 描述：将堆栈元素推入堆栈。


## setEOL
- 语法：`setEOL(eol): void`
- 参数：`eol`: [EndOfLineSequence](/api/editor/EndOfLineSequence.md)
- 描述：设置 EOL。


## setValue
- 语法：`setValue(newValue): void`
- 参数：`newValue`: `string`
- 描述：设置模型的值。


## updateOptions
- 语法：`updateOptions(newOpts): void`
- 参数：`newOpts`: [ITextModelUpdateOptions](/api/editor/ITextModelUpdateOptions.md)
- 描述：更新模型的选项。


## validatePosition
- 语法：`validatePosition(position): Position`
- 参数：`position`: [IPosition](/api/IPosition.md)
- 返回值: [Position](/api/Position.md)
- 描述：验证给定位置。


## validateRange
- 语法：`validateRange(range): Range`
- 参数：`range`: [IRange](/api/IRange.md)
- 返回值: [Range](/api/Range.md)
- 描述：验证给定范围的范围。


## onDidChangeAttached
- 语法：`onDidChangeAttached: IEvent<void>`
- 描述：当模型附加到编辑器时触发。


## onDidChangeDecorations
- 语法：`onDidChangeDecorations: IEvent<IModelDecorationsChangedEvent>`
- 参数：[IModelDecorationsChangedEvent](/api/editor/IModelDecorationsChangedEvent.md)
- 描述：当模型装饰更改时触发。


## onDidChangeLanguage
- 语法：`onDidChangeLanguage: IEvent<IModelLanguageChangedEvent>`
- 参数：[IModelLanguageChangedEvent](/api/editor/IModelLanguageChangedEvent.md)
- 描述：当模型语言更改时触发。


## onDidChangeLanguageConfiguration
- 语法：`onDidChangeLanguageConfiguration: IEvent<IModelLanguageConfigurationChangedEvent>`
- 参数：[IModelLanguageConfigurationChangedEvent](/api/editor/IModelLanguageConfigurationChangedEvent.md)
- 描述：当模型语言配置更改时触发。


## onDidChangeOptions
- 语法：`onDidChangeOptions: IEvent<IModelOptionsChangedEvent>`
- 参数：[IModelOptionsChangedEvent](/api/editor/IModelOptionsChangedEvent.md)
- 描述：当模型选项更改时触发。


## onWillDispose
- 语法：`onWillDispose: IEvent<void>`
- 描述：当模型即将被销毁时触发。


## onDidChangeContent
- 语法：`onDidChangeContent: IEvent<IModelContentChangedEvent>`
- 参数：[IModelContentChangedEvent](/api/editor/IModelContentChangedEvent.md)
- 描述：当模型内容更改时触发。

