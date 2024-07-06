# ISingleEditOperation
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ISingleEditOperation.html
:::


一个单一的编辑操作，其作用相当于简单的替换。即用模型中的文本替换范围内的文本。

```ts
interface ISingleEditOperation {
    forceMoveMarkers?: boolean;
    range: IRange;
    text: string;
}
```

## forceMoveMarkers
- 类型: `boolean`
- 描述：这表示此操作具有“插入”语义。即forceMoveMarkers=true=>如果范围被折叠，则该位置的所有标记都将被移动。
## range
- 类型: [IRange](/api/IRange.md)
- 描述：要替换的范围。
## text
- 类型: `string`
- 描述：要替换的范围中的文本。