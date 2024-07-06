# ILineChange
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ILineChange.html
:::

```ts
interface ILineChange {
    charChanges: ICharChange[];
    modifiedEndLineNumber: number;
    modifiedStartLineNumber: number;
    originalEndLineNumber: number;
    originalStartLineNumber: number;
}
```

## charChanges
- 类型: [ICharChange](/api/editor/ICharChange.md)[]
## modifiedEndLineNumber
- 类型: `number`
## modifiedStartLineNumber
- 类型: `number`
## originalEndLineNumber
- 类型: `number`
## originalStartLineNumber
- 类型: `number`