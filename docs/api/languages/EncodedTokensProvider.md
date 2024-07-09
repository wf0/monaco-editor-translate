# EncodedTokensProvider
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.EncodedTokensProvider.html
:::

令牌的“手动”提供者，以二进制形式返回令牌。

```ts
interface EncodedTokensProvider {
    getInitialState(): IState;
    tokenize?(line, state): ILineTokens;
    tokenizeEncoded(line, state): IEncodedLineTokens;
}
```


## getInitialState
- 语法：`getInitialState(): IState`
- 返回值：[IState](/api/languages/IState.md)
- 描述：语言的初始状态。将是州通过的象征性的第一行。

## tokenize
- 语法：`tokenize(line, state): ILineTokens`
- 参数：
  - `line`: `string`
  - `state`: [IState](/api/languages/IState.md)
- 返回值：[ILineTokens](/api/languages/ILineTokens.md)
- 描述：在给定行开头的状态的情况下标记该行。

## tokenizeEncoded
- 语法：`tokenizeEncoded(line, state): IEncodedLineTokens`
- 参数：
  - `line`: `string`
  - `state`: [IState](/api/languages/IState.md)
- 返回值：[IEncodedLineTokens](/api/languages/IEncodedLineTokens.md)
- 描述：在给定行开头的状态的情况下标记该行。
