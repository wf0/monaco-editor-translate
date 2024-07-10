# EditorOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#variables/editor.EditorOptions.html
:::

```ts
EditorOptions: {
    acceptSuggestionOnCommitCharacter: IEditorOption<acceptSuggestionOnCommitCharacter, boolean>;
    acceptSuggestionOnEnter: IEditorOption<acceptSuggestionOnEnter, "on" | "off" | "smart">;
    accessibilityPageSize: IEditorOption<accessibilityPageSize, number>;
    accessibilitySupport: IEditorOption<accessibilitySupport, AccessibilitySupport>;
    ariaLabel: IEditorOption<ariaLabel, string>;
    ariaRequired: IEditorOption<ariaRequired, boolean>;
    autoClosingBrackets: IEditorOption<autoClosingBrackets, "always" | "languageDefined" | "beforeWhitespace" | "never">;
    autoClosingComments: IEditorOption<autoClosingComments, "always" | "languageDefined" | "beforeWhitespace" | "never">;
    autoClosingDelete: IEditorOption<autoClosingDelete, "always" | "never" | "auto">;
    autoClosingOvertype: IEditorOption<autoClosingOvertype, "always" | "never" | "auto">;
    autoClosingQuotes: IEditorOption<autoClosingQuotes, "always" | "languageDefined" | "beforeWhitespace" | "never">;
    autoIndent: IEditorOption<autoIndent, EditorAutoIndentStrategy>;
    autoSurround: IEditorOption<autoSurround, "languageDefined" | "never" | "quotes" | "brackets">;
    automaticLayout: IEditorOption<automaticLayout, boolean>;
    bracketPairColorization: IEditorOption<bracketPairColorization, Readonly<Required<IBracketPairColorizationOptions>>>;
    bracketPairGuides: IEditorOption<guides, Readonly<Required<IGuidesOptions>>>;
    codeLens: IEditorOption<codeLens, boolean>;
    codeLensFontFamily: IEditorOption<codeLensFontFamily, string>;
    codeLensFontSize: IEditorOption<codeLensFontSize, number>;
    colorDecoratorActivatedOn: IEditorOption<colorDecoratorsActivatedOn, "clickAndHover" | "click" | "hover">;
    colorDecorators: IEditorOption<colorDecorators, boolean>;
    colorDecoratorsLimit: IEditorOption<colorDecoratorsLimit, number>;
    columnSelection: IEditorOption<columnSelection, boolean>;
    comments: IEditorOption<comments, Readonly<Required<IEditorCommentsOptions>>>;
    contextmenu: IEditorOption<contextmenu, boolean>;
    copyWithSyntaxHighlighting: IEditorOption<copyWithSyntaxHighlighting, boolean>;
    cursorBlinking: IEditorOption<cursorBlinking, TextEditorCursorBlinkingStyle>;
    cursorSmoothCaretAnimation: IEditorOption<cursorSmoothCaretAnimation, "on" | "off" | "explicit">;
    cursorStyle: IEditorOption<cursorStyle, TextEditorCursorStyle>;
    cursorSurroundingLines: IEditorOption<cursorSurroundingLines, number>;
    cursorSurroundingLinesStyle: IEditorOption<cursorSurroundingLinesStyle, "default" | "all">;
    cursorWidth: IEditorOption<cursorWidth, number>;
    defaultColorDecorators: IEditorOption<defaultColorDecorators, boolean>;
    definitionLinkOpensInPeek: IEditorOption<definitionLinkOpensInPeek, boolean>;
    disableLayerHinting: IEditorOption<disableLayerHinting, boolean>;
    disableMonospaceOptimizations: IEditorOption<disableMonospaceOptimizations, boolean>;
    domReadOnly: IEditorOption<domReadOnly, boolean>;
    dragAndDrop: IEditorOption<dragAndDrop, boolean>;
    dropIntoEditor: IEditorOption<dropIntoEditor, Readonly<Required<IDropIntoEditorOptions>>>;
    editorClassName: IEditorOption<editorClassName, string>;
    emptySelectionClipboard: IEditorOption<emptySelectionClipboard, boolean>;
    experimentalWhitespaceRendering: IEditorOption<experimentalWhitespaceRendering, "off" | "svg" | "font">;
    extraEditorClassName: IEditorOption<extraEditorClassName, string>;
    fastScrollSensitivity: IEditorOption<fastScrollSensitivity, number>;
    find: IEditorOption<find, Readonly<Required<IEditorFindOptions>>>;
    fixedOverflowWidgets: IEditorOption<fixedOverflowWidgets, boolean>;
    folding: IEditorOption<folding, boolean>;
    foldingHighlight: IEditorOption<foldingHighlight, boolean>;
    foldingImportsByDefault: IEditorOption<foldingImportsByDefault, boolean>;
    foldingMaximumRegions: IEditorOption<foldingMaximumRegions, number>;
    foldingStrategy: IEditorOption<foldingStrategy, "auto" | "indentation">;
    fontFamily: IEditorOption<fontFamily, string>;
    fontInfo: IEditorOption<fontInfo, FontInfo>;
    fontLigatures2: IEditorOption<fontLigatures, string>;
    fontSize: IEditorOption<fontSize, number>;
    fontVariations: IEditorOption<fontVariations, string>;
    fontWeight: IEditorOption<fontWeight, string>;
    formatOnPaste: IEditorOption<formatOnPaste, boolean>;
    formatOnType: IEditorOption<formatOnType, boolean>;
    glyphMargin: IEditorOption<glyphMargin, boolean>;
    gotoLocation: IEditorOption<gotoLocation, Readonly<Required<IGotoLocationOptions>>>;
    hideCursorInOverviewRuler: IEditorOption<hideCursorInOverviewRuler, boolean>;
    hover: IEditorOption<hover, Readonly<Required<IEditorHoverOptions>>>;
    inDiffEditor: IEditorOption<inDiffEditor, boolean>;
    inlayHints: IEditorOption<inlayHints, Readonly<Required<IEditorInlayHintsOptions>>>;
    inlineCompletionsAccessibilityVerbose: IEditorOption<inlineCompletionsAccessibilityVerbose, boolean>;
    inlineEdit: IEditorOption<inlineEdit, Readonly<Required<IInlineEditOptions>>>;
    inlineSuggest: IEditorOption<inlineSuggest, Readonly<Required<IInlineSuggestOptions>>>;
    layoutInfo: IEditorOption<layoutInfo, EditorLayoutInfo>;
    letterSpacing: IEditorOption<letterSpacing, number>;
    lightbulb: IEditorOption<lightbulb, Readonly<Required<IEditorLightbulbOptions>>>;
    lineDecorationsWidth: IEditorOption<lineDecorationsWidth, number>;
    lineHeight: IEditorOption<lineHeight, number>;
    lineNumbers: IEditorOption<lineNumbers, InternalEditorRenderLineNumbersOptions>;
    lineNumbersMinChars: IEditorOption<lineNumbersMinChars, number>;
    linkedEditing: IEditorOption<linkedEditing, boolean>;
    links: IEditorOption<links, boolean>;
    matchBrackets: IEditorOption<matchBrackets, "always" | "never" | "near">;
    minimap: IEditorOption<minimap, Readonly<Required<IEditorMinimapOptions>>>;
    mouseStyle: IEditorOption<mouseStyle, "default" | "text" | "copy">;
    mouseWheelScrollSensitivity: IEditorOption<mouseWheelScrollSensitivity, number>;
    mouseWheelZoom: IEditorOption<mouseWheelZoom, boolean>;
    multiCursorLimit: IEditorOption<multiCursorLimit, number>;
    multiCursorMergeOverlapping: IEditorOption<multiCursorMergeOverlapping, boolean>;
    multiCursorModifier: IEditorOption<multiCursorModifier, "altKey" | "metaKey" | "ctrlKey">;
    multiCursorPaste: IEditorOption<multiCursorPaste, "spread" | "full">;
    occurrencesHighlight: IEditorOption<occurrencesHighlight, "off" | "singleFile" | "multiFile">;
    overviewRulerBorder: IEditorOption<overviewRulerBorder, boolean>;
    overviewRulerLanes: IEditorOption<overviewRulerLanes, number>;
    padding: IEditorOption<padding, Readonly<Required<IEditorPaddingOptions>>>;
    parameterHints: IEditorOption<parameterHints, Readonly<Required<IEditorParameterHintOptions>>>;
    pasteAs: IEditorOption<pasteAs, Readonly<Required<IPasteAsOptions>>>;
    peekWidgetDefaultFocus: IEditorOption<peekWidgetDefaultFocus, "tree" | "editor">;
    pixelRatio: IEditorOption<pixelRatio, number>;
    quickSuggestions: IEditorOption<quickSuggestions, InternalQuickSuggestionsOptions>;
    quickSuggestionsDelay: IEditorOption<quickSuggestionsDelay, number>;
    readOnly: IEditorOption<readOnly, boolean>;
    readOnlyMessage: IEditorOption<readOnlyMessage, any>;
    renameOnType: IEditorOption<renameOnType, boolean>;
    renderControlCharacters: IEditorOption<renderControlCharacters, boolean>;
    renderFinalNewline: IEditorOption<renderFinalNewline, "on" | "off" | "dimmed">;
    renderLineHighlight: IEditorOption<renderLineHighlight, "all" | "line" | "none" | "gutter">;
    renderLineHighlightOnlyWhenFocus: IEditorOption<renderLineHighlightOnlyWhenFocus, boolean>;
    renderValidationDecorations: IEditorOption<renderValidationDecorations, "on" | "off" | "editable">;
    renderWhitespace: IEditorOption<renderWhitespace, "all" | "none" | "boundary" | "selection" | "trailing">;
    revealHorizontalRightPadding: IEditorOption<revealHorizontalRightPadding, number>;
    roundedSelection: IEditorOption<roundedSelection, boolean>;
    rulers: IEditorOption<rulers, {}>;
    screenReaderAnnounceInlineSuggestion: IEditorOption<screenReaderAnnounceInlineSuggestion, boolean>;
    scrollBeyondLastColumn: IEditorOption<scrollBeyondLastColumn, number>;
    scrollBeyondLastLine: IEditorOption<scrollBeyondLastLine, boolean>;
    scrollPredominantAxis: IEditorOption<scrollPredominantAxis, boolean>;
    scrollbar: IEditorOption<scrollbar, InternalEditorScrollbarOptions>;
    selectOnLineNumbers: IEditorOption<selectOnLineNumbers, boolean>;
    selectionClipboard: IEditorOption<selectionClipboard, boolean>;
    selectionHighlight: IEditorOption<selectionHighlight, boolean>;
    showDeprecated: IEditorOption<showDeprecated, boolean>;
    showFoldingControls: IEditorOption<showFoldingControls, "always" | "never" | "mouseover">;
    showUnused: IEditorOption<showUnused, boolean>;
    smartSelect: IEditorOption<smartSelect, Readonly<Required<ISmartSelectOptions>>>;
    smoothScrolling: IEditorOption<smoothScrolling, boolean>;
    snippetSuggestions: IEditorOption<snippetSuggestions, "none" | "top" | "bottom" | "inline">;
    stickyScroll: IEditorOption<stickyScroll, Readonly<Required<IEditorStickyScrollOptions>>>;
    stickyTabStops: IEditorOption<stickyTabStops, boolean>;
    stopRenderingLineAfter: IEditorOption<stopRenderingLineAfter, number>;
    suggest: IEditorOption<suggest, Readonly<Required<ISuggestOptions>>>;
    suggestFontSize: IEditorOption<suggestFontSize, number>;
    suggestLineHeight: IEditorOption<suggestLineHeight, number>;
    suggestOnTriggerCharacters: IEditorOption<suggestOnTriggerCharacters, boolean>;
    suggestSelection: IEditorOption<suggestSelection, "first" | "recentlyUsed" | "recentlyUsedByPrefix">;
    tabCompletion: IEditorOption<tabCompletion, "on" | "off" | "onlySnippets">;
    tabFocusMode: IEditorOption<tabFocusMode, boolean>;
    tabIndex: IEditorOption<tabIndex, number>;
    unfoldOnClickAfterEndOfLine: IEditorOption<unfoldOnClickAfterEndOfLine, boolean>;
    unicodeHighlight: IEditorOption<unicodeHighlighting, any>;
    unusualLineTerminators: IEditorOption<unusualLineTerminators, "auto" | "off" | "prompt">;
    useShadowDOM: IEditorOption<useShadowDOM, boolean>;
    useTabStops: IEditorOption<useTabStops, boolean>;
    wordBreak: IEditorOption<wordBreak, "normal" | "keepAll">;
    wordSegmenterLocales: IEditorOption<wordSegmenterLocales, {}>;
    wordSeparators: IEditorOption<wordSeparators, string>;
    wordWrap: IEditorOption<wordWrap, "on" | "off" | "wordWrapColumn" | "bounded">;
    wordWrapBreakAfterCharacters: IEditorOption<wordWrapBreakAfterCharacters, string>;
    wordWrapBreakBeforeCharacters: IEditorOption<wordWrapBreakBeforeCharacters, string>;
    wordWrapColumn: IEditorOption<wordWrapColumn, number>;
    wordWrapOverride1: IEditorOption<wordWrapOverride1, "on" | "off" | "inherit">;
    wordWrapOverride2: IEditorOption<wordWrapOverride2, "on" | "off" | "inherit">;
    wrappingIndent: IEditorOption<wrappingIndent, WrappingIndent>;
    wrappingInfo: IEditorOption<wrappingInfo, EditorWrappingInfo>;
    wrappingStrategy: IEditorOption<wrappingStrategy, "simple" | "advanced">;
}
```

