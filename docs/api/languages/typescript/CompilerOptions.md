# CompilerOptions
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.CompilerOptions.html
:::

```ts
interface CompilerOptions {
    allowJs?: boolean;
    allowSyntheticDefaultImports?: boolean;
    allowUmdGlobalAccess?: boolean;
    allowUnreachableCode?: boolean;
    allowUnusedLabels?: boolean;
    alwaysStrict?: boolean;
    baseUrl?: string;
    charset?: string;
    checkJs?: boolean;
    composite?: boolean;
    declaration?: boolean;
    declarationDir?: string;
    declarationMap?: boolean;
    disableSizeLimit?: boolean;
    disableSourceOfProjectReferenceRedirect?: boolean;
    downlevelIteration?: boolean;
    emitBOM?: boolean;
    emitDeclarationOnly?: boolean;
    emitDecoratorMetadata?: boolean;
    esModuleInterop?: boolean;
    experimentalDecorators?: boolean;
    forceConsistentCasingInFileNames?: boolean;
    importHelpers?: boolean;
    inlineSourceMap?: boolean;
    inlineSources?: boolean;
    isolatedModules?: boolean;
    jsx?: JsxEmit;
    jsxFactory?: string;
    keyofStringsOnly?: boolean;
    lib?: string[];
    locale?: string;
    mapRoot?: string;
    maxNodeModuleJsDepth?: number;
    module?: ModuleKind;
    moduleResolution?: ModuleResolutionKind;
    newLine?: NewLineKind;
    noEmit?: boolean;
    noEmitHelpers?: boolean;
    noEmitOnError?: boolean;
    noErrorTruncation?: boolean;
    noFallthroughCasesInSwitch?: boolean;
    noImplicitAny?: boolean;
    noImplicitReturns?: boolean;
    noImplicitThis?: boolean;
    noImplicitUseStrict?: boolean;
    noLib?: boolean;
    noResolve?: boolean;
    noStrictGenericChecks?: boolean;
    noUnusedLocals?: boolean;
    noUnusedParameters?: boolean;
    out?: string;
    outDir?: string;
    outFile?: string;
    paths?: MapLike<string[]>;
    preserveConstEnums?: boolean;
    preserveSymlinks?: boolean;
    project?: string;
    reactNamespace?: string;
    removeComments?: boolean;
    resolveJsonModule?: boolean;
    rootDir?: string;
    rootDirs?: string[];
    skipDefaultLibCheck?: boolean;
    skipLibCheck?: boolean;
    sourceMap?: boolean;
    sourceRoot?: string;
    strict?: boolean;
    strictBindCallApply?: boolean;
    strictFunctionTypes?: boolean;
    strictNullChecks?: boolean;
    strictPropertyInitialization?: boolean;
    stripInternal?: boolean;
    suppressExcessPropertyErrors?: boolean;
    suppressImplicitAnyIndexErrors?: boolean;
    target?: ScriptTarget;
    traceResolution?: boolean;
    typeRoots?: string[];
    types?: string[];
    useDefineForClassFields?: boolean;
    [option: string]: CompilerOptionsValue | undefined;
}
```

## 快捷链接
<script setup>
const data = [
  { icon: "P", link: "allowJs" },
  { icon: "P", link: "allowSyntheticDefaultImports" },
  { icon: "P", link: "allowUmdGlobalAccess" },
  { icon: "P", link: "allowUnreachableCode" },
  { icon: "P", link: "allowUnusedLabels" },
  { icon: "P", link: "alwaysStrict" },
  { icon: "P", link: "baseUrl" },
  { icon: "P", link: "charset" },
  { icon: "P", link: "checkJs" },
  { icon: "P", link: "composite" },
  { icon: "P", link: "declaration" },
  { icon: "P", link: "declarationDir" },
  { icon: "P", link: "declarationMap" },
  { icon: "P", link: "disableSizeLimit" },
  { icon: "P", link: "disableSourceOfProjectReferenceRedirect" },
  { icon: "P", link: "downlevelIteration" },
  { icon: "P", link: "emitBOM" },
  { icon: "P", link: "emitDeclarationOnly" },
  { icon: "P", link: "emitDecoratorMetadata" },
  { icon: "P", link: "esModuleInterop" },
  { icon: "P", link: "experimentalDecorators" },
  { icon: "P", link: "forceConsistentCasingInFileNames" },
  { icon: "P", link: "importHelpers" },
  { icon: "P", link: "inlineSourceMap" },
  { icon: "P", link: "inlineSources" },
  { icon: "P", link: "isolatedModules" },
  { icon: "P", link: "jsx" },
  { icon: "P", link: "jsxFactory" },
  { icon: "P", link: "keyofStringsOnly" },
  { icon: "P", link: "lib" },
  { icon: "P", link: "locale" },
  { icon: "P", link: "mapRoot" },
  { icon: "P", link: "maxNodeModuleJsDepth" },
  { icon: "P", link: "module" },
  { icon: "P", link: "moduleResolution" },
  { icon: "P", link: "newLine" },
  { icon: "P", link: "noEmit" },
  { icon: "P", link: "noEmitHelpers" },
  { icon: "P", link: "noEmitOnError" },
  { icon: "P", link: "noErrorTruncation" },
  { icon: "P", link: "noFallthroughCasesInSwitch" },
  { icon: "P", link: "noImplicitAny" },
  { icon: "P", link: "noImplicitReturns" },
  { icon: "P", link: "noImplicitThis" },
  { icon: "P", link: "noImplicitUseStrict" },
  { icon: "P", link: "noLib" },
  { icon: "P", link: "noResolve" },
  { icon: "P", link: "noStrictGenericChecks" },
  { icon: "P", link: "noUnusedLocals" },
  { icon: "P", link: "noUnusedParameters" },
  { icon: "P", link: "out" },
  { icon: "P", link: "outDir" },
  { icon: "P", link: "outFile" },
  { icon: "P", link: "paths" },
  { icon: "P", link: "preserveConstEnums" },
  { icon: "P", link: "preserveSymlinks" },
  { icon: "P", link: "project" },
  { icon: "P", link: "reactNamespace" },
  { icon: "P", link: "removeComments" },
  { icon: "P", link: "resolveJsonModule" },
  { icon: "P", link: "rootDir" },
  { icon: "P", link: "rootDirs" },
  { icon: "P", link: "skipDefaultLibCheck" },
  { icon: "P", link: "skipLibCheck" },
  { icon: "P", link: "sourceMap" },
  { icon: "P", link: "sourceRoot" },
  { icon: "P", link: "strict" },
  { icon: "P", link: "strictBindCallApply" },
  { icon: "P", link: "strictFunctionTypes" },
  { icon: "P", link: "strictNullChecks" },
  { icon: "P", link: "strictPropertyInitialization" },
  { icon: "P", link: "stripInternal" },
  { icon: "P", link: "suppressExcessPropertyErrors" },
  { icon: "P", link: "suppressImplicitAnyIndexErrors" },
  { icon: "P", link: "target" },
  { icon: "P", link: "traceResolution" },
  { icon: "P", link: "typeRoots" },
  { icon: "P", link: "types" },
  { icon: "P", link: "useDefineForClassFields" },
];

