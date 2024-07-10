# IAtDirectiveData

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.css.IAtDirectiveData.html
:::

```ts
interface IAtDirectiveData {
    browsers?: string[];
    description?: string | languages.css.MarkupContent;
    name: string;
    references?: languages.css.IReference[];
    status?: EntryStatus;
}
```


## browsers
- 类型?: `string[]`
## description
- 类型?: `string` | [languages](/api/languages.md).[css](/api/languages/css.md).[MarkupContent](/api/languages/css/MarkupContent.md)
## name
- 类型: `string`
## references
- 类型?: [languages](/api/languages.md).[css](/api/languages/css.md).[IReference](/api/languages/css/IReference.md)[]
## status
- 类型?: [EntryStatus](/api/languages/css/EntryStatus.md)