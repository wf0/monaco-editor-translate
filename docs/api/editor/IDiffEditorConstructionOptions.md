# IDiffEditorConstructionOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDiffEditorConstructionOptions.html
:::

diff编辑器的配置选项。

```ts
interface IDiffEditorConstructionOptions {
    acceptSuggestionOnCommitCharacter?: boolean;
    acceptSuggestionOnEnter?: "off" | "on" | "smart";
    accessibilityPageSize?: number;
    accessibilitySupport?: "off" | "on" | "auto";
    accessibilityVerbose?: boolean;
    ariaLabel?: string;
    ariaRequired?: boolean;
    autoClosingBrackets?: EditorAutoClosingStrategy;
    autoClosingComments?: EditorAutoClosingStrategy;
    autoClosingDelete?: EditorAutoClosingEditStrategy;
    autoClosingOvertype?: EditorAutoClosingEditStrategy;
    autoClosingQuotes?: EditorAutoClosingStrategy;
    autoIndent?: "none" | "advanced" | "full" | "brackets" | "keep";
    autoSurround?: EditorAutoSurroundStrategy;
    automaticLayout?: boolean;
    bracketPairColorization?: IBracketPairColorizationOptions;
    codeActionsOnSaveTimeout?: number;
    codeLens?: boolean;
    codeLensFontFamily?: string;
    codeLensFontSize?: number;
    colorDecorators?: boolean;
    colorDecoratorsActivatedOn?: "clickAndHover" | "click" | "hover";
    colorDecoratorsLimit?: number;
    columnSelection?: boolean;
    comments?: IEditorCommentsOptions;
    contextmenu?: boolean;
    copyWithSyntaxHighlighting?: boolean;
    cursorBlinking?: "blink" | "smooth" | "phase" | "expand" | "solid";
    cursorSmoothCaretAnimation?: "off" | "on" | "explicit";
    cursorStyle?: "line" | "block" | "underline" | "line-thin" | "block-outline" | "underline-thin";
    cursorSurroundingLines?: number;
    cursorSurroundingLinesStyle?: "default" | "all";
    cursorWidth?: number;
    defaultColorDecorators?: boolean;
    definitionLinkOpensInPeek?: boolean;
    diffAlgorithm?: "advanced" | "legacy";
    diffCodeLens?: boolean;
    diffWordWrap?: "off" | "on" | "inherit";
    dimension?: IDimension;
    disableLayerHinting?: boolean;
    disableMonospaceOptimizations?: boolean;
    domReadOnly?: boolean;
    dragAndDrop?: boolean;
    dropIntoEditor?: IDropIntoEditorOptions;
    emptySelectionClipboard?: boolean;
    enableSplitViewResizing?: boolean;
    experimental?: {
        showEmptyDecorations?: boolean;
        showMoves?: boolean;
    };
    experimentalInlineEdit?: IInlineEditOptions;
    experimentalWhitespaceRendering?: "off" | "svg" | "font";
    extraEditorClassName?: string;
    fastScrollSensitivity?: number;
    find?: IEditorFindOptions;
    fixedOverflowWidgets?: boolean;
    folding?: boolean;
    foldingHighlight?: boolean;
    foldingImportsByDefault?: boolean;
    foldingMaximumRegions?: number;
    foldingStrategy?: "auto" | "indentation";
    fontFamily?: string;
    fontLigatures?: string | boolean;
    fontSize?: number;
    fontVariations?: string | boolean;
    fontWeight?: string;
    formatOnPaste?: boolean;
    formatOnType?: boolean;
    glyphMargin?: boolean;
    gotoLocation?: IGotoLocationOptions;
    guides?: IGuidesOptions;
    hideCursorInOverviewRuler?: boolean;
    hideUnchangedRegions?: {
        contextLineCount?: number;
        enabled?: boolean;
        minimumLineCount?: number;
        revealLineCount?: number;
    };
    hover?: IEditorHoverOptions;
    ignoreTrimWhitespace?: boolean;
    inDiffEditor?: boolean;
    inlayHints?: IEditorInlayHintsOptions;
    inlineCompletionsAccessibilityVerbose?: boolean;
    inlineSuggest?: IInlineSuggestOptions;
    isInEmbeddedEditor?: boolean;
    letterSpacing?: number;
    lightbulb?: IEditorLightbulbOptions;
    lineDecorationsWidth?: string | number;
    lineHeight?: number;
    lineNumbers?: LineNumbersType;
    lineNumbersMinChars?: number;
    linkedEditing?: boolean;
    links?: boolean;
    matchBrackets?: "always" | "never" | "near";
    matchOnWordStartOnly?: boolean;
    maxComputationTime?: number;
    maxFileSize?: number;
    minimap?: IEditorMinimapOptions;
    modifiedAriaLabel?: string;
    mouseStyle?: "default" | "text" | "copy";
    mouseWheelScrollSensitivity?: number;
    mouseWheelZoom?: boolean;
    multiCursorLimit?: number;
    multiCursorMergeOverlapping?: boolean;
    multiCursorModifier?: "ctrlCmd" | "alt";
    multiCursorPaste?: "spread" | "full";
    occurrencesHighlight?: "off" | "singleFile" | "multiFile";
    onlyShowAccessibleDiffViewer?: boolean;
    originalAriaLabel?: string;
    originalEditable?: boolean;
    overflowWidgetsDomNode?: HTMLElement;
    overviewRulerBorder?: boolean;
    overviewRulerLanes?: number;
    padding?: IEditorPaddingOptions;
    parameterHints?: IEditorParameterHintOptions;
    pasteAs?: IPasteAsOptions;
    peekWidgetDefaultFocus?: "tree" | "editor";
    quickSuggestions?: boolean | IQuickSuggestionsOptions;
    quickSuggestionsDelay?: number;
    readOnly?: boolean;
    readOnlyMessage?: IMarkdownString;
    renameOnType?: boolean;
    renderControlCharacters?: boolean;
    renderFinalNewline?: "off" | "on" | "dimmed";
    renderGutterMenu?: boolean;
    renderIndicators?: boolean;
    renderLineHighlight?: "all" | "line" | "none" | "gutter";
    renderLineHighlightOnlyWhenFocus?: boolean;
    renderMarginRevertIcon?: boolean;
    renderOverviewRuler?: boolean;
    renderSideBySide?: boolean;
    renderSideBySideInlineBreakpoint?: number;
    renderValidationDecorations?: "off" | "on" | "editable";
    renderWhitespace?: "all" | "none" | "boundary" | "selection" | "trailing";
    revealHorizontalRightPadding?: number;
    roundedSelection?: boolean;
    rulers?: (number | IRulerOption)[];
    screenReaderAnnounceInlineSuggestion?: boolean;
    scrollBeyondLastColumn?: number;
    scrollBeyondLastLine?: boolean;
    scrollPredominantAxis?: boolean;
    scrollbar?: IEditorScrollbarOptions;
    selectOnLineNumbers?: boolean;
    selectionClipboard?: boolean;
    selectionHighlight?: boolean;
    showDeprecated?: boolean;
    showFoldingControls?: "always" | "never" | "mouseover";
    showUnused?: boolean;
    smartSelect?: ISmartSelectOptions;
    smoothScrolling?: boolean;
    snippetSuggestions?: "none" | "top" | "bottom" | "inline";
    splitViewDefaultRatio?: number;
    stickyScroll?: IEditorStickyScrollOptions;
    stickyTabStops?: boolean;
    stopRenderingLineAfter?: number;
    suggest?: ISuggestOptions;
    suggestFontSize?: number;
    suggestLineHeight?: number;
    suggestOnTriggerCharacters?: boolean;
    suggestSelection?: "first" | "recentlyUsed" | "recentlyUsedByPrefix";
    tabCompletion?: "off" | "on" | "onlySnippets";
    tabFocusMode?: boolean;
    tabIndex?: number;
    unfoldOnClickAfterEndOfLine?: boolean;
    unicodeHighlight?: IUnicodeHighlightOptions;
    unusualLineTerminators?: "off" | "auto" | "prompt";
    useInlineViewWhenSpaceIsLimited?: boolean;
    useShadowDOM?: boolean;
    useTabStops?: boolean;
    wordBreak?: "normal" | "keepAll";
    wordSegmenterLocales?: string | string[];
    wordSeparators?: string;
    wordWrap?: "off" | "on" | "wordWrapColumn" | "bounded";
    wordWrapBreakAfterCharacters?: string;
    wordWrapBreakBeforeCharacters?: string;
    wordWrapColumn?: number;
    wordWrapOverride1?: "off" | "on" | "inherit";
    wordWrapOverride2?: "off" | "on" | "inherit";
    wrappingIndent?: "none" | "same" | "indent" | "deepIndent";
    wrappingStrategy?: "simple" | "advanced";
}
```

