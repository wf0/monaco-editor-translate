# OnEnterRule

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.OnEnterRule.html
:::

描述按Enter键时要计算的规则。


```ts
interface OnEnterRule {
    action: EnterAction;
    afterText?: RegExp;
    beforeText: RegExp;
    previousLineText?: RegExp;
}
```

## action
- 类型：[EnterAction](/api/languages/EnterAction.md)
- 描述：要执行的操作。
## afterText
- 类型：`RegExp`
- 描述：在Enter键之后，匹配的文本。
## beforeText
- 类型：`RegExp`
- 描述：在Enter键之前，匹配的文本。
## previousLineText
- 类型：`RegExp`
- 描述：Enter键之前，匹配的文本。