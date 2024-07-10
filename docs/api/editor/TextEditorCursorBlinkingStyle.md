# TextEditorCursorBlinkingStyle

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#enums/editor.TextEditorCursorBlinkingStyle.html
:::

应用在其中渲染编辑器的光标的动画类型。

## 快捷链接
<script setup>
    const data = [
  { icon: "P", link: "Blink" },
  { icon: "P", link: "Expand" },
  { icon: "P", link: "Hidden" },
  { icon: "P", link: "Phase" },
  { icon: "P", link: "Smooth" },
  { icon: "P", link: "Solid" },
];
</script>
<dataItems :data="data" />

## Blink
- 值：`1`
- 描述：闪烁

## Expand
- 值：`4`
- 描述：在y轴上展开折叠动画

## Hidden
- 值：`0`
- 描述：隐藏

## Phase
- 值：`3`
- 描述：闪烁，填充状态延长，褪色平稳

## Smooth
- 值：`2`
- 描述：闪烁，平滑褪色

## Solid
- 值：`5`
- 描述：禁止闪烁
