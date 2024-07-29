# 主题定制

## 传统方案

我们可以使用 Monaco Editor 原有功能来实现主题的定制，具体用法可参考 [defineTheme](/api/editor/defineTheme.html#definetheme)。

## Syntax highlighter

[Shiki](https://shiki.tmrs.site/guide/)（式，一个日语词汇，意为 “样式”） 是一款美观而强大的代码语法高亮器，它与 VS Code 的语法高亮引擎一样，基于 TextMate 的语法及主题。Shiki 能为几乎所有主流编程语言提供非常准确且快速的语法高亮。

1. 安装 shiki

```js
npm i -D @shikijs/monaco
```

2. 使用方法

```js
import { createHighlighter } from 'shiki'
import { shikiToMonaco } from '@shikijs/monaco'
import * as monaco from 'monaco-editor-core'

 // 创建一个可复用的语法高亮器
  const highlighter = await createHighlighter({
    // 这里的 themes 参数可以传入多个主题，在 https://shiki.tmrs.site/themes#%E4%B8%BB%E9%A2%98 查看更多
    themes: ["vitesse-dark", "vitesse-light", "andromeeda", "aurora-x"],
    langs: ["javascript", "typescript", "vue"],
  });

  // 注册 Shiki 主题，并为 Monaco 提供语法高亮
  shikiToMonaco(highlighter, monaco);

  const dom = document.querySelector(".editor");

  const myEditor = editor.create(dom, {
    value: `// create a model`,
    language: "javascript",
    theme: "vitesse-dark",
  });

// 正常使用
```

[更多主题，请移步(主题 | Shiki)](https://shiki.tmrs.site/themes#%E4%B8%BB%E9%A2%98)

<img src="/shikiTheme.gif" />

## 参考资料
https://juejin.cn/post/7376514713742819378#heading-2