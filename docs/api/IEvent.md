# IEvent

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/IEvent.html
:::

```ts
interface IEvent<T> ((listener, thisArg?) => IDisposable)
```

- 语法：`IEvent(listener, thisArg?): IDisposable`
- 参数：
  - `listener`: `(event: T) => void`
  - `thisArg`: `any`
- 返回值：[IDisposable](/api/IDisposable.md)