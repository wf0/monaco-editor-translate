// 左侧侧边栏目录
// emoji 与ts文件映射
const map = {
  E: "🅱",
  N: "🆖",
  I: "⚡",
  C: "🎯",
  T: "🅿",
  V: "",
  F: "",
  P: "",
  M: "✅",
};

// editor 子目录结构
const editorItems = [
  {
    text: "AccessibilitySupport",
    link: "/api/editor/AccessibilitySupport",
  },
  {
    text: "ContentWidgetPositionPreference",
    link: "/api/editor/ContentWidgetPositionPreference",
  },
  {
    text: "CursorChangeReason",
    link: "/api/editor/CursorChangeReason",
  },
  {
    text: "DefaultEndOfLine",
    link: "/api/editor/DefaultEndOfLine",
  },
  {
    text: "EditorAutoIndentStrategy",
    link: "/api/editor/EditorAutoIndentStrategy",
  },
  { text: "EditorOption", link: "/api/editor/EditorOption" },
  {
    text: "EndOfLinePreference",
    link: "/api/editor/EndOfLinePreference",
  },
  {
    text: "EndOfLineSequence",
    link: "/api/editor/EndOfLineSequence",
  },
  {
    text: "GlyphMarginLane",
    link: "/api/editor/GlyphMarginLane",
  },
  {
    text: "InjectedTextCursorStops",
    link: "/api/editor/InjectedTextCursorStops",
  },
  {
    text: "MinimapPosition",
    link: "/api/editor/MinimapPosition",
  },
  {
    text: "MinimapSectionHeaderStyle",
    link: "/api/editor/MinimapSectionHeaderStyle",
  },
  {
    text: "MouseTargetType",
    link: "/api/editor/MouseTargetType",
  },
  {
    text: "OverlayWidgetPositionPreference",
    link: "/api/editor/OverlayWidgetPositionPreference",
  },
  {
    text: "OverviewRulerLane",
    link: "/api/editor/OverviewRulerLane",
  },
  {
    text: "PositionAffinity",
    link: "/api/editor/PositionAffinity",
  },
  {
    text: "RenderLineNumbersType",
    link: "/api/editor/RenderLineNumbersType",
  },
  { text: "RenderMinimap", link: "/api/editor/RenderMinimap" },
  { text: "ScrollType", link: "/api/editor/ScrollType" },
  {
    text: "ScrollbarVisibility",
    link: "/api/editor/ScrollbarVisibility",
  },
  {
    text: "ShowLightbulbIconMode",
    link: "/api/editor/ShowLightbulbIconMode",
  },
  {
    text: "TextEditorCursorBlinkingStyle",
    link: "/api/editor/TextEditorCursorBlinkingStyle",
  },
  {
    text: "TextEditorCursorStyle",
    link: "/api/editor/TextEditorCursorStyle",
  },
  {
    text: "TrackedRangeStickiness",
    link: "/api/editor/TrackedRangeStickiness",
  },
  { text: "WrappingIndent", link: "/api/editor/WrappingIndent" },
  {
    text: "ApplyUpdateResult",
    link: "/api/editor/ApplyUpdateResult",
  },
  { text: "BareFontInfo", link: "/api/editor/BareFontInfo" },
  {
    text: "ConfigurationChangedEvent",
    link: "/api/editor/ConfigurationChangedEvent",
  },
  { text: "FindMatch", link: "/api/editor/FindMatch" },
  { text: "FontInfo", link: "/api/editor/FontInfo" },
  {
    text: "TextModelResolvedOptions",
    link: "/api/editor/TextModelResolvedOptions",
  },
  {
    text: "BracketPairColorizationOptions",
    link: "/api/editor/BracketPairColorizationOptions",
  },
  {
    text: "EditorLayoutInfo",
    link: "/api/editor/EditorLayoutInfo",
  },
  {
    text: "EditorMinimapLayoutInfo",
    link: "/api/editor/EditorMinimapLayoutInfo",
  },
  {
    text: "EditorWrappingInfo",
    link: "/api/editor/EditorWrappingInfo",
  },
  {
    text: "IActionDescriptor",
    link: "/api/editor/IActionDescriptor",
  },
  {
    text: "IBaseMouseTarget",
    link: "/api/editor/IBaseMouseTarget",
  },
  {
    text: "IBracketPairColorizationOptions",
    link: "/api/editor/IBracketPairColorizationOptions",
  },
  { text: "IChange", link: "/api/editor/IChange" },
  { text: "ICharChange", link: "/api/editor/ICharChange" },
  { text: "ICodeEditor", link: "/api/editor/ICodeEditor" },
  {
    text: "ICodeEditorOpener",
    link: "/api/editor/ICodeEditorOpener",
  },
  {
    text: "ICodeEditorViewState",
    link: "/api/editor/ICodeEditorViewState",
  },
  {
    text: "IColorizerElementOptions",
    link: "/api/editor/IColorizerElementOptions",
  },
  {
    text: "IColorizerOptions",
    link: "/api/editor/IColorizerOptions",
  },
  { text: "ICommand", link: "/api/editor/ICommand" },
  {
    text: "ICommandDescriptor",
    link: "/api/editor/ICommandDescriptor",
  },
  {
    text: "ICommandHandler",
    link: "/api/editor/ICommandHandler",
  },
  {
    text: "ICommandMetadata",
    link: "/api/editor/ICommandMetadata",
  },
  {
    text: "IComputedEditorOptions",
    link: "/api/editor/IComputedEditorOptions",
  },
  {
    text: "IContentSizeChangedEvent",
    link: "/api/editor/IContentSizeChangedEvent",
  },
  { text: "IContentWidget", link: "/api/editor/IContentWidget" },
  {
    text: "IContentWidgetPosition",
    link: "/api/editor/IContentWidgetPosition",
  },
  { text: "IContextKey", link: "/api/editor/IContextKey" },
  {
    text: "ICursorPositionChangedEvent",
    link: "/api/editor/ICursorPositionChangedEvent",
  },
  {
    text: "ICursorSelectionChangedEvent",
    link: "/api/editor/ICursorSelectionChangedEvent",
  },
  { text: "ICursorState", link: "/api/editor/ICursorState" },
  {
    text: "ICursorStateComputer",
    link: "/api/editor/ICursorStateComputer",
  },
  {
    text: "ICursorStateComputerData",
    link: "/api/editor/ICursorStateComputerData",
  },
  {
    text: "IDecorationOptions",
    link: "/api/editor/IDecorationOptions",
  },
  { text: "IDiffEditor", link: "/api/editor/IDiffEditor" },
  {
    text: "IDiffEditorBaseOptions",
    link: "/api/editor/IDiffEditorBaseOptions",
  },
  {
    text: "IDiffEditorConstructionOptions",
    link: "/api/editor/IDiffEditorConstructionOptions",
  },
  {
    text: "IDiffEditorModel",
    link: "/api/editor/IDiffEditorModel",
  },
  {
    text: "IDiffEditorOptions",
    link: "/api/editor/IDiffEditorOptions",
  },
  {
    text: "IDiffEditorViewModel",
    link: "/api/editor/IDiffEditorViewModel",
  },
  {
    text: "IDiffEditorViewState",
    link: "/api/editor/IDiffEditorViewState",
  },
  { text: "IDimension", link: "/api/editor/IDimension" },
  {
    text: "IDropIntoEditorOptions",
    link: "/api/editor/IDropIntoEditorOptions",
  },
  {
    text: "IEditOperationBuilder",
    link: "/api/editor/IEditOperationBuilder",
  },
  { text: "IEditor", link: "/api/editor/IEditor" },
  { text: "IEditorAction", link: "/api/editor/IEditorAction" },
  {
    text: "IEditorCommentsOptions",
    link: "/api/editor/IEditorCommentsOptions",
  },
  {
    text: "IEditorConstructionOptions",
    link: "/api/editor/IEditorConstructionOptions",
  },
  {
    text: "IEditorContribution",
    link: "/api/editor/IEditorContribution",
  },
  {
    text: "IEditorDecorationsCollection",
    link: "/api/editor/IEditorDecorationsCollection",
  },
  {
    text: "IEditorFindOptions",
    link: "/api/editor/IEditorFindOptions",
  },
  {
    text: "IEditorHoverOptions",
    link: "/api/editor/IEditorHoverOptions",
  },
  {
    text: "IEditorInlayHintsOptions",
    link: "/api/editor/IEditorInlayHintsOptions",
  },
  {
    text: "IEditorLightbulbOptions",
    link: "/api/editor/IEditorLightbulbOptions",
  },
  {
    text: "IEditorMinimapOptions",
    link: "/api/editor/IEditorMinimapOptions",
  },
  {
    text: "IEditorMouseEvent",
    link: "/api/editor/IEditorMouseEvent",
  },
  { text: "IEditorOption", link: "/api/editor/IEditorOption" },
  { text: "IEditorOptions", link: "/api/editor/IEditorOptions" },
  {
    text: "IEditorOverrideServices",
    link: "/api/editor/IEditorOverrideServices",
  },
  {
    text: "IEditorPaddingOptions",
    link: "/api/editor/IEditorPaddingOptions",
  },
  {
    text: "IEditorParameterHintOptions",
    link: "/api/editor/IEditorParameterHintOptions",
  },
  {
    text: "IEditorScrollbarOptions",
    link: "/api/editor/IEditorScrollbarOptions",
  },
  {
    text: "IEditorStickyScrollOptions",
    link: "/api/editor/IEditorStickyScrollOptions",
  },
  { text: "IEditorZoom", link: "/api/editor/IEditorZoom" },
  {
    text: "IGlobalEditorOptions",
    link: "/api/editor/IGlobalEditorOptions",
  },
  {
    text: "IGlyphMarginLanesModel",
    link: "/api/editor/IGlyphMarginLanesModel",
  },
  {
    text: "IGlyphMarginWidget",
    link: "/api/editor/IGlyphMarginWidget",
  },
  {
    text: "IGlyphMarginWidgetPosition",
    link: "/api/editor/IGlyphMarginWidgetPosition",
  },
  {
    text: "IGotoLocationOptions",
    link: "/api/editor/IGotoLocationOptions",
  },
  { text: "IGuidesOptions", link: "/api/editor/IGuidesOptions" },
  {
    text: "IIdentifiedSingleEditOperation",
    link: "/api/editor/IIdentifiedSingleEditOperation",
  },
  {
    text: "IInlineEditOptions",
    link: "/api/editor/IInlineEditOptions",
  },
  {
    text: "IInlineSuggestOptions",
    link: "/api/editor/IInlineSuggestOptions",
  },
  {
    text: "IKeybindingRule",
    link: "/api/editor/IKeybindingRule",
  },
  { text: "ILineChange", link: "/api/editor/ILineChange" },
  { text: "ILinkOpener", link: "/api/editor/ILinkOpener" },
  {
    text: "ILocalizedString",
    link: "/api/editor/ILocalizedString",
  },
  { text: "IMarker", link: "/api/editor/IMarker" },
  { text: "IMarkerData", link: "/api/editor/IMarkerData" },
  {
    text: "IModelChangedEvent",
    link: "/api/editor/IModelChangedEvent",
  },
  {
    text: "IModelContentChange",
    link: "/api/editor/IModelContentChange",
  },
  {
    text: "IModelContentChangedEvent",
    link: "/api/editor/IModelContentChangedEvent",
  },
  {
    text: "IModelDecoration",
    link: "/api/editor/IModelDecoration",
  },
  {
    text: "IModelDecorationGlyphMarginOptions",
    link: "/api/editor/IModelDecorationGlyphMarginOptions",
  },
  {
    text: "IModelDecorationMinimapOptions",
    link: "/api/editor/IModelDecorationMinimapOptions",
  },
  {
    text: "IModelDecorationOptions",
    link: "/api/editor/IModelDecorationOptions",
  },
  {
    text: "IModelDecorationOverviewRulerOptions",
    link: "/api/editor/IModelDecorationOverviewRulerOptions",
  },
  {
    text: "IModelDecorationsChangedEvent",
    link: "/api/editor/IModelDecorationsChangedEvent",
  },
  {
    text: "IModelDeltaDecoration",
    link: "/api/editor/IModelDeltaDecoration",
  },
  {
    text: "IModelLanguageChangedEvent",
    link: "/api/editor/IModelLanguageChangedEvent",
  },
  {
    text: "IModelLanguageConfigurationChangedEvent",
    link: "/api/editor/IModelLanguageConfigurationChangedEvent",
  },
  {
    text: "IModelOptionsChangedEvent",
    link: "/api/editor/IModelOptionsChangedEvent",
  },
  {
    text: "IMouseTargetContentEmpty",
    link: "/api/editor/IMouseTargetContentEmpty",
  },
  {
    text: "IMouseTargetContentEmptyData",
    link: "/api/editor/IMouseTargetContentEmptyData",
  },
  {
    text: "IMouseTargetContentText",
    link: "/api/editor/IMouseTargetContentText",
  },
  {
    text: "IMouseTargetContentTextData",
    link: "/api/editor/IMouseTargetContentTextData",
  },
  {
    text: "IMouseTargetContentWidget",
    link: "/api/editor/IMouseTargetContentWidget",
  },
  {
    text: "IMouseTargetMargin",
    link: "/api/editor/IMouseTargetMargin",
  },
  {
    text: "IMouseTargetMarginData",
    link: "/api/editor/IMouseTargetMarginData",
  },
  {
    text: "IMouseTargetOutsideEditor",
    link: "/api/editor/IMouseTargetOutsideEditor",
  },
  {
    text: "IMouseTargetOverlayWidget",
    link: "/api/editor/IMouseTargetOverlayWidget",
  },
  {
    text: "IMouseTargetOverviewRuler",
    link: "/api/editor/IMouseTargetOverviewRuler",
  },
  {
    text: "IMouseTargetScrollbar",
    link: "/api/editor/IMouseTargetScrollbar",
  },
  {
    text: "IMouseTargetTextarea",
    link: "/api/editor/IMouseTargetTextarea",
  },
  {
    text: "IMouseTargetUnknown",
    link: "/api/editor/IMouseTargetUnknown",
  },
  {
    text: "IMouseTargetViewZone",
    link: "/api/editor/IMouseTargetViewZone",
  },
  {
    text: "IMouseTargetViewZoneData",
    link: "/api/editor/IMouseTargetViewZoneData",
  },
  {
    text: "INewScrollPosition",
    link: "/api/editor/INewScrollPosition",
  },
  { text: "IOverlayWidget", link: "/api/editor/IOverlayWidget" },
  {
    text: "IOverlayWidgetPosition",
    link: "/api/editor/IOverlayWidgetPosition",
  },
  {
    text: "IOverlayWidgetPositionCoordinates",
    link: "/api/editor/IOverlayWidgetPositionCoordinates",
  },
  {
    text: "IPartialEditorMouseEvent",
    link: "/api/editor/IPartialEditorMouseEvent",
  },
  {
    text: "IPasteAsOptions",
    link: "/api/editor/IPasteAsOptions",
  },
  { text: "IPasteEvent", link: "/api/editor/IPasteEvent" },
  {
    text: "IQuickSuggestionsOptions",
    link: "/api/editor/IQuickSuggestionsOptions",
  },
  {
    text: "IRelatedInformation",
    link: "/api/editor/IRelatedInformation",
  },
  { text: "IRulerOption", link: "/api/editor/IRulerOption" },
  {
    text: "ISingleEditOperation",
    link: "/api/editor/ISingleEditOperation",
  },
  {
    text: "ISmartSelectOptions",
    link: "/api/editor/ISmartSelectOptions",
  },
  {
    text: "IStandaloneCodeEditor",
    link: "/api/editor/IStandaloneCodeEditor",
  },
  {
    text: "IStandaloneDiffEditor",
    link: "/api/editor/IStandaloneDiffEditor",
  },
  {
    text: "IStandaloneDiffEditorConstructionOptions",
    link: "/api/editor/IStandaloneDiffEditorConstructionOptions",
  },
  {
    text: "IStandaloneEditorConstructionOptions",
    link: "/api/editor/IStandaloneEditorConstructionOptions",
  },
  {
    text: "IStandaloneThemeData",
    link: "/api/editor/IStandaloneThemeData",
  },
  {
    text: "ISuggestOptions",
    link: "/api/editor/ISuggestOptions",
  },
  { text: "ITextModel", link: "/api/editor/ITextModel" },
  {
    text: "ITextModelUpdateOptions",
    link: "/api/editor/ITextModelUpdateOptions",
  },
  { text: "ITextSnapshot", link: "/api/editor/ITextSnapshot" },
  {
    text: "ITokenThemeRule",
    link: "/api/editor/ITokenThemeRule",
  },
  {
    text: "IUnicodeHighlightOptions",
    link: "/api/editor/IUnicodeHighlightOptions",
  },
  {
    text: "IValidEditOperation",
    link: "/api/editor/IValidEditOperation",
  },
  { text: "IViewState", link: "/api/editor/IViewState" },
  { text: "IViewZone", link: "/api/editor/IViewZone" },
  {
    text: "IViewZoneChangeAccessor",
    link: "/api/editor/IViewZoneChangeAccessor",
  },
  {
    text: "IWebWorkerOptions",
    link: "/api/editor/IWebWorkerOptions",
  },
  {
    text: "IWordAtPosition",
    link: "/api/editor/IWordAtPosition",
  },
  {
    text: "InjectedTextOptions",
    link: "/api/editor/InjectedTextOptions",
  },
  {
    text: "InternalEditorRenderLineNumbersOptions",
    link: "/api/editor/InternalEditorRenderLineNumbersOptions",
  },
  {
    text: "InternalEditorScrollbarOptions",
    link: "/api/editor/InternalEditorScrollbarOptions",
  },
  {
    text: "InternalQuickSuggestionsOptions",
    link: "/api/editor/InternalQuickSuggestionsOptions",
  },
  {
    text: "MonacoWebWorker",
    link: "/api/editor/MonacoWebWorker",
  },
  {
    text: "OverviewRulerPosition",
    link: "/api/editor/OverviewRulerPosition",
  },
  { text: "ThemeColor", link: "/api/editor/ThemeColor" },
  { text: "BuiltinTheme", link: "/api/editor/BuiltinTheme" },
  {
    text: "ComputedEditorOptionValue",
    link: "/api/editor/ComputedEditorOptionValue",
  },
  {
    text: "ContextKeyValue",
    link: "/api/editor/ContextKeyValue",
  },
  {
    text: "EditorAutoClosingEditStrategy",
    link: "/api/editor/EditorAutoClosingEditStrategy",
  },
  {
    text: "EditorAutoClosingStrategy",
    link: "/api/editor/EditorAutoClosingStrategy",
  },
  {
    text: "EditorAutoSurroundStrategy",
    link: "/api/editor/EditorAutoSurroundStrategy",
  },
  {
    text: "EditorOptionsType",
    link: "/api/editor/EditorOptionsType",
  },
  {
    text: "FindComputedEditorOptionValueById",
    link: "/api/editor/FindComputedEditorOptionValueById",
  },
  {
    text: "FindEditorOptionsKeyById",
    link: "/api/editor/FindEditorOptionsKeyById",
  },
  {
    text: "GoToLocationValues",
    link: "/api/editor/GoToLocationValues",
  },
  { text: "IColors", link: "/api/editor/IColors" },
  { text: "IEditorModel", link: "/api/editor/IEditorModel" },
  {
    text: "IEditorViewState",
    link: "/api/editor/IEditorViewState",
  },
  { text: "IModel", link: "/api/editor/IModel" },
  { text: "IMouseTarget", link: "/api/editor/IMouseTarget" },
  { text: "IReadOnlyModel", link: "/api/editor/IReadOnlyModel" },
  {
    text: "InUntrustedWorkspace",
    link: "/api/editor/InUntrustedWorkspace",
  },
  {
    text: "LineNumbersType",
    link: "/api/editor/LineNumbersType",
  },
  {
    text: "QuickSuggestionsValue",
    link: "/api/editor/QuickSuggestionsValue",
  },
  { text: "EditorOptions", link: "/api/editor/EditorOptions" },
  { text: "EditorType", link: "/api/editor/EditorType" },
  { text: "EditorZoom", link: "/api/editor/EditorZoom" },
  { text: "addCommand", link: "/api/editor/addCommand" },
  {
    text: "addEditorAction",
    link: "/api/editor/addEditorAction",
  },
  {
    text: "addKeybindingRule",
    link: "/api/editor/addKeybindingRule",
  },
  {
    text: "addKeybindingRules",
    link: "/api/editor/addKeybindingRules",
  },
  { text: "colorize", link: "/api/editor/colorize" },
  {
    text: "colorizeElement",
    link: "/api/editor/colorizeElement",
  },
  {
    text: "colorizeModelLine",
    link: "/api/editor/colorizeModelLine",
  },
  { text: "create", link: "/api/editor/create" },
  {
    text: "createDiffEditor",
    link: "/api/editor/createDiffEditor",
  },
  { text: "createModel", link: "/api/editor/createModel" },
  {
    text: "createMultiFileDiffEditor",
    link: "/api/editor/createMultiFileDiffEditor",
  },
  {
    text: "createWebWorker",
    link: "/api/editor/createWebWorker",
  },
  { text: "defineTheme", link: "/api/editor/defineTheme" },
  { text: "getDiffEditors", link: "/api/editor/getDiffEditors" },
  { text: "getEditors", link: "/api/editor/getEditors" },
  { text: "getModel", link: "/api/editor/getModel" },
  {
    text: "getModelMarkers",
    link: "/api/editor/getModelMarkers",
  },
  { text: "getModels", link: "/api/editor/getModels" },
  {
    text: "onDidChangeMarkers",
    link: "/api/editor/onDidChangeMarkers",
  },
  {
    text: "onDidChangeModelLanguage",
    link: "/api/editor/onDidChangeModelLanguage",
  },
  {
    text: "onDidCreateDiffEditor",
    link: "/api/editor/onDidCreateDiffEditor",
  },
  {
    text: "onDidCreateEditor",
    link: "/api/editor/onDidCreateEditor",
  },
  {
    text: "onDidCreateModel",
    link: "/api/editor/onDidCreateModel",
  },
  {
    text: "onWillDisposeModel",
    link: "/api/editor/onWillDisposeModel",
  },
  {
    text: "registerCommand",
    link: "/api/editor/registerCommand",
  },
  {
    text: "registerEditorOpener",
    link: "/api/editor/registerEditorOpener",
  },
  {
    text: "registerLinkOpener",
    link: "/api/editor/registerLinkOpener",
  },
  { text: "remeasureFonts", link: "/api/editor/remeasureFonts" },
  {
    text: "removeAllMarkers",
    link: "/api/editor/removeAllMarkers",
  },
  {
    text: "setModelLanguage",
    link: "/api/editor/setModelLanguage",
  },
  {
    text: "setModelMarkers",
    link: "/api/editor/setModelMarkers",
  },
  { text: "setTheme", link: "/api/editor/setTheme" },
  { text: "tokenize", link: "/api/editor/tokenize" },
];

