# IModelLanguageChangedEvent

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IModelLanguageChangedEvent.html
:::


描述与模型关联的当前语言已更改的事件。

```ts
interface IModelLanguageChangedEvent {
    newLanguage: string;
    oldLanguage: string;
    source: string;
}
```

## newLanguage
- 类型: `string`
- 描述：新的语言
## oldLanguage
- 类型: `string`
- 描述：旧的语言
## source
- 类型: `string`
- 描述：语言更改的来源