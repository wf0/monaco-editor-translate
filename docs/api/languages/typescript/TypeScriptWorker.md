# TypeScriptWorker

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.TypeScriptWorker.html
:::

```ts
interface TypeScriptWorker {
    findRenameLocations(fileName, positon, findInStrings, findInComments, providePrefixAndSuffixTextForRename): Promise<readonly any[]>;
    getCodeFixesAtPosition(fileName, start, end, errorCodes, formatOptions): Promise<readonly any[]>;
    getCompilerOptionsDiagnostics(fileName): Promise<Diagnostic[]>;
    getCompletionEntryDetails(fileName, position, entry): Promise<any>;
    getCompletionsAtPosition(fileName, position): Promise<any>;
    getDefinitionAtPosition(fileName, position): Promise<readonly any[]>;
    getDocumentHighlights(fileName, position, filesToSearch): Promise<readonly any[]>;
    getEmitOutput(fileName, emitOnlyDtsFiles?, forceDtsEmit?): Promise<EmitOutput>;
    getFormattingEditsAfterKeystroke(fileName, postion, ch, options): Promise<any[]>;
    getFormattingEditsForDocument(fileName, options): Promise<any[]>;
    getFormattingEditsForRange(fileName, start, end, options): Promise<any[]>;
    getNavigationTree(fileName): Promise<any>;
    getQuickInfoAtPosition(fileName, position): Promise<any>;
    getReferencesAtPosition(fileName, position): Promise<any[]>;
    getRenameInfo(fileName, positon, options): Promise<any>;
    getScriptText(fileName): Promise<string>;
    getSemanticDiagnostics(fileName): Promise<Diagnostic[]>;
    getSignatureHelpItems(fileName, position, options): Promise<any>;
    getSuggestionDiagnostics(fileName): Promise<Diagnostic[]>;
    getSyntacticDiagnostics(fileName): Promise<Diagnostic[]>;
    provideInlayHints(fileName, start, end): Promise<readonly any[]>;
}
```

## findRenameLocations
- 语法：`findRenameLocations(fileName, positon, findInStrings, findInComments, providePrefixAndSuffixTextForRename): Promise<readonly any[]>`
- 参数：
  - `fileName`: `string`
  - `positon`: `number`
  - `findInStrings`: `boolean`
  - `findInComments`: `boolean`
  - `providePrefixAndSuffixTextForRename`: `boolean`
- 返回值：`Promise<readonly any[]>`
- 描述：获取在指定文件和位置重命名项目时应更新的其他引用。

## getCodeFixesAtPosition
- 语法：`getCodeFixesAtPosition(fileName, start, end, errorCodes, formatOptions): Promise<readonly any[]>`
- 参数：
  - `fileName`: `string`
  - `start`: `number`
  - `end`: `number`
  - `errorCodes`: `number[]`
  - `formatOptions`: `any`
- 返回值：`Promise<readonly any[]>`
- 描述：获取在指定文件和位置的错误代码上可用的代码修复。


## getCompilerOptionsDiagnostics
- 语法：`getCompilerOptionsDiagnostics(fileName): Promise<Diagnostic[]>`
- 参数：`fileName`: `string`
- 返回值：`Promise<`[Diagnostic](/api/languages/typescript/Diagnostic.md)`[]>`
- 描述：获取在指定文件中可用的编译器选项诊断。


## getCompletionEntryDetails
- 语法：`getCompletionEntryDetails(fileName, position, entry): Promise<any>`
- 参数：
  - `fileName`: `string`
  - `position`: `number`
  - `entry`: `string`
- 返回值：`Promise<any>`
- 描述：获取在指定文件和位置的补全条目详细信息。


## getCompletionsAtPosition
- 语法：`getCompletionsAtPosition(fileName, position): Promise<any>`
- 参数：
  - `fileName`: `string`
  - `position`: `number`
- 返回值：`Promise<any>`
- 描述：获取在指定文件和位置的补全条目。


## getDefinitionAtPosition
- 语法：`getDefinitionAtPosition(fileName, position): Promise<readonly any[]>`
- 参数：
  - `fileName`: `string`
  - `position`: `number`
- 返回值：`Promise<readonly any[]>`
- 描述：获取在指定文件和位置的引用。


## getDocumentHighlights
- 语法：`getDocumentHighlights(fileName, position, filesToSearch): Promise<readonly any[]>`
- 参数：
  - `fileName`: `string`
  - `position`: `number`
  - `filesToSearch`: `string[]`
