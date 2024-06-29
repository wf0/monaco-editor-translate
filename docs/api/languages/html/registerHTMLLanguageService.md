# registerHTMLLanguageService
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#functions/languages.html.registerHTMLLanguageService.html
:::

为languageId注册新的HTML语言服务。注意：“html”、“handlebar”和“razor”是默认注册的。


## registerHTMLLanguageService
- 语法：`registerHTMLLanguageService(languageId, options?, modeConfiguration?): LanguageServiceRegistration`
- 参数：
  - `languageId`: `string`
  - `options`: [languages](/api/languages.md).[html](/api/languages/html.md).[Options](/api/languages/html/Options.md)
  - `modeConfiguration`: [languages](/api/languages.md).[html](/api/languages/html.md).[ModeConfiguration](/api/languages/html/ModeConfiguration.md)
- 描述：使用此方法可以向HTML服务注册其他语言ID。在打开编辑器模型之前，必须注册语言服务器。