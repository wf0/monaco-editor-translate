# IModelDecoration
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelDecoration.html
:::

模型中的装饰。

```ts
interface IModelDecoration {
    id: string;
    options: IModelDecorationOptions;
    ownerId: number;
    range: Range;
}
```

## id
- 类型：`string`
- 描述：装饰的标识符。

## options
- 类型：[IModelDecorationOptions](/api/editor/IModelDecorationOptions.md)
- 描述：装饰的选项。

## ownerId
- 类型：`number`
- 描述：装饰的所属者。

## range
- 类型：[Range](/api/Range.md)
- 描述：装饰的范围。