## 快捷链接
<script setup>
const data = [
  { icon: "P", link: "acceptSuggestionOnCommitCharacter" },
  { icon: "P", link: "acceptSuggestionOnEnter" },
  { icon: "P", link: "accessibilityPageSize" },
  { icon: "P", link: "accessibilitySupport" },
  { icon: "P", link: "accessibilityVerbose" },
  { icon: "P", link: "ariaLabel" },
  { icon: "P", link: "ariaRequired" },
  { icon: "P", link: "autoClosingBrackets" },
  { icon: "P", link: "autoClosingComments" },
  { icon: "P", link: "autoClosingDelete" },
  { icon: "P", link: "autoClosingOvertype" },
  { icon: "P", link: "autoClosingQuotes" },
  { icon: "P", link: "autoIndent" },
  { icon: "P", link: "autoSurround" },
  { icon: "P", link: "automaticLayout" },
  { icon: "P", link: "bracketPairColorization" },
  { icon: "P", link: "codeActionsOnSaveTimeout" },
  { icon: "P", link: "codeLens" },
  { icon: "P", link: "codeLensFontFamily" },
  { icon: "P", link: "codeLensFontSize" },
  { icon: "P", link: "colorDecorators" },
  { icon: "P", link: "colorDecoratorsActivatedOn" },
  { icon: "P", link: "colorDecoratorsLimit" },
  { icon: "P", link: "columnSelection" },
  { icon: "P", link: "comments" },
  { icon: "P", link: "contextmenu" },
  { icon: "P", link: "copyWithSyntaxHighlighting" },
  { icon: "P", link: "cursorBlinking" },
  { icon: "P", link: "cursorSmoothCaretAnimation" },
  { icon: "P", link: "cursorStyle" },
  { icon: "P", link: "cursorSurroundingLines" },
  { icon: "P", link: "cursorSurroundingLinesStyle" },
  { icon: "P", link: "cursorWidth" },
  { icon: "P", link: "defaultColorDecorators" },
  { icon: "P", link: "definitionLinkOpensInPeek" },
  { icon: "P", link: "diffAlgorithm" },
  { icon: "P", link: "diffCodeLens" },
  { icon: "P", link: "diffWordWrap" },
  { icon: "P", link: "dimension" },
  { icon: "P", link: "disableLayerHinting" },
  { icon: "P", link: "disableMonospaceOptimizations" },
  { icon: "P", link: "domReadOnly" },
  { icon: "P", link: "dragAndDrop" },
  { icon: "P", link: "dropIntoEditor" },
  { icon: "P", link: "emptySelectionClipboard" },
  { icon: "P", link: "enableSplitViewResizing" },
  { icon: "P", link: "experimental" },
  { icon: "P", link: "experimentalInlineEdit" },
  { icon: "P", link: "experimentalWhitespaceRendering" },
  { icon: "P", link: "extraEditorClassName" },
  { icon: "P", link: "fastScrollSensitivity" },
  { icon: "P", link: "find" },
  { icon: "P", link: "fixedOverflowWidgets" },
  { icon: "P", link: "folding" },
  { icon: "P", link: "foldingHighlight" },
  { icon: "P", link: "foldingImportsByDefault" },
  { icon: "P", link: "foldingMaximumRegions" },
  { icon: "P", link: "foldingStrategy" },
  { icon: "P", link: "fontFamily" },
  { icon: "P", link: "fontLigatures" },
  { icon: "P", link: "fontSize" },
  { icon: "P", link: "fontVariations" },
  { icon: "P", link: "fontWeight" },
  { icon: "P", link: "formatOnPaste" },
  { icon: "P", link: "formatOnType" },
  { icon: "P", link: "glyphMargin" },
  { icon: "P", link: "gotoLocation" },
  { icon: "P", link: "guides" },
  { icon: "P", link: "hideCursorInOverviewRuler" },
  { icon: "P", link: "hideUnchangedRegions" },
  { icon: "P", link: "hover" },
  { icon: "P", link: "ignoreTrimWhitespace" },
  { icon: "P", link: "inDiffEditor" },
  { icon: "P", link: "inlayHints" },
  { icon: "P", link: "inlineCompletionsAccessibilityVerbose" },
  { icon: "P", link: "inlineSuggest" },
  { icon: "P", link: "isInEmbeddedEditor" },
  { icon: "P", link: "letterSpacing" },
  { icon: "P", link: "lightbulb" },
  { icon: "P", link: "lineDecorationsWidth" },
  { icon: "P", link: "lineHeight" },
  { icon: "P", link: "lineNumbers" },
  { icon: "P", link: "lineNumbersMinChars" },
  { icon: "P", link: "linkedEditing" },
  { icon: "P", link: "links" },
  { icon: "P", link: "matchBrackets" },
  { icon: "P", link: "matchOnWordStartOnly" },
  { icon: "P", link: "maxComputationTime" },
  { icon: "P", link: "maxFileSize" },
  { icon: "P", link: "minimap" },
  { icon: "P", link: "modifiedAriaLabel" },
  { icon: "P", link: "mouseStyle" },
  { icon: "P", link: "mouseWheelScrollSensitivity" },
  { icon: "P", link: "mouseWheelZoom" },
  { icon: "P", link: "multiCursorLimit" },
  { icon: "P", link: "multiCursorMergeOverlapping" },
  { icon: "P", link: "multiCursorModifier" },
  { icon: "P", link: "multiCursorPaste" },
  { icon: "P", link: "occurrencesHighlight" },
  { icon: "P", link: "onlyShowAccessibleDiffViewer" },
  { icon: "P", link: "originalAriaLabel" },
  { icon: "P", link: "originalEditable" },
  { icon: "P", link: "overflowWidgetsDomNode" },
  { icon: "P", link: "overviewRulerBorder" },
  { icon: "P", link: "overviewRulerLanes" },
  { icon: "P", link: "padding" },
  { icon: "P", link: "parameterHints" },
  { icon: "P", link: "pasteAs" },
  { icon: "P", link: "peekWidgetDefaultFocus" },
  { icon: "P", link: "quickSuggestions" },
  { icon: "P", link: "quickSuggestionsDelay" },
  { icon: "P", link: "readOnly" },
  { icon: "P", link: "readOnlyMessage" },
  { icon: "P", link: "renameOnType" },
  { icon: "P", link: "renderControlCharacters" },
  { icon: "P", link: "renderFinalNewline" },
  { icon: "P", link: "renderGutterMenu" },
  { icon: "P", link: "renderIndicators" },
  { icon: "P", link: "renderLineHighlight" },
  { icon: "P", link: "renderLineHighlightOnlyWhenFocus" },
  { icon: "P", link: "renderMarginRevertIcon" },
  { icon: "P", link: "renderOverviewRuler" },
  { icon: "P", link: "renderSideBySide" },
  { icon: "P", link: "renderSideBySideInlineBreakpoint" },
  { icon: "P", link: "renderValidationDecorations" },
  { icon: "P", link: "renderWhitespace" },
  { icon: "P", link: "revealHorizontalRightPadding" },
  { icon: "P", link: "roundedSelection" },
  { icon: "P", link: "rulers" },
  { icon: "P", link: "screenReaderAnnounceInlineSuggestion" },
  { icon: "P", link: "scrollBeyondLastColumn" },
  { icon: "P", link: "scrollBeyondLastLine" },
  { icon: "P", link: "scrollPredominantAxis" },
  { icon: "P", link: "scrollbar" },
  { icon: "P", link: "selectOnLineNumbers" },
  { icon: "P", link: "selectionClipboard" },
  { icon: "P", link: "selectionHighlight" },
  { icon: "P", link: "showDeprecated" },
  { icon: "P", link: "showFoldingControls" },
  { icon: "P", link: "showUnused" },
  { icon: "P", link: "smartSelect" },
  { icon: "P", link: "smoothScrolling" },
  { icon: "P", link: "snippetSuggestions" },
  { icon: "P", link: "splitViewDefaultRatio" },
  { icon: "P", link: "stickyScroll" },
  { icon: "P", link: "stickyTabStops" },
  { icon: "P", link: "stopRenderingLineAfter" },
  { icon: "P", link: "suggest" },
  { icon: "P", link: "suggestFontSize" },
  { icon: "P", link: "suggestLineHeight" },
  { icon: "P", link: "suggestOnTriggerCharacters" },
  { icon: "P", link: "suggestSelection" },
  { icon: "P", link: "tabCompletion" },
  { icon: "P", link: "tabFocusMode" },
  { icon: "P", link: "tabIndex" },
  { icon: "P", link: "unfoldOnClickAfterEndOfLine" },
  { icon: "P", link: "unicodeHighlight" },
  { icon: "P", link: "unusualLineTerminators" },
  { icon: "P", link: "useInlineViewWhenSpaceIsLimited" },
  { icon: "P", link: "useShadowDOM" },
  { icon: "P", link: "useTabStops" },
  { icon: "P", link: "wordBreak" },
  { icon: "P", link: "wordSegmenterLocales" },
  { icon: "P", link: "wordSeparators" },
  { icon: "P", link: "wordWrap" },
  { icon: "P", link: "wordWrapBreakAfterCharacters" },
  { icon: "P", link: "wordWrapBreakBeforeCharacters" },
  { icon: "P", link: "wordWrapColumn" },
  { icon: "P", link: "wordWrapOverride1" },
  { icon: "P", link: "wordWrapOverride2" },
  { icon: "P", link: "wrappingIndent" },
  { icon: "P", link: "wrappingStrategy" },
];

