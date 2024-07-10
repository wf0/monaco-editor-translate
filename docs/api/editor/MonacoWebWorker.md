# MonacoWebWorker

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.MonacoWebWorker.html
:::

```ts
interface MonacoWebWorker<T> {
    dispose(): void;
    getProxy(): Promise<T>;
    withSyncedResources(resources): Promise<T>;
}
```

## dispose
- 类型: `dispose(): void`
- 描述:终止web工作程序，从而使返回的代理无效。


## getProxy
- 类型: `getProxy(): Promise<T>`
- 描述: 获取任意加载代码的代理。

## withSyncedResources
- 类型: `withSyncedResources(resources): Promise<T>`
- 描述: 将资源中的模型同步（发送）到网络工作者，使它们在 monaco.worker.getMirrorModels() 中可用。

