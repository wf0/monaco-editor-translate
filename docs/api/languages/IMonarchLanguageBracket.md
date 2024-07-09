# IMonarchLanguageBracket
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IMonarchLanguageBracket.html
:::

此接口可以缩短为数组，即[“｛”，“｝”，'delimiter.curli']

```ts
interface IMonarchLanguageBracket {
    close: string;
    open: string;
    token: string;
}
```

## close
- 类型: `string`
- 描述：关闭括号
## open
- 类型: `string`
- 描述：打开括号
## token
- 类型: `string`
- 描述：括号标记