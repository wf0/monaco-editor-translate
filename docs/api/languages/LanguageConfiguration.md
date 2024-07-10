# LanguageConfiguration

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LanguageConfiguration.html
:::

语言配置接口定义了扩展和各种编辑器功能之间的契约，如自动插入括号、自动缩进等。

```ts
interface LanguageConfiguration {
    __electricCharacterSupport?: {
        docComment?: IDocComment;
    };
    autoCloseBefore?: string;
    autoClosingPairs?: IAutoClosingPairConditional[];
    brackets?: CharacterPair[];
    colorizedBracketPairs?: CharacterPair[];
    comments?: CommentRule;
    folding?: FoldingRules;
    indentationRules?: IndentationRule;
    onEnterRules?: OnEnterRule[];
    surroundingPairs?: IAutoClosingPair[];
    wordPattern?: RegExp;
}
```


## ~~__electricCharacterSupport~~
- 已弃用


## autoCloseBefore
- 类型：`string`
- 描述：定义在使用“languageDefined”自动隐藏设置时，括号或引号自动隐藏必须在光标后面的字符。


## autoClosingPairs
- 类型：[IAutoClosingPairConditional](/api/languages/IAutoClosingPairConditional.md)[]
- 描述：语言的自动闭合对。


## brackets
- 类型：[CharacterPair](/api/languages/CharacterPair.md)[]
- 描述：括号对。


## colorizedBracketPairs
- 类型：[CharacterPair](/api/languages/CharacterPair.md)[]
- 描述：定义根据嵌套级别着色的括号对的列表。如果未设置，将使用配置的支架。


## comments
- 类型：[CommentRule](/api/languages/CommentRule.md)
- 描述：注释规则。


## folding
- 类型：[FoldingRules](/api/languages/FoldingRules.md)
- 描述：折叠规则。


## indentationRules
- 类型：[IndentationRule](/api/languages/IndentationRule.md)
- 描述：缩进规则。


## onEnterRules
- 类型：[OnEnterRule](/api/languages/OnEnterRule.md)[]
- 描述：按Enter键时要评估的语言规则。


## surroundingPairs
- 类型：[IAutoClosingPair](/api/languages/IAutoClosingPair.md)[]
- 描述：语言的周边配对。当在选择中键入“open”字符时，所选字符串将被打开和关闭字符包围。如果未设置，将使用自动丢失对设置。


## wordPattern
- 类型：`RegExp`
- 描述：定义单词的匹配模式。

