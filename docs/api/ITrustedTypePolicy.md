# ITrustedTypePolicy

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/ITrustedTypePolicy.html
:::

```ts
interface ITrustedTypePolicy {
    name: string;
    createHTML?(input): any;
    createScript?(input): any;
    createScriptURL?(input): any;
}
```

## name
- 类型: `string`


## createHTML
- 语法：`createHTML(input): any`
- 参数：`input`: `string`


## createScript
- 语法：`createScript(input): any`
- 参数：`input`: `string`


## createScriptURL
- 语法：`createScriptURL(input): any`
- 参数：`input`: `string`

