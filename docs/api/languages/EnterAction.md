# EnterAction

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.EnterAction.html
:::

描述按Enter键时要执行的操作。

```ts
interface EnterAction {
    appendText?: string;
    indentAction: IndentAction;
    removeText?: number;
}
```

## appendText
- 类型：`string`
- 描述：描述要附加在新行之后和缩进之后的文本。
## indentAction
- 类型：[IndentAction](/api/languages/IndentAction.md)
- 描述：描述如何处理缩进。
## removeText
- 类型：`number`
- 描述：描述要删除的文本。