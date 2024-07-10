# IEncodedLineTokens

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IEncodedLineTokens.html
:::

行标记化的结果。

```ts
interface IEncodedLineTokens {
    endState: IState;
    tokens: Uint32Array;
}
```

## endState
- 类型: [IState](/api/languages/IState.md)
- 描述：标记化结束状态。将持有指向此对象的指针，并且在返回指针后，标记化器不应修改该对象。
## tokens
- 类型: `Uint32Array`
- 描述：行上的标记采用二进制编码格式。每个令牌占用两个数组索引。
- 示例：
```js
at offset 2*i => startIndex
at offset 2*i + 1 => metadata Meta data is in binary format:

3322 2222 2222 1111 1111 1100 0000 0000
1098 7654 3210 9876 5432 1098 7654 3210
---------------------------------------
bbbb bbbb bfff ffff ffFF FFTT LLLL LLLL


L = EncodedLanguageId (8 bits): Use getEncodedLanguageId to get the encoded ID of a language.
T = StandardTokenType (2 bits): Other = 0, Comment = 1, String = 2, RegEx = 3.
F = FontStyle (4 bits): None = 0, Italic = 1, Bold = 2, Underline = 4, Strikethrough = 8.
f = foreground ColorId (9 bits)
b = background ColorId (9 bits)

The color value for each colorId is defined in IStandaloneThemeData.customTokenColors: e.g. colorId = 1 is stored in IStandaloneThemeData.customTokenColors[1]. Color id = 0 means no color, id = 1 is for the default foreground color, id = 2 for the default background.
```