# IPropertyData

<backTop />
        
::: details 原文链接
This is a details block.
:::

```ts
interface IPropertyData {
    browsers?: string[];
    description?: string | languages.css.MarkupContent;
    name: string;
    references?: languages.css.IReference[];
    relevance?: number;
    restrictions?: string[];
    status?: EntryStatus;
    syntax?: string;
    values?: languages.css.IValueData[];
}
```

## browsers
- 类型: `string[]`
## description
- 类型: `string` | [languages](/api/languages.md).[css](/api/languages/css.md).[MarkupContent](/api/languages/css/MarkupContent.md)
## name
- 类型: `string`
## references
- 类型: [languages](/api/languages.md).[css](/api/languages/css.md).[IReference](/api/languages/css/IReference.md)[]
## relevance
- 类型: `number`
## restrictions
- 类型: `string`
## status
- 类型: [EntryStatus](/api/languages/css/EntryStatus.md)
## syntax
- 类型: `string`
## values
- 类型: [languages](/api/languages.md).[css](/api/languages/css.md).[IValueData](/api/languages/css/IValueData.md)[]