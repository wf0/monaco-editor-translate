# IWebWorkerOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IWebWorkerOptions.html
:::

```ts
interface IWebWorkerOptions {
    createData?: any;
    host?: any;
    keepIdleModels?: boolean;
    label?: string;
    moduleId: string;
}
```

## createData
- 类型: `any`
- 描述: 传递给模块的创建数据


## host
- 类型: `any`
- 描述: 模块的宿主（web工作程序可以使用它来调用回主线程）


## keepIdleModels
- 类型: `boolean`
- 描述: 是否保持模型在闲置时


## label
- 类型: `string`
- 描述: 模块的标签


## moduleId
- 类型: `string`
- 描述: 模块的ID