</script>
<dataItems :data="data" />


## acceptSuggestionOnCommitCharacter
- 类型: `boolean`
- 描述: 接受有关提供程序定义的字符的建议。默认为true。


## acceptSuggestionOnEnter
- 类型: `"off" | "on" | "smart"`
- 描述: 接受有关 enter回车 的建议。默认为“on”。


## accessibilityPageSize
- 类型: `number`
- 描述: 控制编辑器中屏幕阅读器可以读取的行数


## accessibilitySupport
- 类型: `"auto" | "on" | "off"`
- 描述: 配置编辑器的辅助功能支持。默认为“auto”。最好将此项留给“auto”。


## accessibilityVerbose
- 类型: `boolean`
- 描述: diff编辑器aria标签是否应该冗长。


## ariaLabel
- 类型: `string`
- 描述: 编辑器文本区域的咏叹调标签（当它被聚焦时）。


## ariaRequired


## autoClosingBrackets


## autoClosingComments


## autoClosingDelete


## autoClosingOvertype


## autoClosingQuotes


## autoIndent


## autoSurround


## automaticLayout


## bracketPairColorization


## codeActionsOnSaveTimeout


## codeLens


## codeLensFontFamily


## codeLensFontSize


## colorDecorators


## colorDecoratorsActivatedOn


