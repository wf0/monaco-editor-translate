# TokensProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.TokensProvider.html
:::

A "manual" provider of tokens.

```ts
interface TokensProvider {
    getInitialState(): IState;
    tokenize(line, state): ILineTokens;
}
```

## getInitialState
- 语法：`getInitialState(): IState`
- 返回值：[IState](/api/languages/IState.md)
- 描述：语言的初始状态。
## tokenize
- 语法：`tokenize(line, state): ILineTokens`
- 参数：
  - `line`: `string`
  - `state`: [IState](/api/languages/IState.md)
- 返回值：[ILineTokens](/api/languages/ILineTokens.md)
- 描述：在给定行开头的状态的情况下标记该行。