</script>
<dataItems :data="data" />

## allowJs
- 类型：`boolean`
## allowSyntheticDefaultImports
- 类型：`boolean`
## allowUmdGlobalAccess
- 类型：`boolean`
## allowUnreachableCode
- 类型：`boolean`
## allowUnusedLabels
- 类型：`boolean`
## alwaysStrict
- 类型：`boolean`
## baseUrl
- 类型：`string`
## charset
- 类型：`string`
## checkJs
- 类型：`boolean`
## composite
- 类型：`boolean`
## declaration
- 类型：`boolean`
## declarationDir
- 类型：`string`
## declarationMap
- 类型：`boolean`
## disableSizeLimit
- 类型：`boolean`
## disableSourceOfProjectReferenceRedirect
- 类型：`boolean`
## downlevelIteration
- 类型：`boolean`
## emitBOM
- 类型：`boolean`
## emitDeclarationOnly
- 类型：`boolean`
## emitDecoratorMetadata
- 类型：`boolean`
## esModuleInterop
- 类型：`boolean`
## experimentalDecorators
- 类型：`boolean`
## forceConsistentCasingInFileNames
- 类型：`boolean`
## importHelpers
- 类型：`boolean`
## inlineSourceMap
- 类型：`boolean`
## inlineSources
- 类型：`boolean`
## isolatedModules
- 类型：`boolean`
## jsx
- 类型：[JsxEmit](/api/languages/typescript/JsxEmit.md)
## jsxFactory
- 类型：`string`
## keyofStringsOnly
- 类型：`boolean`
## lib
- 类型：`string[]`
## locale
- 类型：`string`
## mapRoot
- 类型：`string`
## maxNodeModuleJsDepth
- 类型：`number`
## module
- 类型：[ModuleKind](/api/languages/typescript/ModuleKind.md)
## moduleResolution
- 类型：[ModuleResolutionKind](/api/languages/typescript/ModuleResolutionKind.md)
## newLine
- 类型：[NewLineKind](/api/languages/typescript/NewLineKind.md)
## noEmit
- 类型：`boolean`
## noEmitHelpers
- 类型：`boolean`
## noEmitOnError
- 类型：`boolean`
## noErrorTruncation
- 类型：`boolean`
## noFallthroughCasesInSwitch
- 类型：`boolean`
## noImplicitAny
- 类型：`boolean`
## noImplicitReturns
- 类型：`boolean`
## noImplicitThis
- 类型：`boolean`
## noImplicitUseStrict
- 类型：`boolean`
## noLib
- 类型：`boolean`
## noResolve
- 类型：`boolean`
## noStrictGenericChecks
- 类型：`boolean`
## noUnusedLocals
- 类型：`boolean`
## noUnusedParameters
- 类型：`boolean`
## out
- 类型：`string`
## outDir
- 类型：`string`
## outFile
- 类型：`string`
## paths
- 类型：[MapLike](/api/languages/typescript/MapLike.md)`<string[]>`
## preserveConstEnums
- 类型：`boolean`
## preserveSymlinks
- 类型：`boolean`
## project
- 类型：`string`
## reactNamespace
- 类型：`string`
## removeComments
- 类型：`boolean`
## resolveJsonModule
- 类型：`boolean`
## rootDir
- 类型：`string`
## rootDirs
- 类型：`string[]`
## skipDefaultLibCheck
- 类型：`boolean`
## skipLibCheck
- 类型：`boolean`
## sourceMap
- 类型：`boolean`
## sourceRoot
- 类型：`string`
## strict
- 类型：`boolean`
## strictBindCallApply
- 类型：`boolean`
## strictFunctionTypes
- 类型：`boolean`
## strictNullChecks
- 类型：`boolean`
## strictPropertyInitialization
- 类型：`boolean`
## stripInternal
- 类型：`boolean`
## suppressExcessPropertyErrors
- 类型：`boolean`
## suppressImplicitAnyIndexErrors
- 类型：`boolean`
## target
- 类型：[ScriptTarget](/api/languages/typescript/ScriptTarget.md)
## traceResolution
- 类型：`boolean`
## typeRoots
- 类型：`string[]`
## types
- 类型：`string[]`
## useDefineForClassFields
- 类型：`boolean`

