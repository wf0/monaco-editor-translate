# IMonarchLanguage
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IMonarchLanguage.html
:::

语言定义

```ts
interface IMonarchLanguage {
    brackets?: IMonarchLanguageBracket[];
    defaultToken?: string;
    ignoreCase?: boolean;
    includeLF?: boolean;
    start?: string;
    tokenPostfix?: string;
    tokenizer: {
        [name: string]: IMonarchLanguageRule[];
    };
    unicode?: boolean;
    [key: string]: any;
}
```

## brackets
- 类型：[IMonarchLanguageBracket](/api/languages/IMonarchLanguageBracket.md)[]
- 描述：例如[[“｛”，“｝”，'delimiter.curli']]

## defaultToken
- 类型：`string`
- 描述：如果令牌化器中没有匹配项，则分配此令牌类（默认的“source”）

## ignoreCase
- 类型：`boolean`
- 描述：语言区分大小写

## includeLF
- 类型：`boolean`
- 描述：在行尾包括换行符（以字符的形式）默认为false

## start
- 类型：`boolean`
- 描述：标记化器中的开始符号（默认情况下使用第一个条目）

## tokenPostfix
- 类型：`string`
- 描述：附加到每个令牌类

## tokenizer
- 类型：`{ [name: string]: `[IMonarchLanguageRule](/api/languages/IMonarchLanguageRule.md)`[] }`
- 描述：令牌化器规则

## unicode
- 类型：`boolean`
- 描述：是否支持Unicode字符集
