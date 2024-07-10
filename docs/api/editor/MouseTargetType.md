# MouseTargetType

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#enums/editor.MouseTargetType.html
:::

## 快捷链接
<script setup>
const data = [
  { icon: "P", title: "CONTENT_EMPTY",link:"CONTENT-EMPTY" },
  { icon: "P", title: "CONTENT_TEXT",link:"CONTENT-TEXT" },
  { icon: "P", title: "CONTENT_VIEW_ZONE",link:"CONTENT-VIEW_ZONE" },
  { icon: "P", title: "CONTENT_WIDGET",link:"CONTENT-WIDGET" },
  { icon: "P", title: "GUTTER_GLYPH_MARGIN",link:"GUTTER-GLYPH-MARGIN" },
  { icon: "P", title: "GUTTER_LINE_DECORATIONS",link:"GUTTER-LINE-DECORATIONS" },
  { icon: "P", title: "GUTTER_LINE_NUMBERS",link:"GUTTER-LINE-NUMBERS" },
  { icon: "P", title: "GUTTER_VIEW_ZONE",link:"GUTTER-VIEW-ZONE" },
  { icon: "P", title: "OUTSIDE_EDITOR",link:"OUTSIDE-EDITOR" },
  { icon: "P", title: "OVERLAY_WIDGET",link:"OVERLAY-WIDGET" },
  { icon: "P", title: "OVERVIEW_RULER",link:"OVERVIEW-RULER" },
  { icon: "P", title: "SCROLLBAR",link:"SCROLLBAR" },
  { icon: "P", title: "TEXTAREA",link:"TEXTAREA" },
  { icon: "P", title: "UNKNOWN",link:"UNKNOWN" },
];

</script>

<dataItems :data="data" />


## CONTENT_EMPTY
- 值：`7`
- 描述：鼠标位于内容中的空白处（例如，在行文本之后或最后一行下方）

## CONTENT_TEXT
- 值：`6`
- 描述：鼠标位于内容中的文本上方。

## CONTENT_VIEW_ZONE
- 值：`8`
- 描述：鼠标位于内容中的视图区上方。

## CONTENT_WIDGET
- 值：`9`
- 描述：鼠标位于内容中的小部件上方。

## GUTTER_GLYPH_MARGIN
- 值：`2`
- 描述：鼠标位于字形边距的顶部

## GUTTER_LINE_DECORATIONS
- 值：`4`
- 描述：鼠标位于行装饰的顶部

## GUTTER_LINE_NUMBERS
- 值：`3`
- 描述：鼠标位于行号的顶部

## GUTTER_VIEW_ZONE
- 值：`5`
- 描述：鼠标位于视图区域旁边空白处的顶部。

## OUTSIDE_EDITOR
- 值：`13`
- 描述：鼠标位于编辑器外部。

## OVERLAY_WIDGET
- 值：`12`
- 描述：鼠标位于覆盖小部件的顶部。

## OVERVIEW_RULER
- 值：`10`
- 描述：鼠标位于概览尺的顶部。

## SCROLLBAR
- 值：`11`
- 描述：鼠标位于滚动条的顶部。

## TEXTAREA
- 值：`1`
- 描述：鼠标位于文本区域的顶部。

## UNKNOWN
- 值：`0`
- 描述：鼠标位置未知。
