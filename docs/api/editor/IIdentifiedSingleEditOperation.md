# IIdentifiedSingleEditOperation
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IIdentifiedSingleEditOperation.html
:::

具有标识符的单个编辑操作。

```ts
interface IIdentifiedSingleEditOperation {
    forceMoveMarkers?: boolean;
    range: IRange;
    text: string;
}
```

## forceMoveMarkers
- 类型：`boolean`
- 描述：这表示此操作具有“插入”语义。即forceMoveMarkers=true=>如果范围被折叠，则该位置的所有标记都将被移动。
## range
- 类型：[IRange](/api/IRange.md)
- 描述：要替换的范围。这可以是空的，以模拟一个简单的插入。
## text
- 类型：`string`
- 描述：要替换为的文本。这可以为null以模拟简单的删除。