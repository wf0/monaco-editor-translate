# IEditorAction
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorAction.html
:::

```ts
interface IEditorAction {
    alias: string;
    id: string;
    label: string;
    metadata: ICommandMetadata;
    isSupported(): boolean;
    run(args?): Promise<void>;
}
```
## alias
- 类型：`string`

## id
- 类型：`string`


## label
- 类型：`string`


## metadata
- 类型：[ICommandMetadata](/api/editor/ICommandMetadata.md)


## isSupported
- 语法：`isSupported(): boolean`


## run
- 语法：`run(args?): Promise<void>`

