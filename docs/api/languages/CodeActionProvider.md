# CodeActionProvider

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeActionProvider.html
:::

代码操作接口定义了扩展和灯泡功能之间的契约。

```ts
interface CodeActionProvider {
    provideCodeActions(model, range, context, token): ProviderResult<CodeActionList>;
    resolveCodeAction?(codeAction, token): ProviderResult<CodeAction>;
}
```

## provideCodeActions
- 语法：`provideCodeActions(model, range, context, token): ProviderResult<CodeActionList>`
- 参数：
  - `model`: [ITextModel](/api/editor/ITextModel.md)
  - `range`: [Range](/api/Range.md)
  - `context`: [CodeActionContext](/api/languages/CodeActionContext.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)`<`[CodeActionList](/api/languages/CodeActionList.md)`>`
- 描述：为给定的文档和范围提供命令。

## resolveCodeAction
- 语法：`resolveCodeAction(codeAction, token): ProviderResult<CodeAction>`
- 参数：
  - `codeAction`: [CodeAction](/api/languages/CodeAction.md)
  - `token`: [CancellationToken](/api/CancellationToken.md)
- 返回值：[ProviderResult](/api/languages/ProviderResult.md)`<`[CodeAction](/api/languages/CodeAction.md)`>`
- 描述：为给定的代码操作提供更多详细信息。

