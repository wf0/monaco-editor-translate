# IWorkerContext

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/worker.IWorkerContext.html
:::

```ts
interface IWorkerContext<H> {
    host: H;
    getMirrorModels(): IMirrorModel[];
}
```


## host
- 类型： `H`

## getMirrorModels
- 类型： `() => `[IMirrorModel](/api/worker/IMirrorModel.md)`[]`
