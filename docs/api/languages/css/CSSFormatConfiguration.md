# CSSFormatConfiguration

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.css.CSSFormatConfiguration.html
:::

```ts
interface CSSFormatConfiguration {
    braceStyle?: "expand" | "collapse";
    maxPreserveNewLines?: number;
    newlineBetweenRules?: boolean;
    newlineBetweenSelectors?: boolean;
    preserveNewLines?: boolean;
    spaceAroundSelectorSeparator?: boolean;
}
```

## braceStyle
- 类型: `expand` | `collapse`
- 描述：将大括号放在与规则相同的行上（折叠），或将大括号放置在自己的行上，Allman/ANSI样式（展开）。默认折叠

## maxPreserveNewLines
- 类型: `number`
- 描述：一个区块中要保留的最大换行数。默认值：无限制

## newlineBetweenRules
- 类型: `boolean`
- 描述：在每个css规则后添加一行：默认值：true

## newlineBetweenSelectors
- 类型: `boolean`
- 描述：用换行符分隔选择器（例如“a，\nbr”或“a，br”）：默认值：true

## preserveNewLines
- 类型: `boolean`
- 描述：是否应保留元素之前的现有换行符。默认值：true

## spaceAroundSelectorSeparator
- 类型: `boolean`
- 描述：确保选择器分隔符周围有空格：'>'、'+'、'~'（例如“a>b”->“a>b”）：默认值：false