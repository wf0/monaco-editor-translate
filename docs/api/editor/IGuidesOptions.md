# IGuidesOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IGuidesOptions.html
:::

```ts
interface IGuidesOptions {
    bracketPairs?: boolean | "active";
    bracketPairsHorizontal?: boolean | "active";
    highlightActiveBracketPair?: boolean;
    highlightActiveIndentation?: boolean | "always";
    indentation?: boolean;
}
```

## bracketPairs
- 类型：`boolean | "active"`
- 描述：启用支架对辅助线的渲染。默认为false。

## bracketPairsHorizontal
- 类型：`boolean | "active"`
- 描述：启用水平对齐辅助线的渲染。默认为 active

## highlightActiveBracketPair
- 类型：`boolean`
- 描述：启用活动括号对的高亮显示。默认为true。

## highlightActiveIndentation
- 类型：`boolean | "always"`
- 描述：启用活动缩进辅助线的高亮显示。默认为true。

## indentation
- 类型：`boolean`
- 描述：启用缩进辅助线的呈现。默认为true。