## colorDecoratorsLimit


## columnSelection


## comments


## contextmenu


## copyWithSyntaxHighlighting


## cursorBlinking


## cursorSmoothCaretAnimation


## cursorStyle


## cursorSurroundingLines


## cursorSurroundingLinesStyle


## cursorWidth


## defaultColorDecorators


## definitionLinkOpensInPeek


## diffAlgorithm


## diffCodeLens


## diffWordWrap


## dimension


## disableLayerHinting


## disableMonospaceOptimizations


## domReadOnly


## dragAndDrop


## dropIntoEditor


## emptySelectionClipboard


## enableSplitViewResizing


## experimental


## experimentalInlineEdit


## experimentalWhitespaceRendering


## extraEditorClassName


## fastScrollSensitivity


## find


## fixedOverflowWidgets


## folding


## foldingHighlight


## foldingImportsByDefault


## foldingMaximumRegions


## foldingStrategy


## fontFamily


## fontLigatures


## fontSize


## fontVariations


## fontWeight


## formatOnPaste


## formatOnType


## glyphMargin


## gotoLocation


## guides


## hideCursorInOverviewRuler


## hideUnchangedRegions


## hover


## ignoreTrimWhitespace


## inDiffEditor


## inlayHints


## inlineCompletionsAccessibilityVerbose


