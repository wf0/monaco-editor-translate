# IEditorHoverOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorHoverOptions.html
:::

编辑器悬停的配置选项

```ts
interface IEditorHoverOptions {
    above?: boolean;
    delay?: number;
    enabled?: boolean;
    hidingDelay?: number;
    sticky?: boolean;
}
```

## above
- 类型: `boolean`
- 描述：是否应该将悬停显示在线上方，默认为false。
## delay
- 类型: `number`
- 描述：延迟显示悬停。默认值为300。
## enabled
- 类型: `boolean`
- 描述：启用悬停。默认为true。
## hidingDelay
- 类型: `number`
- 描述：控制悬停后悬停可见的时间。要求粘性设置为true。
## sticky
- 类型: `boolean`
- 描述：悬停是否具有粘性，以便可以单击并选择其内容，默认为true。