// languages 子目录结构
const languagesItems = [
  {
    text: map.N + " css",
    collapsed: true,
    link: "/api/languages/css",
    items: [
      {
        text: "CSSDataConfiguration",
        link: "/api/languages/css/CSSDataConfiguration",
      },
      { text: "CSSDataV1", link: "/api/languages/css/CSSDataV1" },
      {
        text: "CSSFormatConfiguration",
        link: "/api/languages/css/CSSFormatConfiguration",
      },
      { text: "IAtDirectiveData", link: "/api/languages/css/IAtDirectiveData" },
      { text: "IPropertyData", link: "/api/languages/css/IPropertyData" },
      { text: "IPseudoClassData", link: "/api/languages/css/IPseudoClassData" },
      {
        text: "IPseudoElementData",
        link: "/api/languages/css/IPseudoElementData",
      },
      { text: "IReference", link: "/api/languages/css/IReference" },
      { text: "IValueData", link: "/api/languages/css/IValueData" },
      {
        text: "LanguageServiceDefaults",
        link: "/api/languages/css/LanguageServiceDefaults",
      },
      { text: "MarkupContent", link: "/api/languages/css/MarkupContent" },
      {
        text: "ModeConfiguration",
        link: "/api/languages/css/ModeConfiguration",
      },
      { text: "Options", link: "/api/languages/css/Options" },
      {
        text: "DiagnosticsOptions",
        link: "/api/languages/css/DiagnosticsOptions",
      },
      { text: "EntryStatus", link: "/api/languages/css/EntryStatus" },
      { text: "MarkupKind", link: "/api/languages/css/MarkupKind" },
      { text: "cssDefaults", link: "/api/languages/css/cssDefaults" },
      { text: "lessDefaults", link: "/api/languages/css/lessDefaults" },
      { text: "scssDefaults", link: "/api/languages/css/scssDefaults" },
    ],
  },
  {
    text: map.N + " html",
    collapsed: true,
    link: "/api/languages/html",
    items: [
      {
        text: "CompletionConfiguration",
        link: "/api/languages/html/CompletionConfiguration",
      },
      {
        text: "HTMLDataConfiguration",
        link: "/api/languages/html/HTMLDataConfiguration",
      },
      { text: "HTMLDataV1", link: "/api/languages/html/HTMLDataV1" },
      {
        text: "HTMLFormatConfiguration",
        link: "/api/languages/html/HTMLFormatConfiguration",
      },
      { text: "IAttributeData", link: "/api/languages/html/IAttributeData" },
      { text: "IReference", link: "/api/languages/html/IReference" },
      { text: "ITagData", link: "/api/languages/html/ITagData" },
      { text: "IValueData", link: "/api/languages/html/IValueData" },
      { text: "IValueSet", link: "/api/languages/html/IValueSet" },
      {
        text: "LanguageServiceDefaults",
        link: "/api/languages/html/LanguageServiceDefaults",
      },
      {
        text: "LanguageServiceRegistration",
        link: "/api/languages/html/LanguageServiceRegistration",
      },
      { text: "MarkupContent", link: "/api/languages/html/MarkupContent" },
      {
        text: "ModeConfiguration",
        link: "/api/languages/html/ModeConfiguration",
      },
      { text: "Options", link: "/api/languages/html/Options" },
      { text: "MarkupKind", link: "/api/languages/html/MarkupKind" },
      {
        text: "handlebarDefaults",
        link: "/api/languages/html/handlebarDefaults",
      },
      {
        text: "handlebarLanguageService",
        link: "/api/languages/html/handlebarLanguageService",
      },
      { text: "htmlDefaults", link: "/api/languages/html/htmlDefaults" },
      {
        text: "htmlLanguageService",
        link: "/api/languages/html/htmlLanguageService",
      },
      { text: "razorDefaults", link: "/api/languages/html/razorDefaults" },
      {
        text: "razorLanguageService",
        link: "/api/languages/html/razorLanguageService",
      },
      {
        text: "registerHTMLLanguageService",
        link: "/api/languages/html/registerHTMLLanguageService",
      },
    ],
  },
  {
    text: map.N + " json",
    collapsed: true,
    link: "/api/languages/json",
    items: [
      { text: "ArrayASTNode", link: "/api/languages/json/ArrayASTNode" },
      { text: "BaseASTNode", link: "/api/languages/json/BaseASTNode" },
      { text: "BooleanASTNode", link: "/api/languages/json/BooleanASTNode" },
      {
        text: "DiagnosticsOptions",
        link: "/api/languages/json/DiagnosticsOptions",
      },
      { text: "IJSONWorker", link: "/api/languages/json/IJSONWorker" },
      { text: "JSONSchema", link: "/api/languages/json/JSONSchema" },
      { text: "JSONSchemaMap", link: "/api/languages/json/JSONSchemaMap" },
      {
        text: "LanguageServiceDefaults",
        link: "/api/languages/json/LanguageServiceDefaults",
      },
      { text: "MatchingSchema", link: "/api/languages/json/MatchingSchema" },
      {
        text: "ModeConfiguration",
        link: "/api/languages/json/ModeConfiguration",
      },
      { text: "NullASTNode", link: "/api/languages/json/NullASTNode" },
      { text: "NumberASTNode", link: "/api/languages/json/NumberASTNode" },
      { text: "ObjectASTNode", link: "/api/languages/json/ObjectASTNode" },
      { text: "PropertyASTNode", link: "/api/languages/json/PropertyASTNode" },
      { text: "StringASTNode", link: "/api/languages/json/StringASTNode" },
      { text: "ASTNode", link: "/api/languages/json/ASTNode" },
      { text: "JSONDocument", link: "/api/languages/json/JSONDocument" },
      { text: "JSONSchemaRef", link: "/api/languages/json/JSONSchemaRef" },
      { text: "SeverityLevel", link: "/api/languages/json/SeverityLevel" },
      { text: "jsonDefaults", link: "/api/languages/json/jsonDefaults" },
      { text: "getWorker", link: "/api/languages/json/getWorker" },
    ],
  },
  {
    text: map.N + " typescript",
    collapsed: true,
    link: "/api/languages/typescript",
    items: [
      { text: "JsxEmit", link: "/api/languages/typescript/JsxEmit" },
      { text: "ModuleKind", link: "/api/languages/typescript/ModuleKind" },
      {
        text: "ModuleResolutionKind",
        link: "/api/languages/typescript/ModuleResolutionKind",
      },
      { text: "NewLineKind", link: "/api/languages/typescript/NewLineKind" },
      { text: "ScriptTarget", link: "/api/languages/typescript/ScriptTarget" },
      {
        text: "CompilerOptions",
        link: "/api/languages/typescript/CompilerOptions",
      },
      { text: "Diagnostic", link: "/api/languages/typescript/Diagnostic" },
      {
        text: "DiagnosticMessageChain",
        link: "/api/languages/typescript/DiagnosticMessageChain",
      },
      {
        text: "DiagnosticRelatedInformation",
        link: "/api/languages/typescript/DiagnosticRelatedInformation",
      },
      {
        text: "DiagnosticsOptions",
        link: "/api/languages/typescript/DiagnosticsOptions",
      },
      { text: "EmitOutput", link: "/api/languages/typescript/EmitOutput" },
      { text: "IExtraLib", link: "/api/languages/typescript/IExtraLib" },
      { text: "IExtraLibs", link: "/api/languages/typescript/IExtraLibs" },
      {
        text: "InlayHintsOptions",
        link: "/api/languages/typescript/InlayHintsOptions",
      },
      {
        text: "LanguageServiceDefaults",
        link: "/api/languages/typescript/LanguageServiceDefaults",
      },
      { text: "MapLike", link: "/api/languages/typescript/MapLike" },
      {
        text: "ModeConfiguration",
        link: "/api/languages/typescript/ModeConfiguration",
      },
      { text: "OutputFile", link: "/api/languages/typescript/OutputFile" },
      {
        text: "TypeScriptWorker",
        link: "/api/languages/typescript/TypeScriptWorker",
      },
      {
        text: "WorkerOptions",
        link: "/api/languages/typescript/WorkerOptions",
      },
      {
        text: "CompilerOptionsValue",
        link: "/api/languages/typescript/CompilerOptionsValue",
      },
      {
        text: "javascriptDefaults",
        link: "/api/languages/typescript/javascriptDefaults",
      },
      {
        text: "typescriptDefaults",
        link: "/api/languages/typescript/typescriptDefaults",
      },
      {
        text: "typescriptVersion",
        link: "/api/languages/typescript/typescriptVersion",
      },
      {
        text: "getJavaScriptWorker",
        link: "/api/languages/typescript/getJavaScriptWorker",
      },
      {
        text: "getTypeScriptWorker",
        link: "/api/languages/typescript/getTypeScriptWorker",
      },
    ],
  },
  {
    text: "CodeActionTriggerType",
    link: "/api/languages/CodeActionTriggerType",
  },
  {
    text: "CompletionItemInsertTextRule",
    link: "/api/languages/CompletionItemInsertTextRule",
  },
  { text: "CompletionItemKind", link: "/api/languages/CompletionItemKind" },
  { text: "CompletionItemTag", link: "/api/languages/CompletionItemTag" },
  {
    text: "CompletionTriggerKind",
    link: "/api/languages/CompletionTriggerKind",
  },
  {
    text: "DocumentHighlightKind",
    link: "/api/languages/DocumentHighlightKind",
  },
  { text: "HoverVerbosityAction", link: "/api/languages/HoverVerbosityAction" },
  { text: "IndentAction", link: "/api/languages/IndentAction" },
  { text: "InlayHintKind", link: "/api/languages/InlayHintKind" },
  {
    text: "InlineCompletionTriggerKind",
    link: "/api/languages/InlineCompletionTriggerKind",
  },
  {
    text: "InlineEditTriggerKind",
    link: "/api/languages/InlineEditTriggerKind",
  },
  { text: "NewSymbolNameTag", link: "/api/languages/NewSymbolNameTag" },
  {
    text: "NewSymbolNameTriggerKind",
    link: "/api/languages/NewSymbolNameTriggerKind",
  },
  {
    text: "PartialAcceptTriggerKind",
    link: "/api/languages/PartialAcceptTriggerKind",
  },
  {
    text: "SignatureHelpTriggerKind",
    link: "/api/languages/SignatureHelpTriggerKind",
  },
  { text: "SymbolKind", link: "/api/languages/SymbolKind" },
  { text: "SymbolTag", link: "/api/languages/SymbolTag" },
  { text: "FoldingRangeKind", link: "/api/languages/FoldingRangeKind" },
  {
    text: "SelectedSuggestionInfo",
    link: "/api/languages/SelectedSuggestionInfo",
  },
  { text: "CodeAction", link: "/api/languages/CodeAction" },
  { text: "CodeActionContext", link: "/api/languages/CodeActionContext" },
  { text: "CodeActionList", link: "/api/languages/CodeActionList" },
  { text: "CodeActionProvider", link: "/api/languages/CodeActionProvider" },
  {
    text: "CodeActionProviderMetadata",
    link: "/api/languages/CodeActionProviderMetadata",
  },
  { text: "CodeLens", link: "/api/languages/CodeLens" },
  { text: "CodeLensList", link: "/api/languages/CodeLensList" },
  { text: "CodeLensProvider", link: "/api/languages/CodeLensProvider" },
  { text: "Command", link: "/api/languages/Command" },
  {
    text: "CommentAuthorInformation",
    link: "/api/languages/CommentAuthorInformation",
  },
  { text: "CommentRule", link: "/api/languages/CommentRule" },
  { text: "CompletionContext", link: "/api/languages/CompletionContext" },
  { text: "CompletionItem", link: "/api/languages/CompletionItem" },
  { text: "CompletionItemLabel", link: "/api/languages/CompletionItemLabel" },
  {
    text: "CompletionItemProvider",
    link: "/api/languages/CompletionItemProvider",
  },
  { text: "CompletionItemRanges", link: "/api/languages/CompletionItemRanges" },
  { text: "CompletionList", link: "/api/languages/CompletionList" },
  { text: "DeclarationProvider", link: "/api/languages/DeclarationProvider" },
  { text: "DefinitionProvider", link: "/api/languages/DefinitionProvider" },
  {
    text: "DocumentColorProvider",
    link: "/api/languages/DocumentColorProvider",
  },
  { text: "DocumentContextItem", link: "/api/languages/DocumentContextItem" },
  {
    text: "DocumentFormattingEditProvider",
    link: "/api/languages/DocumentFormattingEditProvider",
  },
  { text: "DocumentHighlight", link: "/api/languages/DocumentHighlight" },
  {
    text: "DocumentHighlightProvider",
    link: "/api/languages/DocumentHighlightProvider",
  },
  {
    text: "DocumentRangeFormattingEditProvider",
    link: "/api/languages/DocumentRangeFormattingEditProvider",
  },
  {
    text: "DocumentRangeSemanticTokensProvider",
    link: "/api/languages/DocumentRangeSemanticTokensProvider",
  },
  {
    text: "DocumentSemanticTokensProvider",
    link: "/api/languages/DocumentSemanticTokensProvider",
  },
  { text: "DocumentSymbol", link: "/api/languages/DocumentSymbol" },
  {
    text: "DocumentSymbolProvider",
    link: "/api/languages/DocumentSymbolProvider",
  },
  {
    text: "EncodedTokensProvider",
    link: "/api/languages/EncodedTokensProvider",
  },
  { text: "EnterAction", link: "/api/languages/EnterAction" },
  { text: "FoldingContext", link: "/api/languages/FoldingContext" },
  { text: "FoldingMarkers", link: "/api/languages/FoldingMarkers" },
  { text: "FoldingRange", link: "/api/languages/FoldingRange" },
  { text: "FoldingRangeProvider", link: "/api/languages/FoldingRangeProvider" },
  { text: "FoldingRules", link: "/api/languages/FoldingRules" },
  { text: "FormattingOptions", link: "/api/languages/FormattingOptions" },
  { text: "Hover", link: "/api/languages/Hover" },
  { text: "HoverContext", link: "/api/languages/HoverContext" },
  { text: "HoverProvider", link: "/api/languages/HoverProvider" },
  {
    text: "HoverVerbosityRequest",
    link: "/api/languages/HoverVerbosityRequest",
  },
  { text: "IAutoClosingPair", link: "/api/languages/IAutoClosingPair" },
  {
    text: "IAutoClosingPairConditional",
    link: "/api/languages/IAutoClosingPairConditional",
  },
  { text: "IColor", link: "/api/languages/IColor" },
  { text: "IColorInformation", link: "/api/languages/IColorInformation" },
  { text: "IColorPresentation", link: "/api/languages/IColorPresentation" },
  { text: "IDocComment", link: "/api/languages/IDocComment" },
  { text: "IEncodedLineTokens", link: "/api/languages/IEncodedLineTokens" },
  {
    text: "IExpandedMonarchLanguageAction",
    link: "/api/languages/IExpandedMonarchLanguageAction",
  },
  {
    text: "IExpandedMonarchLanguageRule",
    link: "/api/languages/IExpandedMonarchLanguageRule",
  },
  { text: "IInlineEdit", link: "/api/languages/IInlineEdit" },
  { text: "IInlineEditContext", link: "/api/languages/IInlineEditContext" },
  {
    text: "ILanguageExtensionPoint",
    link: "/api/languages/ILanguageExtensionPoint",
  },
  { text: "ILineTokens", link: "/api/languages/ILineTokens" },
  { text: "ILink", link: "/api/languages/ILink" },
  { text: "ILinksList", link: "/api/languages/ILinksList" },
  { text: "IMonarchLanguage", link: "/api/languages/IMonarchLanguage" },
  {
    text: "IMonarchLanguageBracket",
    link: "/api/languages/IMonarchLanguageBracket",
  },
  { text: "IRelativePattern", link: "/api/languages/IRelativePattern" },
  { text: "IState", link: "/api/languages/IState" },
  { text: "IToken", link: "/api/languages/IToken" },
  { text: "IWorkspaceFileEdit", link: "/api/languages/IWorkspaceFileEdit" },
  { text: "IWorkspaceTextEdit", link: "/api/languages/IWorkspaceTextEdit" },
  {
    text: "ImplementationProvider",
    link: "/api/languages/ImplementationProvider",
  },
  { text: "IndentationRule", link: "/api/languages/IndentationRule" },
  { text: "InlayHint", link: "/api/languages/InlayHint" },
  { text: "InlayHintLabelPart", link: "/api/languages/InlayHintLabelPart" },
  { text: "InlayHintList", link: "/api/languages/InlayHintList" },
  { text: "InlayHintsProvider", link: "/api/languages/InlayHintsProvider" },
  { text: "InlineCompletion", link: "/api/languages/InlineCompletion" },
  {
    text: "InlineCompletionContext",
    link: "/api/languages/InlineCompletionContext",
  },
  { text: "InlineCompletions", link: "/api/languages/InlineCompletions" },
  {
    text: "InlineCompletionsProvider",
    link: "/api/languages/InlineCompletionsProvider",
  },
  { text: "InlineEditProvider", link: "/api/languages/InlineEditProvider" },
  {
    text: "LanguageConfiguration",
    link: "/api/languages/LanguageConfiguration",
  },
  { text: "LanguageFilter", link: "/api/languages/LanguageFilter" },
  { text: "LinkProvider", link: "/api/languages/LinkProvider" },
  {
    text: "LinkedEditingRangeProvider",
    link: "/api/languages/LinkedEditingRangeProvider",
  },
  { text: "LinkedEditingRanges", link: "/api/languages/LinkedEditingRanges" },
  { text: "Location", link: "/api/languages/Location" },
  { text: "LocationLink", link: "/api/languages/LocationLink" },
  { text: "MappedEditsContext", link: "/api/languages/MappedEditsContext" },
  { text: "MappedEditsProvider", link: "/api/languages/MappedEditsProvider" },
  {
    text: "MultiDocumentHighlight",
    link: "/api/languages/MultiDocumentHighlight",
  },
  {
    text: "MultiDocumentHighlightProvider",
    link: "/api/languages/MultiDocumentHighlightProvider",
  },
  { text: "NewSymbolName", link: "/api/languages/NewSymbolName" },
  {
    text: "NewSymbolNamesProvider",
    link: "/api/languages/NewSymbolNamesProvider",
  },
  { text: "OnEnterRule", link: "/api/languages/OnEnterRule" },
  {
    text: "OnTypeFormattingEditProvider",
    link: "/api/languages/OnTypeFormattingEditProvider",
  },
  { text: "ParameterInformation", link: "/api/languages/ParameterInformation" },
  { text: "PartialAcceptInfo", link: "/api/languages/PartialAcceptInfo" },
  { text: "PendingCommentThread", link: "/api/languages/PendingCommentThread" },
  { text: "ReferenceContext", link: "/api/languages/ReferenceContext" },
  { text: "ReferenceProvider", link: "/api/languages/ReferenceProvider" },
  { text: "Rejection", link: "/api/languages/Rejection" },
  { text: "RenameLocation", link: "/api/languages/RenameLocation" },
  { text: "RenameProvider", link: "/api/languages/RenameProvider" },
  { text: "SelectionRange", link: "/api/languages/SelectionRange" },
  {
    text: "SelectionRangeProvider",
    link: "/api/languages/SelectionRangeProvider",
  },
  { text: "SemanticTokens", link: "/api/languages/SemanticTokens" },
  { text: "SemanticTokensEdit", link: "/api/languages/SemanticTokensEdit" },
  { text: "SemanticTokensEdits", link: "/api/languages/SemanticTokensEdits" },
  { text: "SemanticTokensLegend", link: "/api/languages/SemanticTokensLegend" },
  { text: "SignatureHelp", link: "/api/languages/SignatureHelp" },
  { text: "SignatureHelpContext", link: "/api/languages/SignatureHelpContext" },
  {
    text: "SignatureHelpProvider",
    link: "/api/languages/SignatureHelpProvider",
  },
  { text: "SignatureHelpResult", link: "/api/languages/SignatureHelpResult" },
  { text: "SignatureInformation", link: "/api/languages/SignatureInformation" },
  { text: "TextEdit", link: "/api/languages/TextEdit" },
  { text: "TokensProvider", link: "/api/languages/TokensProvider" },
  {
    text: "TokensProviderFactory",
    link: "/api/languages/TokensProviderFactory",
  },
  {
    text: "TypeDefinitionProvider",
    link: "/api/languages/TypeDefinitionProvider",
  },
  { text: "WorkspaceEdit", link: "/api/languages/WorkspaceEdit" },
  {
    text: "WorkspaceEditMetadata",
    link: "/api/languages/WorkspaceEditMetadata",
  },
  {
    text: "WorkspaceFileEditOptions",
    link: "/api/languages/WorkspaceFileEditOptions",
  },
  { text: "CharacterPair", link: "/api/languages/CharacterPair" },
  { text: "Definition", link: "/api/languages/Definition" },
  {
    text: "IMonarchLanguageAction",
    link: "/api/languages/IMonarchLanguageAction",
  },
  { text: "IMonarchLanguageRule", link: "/api/languages/IMonarchLanguageRule" },
  {
    text: "IShortMonarchLanguageAction",
    link: "/api/languages/IShortMonarchLanguageAction",
  },
  {
    text: "IShortMonarchLanguageRule1",
    link: "/api/languages/IShortMonarchLanguageRule1",
  },
  {
    text: "IShortMonarchLanguageRule2",
    link: "/api/languages/IShortMonarchLanguageRule2",
  },
  {
    text: "InlineCompletionProviderGroupId",
    link: "/api/languages/InlineCompletionProviderGroupId",
  },
  { text: "LanguageSelector", link: "/api/languages/LanguageSelector" },
  { text: "ProviderResult", link: "/api/languages/ProviderResult" },
  { text: "getEncodedLanguageId", link: "/api/languages/getEncodedLanguageId" },
  { text: "getLanguages", link: "/api/languages/getLanguages" },
  { text: "onLanguage", link: "/api/languages/onLanguage" },
  {
    text: "onLanguageEncountered",
    link: "/api/languages/onLanguageEncountered",
  },
  { text: "register", link: "/api/languages/register" },
  {
    text: "registerCodeActionProvider",
    link: "/api/languages/registerCodeActionProvider",
  },
  {
    text: "registerCodeLensProvider",
    link: "/api/languages/registerCodeLensProvider",
  },
  {
    text: "registerColorProvider",
    link: "/api/languages/registerColorProvider",
  },
  {
    text: "registerCompletionItemProvider",
    link: "/api/languages/registerCompletionItemProvider",
  },
  {
    text: "registerDeclarationProvider",
    link: "/api/languages/registerDeclarationProvider",
  },
  {
    text: "registerDefinitionProvider",
    link: "/api/languages/registerDefinitionProvider",
  },
  {
    text: "registerDocumentFormattingEditProvider",
    link: "/api/languages/registerDocumentFormattingEditProvider",
  },
  {
    text: "registerDocumentHighlightProvider",
    link: "/api/languages/registerDocumentHighlightProvider",
  },
  {
    text: "registerDocumentRangeFormattingEditProvider",
    link: "/api/languages/registerDocumentRangeFormattingEditProvider",
  },
  {
    text: "registerDocumentRangeSemanticTokensProvider",
    link: "/api/languages/registerDocumentRangeSemanticTokensProvider",
  },
  {
    text: "registerDocumentSemanticTokensProvider",
    link: "/api/languages/registerDocumentSemanticTokensProvider",
  },
  {
    text: "registerDocumentSymbolProvider",
    link: "/api/languages/registerDocumentSymbolProvider",
  },
  {
    text: "registerFoldingRangeProvider",
    link: "/api/languages/registerFoldingRangeProvider",
  },
  {
    text: "registerHoverProvider",
    link: "/api/languages/registerHoverProvider",
  },
  {
    text: "registerImplementationProvider",
    link: "/api/languages/registerImplementationProvider",
  },
  {
    text: "registerInlayHintsProvider",
    link: "/api/languages/registerInlayHintsProvider",
  },
  {
    text: "registerInlineCompletionsProvider",
    link: "/api/languages/registerInlineCompletionsProvider",
  },
  {
    text: "registerInlineEditProvider",
    link: "/api/languages/registerInlineEditProvider",
  },
  { text: "registerLinkProvider", link: "/api/languages/registerLinkProvider" },
  {
    text: "registerLinkedEditingRangeProvider",
    link: "/api/languages/registerLinkedEditingRangeProvider",
  },
  {
    text: "registerNewSymbolNameProvider",
    link: "/api/languages/registerNewSymbolNameProvider",
  },
  {
    text: "registerOnTypeFormattingEditProvider",
    link: "/api/languages/registerOnTypeFormattingEditProvider",
  },
  {
    text: "registerReferenceProvider",
    link: "/api/languages/registerReferenceProvider",
  },
  {
    text: "registerRenameProvider",
    link: "/api/languages/registerRenameProvider",
  },
  {
    text: "registerSelectionRangeProvider",
    link: "/api/languages/registerSelectionRangeProvider",
  },
  {
    text: "registerSignatureHelpProvider",
    link: "/api/languages/registerSignatureHelpProvider",
  },
  {
    text: "registerTokensProviderFactory",
    link: "/api/languages/registerTokensProviderFactory",
  },
  {
    text: "registerTypeDefinitionProvider",
    link: "/api/languages/registerTypeDefinitionProvider",
  },
  { text: "setColorMap", link: "/api/languages/setColorMap" },
  {
    text: "setLanguageConfiguration",
    link: "/api/languages/setLanguageConfiguration",
  },
  {
    text: "setMonarchTokensProvider",
    link: "/api/languages/setMonarchTokensProvider",
  },
  { text: "setTokensProvider", link: "/api/languages/setTokensProvider" },
];

