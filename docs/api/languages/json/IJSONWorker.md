# IJSONWorker

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.IJSONWorker.html
:::

```ts
interface IJSONWorker {
    getMatchingSchemas(uri): Promise<MatchingSchema[]>;
    parseJSONDocument(uri): Promise<JSONDocument>;
}
```

## getMatchingSchemas
- 语法：`getMatchingSchemas(uri): Promise<MatchingSchema[]>`
- 参数：`uri`：`string`
- 返回值：`Promise<`[MatchingSchema](/api/languages/json/MatchingSchema.md)`>`

## parseJSONDocument
- 语法：`parseJSONDocument(uri): Promise<JSONDocument>`
- 参数：`uri`：`string`
- 返回值：`Promise<`[JSONDocument](/api/languages/json/JSONDocument.md)`>`
