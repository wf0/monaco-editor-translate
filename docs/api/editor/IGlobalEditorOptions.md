# IGlobalEditorOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IGlobalEditorOptions.html
:::


适用于所有编辑器的选项。


```ts
interface IGlobalEditorOptions {
    autoDetectHighContrast?: boolean;
    detectIndentation?: boolean;
    insertSpaces?: boolean;
    largeFileOptimizations?: boolean;
    maxTokenizationLineLength?: number;
    semanticHighlighting.enabled?: boolean | "configuredByTheme";
    stablePeek?: boolean;
    tabSize?: number;
    theme?: string;
    trimAutoWhitespace?: boolean;
    wordBasedSuggestions?: "off" | "currentDocument" | "matchingDocuments" | "allDocuments";
    wordBasedSuggestionsOnlySameLanguage?: boolean;
}
```

## autoDetectHighContrast
- 类型: `boolean`
- 描述: 自动检测高对比度主题
## detectIndentation
- 类型: `boolean`
- 描述: 检测缩进
## insertSpaces
- 类型: `boolean`
- 描述: 插入空格
## largeFileOptimizations
- 类型: `boolean`
- 描述: 优化大文件
## maxTokenizationLineLength
- 类型: `number`
- 描述: 最大化token化行长度
## semanticHighlighting.enabled
- 类型: `boolean` | `"configuredByTheme"`
- 描述: 语义高亮
## stablePeek
- 类型: `boolean`
- 描述: 稳定peek
## tabSize
- 类型: `number`
- 描述: 缩进大小
## theme
- 类型: `string`
- 描述: 主题
## trimAutoWhitespace
- 类型: `boolean` | `"configuredByTheme"`
- 描述: 删除自动空格
## wordBasedSuggestions
- 类型: `"off" | "currentDocument" | "matchingDocuments" | "allDocuments"`
- 描述: 词条建议
## wordBasedSuggestionsOnlySameLanguage
- 类型: `boolean`
- 描述: 词条建议