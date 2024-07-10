# IndentationRule

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IndentationRule.html
:::

描述一种语言的缩进规则。

```ts
interface IndentationRule {
    decreaseIndentPattern: RegExp;
    increaseIndentPattern: RegExp;
    indentNextLinePattern?: RegExp;
    unIndentedLinePattern?: RegExp;
}
```

## decreaseIndentPattern
- 类型: `RegExp`
- 描述：如果一行与此模式匹配，那么它之后的所有行都应该取消缩进一次（直到另一个规则匹配为止）。
## increaseIndentPattern
- 类型: `RegExp`
- 描述：如果一行与此模式匹配，那么它之后的所有行都应该缩进一次（直到另一条规则匹配为止）。
## indentNextLinePattern
- 类型: `RegExp`
- 描述：如果一行与此模式匹配，则只应将其后面的下一行缩进一次。
## unIndentedLinePattern
- 类型: `RegExp`
- 描述：如果一条线与此模式匹配，则不应更改其缩进，也不应根据其他规则对其进行求值。