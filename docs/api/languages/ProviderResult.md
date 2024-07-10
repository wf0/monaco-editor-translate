# ProviderResult
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#types/languages.ProviderResult.html
:::

提供程序结果表示提供程序（如悬停提供程序）可能返回的值。这一次，这是实际的结果类型T，如Hover，或解析为该类型T的数据集。此外，可以直接或从数据集返回null和undefined。

```ts
ProviderResult<T>: T | undefined | null | Thenable<T | undefined | null>
```
- [Thenable](/api/languages/Thenable.md)