# ILineTokens
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.ILineTokens.html
:::

行标记化的结果。

```ts
interface ILineTokens {
    endState: IState;
    tokens: IToken[];
}
```

## endState
- 类型: [IState](/api/languages/IState.md)
- 描述：标记化结束状态。将持有指向此对象的指针，并且在返回指针后，标记化器不应修改该对象。
## tokens
- 类型: [IToken](/api/languages/IToken.md)[]
- 描述：行上的标记列表。