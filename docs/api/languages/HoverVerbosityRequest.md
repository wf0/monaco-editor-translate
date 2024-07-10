# HoverVerbosityRequest

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.HoverVerbosityRequest.html
:::

```ts
interface HoverVerbosityRequest<THover> {
    previousHover: THover;
    verbosityDelta: number;
}
```


## 泛型
- `THover =` [Hover](/api/languages/Hover.md)

## previousHover
- 类型: [THover](#泛型)
- 描述：上一次悬停在同一位置
## verbosityDelta
- 类型: `number`
- 描述：增加/减少悬停详细程度的增量
