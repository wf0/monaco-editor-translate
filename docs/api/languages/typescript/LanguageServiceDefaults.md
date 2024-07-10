# LanguageServiceDefaults

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.LanguageServiceDefaults.html
:::

```ts
interface LanguageServiceDefaults {
    inlayHintsOptions: InlayHintsOptions;
    modeConfiguration: languages.typescript.ModeConfiguration;
    onDidChange: IEvent<void>;
    onDidExtraLibsChange: IEvent<void>;
    workerOptions: WorkerOptions;
    addExtraLib(content, filePath?): IDisposable;
    getCompilerOptions(): CompilerOptions;
    getDiagnosticsOptions(): languages.typescript.DiagnosticsOptions;
    getEagerModelSync(): boolean;
    getExtraLibs(): IExtraLibs;
    setCompilerOptions(options): void;
    setDiagnosticsOptions(options): void;
    setEagerModelSync(value): void;
    setExtraLibs(libs): void;
    setInlayHintsOptions(options): void;
    setMaximumWorkerIdleTime(value): void;
    setModeConfiguration(modeConfiguration): void;
    setWorkerOptions(options): void;
}
```
## inlayHintsOptions
- 类型：[InlayHintsOptions](/api/languages/typescript/InlayHintsOptions.md)

## modeConfiguration
- 类型：[languages.typescript.ModeConfiguration](/api/languages/typescript/ModeConfiguration.md)

## onDidChange
- 类型：[IEvent](/api/IEvent.md)`<void>`

## onDidExtraLibsChange
- 类型：[IEvent](/api/IEvent.md)`<void>`

## workerOptions
- 类型：[WorkerOptions](/api/languages/typescript/WorkerOptions.md)

## addExtraLib
- 语法：`addExtraLib(content, filePath?): IDisposable`
- 参数：
  - content: `string`
  - filePath: `string`
- 返回值：[IDisposable](/api/IDisposable.md)
- 描述：将其他源文件添加到语言服务，将其用于不会作为编辑器文档加载的typescript（定义）文件，如jquery.d.ts。

## getCompilerOptions
- 语法：`getCompilerOptions(): CompilerOptions`
- 返回值：[CompilerOptions](/api/languages/typescript/CompilerOptions.md)
- 描述：获取编译器选项。
## getDiagnosticsOptions
- 语法：`getDiagnosticsOptions(): languages.typescript.DiagnosticsOptions`
- 返回值：[languages.typescript.DiagnosticsOptions](/api/languages/typescript/DiagnosticsOptions.md)
- 描述：获取诊断选项。

## getEagerModelSync
- 语法：`getEagerModelSync(): boolean`
- 描述：获取是否在加载模型时同步。

## getExtraLibs
- 语法：`getExtraLibs(): IExtraLibs`
- 返回值：[IExtraLibs](/api/languages/typescript/IExtraLibs.md)
- 描述：获取额外的库。

## setCompilerOptions
- 语法：`setCompilerOptions(options): void`
- 参数：`options`: [CompilerOptions](/api/languages/typescript/CompilerOptions.md)
- 描述：设置编译器选项。

## setDiagnosticsOptions
- 语法：`setDiagnosticsOptions(options): void`
- 参数：`options`: [languages.typescript.DiagnosticsOptions](/api/languages/typescript/DiagnosticsOptions.md)
- 描述：设置诊断选项。

## setEagerModelSync
- 语法：`setEagerModelSync(value): void`
- 参数：`value`: `boolean`
- 描述：设置是否在加载模型时同步。

## setExtraLibs
- 语法：`setExtraLibs(libs): void`
- 参数：`libs`: [IExtraLibs](/api/languages/typescript/IExtraLibs.md)
- 描述：设置额外的库。

## setInlayHintsOptions
- 语法：`setInlayHintsOptions(options): void`
- 参数：`options`: [InlayHintsOptions](/api/languages/typescript/InlayHintsOptions.md)
- 描述：设置提示选项。

## setMaximumWorkerIdleTime
- 语法：`setMaximumWorkerIdleTime(value): void`
- 参数：`value`: `number`
- 描述：设置最大空闲时间。

## setModeConfiguration
- 语法：`setModeConfiguration(modeConfiguration): void`
- 参数：`modeConfiguration`: [languages.typescript.ModeConfiguration](/api/languages/typescript/ModeConfiguration.md)
- 描述：设置模式配置。

## setWorkerOptions
- 语法：`setWorkerOptions(options): void`
- 参数：`options`: [WorkerOptions](/api/languages/typescript/WorkerOptions.md)
- 描述：设置工作器选项。