// worker 子目录结构
const workerItems = [
  {
    text: "IMirrorModel",
    link: "/api/worker/IMirrorModel",
  },
  { text: "IMirrorTextModel", link: "/api/worker/IMirrorTextModel" },
  { text: "IWorkerContext", link: "/api/worker/IWorkerContext" },
];

// 根目录剩余结构
const rootOtherItems = [
  { text: map.E + " KeyCode", link: "/api/KeyCode" },
  { text: map.E + " MarkerSeverity", link: "/api/MarkerSeverity" },
  { text: map.E + " MarkerTag", link: "/api/MarkerTag" },
  { text: map.E + " SelectionDirection", link: "/api/SelectionDirection" },
  {
    text: map.C + " CancellationTokenSource",
    link: "/api/CancellationTokenSource",
  },
  { text: map.C + " Emitter", link: "/api/Emitter" },
  { text: map.C + " KeyMod", link: "/api/KeyMod" },
  { text: map.C + " Position", link: "/api/Position" },
  { text: map.C + " Range", link: "/api/Range" },
  { text: map.C + " Selection", link: "/api/Selection" },
  { text: map.C + " Token", link: "/api/Token" },
  { text: map.C + " Uri", link: "/api/Uri" },
  {
    text: map.I + " CancellationToken",
    link: "/api/CancellationToken",
  },
  { text: map.I + " Environment", link: "/api/Environment" },
  { text: map.I + " IDisposable", link: "/api/IDisposable" },
  { text: map.I + " IEvent", link: "/api/IEvent" },
  { text: map.I + " IKeyboardEvent", link: "/api/IKeyboardEvent" },
  {
    text: map.I + " IMarkdownString",
    link: "/api/IMarkdownString",
  },
  { text: map.I + " IMouseEvent", link: "/api/IMouseEvent" },
  { text: map.I + " IPosition", link: "/api/IPosition" },
  { text: map.I + " IRange", link: "/api/IRange" },
  { text: map.I + " IScrollEvent", link: "/api/IScrollEvent" },
  { text: map.I + " ISelection", link: "/api/ISelection" },
  {
    text: map.I + " ITrustedTypePolicy",
    link: "/api/ITrustedTypePolicy",
  },
  {
    text: map.I + " ITrustedTypePolicyOptions",
    link: "/api/ITrustedTypePolicyOptions",
  },
  {
    text: map.I + " MarkdownStringTrustedOptions",
    link: "/api/MarkdownStringTrustedOptions",
  },
  { text: map.I + " UriComponents", link: "/api/UriComponents" },
  { text: map.I + " Window", link: "/api/Window" },
  { text: map.T + " Thenable", link: "/api/Thenable" },
];

// 根目录结构
const rootItems = [
  {
    text: map.N + " editor",
    link: "/api/editor",
    items: editorItems,
    collapsed: true,
  },
  {
    text: map.N + " languages",
    link: "/api/languages",
    items: languagesItems,
    collapsed: true,
  },
  {
    text: map.N + " worker",
    link: "/api/worker",
    items: workerItems,
    collapsed: true,
  },
  ...rootOtherItems,
];

export const sidebar = [
  {
    items: [
      {
        text: "🔎 Monaco Editor API",
        link: "/api",
        collapsed: false,
        items: rootItems,
      },
    ],
  },
];
