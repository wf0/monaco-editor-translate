# EditorOption

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#enums/editor.EditorOption.html
:::

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
  { icon: "P", link: "unicodeHighlighting" },
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
- 值：`0`


## acceptSuggestionOnEnter
- 值：`1`


## accessibilityPageSize
- 值：`3`


## accessibilitySupport
- 值：`2`


## ariaLabel
- 值：`4`


## ariaRequired
- 值：`5`


## autoClosingBrackets
- 值：`6`


## autoClosingComments
- 值：`7`


## autoClosingDelete
- 值：`9`


## autoClosingOvertype
- 值：`10`


## autoClosingQuotes
- 值：`11`


## autoIndent
- 值：`12`


## autoSurround
- 值：`14`


## automaticLayout
- 值：`13`


## bracketPairColorization
- 值：`15`


## codeLens
- 值：`17`


## codeLensFontFamily
- 值：`18`


## codeLensFontSize
- 值：`19`


## colorDecorators
- 值：`20`


## colorDecoratorsActivatedOn
- 值：`148`


## colorDecoratorsLimit
- 值：`21`


## columnSelection
- 值：`22`


## comments
- 值：`23`


## contextmenu
- 值：`24`


## copyWithSyntaxHighlighting
- 值：`25`


## cursorBlinking
- 值：`26`


## cursorSmoothCaretAnimation
- 值：`27`


## cursorStyle
- 值：`28`


## cursorSurroundingLines
- 值：`29`


## cursorSurroundingLinesStyle
- 值：`30`


## cursorWidth
- 值：`31`


## defaultColorDecorators
- 值：`147`


## definitionLinkOpensInPeek
- 值：`88`


## disableLayerHinting
- 值：`32`


## disableMonospaceOptimizations
- 值：`33`


## domReadOnly
- 值：`34`


## dragAndDrop
- 值：`35`


## dropIntoEditor
- 值：`36`


## editorClassName
- 值：`142`


## emptySelectionClipboard
- 值：`37`


## experimentalWhitespaceRendering
- 值：`38`


## extraEditorClassName
- 值：`39`


## fastScrollSensitivity
- 值：`40`


## find
- 值：`41`


## fixedOverflowWidgets
- 值：`42`


## folding
- 值：`43`


## foldingHighlight
- 值：`45`


## foldingImportsByDefault
- 值：`46`


## foldingMaximumRegions
- 值：`47`


## foldingStrategy
- 值：`44`


## fontFamily
- 值：`49`


## fontInfo
- 值：`50`


## fontLigatures
- 值：`51`


## fontSize
- 值：`52`


## fontVariations
- 值：`54`


## fontWeight
- 值：`53`


## formatOnPaste
- 值：`55`


## formatOnType
- 值：`56`


## glyphMargin
- 值：`57`


## gotoLocation
- 值：`58`


## guides
- 值：`16`


## hideCursorInOverviewRuler
- 值：`59`


## hover
- 值：`60`


## inDiffEditor
- 值：`61`


## inlayHints
- 值：`141`


## inlineCompletionsAccessibilityVerbose
- 值：`149`


## inlineEdit
- 值：`63`


## inlineSuggest
- 值：`62`


## layoutInfo
- 值：`145`


## letterSpacing
- 值：`64`


## lightbulb
- 值：`65`


## lineDecorationsWidth
- 值：`66`


## lineHeight
- 值：`67`


## lineNumbers
- 值：`68`


## lineNumbersMinChars
- 值：`69`


## linkedEditing
- 值：`70`


## links
- 值：`71`


## matchBrackets
- 值：`72`


## minimap
- 值：`73`


## mouseStyle
- 值：`74`


## mouseWheelScrollSensitivity
- 值：`75`


## mouseWheelZoom
- 值：`76`


## multiCursorLimit
- 值：`80`


## multiCursorMergeOverlapping
- 值：`77`


## multiCursorModifier
- 值：`78`


## multiCursorPaste
- 值：`79`


## occurrencesHighlight
- 值：`81`


## overviewRulerBorder
- 值：`82`


## overviewRulerLanes
- 值：`83`


## padding
- 值：`84`


## parameterHints
- 值：`86`


## pasteAs
- 值：`85`


## peekWidgetDefaultFocus
- 值：`87`


## pixelRatio
- 值：`143`


## quickSuggestions
- 值：`89`


## quickSuggestionsDelay
- 值：`90`


## readOnly
- 值：`91`


## readOnlyMessage
- 值：`92`


## renameOnType
- 值：`93`


## renderControlCharacters
- 值：`94`


## renderFinalNewline
- 值：`95`


## renderLineHighlight
- 值：`96`


## renderLineHighlightOnlyWhenFocus
- 值：`97`


## renderValidationDecorations
- 值：`98`


## renderWhitespace
- 值：`99`


## revealHorizontalRightPadding
- 值：`100`


## roundedSelection
- 值：`101`


## rulers
- 值：`102`


## screenReaderAnnounceInlineSuggestion
- 值：`8`


## scrollBeyondLastColumn
- 值：`104`


## scrollBeyondLastLine
- 值：`105`


## scrollPredominantAxis
- 值：`106`


## scrollbar
- 值：`103`


## selectOnLineNumbers
- 值：`109`


## selectionClipboard
- 值：`107`


## selectionHighlight
- 值：`108`


## showDeprecated
- 值：`140`


## showFoldingControls
- 值：`110`


## showUnused
- 值：`111`


## smartSelect
- 值：`113`


## smoothScrolling
- 值：`114`


## snippetSuggestions
- 值：`112`


## stickyScroll
- 值：`115`


## stickyTabStops
- 值：`116`


## stopRenderingLineAfter
- 值：`117`


## suggest
- 值：`118`


## suggestFontSize
- 值：`119`


## suggestLineHeight
- 值：`120`


## suggestOnTriggerCharacters
- 值：`121`


## suggestSelection
- 值：`122`


## tabCompletion
- 值：`123`


## tabFocusMode
- 值：`144`


## tabIndex
- 值：`124`


## unfoldOnClickAfterEndOfLine
- 值：`48`


## unicodeHighlighting
- 值：`125`


## unusualLineTerminators
- 值：`126`


## useShadowDOM
- 值：`127`


## useTabStops
- 值：`128`


## wordBreak
- 值：`129`


## wordSegmenterLocales
- 值：`130`


## wordSeparators
- 值：`131`


## wordWrap
- 值：`132`


## wordWrapBreakAfterCharacters
- 值：`133`


## wordWrapBreakBeforeCharacters
- 值：`134`


## wordWrapColumn
- 值：`135`


## wordWrapOverride1
- 值：`136`


## wordWrapOverride2
- 值：`137`


## wrappingIndent
- 值：`138`


## wrappingInfo
- 值：`146`


## wrappingStrategy
- 值：`139`