- 返回值：`Promise<readonly any[]>`
- 描述：获取在指定文件和位置的引用。

## getEmitOutput
- 语法：`getEmitOutput(fileName, emitOnlyDtsFiles?, forceDtsEmit?): Promise<EmitOutput>`
- 参数：
  - `fileName`: `string`
  - `emitOnlyDtsFiles?`: `boolean`
  - `forceDtsEmit?`: `boolean`
- 返回值：`Promise<`[EmitOutput](/api/languages/typescript/EmitOutput.md)`>`
- 描述：获取在指定文件和位置的输出。


## getFormattingEditsAfterKeystroke
- 语法：`getFormattingEditsAfterKeystroke(fileName, postion, ch, options): Promise<any[]>`
- 参数：
  - `fileName`: `string`
  - `postion`: `number`
  - `ch`: `string`
  - `options`: `any`
- 返回值：`Promise<any[]>`
- 描述：获取在给定的击键之后应该应用的格式更改。


## getFormattingEditsForDocument
- 语法：`getFormattingEditsForDocument(fileName, options): Promise<any[]>`
- 参数：
  - `fileName`: `string`
  - `options`: `any`
- 返回值：`Promise<any[]>`
- 描述：获取应该应用于格式化给定文件的更改。


## getFormattingEditsForRange
- 语法：`getFormattingEditsForRange(fileName, start, end, options): Promise<any[]>`
- 参数：
  - `fileName`: `string`
  - `start`: `number`
  - `end`: `number`
  - `options`: `any`
- 返回值：`Promise<any[]>`
- 描述：获取应用于格式化文件中给定范围的更改。


## getNavigationTree
- 语法：`getNavigationTree(fileName): Promise<any>`
- 参数：`fileName`: `string`
- 返回值：`Promise<any>`
- 描述：获取在指定文件中的导航树。


## getQuickInfoAtPosition
- 语法：`getQuickInfoAtPosition(fileName, position): Promise<any>`
- 参数：
  - `fileName`: `string`
  - `position`: `number`
- 返回值：`Promise<any>`
- 描述：获取在指定文件和位置的快速信息。


## getReferencesAtPosition
- 语法：`getReferencesAtPosition(fileName, position): Promise<readonly any[]>`
- 参数：
  - `fileName`: `string`
  - `position`: `number`
- 返回值：`Promise<readonly any[]>`
- 描述：获取在指定文件和位置的引用。


## getRenameInfo
- 语法：`getRenameInfo(fileName, positon, options): Promise<any>`
- 参数：
  - `fileName`: `string`
  - `positon`: `number`
  - `options`: `any`
- 返回值：`Promise<any>`
- 描述：获取在指定文件和位置的重命名信息。


## getScriptText
- 语法：`getScriptText(fileName): Promise<string>`
- 参数：`fileName`: `string`
- 返回值：`Promise<string>`
- 描述：获取在指定文件中的脚本文本。


## getSemanticDiagnostics
- 语法：`getSemanticDiagnostics(fileName): Promise<Diagnostic[]>`
- 参数：`fileName`: `string`
- 返回值：`Promise<`[Diagnostic](/api/languages/typescript/Diagnostic.md)`[]>`
- 描述：获取在指定文件中的语义诊断。


## getSignatureHelpItems
- 语法：`getSignatureHelpItems(fileName, position): Promise<any>`
- 参数：
  - `fileName`: `string`
  - `position`: `number`
- 返回值：`Promise<any>`
- 描述：获取在指定文件和位置的签名帮助项。


## getSuggestionDiagnostics
- 语法：`getSuggestionDiagnostics(fileName): Promise<Diagnostic[]>`
- 参数：`fileName`: `string`
- 返回值：`Promise<`[Diagnostic](/api/languages/typescript/Diagnostic.md)`[]>`
- 描述：获取在指定文件中的建议诊断。


## getSyntacticDiagnostics
- 语法：`getSyntacticDiagnostics(fileName): Promise<Diagnostic[]>`
- 参数：`fileName`: `string`
- 返回值：`Promise<`[Diagnostic](/api/languages/typescript/Diagnostic.md)`[]>`
- 描述：获取在指定文件中的语法诊断。


## provideInlayHints
- 语法：`provideInlayHints(fileName, start, end): Promise<readonly any[]>`
- 参数：
  - `fileName`: `string`
  - `start`: `number`
  - `end`: `number`
- 返回值：`Promise<readonly any[]>`
- 描述：获取在指定文件中的提示。

