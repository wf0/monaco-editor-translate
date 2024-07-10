# IState

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IState.html
:::

标记化器在两行之间的状态。将标志存储在多行注释等中非常有用。模型将克隆前一行的状态并将其传递给下一行以标记化。

```ts
interface IState {
    clone(): IState;
    equals(other): boolean;
}
```

## clone
- 语法：`clone(): IState`
- 返回值：[IState](/api/languages/IState.md)
## equals
- 语法：`equals(other): boolean`
- 参数：`other`；[IState](/api/languages/IState.md)