## 快捷链接
<script setup>
const data = [
  { icon: "P", link: "acceptSuggestionOnCommitCharacter" },
  { icon: "P", link: "acceptSuggestionOnEnter" },
  { icon: "P", link: "accessibilityPageSize" },
  { icon: "P", link: "accessibilitySupport" },
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
  { icon: "P", link: "bracketPairGuides" },
  { icon: "P", link: "codeLens" },
  { icon: "P", link: "codeLensFontFamily" },
  { icon: "P", link: "codeLensFontSize" },
  { icon: "P", link: "colorDecoratorActivatedOn" },
  { icon: "P", link: "colorDecorators" },
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
  { icon: "P", link: "disableLayerHinting" },
  { icon: "P", link: "disableMonospaceOptimizations" },
  { icon: "P", link: "domReadOnly" },
  { icon: "P", link: "dragAndDrop" },
  { icon: "P", link: "dropIntoEditor" },
  { icon: "P", link: "editorClassName" },
  { icon: "P", link: "emptySelectionClipboard" },
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
  { icon: "P", link: "fontInfo" },
  { icon: "P", link: "fontLigatures2" },
  { icon: "P", link: "fontSize" },
  { icon: "P", link: "fontVariations" },
  { icon: "P", link: "fontWeight" },
  { icon: "P", link: "formatOnPaste" },
  { icon: "P", link: "formatOnType" },
  { icon: "P", link: "glyphMargin" },
  { icon: "P", link: "gotoLocation" },
  { icon: "P", link: "hideCursorInOverviewRuler" },
  { icon: "P", link: "hover" },
  { icon: "P", link: "inDiffEditor" },
  { icon: "P", link: "inlayHints" },
  { icon: "P", link: "inlineCompletionsAccessibilityVerbose" },
  { icon: "P", link: "inlineEdit" },
  { icon: "P", link: "inlineSuggest" },
  { icon: "P", link: "layoutInfo" },
  { icon: "P", link: "letterSpacing" },
  { icon: "P", link: "lightbulb" },
  { icon: "P", link: "lineDecorationsWidth" },
  { icon: "P", link: "lineHeight" },
  { icon: "P", link: "lineNumbers" },
  { icon: "P", link: "lineNumbersMinChars" },
  { icon: "P", link: "linkedEditing" },
  { icon: "P", link: "links" },
  { icon: "P", link: "matchBrackets" },
  { icon: "P", link: "minimap" },
  { icon: "P", link: "mouseStyle" },
  { icon: "P", link: "mouseWheelScrollSensitivity" },
  { icon: "P", link: "mouseWheelZoom" },
  { icon: "P", link: "multiCursorLimit" },
  { icon: "P", link: "multiCursorMergeOverlapping" },
  { icon: "P", link: "multiCursorModifier" },
  { icon: "P", link: "multiCursorPaste" },
  { icon: "P", link: "occurrencesHighlight" },
  { icon: "P", link: "overviewRulerBorder" },
  { icon: "P", link: "overviewRulerLanes" },
  { icon: "P", link: "padding" },
  { icon: "P", link: "parameterHints" },
  { icon: "P", link: "pasteAs" },
  { icon: "P", link: "peekWidgetDefaultFocus" },
  { icon: "P", link: "pixelRatio" },
  { icon: "P", link: "quickSuggestions" },
  { icon: "P", link: "quickSuggestionsDelay" },
  { icon: "P", link: "readOnly" },
  { icon: "P", link: "readOnlyMessage" },
  { icon: "P", link: "renameOnType" },
  { icon: "P", link: "renderControlCharacters" },
  { icon: "P", link: "renderFinalNewline" },
  { icon: "P", link: "renderLineHighlight" },
  { icon: "P", link: "renderLineHighlightOnlyWhenFocus" },
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
  { icon: "P", link: "wrappingInfo" },
  { icon: "P", link: "wrappingStrategy" },
];
</script>
<dataItems :data="data" />

