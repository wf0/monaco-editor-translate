# IShortMonarchLanguageRule1
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#types/languages.IShortMonarchLanguageRule1.html
:::

规则要么是正则表达式，要么是操作缩写：[reg，act]==｛regex:reg，action:act｝和：[reg，act，nxt]=={ regex:reg，action:aact｛next:nxt｝｝

```ts
IShortMonarchLanguageRule1: [string | RegExp, IMonarchLanguageAction]
```
- `[string | RegExp, `[IMonarchLanguageAction](/api/languages/IMonarchLanguageAction.md)`]`