# WorkerOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.WorkerOptions.html
:::

```ts
interface WorkerOptions {
    customWorkerPath?: string;
}
```

## customWorkerPath
- 类型: `string`
- 描述：JavaScript文件的完整HTTP路径，该路径将函数customTSWorkerFactory添加到web工作程序内部的self