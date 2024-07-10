# IExpandedMonarchLanguageAction

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IExpandedMonarchLanguageAction.html
:::

```ts
interface IExpandedMonarchLanguageAction {
    bracket?: string;
    cases?: Object;
    goBack?: number;
    group?: IMonarchLanguageAction[];
    log?: string;
    next?: string;
    nextEmbedded?: string;
    switchTo?: string;
    token?: string;
}
```

## bracket
- 类型：`string`
## cases
- 类型：`Object`
- 描述：从字符串映射到ILanguageAction
## goBack
- 类型：`number`
- 描述：返回流中的n个字符
## group
- 类型：[IMonarchLanguageAction](/api/languages/IMonarchLanguageAction.md)[]
- 描述：一个数组，其中每个元素都是一个ILanguageAction
## log
- 类型：`string`
- 描述：将消息记录到浏览器控制台窗口
## next
- 类型：`string`
- 描述：下一个状态
## nextEmbedded
- 类型：`string`
- 描述：下一个嵌套语言
## switchTo
- 类型：`string`
- 描述：下一个状态
## token
- 类型：`string`
- 描述：令牌类型