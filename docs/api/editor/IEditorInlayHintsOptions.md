# IEditorInlayHintsOptions

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorInlayHintsOptions.html
:::

编辑器嵌入的配置选项提示

```ts
interface IEditorInlayHintsOptions {
    enabled?: "off" | "on" | "offUnlessPressed" | "onUnlessPressed";
    fontFamily?: string;
    fontSize?: number;
    padding?: boolean;
}
```

## enabled
- 类型：`"off" | "on" | "offUnlessPressed" | "onUnlessPressed"`
- 描述：启用内联提示。默认为true。

## fontFamily
- 类型：`string`
- 描述：内联提示字体

## fontSize
- 类型：`number`
- 描述：内联提示字体大小

## padding
- 类型：`boolean`
- 描述：内联提示是否添加内边距
