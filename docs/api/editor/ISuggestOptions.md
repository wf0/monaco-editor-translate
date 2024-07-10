# ISuggestOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ISuggestOptions.html
:::

编辑器建议小部件的配置选项

```ts
interface ISuggestOptions {
    filterGraceful?: boolean;
    insertMode?: "insert" | "replace";
    localityBonus?: boolean;
    matchOnWordStartOnly?: boolean;
    preview?: boolean;
    previewMode?: "prefix" | "subword" | "subwordSmart";
    selectionMode?: "always" | "never" | "whenTriggerCharacter" | "whenQuickSuggestion";
    shareSuggestSelections?: boolean;
    showClasses?: boolean;
    showColors?: boolean;
    showConstants?: boolean;
    showConstructors?: boolean;
    showDeprecated?: boolean;
    showEnumMembers?: boolean;
    showEnums?: boolean;
    showEvents?: boolean;
    showFields?: boolean;
    showFiles?: boolean;
    showFolders?: boolean;
    showFunctions?: boolean;
    showIcons?: boolean;
    showInlineDetails?: boolean;
    showInterfaces?: boolean;
    showIssues?: boolean;
    showKeywords?: boolean;
    showMethods?: boolean;
    showModules?: boolean;
    showOperators?: boolean;
    showProperties?: boolean;
    showReferences?: boolean;
    showSnippets?: boolean;
    showStatusBar?: boolean;
    showStructs?: boolean;
    showTypeParameters?: boolean;
    showUnits?: boolean;
    showUsers?: boolean;
    showValues?: boolean;
    showVariables?: boolean;
    showWords?: boolean;
    snippetsPreventQuickSuggestions?: boolean;
}
```

## 快捷链接
<script setup>
const data = [
  { icon: "P", link: "filterGraceful" },
  { icon: "P", link: "insertMode" },
  { icon: "P", link: "localityBonus" },
  { icon: "P", link: "matchOnWordStartOnly" },
  { icon: "P", link: "preview" },
  { icon: "P", link: "previewMode" },
  { icon: "P", link: "selectionMode" },
  { icon: "P", link: "shareSuggestSelections" },
  { icon: "P", link: "showClasses" },
  { icon: "P", link: "showColors" },
  { icon: "P", link: "showConstants" },
  { icon: "P", link: "showConstructors" },
  { icon: "P", link: "showDeprecated" },
  { icon: "P", link: "showEnumMembers" },
  { icon: "P", link: "showEnums" },
  { icon: "P", link: "showEvents" },
  { icon: "P", link: "showFields" },
  { icon: "P", link: "showFiles" },
  { icon: "P", link: "showFolders" },
  { icon: "P", link: "showFunctions" },
  { icon: "P", link: "showIcons" },
  { icon: "P", link: "showInlineDetails" },
  { icon: "P", link: "showInterfaces" },
  { icon: "P", link: "showIssues" },
  { icon: "P", link: "showKeywords" },
  { icon: "P", link: "showMethods" },
  { icon: "P", link: "showModules" },
  { icon: "P", link: "showOperators" },
  { icon: "P", link: "showProperties" },
  { icon: "P", link: "showReferences" },
  { icon: "P", link: "showSnippets" },
  { icon: "P", link: "showStatusBar" },
  { icon: "P", link: "showStructs" },
  { icon: "P", link: "showTypeParameters" },
  { icon: "P", link: "showUnits" },
  { icon: "P", link: "showUsers" },
  { icon: "P", link: "showValues" },
  { icon: "P", link: "showVariables" },
  { icon: "P", link: "showWords" },
  { icon: "P", link: "snippetsPreventQuickSuggestions" },
];

</script>
<dataItems :data="data" />

## filterGraceful
- 类型: `boolean`
- 描述：启用优雅的匹配。默认为true。

## insertMode
- 类型: `"insert" | "replace"`
- 描述：插入模式。默认为"insert"。

## localityBonus
- 类型: `boolean`
- 描述：喜欢显示在光标附近的单词。

## matchOnWordStartOnly
- 类型: `boolean`
- 描述：控制建议是否允许在单词中间而不是仅在开头进行匹配

## preview
- 类型: `boolean`
- 描述：启用预览。

## previewMode
- 类型: `"prefix" | "subword" | "subwordSmart"`
- 描述：预览模式。

## selectionMode
- 类型: `"always" | "never" | "whenTriggerCharacter" | "whenQuickSuggestion"`
- 描述：选择模式。

## shareSuggestSelections
- 类型: `boolean`
- 描述：共享建议选择。

## showClasses
- 类型: `boolean`
- 描述：显示类。

## showColors
- 类型: `boolean`
- 描述：显示颜色。

## showConstants
- 类型: `boolean`
- 描述：显示常量。

## showConstructors
- 类型: `boolean`
- 描述：显示构造函数。

## showDeprecated
- 类型: `boolean`
- 描述：显示已弃用的。

## showEnumMembers
- 类型: `boolean`
- 描述：显示枚举成员。

## showEnums
- 类型: `boolean`
- 描述：显示枚举。

## showEvents
- 类型: `boolean`
- 描述：显示事件。

## showFields
- 类型: `boolean`
- 描述：显示字段。

## showFiles
- 类型: `boolean`
- 描述：显示文件。

## showFolders
- 类型: `boolean`
- 描述：显示文件夹。

## showFunctions
- 类型: `boolean`
- 描述：显示函数。

## showIcons
- 类型: `boolean`
- 描述：显示图标。

## showInlineDetails
- 类型: `boolean`
- 描述：显示内联详细信息。

## showInterfaces
- 类型: `boolean`
- 描述：显示接口。

## showIssues
- 类型: `boolean`
- 描述：显示问题。

## showKeywords
- 类型: `boolean`
- 描述：显示关键字。

## showMethods
- 类型: `boolean`
- 描述：显示方法。

## showModules
- 类型: `boolean`
- 描述：显示模块。

## showOperators
- 类型: `boolean`
- 描述：显示操作符。

## showProperties
- 类型: `boolean`
- 描述：显示属性。

## showReferences
- 类型: `boolean`
- 描述：显示参考。

## showSnippets
- 类型: `boolean`
- 描述：显示片段。

## showStatusBar
- 类型: `boolean`
- 描述：显示状态栏。

## showStructs
- 类型: `boolean`
- 描述：显示结构。

## showTypeParameters
- 类型: `boolean`
- 描述：显示类型参数。

## showUnits
- 类型: `boolean`
- 描述：显示单位。

## showUsers
- 类型: `boolean`
- 描述：显示用户。

## showValues
- 类型: `boolean`
- 描述：显示值。

## showVariables
- 类型: `boolean`
- 描述：显示变量。

## showWords
- 类型: `boolean`
- 描述：显示单词。

## snippetsPreventQuickSuggestions
- 类型: `boolean`
- 描述：片段阻止快速建议。