## inlineSuggest


## isInEmbeddedEditor


## letterSpacing


## lightbulb


## lineDecorationsWidth


## lineHeight


## lineNumbers


## lineNumbersMinChars


## linkedEditing


## links


## matchBrackets


## matchOnWordStartOnly


## maxComputationTime


## maxFileSize


## minimap


## modifiedAriaLabel


## mouseStyle


## mouseWheelScrollSensitivity


## mouseWheelZoom


## multiCursorLimit


## multiCursorMergeOverlapping


## multiCursorModifier


## multiCursorPaste


## occurrencesHighlight


## onlyShowAccessibleDiffViewer


## originalAriaLabel


## originalEditable


## overflowWidgetsDomNode


## overviewRulerBorder


## overviewRulerLanes


## padding


## parameterHints


## pasteAs


## peekWidgetDefaultFocus


## quickSuggestions


## quickSuggestionsDelay


## readOnly


## readOnlyMessage


## renameOnType


## renderControlCharacters


## renderFinalNewline


## renderGutterMenu


## renderIndicators


## renderLineHighlight


## renderLineHighlightOnlyWhenFocus


## renderMarginRevertIcon


## renderOverviewRuler


## renderSideBySide


## renderSideBySideInlineBreakpoint


## renderValidationDecorations


## renderWhitespace


## revealHorizontalRightPadding


## roundedSelection


## rulers


## screenReaderAnnounceInlineSuggestion


## scrollBeyondLastColumn


## scrollBeyondLastLine


## scrollPredominantAxis


## scrollbar


## selectOnLineNumbers


## selectionClipboard


## selectionHighlight


## showDeprecated


## showFoldingControls


## showUnused


## smartSelect


## smoothScrolling


## snippetSuggestions


## splitViewDefaultRatio


## stickyScroll


## stickyTabStops


## stopRenderingLineAfter


## suggest


## suggestFontSize


## suggestLineHeight


## suggestOnTriggerCharacters


## suggestSelection


## tabCompletion


## tabFocusMode


## tabIndex


## unfoldOnClickAfterEndOfLine


## unicodeHighlight


## unusualLineTerminators


## useInlineViewWhenSpaceIsLimited


## useShadowDOM


## useTabStops


## wordBreak


## wordSegmenterLocales


## wordSeparators


## wordWrap


## wordWrapBreakAfterCharacters


## wordWrapBreakBeforeCharacters


## wordWrapColumn


## wordWrapOverride1


## wordWrapOverride2


## wrappingIndent


## wrappingStrategy

