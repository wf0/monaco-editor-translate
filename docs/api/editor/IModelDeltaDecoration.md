# IModelDeltaDecoration
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelDeltaDecoration.html
:::

新款装饰。

```ts
interface IModelDeltaDecoration {
    options: IModelDecorationOptions;
    range: IRange;
}
```

## options
- 类型: [IModelDecorationOptions](/api/editor/IModelDecorationOptions.md)
- 描述：与此装饰相关的选项。
## range
- 类型: [IRange](/api/IRange.md)
- 描述：这个装饰涵盖的范围。