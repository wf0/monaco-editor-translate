# HoverProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.HoverProvider.html
:::

悬停提供程序接口定义了扩展和悬停功能之间的约定。

```ts
interface HoverProvider<THover> {
    provideHover(model, position, token, context?): ProviderResult<THover>;
}
```

## 泛型
- `THover =` [Hover](/api/languages/Hover.md)

## provideHover
- 语法：`provideHover(model, position, token, context?): ProviderResult<THover>`
- 参数：
  - `model` [ITextModel](/api/editor/ITextModel.md)
  - `position` [Position](/api/Position.md)
  - `token` [CancellationToken](/api/CancellationToken.md)
  - `context` [HoverContext](/api/languages/HoverContext.md)<[THover](#泛型)>
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)<[THover](#泛型)>
- 描述：为给定的位置、上下文和文档提供悬停。编辑器将合并位于同一位置的多个悬停。悬停的范围可以默认为省略时所在位置的单词范围。