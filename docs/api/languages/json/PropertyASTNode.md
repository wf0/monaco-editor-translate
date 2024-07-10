# PropertyASTNode

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.PropertyASTNode.html
:::

```ts
interface PropertyASTNode {
    children: ASTNode[];
    colonOffset?: number;
    keyNode: StringASTNode;
    length: number;
    offset: number;
    parent?: ASTNode;
    type: "property";
    value?: string | number | boolean;
    valueNode?: ASTNode;
}
```


## children
- 类型：[ASTNode](/api/languages/json/ASTNode.md)[]

## colonOffset
- 类型：`number`

## keyNode
- 类型：[StringASTNode](/api/languages/json/StringASTNode.md)

## length
- 类型：`number`

## offset
- 类型：`number`

## parent
- 类型：[ASTNode](/api/languages/json/ASTNode.md)

## type
- 类型：`'property'`

## value
- 类型：`string | number | boolean`

## valueNode
- 类型：[ASTNode](/api/languages/json/ASTNode.md)