## acceptSuggestionOnCommitCharacter
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[acceptSuggestionOnCommitCharacter](/api/editor/EditorOption.md#acceptsuggestiononcommitcharacter)`, boolean>`
## acceptSuggestionOnEnter
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[acceptSuggestionOnEnter](/api/editor/EditorOption.md#acceptsuggestiononenter)`, "on" | "off" | "smart">`
## accessibilityPageSize
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[accessibilityPageSize](/api/editor/EditorOption.md#accessibilitypagesize)`, number>`
## accessibilitySupport
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[accessibilitySupport](/api/editor/EditorOption.md#accessibilitysupport)`, `[AccessibilitySupport](/api/editor/AccessibilitySupport.md)`>`
## ariaLabel
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[ariaLabel](/api/editor/EditorOption.md#arialabel)`, string>`
## ariaRequired
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[ariaRequired](/api/editor/EditorOption.md#ariarequired)`, boolean>`
## autoClosingBrackets
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[autoClosingBrackets](/api/editor/EditorOption.md#autoclosingbrackets)`, "always" | "languageDefined" | "beforeWhitespace" | "never">`
## autoClosingComments
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[autoClosingComments](/api/editor/EditorOption.md#autoclosingcomments)`, "always" | "languageDefined" | "beforeWhitespace" | "never">`
## autoClosingDelete
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[autoClosingDelete](/api/editor/EditorOption.md#autoclosingdelete)`, "always" | "never" | "auto">`
## autoClosingOvertype
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[autoClosingOvertype](/api/editor/EditorOption.md#autoclosingovertype)`, "always" | "never" | "auto">`
## autoClosingQuotes
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[autoClosingQuotes](/api/editor/EditorOption.md#autoclosingquotes)`, "always" | "languageDefined" | "beforeWhitespace" | "never">`
## autoIndent
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[autoIndent](/api/editor/EditorOption.md#autoindent)`, `[EditorAutoIndentStrategy](/api/editor/EditorAutoIndentStrategy.md)`>`
## autoSurround
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[autoSurround](/api/editor/EditorOption.md#autosurround)`, "languageDefined" | "never" | "quotes" | "brackets">`
## automaticLayout
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[automaticLayout](/api/editor/EditorOption.md#automaticlayout)`, boolean>`
## bracketPairColorization
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[bracketPairColorization](/api/editor/EditorOption.md#bracketpaircolorization)`, Readonly<Required<`[IBracketPairColorizationOptions](/api/editor/IBracketPairColorizationOptions.md)`>>>`
## bracketPairGuides
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[guides](/api/editor/EditorOption.md#bracketpairguides)`, Readonly<Required<`[IGuidesOptions](/api/editor/IGuidesOptions.md)`>>>`
## codeLens
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[codeLens](/api/editor/EditorOption.md#codelens)`, boolean>`
## codeLensFontFamily
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[codeLensFontFamily](/api/editor/EditorOption.md#codelensfontfamily)`, string>`
## codeLensFontSize
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[codeLensFontSize](/api/editor/EditorOption.md#codelensfontsize)`, number>`
## colorDecoratorActivatedOn
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[colorDecoratorsActivatedOn](/api/editor/EditorOption.md#colordecoratoractivatedon)`, "clickAndHover" | "click" | "hover">`
## colorDecorators
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[colorDecorators](/api/editor/EditorOption.md#colordecorators)`, boolean>`
## colorDecoratorsLimit
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[colorDecoratorsLimit](/api/editor/EditorOption.md#colordecoratorslimit)`, number>`
## columnSelection
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[columnSelection](/api/editor/EditorOption.md#columnselection)`, boolean>`
## comments
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[comments](/api/editor/EditorOption.md#comments)`, Readonly<Required<`[IEditorCommentsOptions](/api/editor/IEditorCommentsOptions.md)`>>>`
## contextmenu
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[contextmenu](/api/editor/EditorOption.md#contextmenu)`, boolean>`
## copyWithSyntaxHighlighting
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[copyWithSyntaxHighlighting](/api/editor/EditorOption.md#copywithsyntaxhighlighting)`, boolean>`
## cursorBlinking
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[cursorBlinking](/api/editor/EditorOption.md#cursorblinking)`, `[TextEditorCursorBlinkingStyle](/api/editor/TextEditorCursorBlinkingStyle.md)`>`
## cursorSmoothCaretAnimation
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[cursorSmoothCaretAnimation](/api/editor/EditorOption.md#cursorsmoothcaretanimation)`, "on" | "off" | "explicit">`
## cursorStyle
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[cursorStyle](/api/editor/EditorOption.md#cursorstyle)`, `[TextEditorCursorStyle](/api/editor/TextEditorCursorStyle.md)`>`
## cursorSurroundingLines
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[cursorSurroundingLines](/api/editor/EditorOption.md#cursorsurroundinglines)`, number>`
## cursorSurroundingLinesStyle
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[cursorSurroundingLinesStyle](/api/editor/EditorOption.md#cursorsurroundinglinesstyle)`, "default" | "all">`
## cursorWidth
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[cursorWidth](/api/editor/EditorOption.md#cursorwidth)`, number>`
## defaultColorDecorators
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[defaultColorDecorators](/api/editor/EditorOption.md#defaultcolordecorators)`, boolean>`
## definitionLinkOpensInPeek
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[definitionLinkOpensInPeek](/api/editor/EditorOption.md#definitionlinkopensinpeek)`, boolean>`
## disableLayerHinting
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[disableLayerHinting](/api/editor/EditorOption.md#disablelayerhinting)`, boolean>`
## disableMonospaceOptimizations
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[disableMonospaceOptimizations](/api/editor/EditorOption.md#disablemonospaceoptimizations)`, boolean>`
## domReadOnly
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[domReadOnly](/api/editor/EditorOption.md#domreadonly)`, boolean>`
## dragAndDrop
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[dragAndDrop](/api/editor/EditorOption.md#draganddrop)`, boolean>`
## dropIntoEditor
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[dropIntoEditor](/api/editor/EditorOption.md#dropintoeditor)`, Readonly<Required<`[IDropIntoEditorOptions](/api/editor/IDropIntoEditorOptions.md)`>>>`
## editorClassName
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[editorClassName](/api/editor/EditorOption.md#editorclassname)`, string>`
## emptySelectionClipboard
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[emptySelectionClipboard](/api/editor/EditorOption.md#emptyselectionclipboard)`, boolean>`
## experimentalWhitespaceRendering
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[experimentalWhitespaceRendering](/api/editor/EditorOption.md#experimentalwhitespacerendering)`, "off" | "svg" | "font">`
## extraEditorClassName
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[extraEditorClassName](/api/editor/EditorOption.md#extraeditorclassname)`, string>`
## fastScrollSensitivity
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[fastScrollSensitivity](/api/editor/EditorOption.md#fastscrollsensitivity)`, number>`
## find
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[find](/api/editor/EditorOption.md#find)`, Readonly<Required<`[IEditorFindOptions](/api/editor/IEditorFindOptions.md)`>>>`
## fixedOverflowWidgets
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[fixedOverflowWidgets](/api/editor/EditorOption.md#fixedoverflowwidgets)`, boolean>`
## folding
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[folding](/api/editor/EditorOption.md#folding)`, boolean>`
## foldingHighlight
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[foldingHighlight](/api/editor/EditorOption.md#foldinghighlight)`, boolean>`
## foldingImportsByDefault
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[foldingImportsByDefault](/api/editor/EditorOption.md#foldingimportsbydefault)`, boolean>`
## foldingMaximumRegions
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[foldingMaximumRegions](/api/editor/EditorOption.md#foldingmaximumregions)`, number>`
## foldingStrategy
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[foldingStrategy](/api/editor/EditorOption.md#foldingstrategy)`, "auto" | "indentation">`
## fontFamily
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[fontFamily](/api/editor/EditorOption.md#fontfamily)`, string>`
## fontInfo
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[fontInfo](/api/editor/EditorOption.md#fontinfo)`, `[FontInfo](/api/editor/FontInfo.md)`>`
## fontLigatures2
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[fontLigatures](/api/editor/EditorOption.md#fontligatures2)`, string>`
## fontSize
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[fontSize](/api/editor/EditorOption.md#fontsize)`, number>`
## fontVariations
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[fontVariations](/api/editor/EditorOption.md#fontvariations)`, string>`
## fontWeight
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[fontWeight](/api/editor/EditorOption.md#fontweight)`, string>`
## formatOnPaste
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[formatOnPaste](/api/editor/EditorOption.md#formatonpaste)`, boolean>`
## formatOnType
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[formatOnType](/api/editor/EditorOption.md#formatontype)`, boolean>`
## glyphMargin
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[glyphMargin](/api/editor/EditorOption.md#glyphmargin)`, boolean>`
## gotoLocation
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[gotoLocation](/api/editor/EditorOption.md#gotolocation)`, Readonly<Required<`[IGotoLocationOptions](/api/editor/IGotoLocationOptions.md)`>>>`
## hideCursorInOverviewRuler
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[hideCursorInOverviewRuler](/api/editor/EditorOption.md#hidecursorinoverviewruler)`, boolean>`
## hover
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[hover](/api/editor/EditorOption.md#hover)`, Readonly<Required<`[IEditorHoverOptions](/api/editor/IEditorHoverOptions.md)`>>>`
## inDiffEditor
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[inDiffEditor](/api/editor/EditorOption.md#indiffeditor)`, boolean>`
## inlayHints
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[inlayHints](/api/editor/EditorOption.md#inlayhints)`, Readonly<Required<`[IEditorInlayHintsOptions](/api/editor/IEditorInlayHintsOptions.md)`>>>`
## inlineCompletionsAccessibilityVerbose
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[inlineCompletionsAccessibilityVerbose](/api/editor/EditorOption.md#inlinecompletionsaccessibilityverbose)`, boolean>`
## inlineEdit
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[inlineEdit](/api/editor/EditorOption.md#inlineedit)`, Readonly<Required<`[IInlineEditOptions](/api/editor/IInlineEditOptions.md)`>>>`
## inlineSuggest
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[inlineSuggest](/api/editor/EditorOption.md#inlinesuggest)`, Readonly<Required<`[IInlineSuggestOptions](/api/editor/IInlineSuggestOptions.md)`>>>`
## layoutInfo
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[layoutInfo](/api/editor/EditorOption.md#layoutinfo)`, `[EditorLayoutInfo](/api/editor/EditorLayoutInfo.md)`>`
## letterSpacing
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[letterSpacing](/api/editor/EditorOption.md#letterspacing)`, number>`
## lightbulb
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[lightbulb](/api/editor/EditorOption.md#lightbulb)`, Readonly<Required<`[IEditorLightbulbOptions](/api/editor/IEditorLightbulbOptions.md)`>>>`
## lineDecorationsWidth
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[lineDecorationsWidth](/api/editor/EditorOption.md#linedecorationswidth)`, number>`
## lineHeight
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[lineHeight](/api/editor/EditorOption.md#lineheight)`, number>`
## lineNumbers
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[lineNumbers](/api/editor/EditorOption.md#linenumbers)`, `[InternalEditorRenderLineNumbersOptions](/api/editor/InternalEditorRenderLineNumbersOptions.md)`>`
## lineNumbersMinChars
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[lineNumbersMinChars](/api/editor/EditorOption.md#linenumbersminchars)`, number>`
## linkedEditing
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[linkedEditing](/api/editor/EditorOption.md#linkedediting)`, boolean>`
## links
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[links](/api/editor/EditorOption.md#links)`, boolean>`
## matchBrackets
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[matchBrackets](/api/editor/EditorOption.md#matchbrackets)`, "always" | "never" | "near">`
## minimap
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[minimap](/api/editor/EditorOption.md#minimap)`, Readonly<Required<`[IEditorMinimapOptions](/api/editor/IEditorMinimapOptions.md)`>>>`
## mouseStyle
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[mouseStyle](/api/editor/EditorOption.md#mousestyle)`, "default" | "text" | "copy">`
## mouseWheelScrollSensitivity
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[mouseWheelScrollSensitivity](/api/editor/EditorOption.md#mousewheelscrollsensitivity)`, number>`
## mouseWheelZoom
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[mouseWheelZoom](/api/editor/EditorOption.md#mousewheelzoom)`, boolean>`
## multiCursorLimit
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[multiCursorLimit](/api/editor/EditorOption.md#multicursorlimit)`, number>`
## multiCursorMergeOverlapping
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[multiCursorMergeOverlapping](/api/editor/EditorOption.md#multicursormergeoverlapping)`, boolean>`
## multiCursorModifier
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[multiCursorModifier](/api/editor/EditorOption.md#multicursormodifier)`, "altKey" | "metaKey" | "ctrlKey">`
## multiCursorPaste
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[multiCursorPaste](/api/editor/EditorOption.md#multicursorpaste)`, "spread" | "full">`
## occurrencesHighlight
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[occurrencesHighlight](/api/editor/EditorOption.md#occurrenceshighlight)`, "off" | "singleFile" | "multiFile">`
## overviewRulerBorder
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[overviewRulerBorder](/api/editor/EditorOption.md#overviewrulerborder)`, boolean>`
## overviewRulerLanes
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[overviewRulerLanes](/api/editor/EditorOption.md#overviewrulerlanes)`, number>`
## padding
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[padding](/api/editor/EditorOption.md#padding)`, Readonly<Required<`[IEditorPaddingOptions](/api/editor/IEditorPaddingOptions.md)`>>>`
## parameterHints
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[parameterHints](/api/editor/EditorOption.md#parameterhints)`, Readonly<Required<`[IEditorParameterHintOptions](/api/editor/IEditorParameterHintOptions.md)`>>>`
## pasteAs
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[pasteAs](/api/editor/EditorOption.md#pasteas)`, Readonly<Required<`[IPasteAsOptions](/api/editor/IPasteAsOptions.md)`>>>`
## peekWidgetDefaultFocus
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[peekWidgetDefaultFocus](/api/editor/EditorOption.md#peekwidgetdefaultfocus)`, "tree" | "editor">`
## pixelRatio
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[pixelRatio](/api/editor/EditorOption.md#pixelratio)`, number>`
## quickSuggestions
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[quickSuggestions](/api/editor/EditorOption.md#quicksuggestions)`, `[InternalQuickSuggestionsOptions](/api/editor/InternalQuickSuggestionsOptions.md)`>`
## quickSuggestionsDelay
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[quickSuggestionsDelay](/api/editor/EditorOption.md#quicksuggestionsdelay)`, number>`
## readOnly
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[readOnly](/api/editor/EditorOption.md#readonly)`, boolean>`
## readOnlyMessage
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[readOnlyMessage](/api/editor/EditorOption.md#readonlymessage)`, any>`
## renameOnType
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[renameOnType](/api/editor/EditorOption.md#renameontype)`, boolean>`
## renderControlCharacters
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[renderControlCharacters](/api/editor/EditorOption.md#rendercontrolcharacters)`, boolean>`
## renderFinalNewline
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[renderFinalNewline](/api/editor/EditorOption.md#renderfinalnewline)`, "on" | "off" | "dimmed">`
## renderLineHighlight
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[renderLineHighlight](/api/editor/EditorOption.md#renderlinehighlight)`, "all" | "line" | "none" | "gutter">`
## renderLineHighlightOnlyWhenFocus
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[renderLineHighlightOnlyWhenFocus](/api/editor/EditorOption.md#renderlinehighlightonlywhenfocus)`, boolean>`
## renderValidationDecorations
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[renderValidationDecorations](/api/editor/EditorOption.md#rendervalidationdecorations)`, "on" | "off" | "editable">`
## renderWhitespace
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[renderWhitespace](/api/editor/EditorOption.md#renderwhitespace)`, "all" | "none" | "boundary" | "selection" | "trailing">`
## revealHorizontalRightPadding
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[revealHorizontalRightPadding](/api/editor/EditorOption.md#revealhorizontalrightpadding)`, number>`
## roundedSelection
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[roundedSelection](/api/editor/EditorOption.md#roundedselection)`, boolean>`
## rulers
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[rulers](/api/editor/EditorOption.md#rulers)`, {}>`
## screenReaderAnnounceInlineSuggestion
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[screenReaderAnnounceInlineSuggestion](/api/editor/EditorOption.md#screenreaderannounceinlinesuggestion)`, boolean>`
## scrollBeyondLastColumn
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[scrollBeyondLastColumn](/api/editor/EditorOption.md#scrollbeyondlastcolumn)`, number>`
## scrollBeyondLastLine
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[scrollBeyondLastLine](/api/editor/EditorOption.md#scrollbeyondlastline)`, boolean>`
## scrollPredominantAxis
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[scrollPredominantAxis](/api/editor/EditorOption.md#scrollpredominantaxis)`, boolean>`
## scrollbar
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[scrollbar](/api/editor/EditorOption.md#scrollbar)`, `[InternalEditorScrollbarOptions](/api/editor/InternalEditorScrollbarOptions.md)`>`
## selectOnLineNumbers
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[selectOnLineNumbers](/api/editor/EditorOption.md#selectonlinenumbers)`, boolean>`
## selectionClipboard
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[selectionClipboard](/api/editor/EditorOption.md#selectionclipboard)`, boolean>`
## selectionHighlight
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[selectionHighlight](/api/editor/EditorOption.md#selectionhighlight)`, boolean>`
## showDeprecated
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[showDeprecated](/api/editor/EditorOption.md#showdeprecated)`, boolean>`
## showFoldingControls
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[showFoldingControls](/api/editor/EditorOption.md#showfoldingcontrols)`, "always" | "never" | "mouseover">`
## showUnused
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[showUnused](/api/editor/EditorOption.md#showunused)`, boolean>`
## smartSelect
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[smartSelect](/api/editor/EditorOption.md#smartselect)`, Readonly<Required<`[ISmartSelectOptions](/api/editor/ISmartSelectOptions.md)`>>>`
## smoothScrolling
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[smoothScrolling](/api/editor/EditorOption.md#smoothscrolling)`, boolean>`
## snippetSuggestions
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[snippetSuggestions](/api/editor/EditorOption.md#snippetsuggestions)`, "none" | "top" | "bottom" | "inline">`
## stickyScroll
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[stickyScroll](/api/editor/EditorOption.md#stickyscroll)`, Readonly<Required<`[IEditorStickyScrollOptions](/api/editor/IEditorStickyScrollOptions.md)`>>>`
## stickyTabStops
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[stickyTabStops](/api/editor/EditorOption.md#stickytabstops)`, boolean>`
## stopRenderingLineAfter
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[stopRenderingLineAfter](/api/editor/EditorOption.md#stoprenderinglineafter)`, number>`
## suggest
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[suggest](/api/editor/EditorOption.md#suggest)`, Readonly<Required<`[ISuggestOptions](/api/editor/ISuggestOptions.md)`>>>`
## suggestFontSize
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[suggestFontSize](/api/editor/EditorOption.md#suggestfontsize)`, number>`
## suggestLineHeight
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[suggestLineHeight](/api/editor/EditorOption.md#suggestlineheight)`, number>`
## suggestOnTriggerCharacters
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[suggestOnTriggerCharacters](/api/editor/EditorOption.md#suggestontriggercharacters)`, boolean>`
## suggestSelection
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[suggestSelection](/api/editor/EditorOption.md#suggestselection)`, "first" | "recentlyUsed" | "recentlyUsedByPrefix">`
## tabCompletion
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[tabCompletion](/api/editor/EditorOption.md#tabcompletion)`, "on" | "off" | "onlySnippets">`
## tabFocusMode
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[tabFocusMode](/api/editor/EditorOption.md#tabfocusmode)`, boolean>`
## tabIndex
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[tabIndex](/api/editor/EditorOption.md#tabindex)`, number>`
## unfoldOnClickAfterEndOfLine
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[unfoldOnClickAfterEndOfLine](/api/editor/EditorOption.md#unfoldonclickafterendofline)`, boolean>`
## unicodeHighlight
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[unicodeHighlighting](/api/editor/EditorOption.md#unicodehighlight)`, any>`
## unusualLineTerminators
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[unusualLineTerminators](/api/editor/EditorOption.md#unusuallineterminators)`, "auto" | "off" | "prompt">`
## useShadowDOM
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[useShadowDOM](/api/editor/EditorOption.md#useshadowdom)`, boolean>`
## useTabStops
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[useTabStops](/api/editor/EditorOption.md#usetabstops)`, boolean>`
## wordBreak
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wordBreak](/api/editor/EditorOption.md#wordbreak)`, "normal" | "keepAll">`
## wordSegmenterLocales
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wordSegmenterLocales](/api/editor/EditorOption.md#wordsegmenterlocales)`, {}>`
## wordSeparators
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wordSeparators](/api/editor/EditorOption.md#wordseparators)`, string>`
## wordWrap
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wordWrap](/api/editor/EditorOption.md#wordwrap)`, "on" | "off" | "wordWrapColumn" | "bounded">`
## wordWrapBreakAfterCharacters
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wordWrapBreakAfterCharacters](/api/editor/EditorOption.md#wordwrapbreakaftercharacters)`, string>`
## wordWrapBreakBeforeCharacters
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wordWrapBreakBeforeCharacters](/api/editor/EditorOption.md#wordwrapbreakbeforecharacters)`, string>`
## wordWrapColumn
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wordWrapColumn](/api/editor/EditorOption.md#wordwrapcolumn)`, number>`
## wordWrapOverride1
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wordWrapOverride1](/api/editor/EditorOption.md#wordwrapoverride1)`, "on" | "off" | "inherit">`
## wordWrapOverride2
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wordWrapOverride2](/api/editor/EditorOption.md#wordwrapoverride2)`, "on" | "off" | "inherit">`
## wrappingIndent
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wrappingIndent](/api/editor/EditorOption.md#wrappingindent)`, WrappingIndent>`
## wrappingInfo
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wrappingInfo](/api/editor/EditorOption.md#wrappinginfo)`, `[EditorWrappingInfo](/api/editor/EditorWrappingInfo.md)`>`
## wrappingStrategy
- 类型: [IEditorOption](/api/editor/IEditorOption.md)`<`[wrappingStrategy](/api/editor/EditorOption.md#wrappingstrategy)`, "simple" | "advanced">`