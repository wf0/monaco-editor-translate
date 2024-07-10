# IDiffEditorBaseOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IDiffEditorBaseOptions.html
:::

```ts
interface IDiffEditorBaseOptions {
    accessibilityVerbose?: boolean;
    diffAlgorithm?: "advanced" | "legacy";
    diffCodeLens?: boolean;
    diffWordWrap?: "off" | "on" | "inherit";
    enableSplitViewResizing?: boolean;
    experimental?: {
        showEmptyDecorations?: boolean;
        showMoves?: boolean;
    };
    hideUnchangedRegions?: {
        contextLineCount?: number;
        enabled?: boolean;
        minimumLineCount?: number;
        revealLineCount?: number;
    };
    ignoreTrimWhitespace?: boolean;
    isInEmbeddedEditor?: boolean;
    maxComputationTime?: number;
    maxFileSize?: number;
    onlyShowAccessibleDiffViewer?: boolean;
    originalEditable?: boolean;
    renderGutterMenu?: boolean;
    renderIndicators?: boolean;
    renderMarginRevertIcon?: boolean;
    renderOverviewRuler?: boolean;
    renderSideBySide?: boolean;
    renderSideBySideInlineBreakpoint?: number;
    splitViewDefaultRatio?: number;
    useInlineViewWhenSpaceIsLimited?: boolean;
}
```

## 快捷链接
<script setup>
const data = [
  { icon: "P", link: "accessibilityVerbose" },
  { icon: "P", link: "diffAlgorithm" },
  { icon: "P", link: "diffCodeLens" },
  { icon: "P", link: "diffWordWrap" },
  { icon: "P", link: "enableSplitViewResizing" },
  { icon: "P", link: "experimental" },
  { icon: "P", link: "hideUnchangedRegions" },
  { icon: "P", link: "ignoreTrimWhitespace" },
  { icon: "P", link: "isInEmbeddedEditor" },
  { icon: "P", link: "maxComputationTime" },
  { icon: "P", link: "maxFileSize" },
  { icon: "P", link: "onlyShowAccessibleDiffViewer" },
  { icon: "P", link: "originalEditable" },
  { icon: "P", link: "renderGutterMenu" },
  { icon: "P", link: "renderIndicators" },
  { icon: "P", link: "renderMarginRevertIcon" },
  { icon: "P", link: "renderOverviewRuler" },
  { icon: "P", link: "renderSideBySide" },
  { icon: "P", link: "renderSideBySideInlineBreakpoint" },
  { icon: "P", link: "splitViewDefaultRatio" },
  { icon: "P", link: "useInlineViewWhenSpaceIsLimited" },
];

</script>
<dataItems :data="data"/>


## accessibilityVerbose
- 类型: `boolean`
- 描述: diff编辑器aria标签是否应该冗长。


## diffAlgorithm
- 类型: `"advanced" | "legacy"`
- 描述: diff算法


## diffCodeLens
- 类型: `boolean`
- 描述: 是否显示diff编辑器代码 lens


## diffWordWrap
- 类型: `"off" | "on" | "inherit"`
- 描述: diff编辑器是否应该强制显示单词换行


## enableSplitViewResizing
- 类型: `boolean`
- 描述: 是否允许diff编辑器调整视图


## experimental
- 类型: `{ showEmptyDecorations?: boolean; showMoves?: boolean; }`


## hideUnchangedRegions
- 类型: `{ contextLineCount?: number; enabled?: boolean; minimumLineCount?: number; revealLineCount?: number; }`


## ignoreTrimWhitespace
- 类型: `boolean`
- 描述: diff编辑器是否应该忽略trimWhitespace


## isInEmbeddedEditor
- 类型: `boolean`
- 描述: 是否在diff编辑器中显示


## maxComputationTime
- 类型: `number`
- 描述: diff编辑器是否应该在超过最大计算时间后停止计算，默认 5000 毫秒


## maxFileSize
- 类型: `number`
- 描述: diff编辑器是否应该在超过最大文件大小后停止计算，默认 50MB


## onlyShowAccessibleDiffViewer
- 类型: `boolean`
- 描述: 是否应该仅在键盘导航模式下显示diff编辑器


## originalEditable
- 类型: `boolean`
- 描述: 是否应该显示原始编辑器


## renderGutterMenu
- 类型: `boolean`
- 描述: 是否应该显示diff编辑器gutter菜单


## renderIndicators
- 类型: `boolean`
- 描述: 是否应该显示diff编辑器指示器


## renderMarginRevertIcon
- 类型: `boolean`
- 描述: 在图示符边距中显示图标以恢复更改。默认为true。


## renderOverviewRuler
- 类型: `boolean`
- 描述: 是diff编辑器应该呈现概览标尺，默认值为true


## renderSideBySide
- 类型: `boolean`
- 描述: 在两个并排的编辑器中呈现差异。默认为true。


## renderSideBySideInlineBreakpoint
- 类型: `number`
- 描述: 如果启用renderSideBySide，设置useInlineViewWhenSpaceIsLimited，并且diff编辑器的宽度小于renderSideBySideInlineBreakpoint，则使用内联视图。


## splitViewDefaultRatio
- 类型: `number`
- 描述: diff编辑器默认视图比例


## useInlineViewWhenSpaceIsLimited
- 类型: `boolean`
- 描述: diff编辑器是否应该使用内联视图

