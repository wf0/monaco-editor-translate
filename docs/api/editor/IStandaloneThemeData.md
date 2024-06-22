# IStandaloneThemeData
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneThemeData.html
:::

```ts
interface IStandaloneThemeData {
    base: BuiltinTheme;
    colors: IColors;
    encodedTokensColors?: string[];
    inherit: boolean;
    rules: ITokenThemeRule[];
}
```

## base
- 类型: [BuiltinTheme](/api/editor/BuiltinTheme.md) ==> "vs" | "vs-dark" | "hc-black" | "hc-light"


## colors
- 类型: [IColors](/api/editor/IColors.md)


## encodedTokensColors
- 类型: string[]


## inherit
- 类型: boolean


## rules
- 类型: [ITokenThemeRule](/api/editor/ITokenThemeRule.md)[]


