# IStandaloneEditorConstructionOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html
:::

```ts
interface IStandaloneEditorConstructionOptions {
    acceptSuggestionOnCommitCharacter?: boolean;
    acceptSuggestionOnEnter?: "off" | "on" | "smart";
    accessibilityHelpUrl?: string;
    accessibilityPageSize?: number;
    accessibilitySupport?: "off" | "on" | "auto";
    ariaContainerElement?: HTMLElement;
    ariaLabel?: string;
    ariaRequired?: boolean;
    autoClosingBrackets?: EditorAutoClosingStrategy;
    autoClosingComments?: EditorAutoClosingStrategy;
    autoClosingDelete?: EditorAutoClosingEditStrategy;
    autoClosingOvertype?: EditorAutoClosingEditStrategy;
    autoClosingQuotes?: EditorAutoClosingStrategy;
    autoDetectHighContrast?: boolean;
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
    detectIndentation?: boolean;
    dimension?: IDimension;
    disableLayerHinting?: boolean;
    disableMonospaceOptimizations?: boolean;
    domReadOnly?: boolean;
    dragAndDrop?: boolean;
    dropIntoEditor?: IDropIntoEditorOptions;
    emptySelectionClipboard?: boolean;
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
    hover?: IEditorHoverOptions;
    inDiffEditor?: boolean;
    inlayHints?: IEditorInlayHintsOptions;
    inlineCompletionsAccessibilityVerbose?: boolean;
    inlineSuggest?: IInlineSuggestOptions;
    insertSpaces?: boolean;
    language?: string;
    largeFileOptimizations?: boolean;
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
    maxTokenizationLineLength?: number;
    minimap?: IEditorMinimapOptions;
    model?: ITextModel;
    mouseStyle?: "default" | "text" | "copy";
    mouseWheelScrollSensitivity?: number;
    mouseWheelZoom?: boolean;
    multiCursorLimit?: number;
    multiCursorMergeOverlapping?: boolean;
    multiCursorModifier?: "ctrlCmd" | "alt";
    multiCursorPaste?: "spread" | "full";
    occurrencesHighlight?: "off" | "singleFile" | "multiFile";
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
    renderLineHighlight?: "all" | "line" | "none" | "gutter";
    renderLineHighlightOnlyWhenFocus?: boolean;
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
    semanticHighlighting.enabled?: boolean | "configuredByTheme";
    showDeprecated?: boolean;
    showFoldingControls?: "always" | "never" | "mouseover";
    showUnused?: boolean;
    smartSelect?: ISmartSelectOptions;
    smoothScrolling?: boolean;
    snippetSuggestions?: "none" | "top" | "bottom" | "inline";
    stablePeek?: boolean;
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
    tabSize?: number;
    theme?: string;
    trimAutoWhitespace?: boolean;
    unfoldOnClickAfterEndOfLine?: boolean;
    unicodeHighlight?: IUnicodeHighlightOptions;
    unusualLineTerminators?: "off" | "auto" | "prompt";
    useShadowDOM?: boolean;
    useTabStops?: boolean;
    value?: string;
    wordBasedSuggestions?: "off" | "currentDocument" | "matchingDocuments" | "allDocuments";
    wordBasedSuggestionsOnlySameLanguage?: boolean;
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
const data=[
    {icon:"P",link:"acceptSuggestionOnCommitCharacter"},
{icon:"P",link:"acceptSuggestionOnEnter"},
{icon:"P",link:"accessibilityHelpUrl"},
{icon:"P",link:"accessibilityPageSize"},
{icon:"P",link:"accessibilitySupport"},
{icon:"P",link:"ariaContainerElement"},
{icon:"P",link:"ariaLabel"},
{icon:"P",link:"ariaRequired"},
{icon:"P",link:"autoClosingBrackets"},
{icon:"P",link:"autoClosingComments"},
{icon:"P",link:"autoClosingDelete"},
{icon:"P",link:"autoClosingOvertype"},
{icon:"P",link:"autoClosingQuotes"},
{icon:"P",link:"autoDetectHighContrast"},
{icon:"P",link:"autoIndent"},
{icon:"P",link:"autoSurround"},
{icon:"P",link:"automaticLayout"},
{icon:"P",link:"bracketPairColorization"},
{icon:"P",link:"codeActionsOnSaveTimeout"},
{icon:"P",link:"codeLens"},
{icon:"P",link:"codeLensFontFamily"},
{icon:"P",link:"codeLensFontSize"},
{icon:"P",link:"colorDecorators"},
{icon:"P",link:"colorDecoratorsActivatedOn"},
{icon:"P",link:"colorDecoratorsLimit"},
{icon:"P",link:"columnSelection"},
{icon:"P",link:"comments"},
{icon:"P",link:"contextmenu"},
{icon:"P",link:"copyWithSyntaxHighlighting"},
{icon:"P",link:"cursorBlinking"},
{icon:"P",link:"cursorSmoothCaretAnimation"},
{icon:"P",link:"cursorStyle"},
{icon:"P",link:"cursorSurroundingLines"},
{icon:"P",link:"cursorSurroundingLinesStyle"},
{icon:"P",link:"cursorWidth"},
{icon:"P",link:"defaultColorDecorators"},
{icon:"P",link:"definitionLinkOpensInPeek"},
{icon:"P",link:"detectIndentation"},
{icon:"P",link:"dimension"},
{icon:"P",link:"disableLayerHinting"},
{icon:"P",link:"disableMonospaceOptimizations"},
{icon:"P",link:"domReadOnly"},
{icon:"P",link:"dragAndDrop"},
{icon:"P",link:"dropIntoEditor"},
{icon:"P",link:"emptySelectionClipboard"},
{icon:"P",link:"experimentalInlineEdit"},
{icon:"P",link:"experimentalWhitespaceRendering"},
{icon:"P",link:"extraEditorClassName"},
{icon:"P",link:"fastScrollSensitivity"},
{icon:"P",link:"find"},
{icon:"P",link:"fixedOverflowWidgets"},
{icon:"P",link:"folding"},
{icon:"P",link:"foldingHighlight"},
{icon:"P",link:"foldingImportsByDefault"},
{icon:"P",link:"foldingMaximumRegions"},
{icon:"P",link:"foldingStrategy"},
{icon:"P",link:"fontFamily"},
{icon:"P",link:"fontLigatures"},
{icon:"P",link:"fontSize"},
{icon:"P",link:"fontVariations"},
{icon:"P",link:"fontWeight"},
{icon:"P",link:"formatOnPaste"},
{icon:"P",link:"formatOnType"},
{icon:"P",link:"glyphMargin"},
{icon:"P",link:"gotoLocation"},
{icon:"P",link:"guides"},
{icon:"P",link:"hideCursorInOverviewRuler"},
{icon:"P",link:"hover"},
{icon:"P",link:"inDiffEditor"},
{icon:"P",link:"inlayHints"},
{icon:"P",link:"inlineCompletionsAccessibilityVerbose"},
{icon:"P",link:"inlineSuggest"},
{icon:"P",link:"insertSpaces"},
{icon:"P",link:"language"},
{icon:"P",link:"largeFileOptimizations"},
{icon:"P",link:"letterSpacing"},
{icon:"P",link:"lightbulb"},
{icon:"P",link:"lineDecorationsWidth"},
{icon:"P",link:"lineHeight"},
{icon:"P",link:"lineNumbers"},
{icon:"P",link:"lineNumbersMinChars"},
{icon:"P",link:"linkedEditing"},
{icon:"P",link:"links"},
{icon:"P",link:"matchBrackets"},
{icon:"P",link:"matchOnWordStartOnly"},
{icon:"P",link:"maxTokenizationLineLength"},
{icon:"P",link:"minimap"},
{icon:"P",link:"model"},
{icon:"P",link:"mouseStyle"},
{icon:"P",link:"mouseWheelScrollSensitivity"},
{icon:"P",link:"mouseWheelZoom"},
{icon:"P",link:"multiCursorLimit"},
{icon:"P",link:"multiCursorMergeOverlapping"},
{icon:"P",link:"multiCursorModifier"},
{icon:"P",link:"multiCursorPaste"},
{icon:"P",link:"occurrencesHighlight"},
{icon:"P",link:"overflowWidgetsDomNode"},
{icon:"P",link:"overviewRulerBorder"},
{icon:"P",link:"overviewRulerLanes"},
{icon:"P",link:"padding"},
{icon:"P",link:"parameterHints"},
{icon:"P",link:"pasteAs"},
{icon:"P",link:"peekWidgetDefaultFocus"},
{icon:"P",link:"quickSuggestions"},
{icon:"P",link:"quickSuggestionsDelay"},
{icon:"P",link:"readOnly"},
{icon:"P",link:"readOnlyMessage"},
{icon:"P",link:"renameOnType"},
{icon:"P",link:"renderControlCharacters"},
{icon:"P",link:"renderFinalNewline"},
{icon:"P",link:"renderLineHighlight"},
{icon:"P",link:"renderLineHighlightOnlyWhenFocus"},
{icon:"P",link:"renderValidationDecorations"},
{icon:"P",link:"renderWhitespace"},
{icon:"P",link:"revealHorizontalRightPadding"},
{icon:"P",link:"roundedSelection"},
{icon:"P",link:"rulers"},
{icon:"P",link:"screenReaderAnnounceInlineSuggestion"},
{icon:"P",link:"scrollBeyondLastColumn"},
{icon:"P",link:"scrollBeyondLastLine"},
{icon:"P",link:"scrollPredominantAxis"},
{icon:"P",link:"scrollbar"},
{icon:"P",link:"selectOnLineNumbers"},
{icon:"P",link:"selectionClipboard"},
{icon:"P",link:"selectionHighlight"},
{icon:"P", title:"semanticHighlighting.enabled", link:"semanticHighlighting-enabled"},
{icon:"P",link:"showDeprecated"},
{icon:"P",link:"showFoldingControls"},
{icon:"P",link:"showUnused"},
{icon:"P",link:"smartSelect"},
{icon:"P",link:"smoothScrolling"},
{icon:"P",link:"snippetSuggestions"},
{icon:"P",link:"stablePeek"},
{icon:"P",link:"stickyScroll"},
{icon:"P",link:"stickyTabStops"},
{icon:"P",link:"stopRenderingLineAfter"},
{icon:"P",link:"suggest"},
{icon:"P",link:"suggestFontSize"},
{icon:"P",link:"suggestLineHeight"},
{icon:"P",link:"suggestOnTriggerCharacters"},
{icon:"P",link:"suggestSelection"},
{icon:"P",link:"tabCompletion"},
{icon:"P",link:"tabFocusMode"},
{icon:"P",link:"tabIndex"},
{icon:"P",link:"tabSize"},
{icon:"P",link:"theme"},
{icon:"P",link:"trimAutoWhitespace"},
{icon:"P",link:"unfoldOnClickAfterEndOfLine"},
{icon:"P",link:"unicodeHighlight"},
{icon:"P",link:"unusualLineTerminators"},
{icon:"P",link:"useShadowDOM"},
{icon:"P",link:"useTabStops"},
{icon:"P",link:"value"},
{icon:"P",link:"wordBasedSuggestions"},
{icon:"P",link:"wordBasedSuggestionsOnlySameLanguage"},
{icon:"P",link:"wordBreak"},
{icon:"P",link:"wordSegmenterLocales"},
{icon:"P",link:"wordSeparators"},
{icon:"P",link:"wordWrap"},
{icon:"P",link:"wordWrapBreakAfterCharacters"},
{icon:"P",link:"wordWrapBreakBeforeCharacters"},
{icon:"P",link:"wordWrapColumn"},
{icon:"P",link:"wordWrapOverride1"},
{icon:"P",link:"wordWrapOverride2"},
{icon:"P",link:"wrappingIndent"},
{icon:"P",link:"wrappingStrategy"},
]
</script>
<dataItems :data="data" />


## acceptSuggestionOnCommitCharacter
- 类型: `boolean`
- 描述: 接受有关提供程序定义的字符的建议。默认为true。


## acceptSuggestionOnEnter
- 类型: `"off" | "on" | "smart"`
- 描述: 接受有关 enter回车 的建议。默认为“on”。



## accessibilityHelpUrl
- 类型：`string`
- 描述: 在编辑器的辅助功能帮助对话框中按下Ctrl+H（Windows和Linux）或Cmd+H（OSX）时打开的URL。

## accessibilityPageSize
- 类型: `number`
- 描述: 控制编辑器中屏幕阅读器可以读取的行数


## accessibilitySupport
- 类型: `"auto" | "on" | "off"`
- 描述: 配置编辑器的辅助功能支持。默认为“auto”。最好将此项留给“auto”。


## ariaContainerElement
- 类型：`HTMLElement`
- 描述: 容器元素，用于编辑器辅助功能。



## ariaLabel
- 类型: `string`
- 描述: 编辑器文本区域的咏叹调标签（当它被聚焦时）。


## ariaRequired
- 类型: `boolean`
- 描述: 是否应在编辑器文本区域上设置aria-required属性。


## autoClosingBrackets
- 类型: [EditorAutoClosingStrategy](/api/editor/EditorAutoClosingStrategy.md)
- 描述：自动闭合括号的选项。


## autoClosingComments
- 类型: [EditorAutoClosingStrategy](/api/editor/EditorAutoClosingStrategy.md)
- 描述：自动闭合注释的选项。


## autoClosingDelete
- 类型: [EditorAutoClosingStrategy](/api/editor/EditorAutoClosingStrategy.md)
- 描述：自动删除的选项。


## autoClosingOvertype
- 类型: [EditorAutoClosingStrategy](/api/editor/EditorAutoClosingStrategy.md)
- 描述：用于在右引号或方括号上键入的选项。


## autoClosingQuotes
- 类型: [EditorAutoClosingStrategy](/api/editor/EditorAutoClosingStrategy.md)
- 描述：自动闭合引号的选项。



## autoDetectHighContrast
- 类型: `boolean`
- 描述：是否应自动检测高对比度模式。默认为true。


## autoIndent
- 类型: `"none" | "advanced" | "full" | "brackets" | "keep"`
- 描述：控制当用户键入、粘贴、移动或缩进行时，编辑器是否应自动调整缩进。默认为高级。


## autoSurround
- 类型: [EditorAutoClosingStrategy](/api/editor/EditorAutoClosingStrategy.md)
- 描述：自动闭合引号的选项。


## automaticLayout
- 类型: `boolean`
- 描述：控制编辑器是否应自动调整其大小以适应其内容。默认为false。

## bracketPairColorization
- 类型: [IBracketPairColorizationOptions](/api/editor/IBracketPairColorizationOptions.md)
- 描述：配置括号对着色（默认情况下禁用）。


## codeActionsOnSaveTimeout
- 类型: `number`
- 描述：代码操作保存超时（毫秒）。


## codeLens
- 类型: `boolean`
- 描述：控制编辑器是否应显示代码 lens。默认为true。


## codeLensFontFamily
- 类型: `string`
- 描述：代码 lens 字体。


## codeLensFontSize
- 类型: `number`
- 描述：代码 lens 字体大小。


## colorDecorators
- 类型: `boolean`
- 描述：启用内联颜色装饰器和颜色选择器渲染。


## colorDecoratorsActivatedOn
- 类型: `"clickAndHover" | "click" | "hover"`
- 描述：代码 lens 激活方式。


## colorDecoratorsLimit
- 类型: `number`
- 描述：控制编辑器中可以同时渲染的颜色装饰器的最大数量。


## columnSelection
- 类型: `boolean`
- 描述：启用多列选择。


## comments
- 类型: [IEditorCommentsOptions](/api/editor/IEditorCommentsOptions.md)
- 描述：配置编辑器中的注释。


## contextmenu
- 类型: `boolean`
- 描述：控制编辑器是否应显示上下文菜单。默认为true。


## copyWithSyntaxHighlighting
- 类型: `boolean`
- 描述：复制时是否应保留语法高亮.


## cursorBlinking
- 类型: `"blink" | "smooth" | "phase" | "expand" | "solid"`
- 描述：控制光标闪烁的样式。默认为“blink”。


## cursorSmoothCaretAnimation
- 类型: `"off" | "on" | "explicit"`
- 描述：控制光标是否应闪烁。


## cursorStyle
- 类型: `"line" | "block" | "underline" | "line-thin" | "block-outline" | "underline-thin"`
- 描述：控制光标样式。默认为 line。



## cursorSurroundingLines
- 类型: `number`
- 描述：控制光标周围行的数量。


## cursorSurroundingLinesStyle
- 类型: `"default" | "all"`
- 描述：控制光标周围行的样式。默认为“default”。


## cursorWidth
- 类型: `number`
- 描述：当cursorStyle设置为“line”时控制光标的宽度



## defaultColorDecorators
- 类型: `boolean`
- 描述：启用内联颜色装饰器和颜色选择器渲染。


## definitionLinkOpensInPeek
- 类型: `boolean`
- 描述：是否应在编辑器中打开定义链接。默认为false。


## dimension
- 类型: [IDimension](/api/editor/IDimension.md)
- 描述：初始编辑器尺寸（以避免测量容器）。


## disableLayerHinting
- 类型: `boolean`
- 描述：控制编辑器是否应禁用层提示。默认为false。


## disableMonospaceOptimizations
- 类型: `boolean`
- 描述：控制编辑器是否应禁用 monospace 优化。默认为false。


## domReadOnly
- 类型: `boolean`
- 描述：控制编辑器是否应禁用 DOM 读取。默认为false。


## dragAndDrop
- 类型: `boolean`
- 描述：控制编辑器是否应禁用拖放。默认为false。


## dropIntoEditor
- 类型: [IDropIntoEditorOptions](/api/editor/IDropIntoEditorOptions.md)
- 描述：控件从外部源拖放到编辑器中。

## emptySelectionClipboard
- 类型: `boolean`
- 描述：在没有选择的情况下复制会复制当前行。


## experimentalInlineEdit
- 类型: `boolean`
- 描述：控制编辑器是否应允许调整视图。默认为true。


## experimentalWhitespaceRendering
- 类型: `"off" | "svg" | "font"`
- 描述：启用实验性空白呈现。默认为“svg”。


## extraEditorClassName
- 类型: `number`
- 描述：按下Alt键时的快速滚动倍速，默认为5。


## fastScrollSensitivity
- 类型: `number`
- 描述：按下Alt键时的快速滚动倍速，默认为5。


## find
- 类型: [IEditorFindOptions](/api/editor/IEditorFindOptions.md)
- 描述：配置编辑器中的查找。


## fixedOverflowWidgets
- 类型: `boolean`
- 描述：将溢出小部件显示为已修复。默认为false。


## folding
- 类型: `boolean`
- 描述：控制编辑器是否应显示折叠。默认为true。


## foldingHighlight
- 类型: `boolean`
- 描述：控制编辑器是否应显示折叠高亮。默认为true。


## foldingImportsByDefault
- 类型: `boolean`
- 描述：控制编辑器是否应折叠导入。默认为false。


## foldingMaximumRegions
- 类型: `number`
- 描述：控制编辑器中可以折叠的最大区域数。


## foldingStrategy
- 类型: `"auto" | "indentation"`
- 描述：选择折叠策略。'auto使用为当前文档贡献的策略，indentation使用基于缩进的折叠策略。默认为“auto”。


## fontFamily
- 类型: `string`
- 描述：编辑器字体。


## fontLigatures
- 类型: `boolean | string`
- 描述：启用字体变体。


## fontSize
- 类型: `number`
- 描述：编辑器字体大小。


## fontVariations
- 类型: `string`
- 描述：启用字体变体。默认为false。


## fontWeight
- 类型: `string`
- 描述：编辑器字体粗细。


## formatOnPaste
- 类型: `boolean`
- 描述：粘贴时是否应格式化。默认为false。


## formatOnType
- 类型: `boolean`
- 描述：对类型启用格式。默认为false。


## glyphMargin
- 类型: `boolean`
- 描述：控制编辑器是否应显示光标。默认为false。


## gotoLocation
- 类型: [IGotoLocationOptions](/api/editor/IGotoLocationOptions.md)
- 描述：配置编辑器中的跳转。


## guides
- 类型: [IGuidesOptions](/api/editor/IGuidesOptions.md)
- 描述：配置编辑器中的指南。


## hideCursorInOverviewRuler
- 类型: `boolean`
- 描述：控制编辑器是否应隐藏光标。默认为false。


## hover
- 类型: [IEditorHoverOptions](/api/editor/IEditorHoverOptions.md)
- 描述：配置编辑器中的悬停。



## inDiffEditor
- 类型: `boolean`
- 描述：控制编辑器是否应显示差异编辑器。默认为false。


## inlayHints
- 类型: [IEditorInlayHintsOptions](/api/editor/IEditorInlayHintsOptions.md)
- 描述：配置编辑器中的提示。


## inlineCompletionsAccessibilityVerbose
- 类型: `boolean`
- 描述：控制在显示内联完成时是否应向屏幕阅读器用户提供辅助功能提示。

## inlineSuggest
- 类型: [IInlineSuggestOptions](/api/editor/IInlineSuggestOptions.md)
- 描述：配置编辑器中的提示。



## language
- 类型: `string`
- 描述：编辑器语言。


## largeFileOptimizations
- 类型: `boolean`
- 描述：启用大文件优化。默认为true。



## letterSpacing
- 类型: `number`
- 描述：编辑器字符间距。


## lightbulb
- 类型: [IEditorLightbulbOptions](/api/editor/IEditorLightbulbOptions.md)
- 描述：配置编辑器中的灯泡。


## lineDecorationsWidth
- 类型: `number | string`
- 描述：编辑器行装饰器宽度。


## lineHeight
- 类型: `number`
- 描述：编辑器行高。


## lineNumbers
- 类型: [LineNumbersType](/api/editor/LineNumbersType.md)
- 描述：编辑器行号。


## lineNumbersMinChars
- 类型: `number`
- 描述：编辑器行号最小字符数。


## linkedEditing
- 类型: `boolean`
- 描述：控制编辑器是否应显示链接编辑。默认为false。


## links
- 类型: `boolean`
- 描述：控制编辑器是否应显示链接。默认为false。




## matchBrackets
- 类型: `"always" | "never" | "near"`
- 描述：控制编辑器是否应显示匹配括号。默认为“always”。


## matchOnWordStartOnly
- 类型: `boolean`
- 描述：控制建议是否允许在单词中间而不是仅在开头进行匹配



## maxTokenizationLineLength
- 类型: `number`
- 描述：出于性能原因，超过此长度的行将不会标记化。默认为20000。



## minimap
- 类型: [IEditorMinimapOptions](/api/editor/IEditorMinimapOptions.md)
- 描述：配置编辑器中的缩略图。



## model
- 类型: [ITextModel](/api/editor/ITextModel.md)
- 描述：编辑器模型。



## mouseStyle
- 类型: `"default" | "text" | "copy"`
- 描述：控制鼠标指针样式，“text”或“default”或“copy”  默认为“text”

## mouseWheelScrollSensitivity
- 类型: `number`
- 描述：鼠标滚轮滚动速度。


## mouseWheelZoom
- 类型: `boolean`
- 描述：控制编辑器是否应缩放鼠标滚轮。默认为false。


## multiCursorLimit
- 类型: `number`
- 描述：控制一次可以在活动编辑器中使用的文本光标的最大数量。


## multiCursorMergeOverlapping
- 类型: `boolean`
- 描述：控制编辑器是否应合并重叠的文本光标。默认为true。


## multiCursorModifier
- 类型: `"ctrlCmd" | "alt"`
- 描述：用于使用鼠标添加多个光标的修改器。默认为“alt”


## multiCursorPaste
- 类型: `"spread" | "full"`
- 描述：配置粘贴行数等于光标数的文本时的行为。默认为“spread”。


## occurrencesHighlight
- 类型: `"off" | "singleFile" | "multiFile"`
- 描述：启用语义出现高亮显示。默认为“singleFile”off禁用突出显示“singleFile”触发当前文档中的突出显示“multiFile”触发有效打开文档中的高亮显示


## overflowWidgetsDomNode
- 类型: `boolean`
- 描述：如果diff编辑器应该只显示差异审查模式。


## overviewRulerBorder
- 类型: `boolean`
- 描述：控制编辑器是否应显示缩略图。默认为false。


## overviewRulerLanes
- 类型: `number`
- 描述：编辑器缩略图行数。


## padding
- 类型: [IEditorPaddingOptions](/api/editor/IEditorPaddingOptions.md)
- 描述：编辑器内边距。


## parameterHints
- 类型: [IEditorParameterHintOptions](/api/editor/IEditorParameterHintOptions.md)
- 描述：配置编辑器中的参数提示。


## pasteAs
- 类型: [IPasteAsOptions](/api/editor/IPasteAsOptions.md)
- 描述：控制对更改内容粘贴到编辑器的方式的支持。


## peekWidgetDefaultFocus
- 类型: `"tree" | "editor"`
- 描述：控制默认情况下是否将内联编辑器集中在peek小部件中。默认为false。

## quickSuggestions
- 类型: `boolean |` [IQuickSuggestionsOptions](/api/editor/IQuickSuggestionsOptions.md)
- 描述：启用快速建议（阴影建议）默认值为true。


## quickSuggestionsDelay
- 类型: `number`
- 描述：快速建议显示延迟（毫秒）。


## readOnly
- 类型: `boolean`
- 描述：控制编辑器是否应显示只读。默认为false。


## readOnlyMessage
- 类型: [IMarkdownString](/api/IMarkdownString.md)
- 描述：控制编辑器是否应显示只读消息。默认为false。



## renameOnType
- 类型: `boolean`
- 描述：控制编辑器是否应显示重命名。默认为false。


## renderControlCharacters
- 类型: `boolean`
- 描述：启用控制字符的呈现。默认为true。


## renderFinalNewline
- 类型: `"off" | "on" | "dimmed"`
- 描述：当文件以换行符结束时，渲染最后一个行号。Windows和macOS的默认值为“on”，Linux的默认值则为“暗显”。



## renderLineHighlight
- 类型: `"all" | "line" | "none" | "gutter"`
- 描述：启用当前线高亮显示的渲染。默认为 ‘all’。


## renderLineHighlightOnlyWhenFocus
- 类型: `boolean`
- 描述：控制是否应仅在编辑器聚焦时渲染当前行高光。默认为false。


## renderValidationDecorations
- 类型: `"off" | "on" | "editable"`
- 描述：控制编辑器是否应显示验证装饰。默认为“editable”。


## renderWhitespace
- 类型: `"all" | "none" | "boundary" | "selection" | "trailing"`
- 描述：启用空白的呈现。默认为“selection”。


## revealHorizontalRightPadding
- 类型: `number`
- 描述：当显示光标时，会向光标添加一个虚拟填充（px），将其变成一个矩形。此虚拟填充可确保光标在碰到视口边缘之前显示出来。默认值为30（px）。


## roundedSelection
- 类型: `boolean`
- 描述：控制编辑器是否应显示当前行高亮显示。默认为true。


## rulers
- 类型: `(number | `[IRulerOption](/api/editor/IRulerOption.md)`)[]`
- 描述：编辑器中显示的行数。


## screenReaderAnnounceInlineSuggestion
- 类型: `boolean`
- 描述：控制屏幕阅读器是否立即公布内联建议内容。


## scrollBeyondLastColumn
- 类型: `number`
- 描述：启用滚动可以超出最后一列若干列。默认值为5。


## scrollBeyondLastLine
- 类型: `boolean`
- 描述：启用滚动可以超出最后一行。默认为true。


## scrollPredominantAxis
- 类型: `boolean`
- 描述：控制编辑器是否应滚动到主轴。默认为true。


## scrollbar
- 类型: [IEditorScrollbarOptions](/api/editor/IEditorScrollbarOptions.md)
- 描述：编辑器滚动条的配置。




## selectOnLineNumbers
- 类型: `boolean`
- 描述：单击行号时是否应选择相应的行,默认为true。


## selectionClipboard
- 类型: `boolean`
- 描述：启用复制到剪贴板。默认为true。


## selectionHighlight
- 类型: `boolean`
- 描述：启用选择高亮。默认为true。



## semanticHighlighting.enabled
- 类型：`boolean | "configuredByTheme"`
- 描述：控制是否为支持它的语言显示语义高亮显示。true:为所有主题启用语义高亮显示false:为所有主题“configuredByTheme”禁用语义高亮显示：语义高亮显示由当前颜色主题的语义高亮显示设置控制。默认为“byTheme”。



## showDeprecated
- 类型: `boolean`
- 描述：控制编辑器是否应显示弃用。默认为true。


## showFoldingControls
- 类型: `"always" | "never" | "mouseover"`
- 描述：控制边沟中的折叠动作是始终可见还是隐藏，除非鼠标位于边沟上。默认为“mouseover”。


## showUnused
- 类型: `boolean`
- 描述：控制未使用变量的淡出。


## smartSelect
- 类型: [ISmartSelectOptions](/api/editor/ISmartSelectOptions.md)
- 描述：智能选择


## smoothScrolling
- 类型: `boolean`
- 描述：控制编辑器是否应平滑滚动。


## snippetSuggestions
- 类型: `"none" | "top" | "bottom" | "inline"`
- 描述：启用代码段建议。



## stablePeek
- 类型: `boolean`
- 描述：控制编辑器是否应使用稳定模式。默认为false。


## stickyScroll
- 类型: [IEditorStickyScrollOptions](/api/editor/IEditorStickyScrollOptions.md)
- 描述：控制粘性滚动选项的行为


## stickyTabStops
- 类型: `boolean`
- 描述：当使用空格进行缩进时，模拟制表符的选择行为。这意味着选择将停留在制表位。


## stopRenderingLineAfter
- 类型: `number`
- 描述：控制编辑器是否应停止渲染行。默认为10000。


## suggest
- 类型: [ISuggestOptions](/api/editor/ISuggestOptions.md)
- 描述：控制编辑器是否应显示建议。


## suggestFontSize
- 类型: `number`
- 描述：控制编辑器是否应显示建议。


## suggestLineHeight
- 类型: `number`
- 描述：建议小部件的行高度。默认为编辑器的行高度。


## suggestOnTriggerCharacters
- 类型: `boolean`
- 描述：启用建议框以在触发字符上弹出。默认为true。


## suggestSelection
- 类型: `"first" | "recentlyUsed" | "recentlyUsedByPrefix"`
- 描述：建议的历史模式。


## tabCompletion
- 类型: `"off" | "on" | "onlySnippets"`
- 描述：启用选项卡完成。


## tabFocusMode
- 类型: `boolean`
- 描述：控制编辑器/终端是接收选项卡还是将选项卡推迟到工作台进行导航。


## tabIndex
- 类型: `number`
- 描述：编辑器的文本区域的tabindex属性



## tabSize
- 类型：`number`
- 描述：选项卡的空格数等于。当detectIndentation处于启用状态时，此设置将根据文件内容被覆盖。默认值为4。


## theme
- 类型：`string`
- 描述：编辑器使用的主题。


## trimAutoWhitespace
- 类型：`boolean`
- 描述：控制编辑器是否应删除行尾的空格。默认为true。



## unfoldOnClickAfterEndOfLine
- 类型: `boolean`
- 描述：控制在折叠线之后单击空内容是否会展开该线。默认为false。


## unicodeHighlight
- 类型: [IUnicodeHighlightOptions](/api/editor/IUnicodeHighlightOptions.md)
- 描述：控制unicode高亮显示功能的行为（默认情况下，会高亮显示不明确和不可见的字符）。


## unusualLineTerminators
- 类型: `"off" | "auto" | "prompt"`
- 描述：拆除不常见的线路终端，如线路分离器（LS）、段落分离器（PS）。默认为“提示”。


## useShadowDOM
- 类型: `boolean`
- 描述：启用Shadow DOM。


## useTabStops
- 类型: `boolean`
- 描述：启用制表符。



## value
- 类型: `string`
- 描述：编辑器初始化时使用的值。


## wordBasedSuggestions
- 类型：`"off" | "currentDocument" | "matchingDocuments" | "allDocuments"`
- 描述：控制是否应根据文档中的单词计算完成。默认为true。

## wordBasedSuggestionsOnlySameLanguage
- 类型：`boolean`
- 描述：控制打开的同一语言或任何语言的文档中是否应包含基于单词的补全。


## wordBreak
- 类型: `"normal" | "keepAll"`
- 描述：设置是否在文本溢出其内容框的任何位置显示换行符。当wordBreak='normal'时，使用默认换行规则。当wordBreak='keepAll'时，中文/日语/韩语（CJK）文本不应使用断字符。非CJK文本行为与正常情况相同。


## wordSegmenterLocales
- 类型: `string | string[]`
- 描述：设置wordSegmenter支持的语言列表。


## wordSeparators
- 类型: `string`
- 描述：设置单词分隔符。


## wordWrap
- 类型: `"off" | "on" | "wordWrapColumn" | "bounded"`
- 描述：控制编辑器的换行。当wordWrap=“off”时，行将永远不会换行。当wordWrap=“on”时，线条将按视口宽度进行换行。当wordWrap=“wordWrapColumn”时，行将在wordWrapVolume处换行。当wordWrap=“bounded”时，线条将以最小值换行（视口宽度，wordWrapColumn）。默认为“关闭”。


## wordWrapBreakAfterCharacters
- 类型: `string`
- 描述：配置换行字符。在这些字符之后将引入一个break。


## wordWrapBreakBeforeCharacters
- 类型: `string`
- 描述：配置换行字符。在这些字符之前将引入一个break。


## wordWrapColumn
- 类型: `number`
- 描述：控制编辑器换行。默认为80。


## wordWrapOverride1
- 类型: `"off" | "on" | "inherit"`
- 描述：覆盖wordWrap设置。


## wordWrapOverride2
- 类型: `"off" | "on" | "inherit"`
- 描述：覆盖 wordWrapOverride1 设置。

## wrappingIndent
- 类型: `"none" | "same" | "indent" | "deepIndent"`
- 描述：控制换行的缩进。可以是：“none”、“same”、“indent”或“deepIndent”。在vscode中默认为“same”，在monaco编辑器中则默认为“none”。


## wrappingStrategy
- 类型: `"simple" | "advanced"`
- 描述：控制要使用的包装策略。默认为“simple”。

