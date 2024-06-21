# ICommandDescriptor
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICommandDescriptor.html
:::

```ts
interface ICommandDescriptor {
    id: string;
    run: ICommandHandler;
}
```

## id

- 类型: `string`
- 描述:命令的唯一ID

## run

- 类型: [ICommandHandler](/api/editor/ICommandHandler.md)
- 描述：当命令被触发时将执行的回调