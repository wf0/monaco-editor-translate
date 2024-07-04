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


## allowSyntheticDefaultImports


## allowUmdGlobalAccess


## allowUnreachableCode


## allowUnusedLabels


## alwaysStrict


## baseUrl


## charset


## checkJs


## composite


## declaration


## declarationDir


## declarationMap


## disableSizeLimit


## disableSourceOfProjectReferenceRedirect


## downlevelIteration


## emitBOM


## emitDeclarationOnly


## emitDecoratorMetadata


## esModuleInterop


## experimentalDecorators


## forceConsistentCasingInFileNames


## importHelpers


## inlineSourceMap


## inlineSources


## isolatedModules


## jsx


## jsxFactory


## keyofStringsOnly


## lib


## locale


## mapRoot


## maxNodeModuleJsDepth


## module


## moduleResolution


## newLine


## noEmit


## noEmitHelpers


## noEmitOnError


## noErrorTruncation


## noFallthroughCasesInSwitch


## noImplicitAny


## noImplicitReturns


## noImplicitThis


## noImplicitUseStrict


## noLib


## noResolve


## noStrictGenericChecks


## noUnusedLocals


## noUnusedParameters


## out


## outDir


## outFile


## paths


## preserveConstEnums


## preserveSymlinks


## project


## reactNamespace


## removeComments


## resolveJsonModule


## rootDir


## rootDirs


## skipDefaultLibCheck


## skipLibCheck


## sourceMap


## sourceRoot


## strict


## strictBindCallApply


## strictFunctionTypes


## strictNullChecks


## strictPropertyInitialization


## stripInternal


## suppressExcessPropertyErrors


## suppressImplicitAnyIndexErrors


## target


## traceResolution


## typeRoots


## types


## useDefineForClassFields

