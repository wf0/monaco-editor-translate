# InjectedTextOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.InjectedTextOptions.html
:::

配置在不更改基础文档的情况下注入到视图中的文本。

```ts
interface InjectedTextOptions {
    attachedData?: unknown;
    content: string;
    cursorStops?: InjectedTextCursorStops;
    inlineClassName?: string;
    inlineClassNameAffectsLetterSpacing?: boolean;
}
```

## attachedData
- 类型：`unknown`
- 描述：此字段允许将数据附加到此注入的文本。当查询给定位置的注入文本时，可以读取数据。
## content
- 类型：`string`
- 描述：要注入的文本。
## cursorStops
- 类型：[InjectedTextCursorStops](/api/editor/InjectedTextCursorStops.md)
- 描述：此字段允许配置注入文本的样式。
## inlineClassName
- 类型：`string`
- 描述：如果设置，装饰将与具有此CSS类名的文本内联呈现。
## inlineClassNameAffectsLetterSpacing
- 类型：`boolean`
- 描述：如果存在影响字母间距的inlineClassName。