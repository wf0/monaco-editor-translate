# ITrustedTypePolicyOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/ITrustedTypePolicyOptions.html
:::

```ts
interface ITrustedTypePolicyOptions {
    createHTML?: ((input, ...arguments) => string);
    createScript?: ((input, ...arguments) => string);
    createScriptURL?: ((input, ...arguments) => string);
}
```

## createHTML
- 语法：`createHTML?: ((input, ...arguments) => string)`
- 参数：
  - `input`: `string`
  - `...arguments`: `any[]`


## createScript
- 语法：`createScript?: ((input, ...arguments) => string)`
- 参数：
  - `input`: `string`
  - `...arguments`: `any[]`


## createScriptURL
- 语法：`createScriptURL?: ((input, ...arguments) => string)`
- 参数：
  - `input`: `string`
  - `...arguments`: `any[]`

