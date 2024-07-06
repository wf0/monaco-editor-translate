# IModelContentChangedEvent
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelContentChangedEvent.html
:::


描述模型文本更改的事件。


```ts
interface IModelContentChangedEvent {
    changes: IModelContentChange[];
    eol: string;
    isEolChange: boolean;
    isFlush: boolean;
    isRedoing: boolean;
    isUndoing: boolean;
    versionId: number;
}
```

## changes
- 类型: [IModelContentChange](/api/editor/IModelContentChange.md)[]
## eol
- 类型: `string`
- 描述：（新的）行尾字符。
## isEolChange
- 类型: `boolean`
- 描述：是否更改了行尾字符。
## isFlush
- 类型: `boolean`
- 描述：是否是刷新操作。
## isRedoing
- 类型: `boolean`
- 描述：是否是重做操作。
## isUndoing
- 类型: `boolean`
- 描述：是否是撤销操作。
## versionId
- 类型: `number`
- 描述：模型版本号。