# CancellationToken

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/CancellationToken.html
:::

```ts
interface CancellationToken {
    isCancellationRequested: boolean;
    onCancellationRequested: ((listener, thisArgs?, disposables?) => IDisposable);
}
```

## isCancellationRequested
- 类型：`boolean`
- 描述：已请求标志取消。


## onCancellationRequested
- 语法：`onCancellationRequested: ((listener, thisArgs?, disposables?) => IDisposable)`
- 参数：`(listener, thisArgs?, disposables?): IDisposable`
  - `listener`: ` ((e) => any)`
  - `thisArgs`: `any`
  - `disposables`: [IDisposable](/api/IDisposable.md)[]
- 描述：请求取消时触发的事件。此事件只触发一次，因为取消只能发生一次。取消后注册的侦听器将被调用（下一个事件循环运行），但也只能调用一次。