# IEditorDecorationsCollection
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorDecorationsCollection.html
:::
一系列装饰品

```ts
interface IEditorDecorationsCollection {
    length: number;
    onDidChange: IEvent<IModelDecorationsChangedEvent>;
    append(newDecorations): string[];
    clear(): void;
    getRange(index): Range;
    getRanges(): Range[];
    has(decoration): boolean;
    set(newDecorations): string[];
}
```
## length
- 类型: `number`
- 描述：清点装饰品。

## onDidChange
- 类型：`IEvent<`[IModelDecorationsChangedEvent](/api/editor/IModelDecorationsChangedEvent.md)`>`
- 描述：当编辑器中的装饰发生变化时发出的事件，但这种变化不是由我们设置或清除集合引起的。


## append
- 语法：`append(newDecorations): string[]`
- 参数：`newDecorations:`: [IModelDeltaDecoration](/api/editor/IModelDeltaDecoration.md)[]


## clear
- 语法：`clear(): void`
- 描述：清除装饰品。


## getRange
- 语法：`getRange(index): Range`
- 参数：`index:`: `number`
- 返回值：[Range](/api/Range.md)
- 描述：获取装饰品的范围。


## getRanges
- 语法：`getRanges(): Range[]`
- 返回值：[Range](/api/Range.md)[]
- 描述：获取装饰品的范围。


## has
- 语法：`has(decoration): boolean`
- 参数：`decoration:`: [IModelDecoration](/api/editor/IModelDecoration.md)
- 描述：检查装饰品是否存在。


## set
- 语法：`set(newDecorations): string[]`
- 参数：`newDecorations:`: [IModelDeltaDecoration](/api/editor/IModelDeltaDecoration.md)[]
- 描述：设置装饰品。

