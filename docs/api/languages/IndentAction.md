# IndentAction
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#enums/languages.IndentAction.html
:::

描述按Enter键时如何处理缩进。

## Indent
- 值：`1`
- 描述：插入新行并缩进一次（相对于前一行的缩进）。

## IndentOutdent
- 值：`2`
- 描述：插入两行新行：
  - 第一个缩进的将保持光标
  - 第二个在相同的缩进级别

## None
- 值：`0`
- 描述：插入新行并复制前一行的缩进。

## Outdent
- 值：`3`
- 描述：插入新行并向外缩进一次（相对于上一行的缩进）。
