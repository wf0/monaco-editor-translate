# PendingCommentThread
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.PendingCommentThread.html
:::

```ts
interface PendingCommentThread {
    body: string;
    isReply: boolean;
    range: IRange;
    uniqueOwner: string;
    uri: Uri;
}
```

## body
- 类型: `string`
## isReply
- 类型: `boolean`
## range
- 类型: [IRange](/api/IRange.md)
## uniqueOwner
- 类型: `string`
## uri
- 类型: [Uri](/api/Uri.md)