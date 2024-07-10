# Monaco Editor API

<backTop/>

::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html
:::

## 概述

    Monaco Editor 是一个轻量级的代码编辑器，其支持语言包括：css、html、json、go、xml、javascript、typescript、markdown、python、c、c++、c#、php、sql 等 30 多种语言，支持代码diff模型对比、语法高亮、代码提示、格式化等功能，具有丰富的鼠标、光标交互事件，丰富的指令与菜单项，是绝大部分在线 WebIDE 项目的首选。

::: tip 前往体验
https://microsoft.github.io/monaco-editor/playground.html?source=v0.49.0
:::

<p>
    <img src='/monaco.png' />
</p>

## 下载

```shell
> npm install monaco-editor
```

## 使用

```js
import * as monaco from 'monaco-editor';

monaco.editor.create(document.getElementById('container'), {
	value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
	language: 'javascript'
});
```

::: danger Uncaught Error: Unexpected usage 解决办法
[Unexpected usage](/unexpected-usage.md)
:::

## API 整理

    根据官网的文档，API 可分为6类：Namespace（命名空间）、Class（类）、Interface（接口）、Function（函数）、Enumeration（枚举）、Type Alias（类型别名）。

- **Namespace（命名空间）**
  
    namespace 是一种将相关代码组织在一起的方式，它出现在 ES 模块诞生之前，作为 TypeScript 自己的模块格式而发明的。

::: danger 温馨提示
本文主要是通过具名导出实现的样例，后续代码中极少出现 monaco.editor.create 的用法，更多的是 editor.create 的用法。


```js
// import * as monaco from 'monaco-editor';
import { editor, languages, KeyCode, KeyMod, ... } from 'monaco-editor'
editor.create(...)
```
:::

   

- **Class（类）**

    导出的类大致有两种类型，一种是可直接使用的类的属性方法，一种是需要构造实例对象，进行使用。这块需要具体的类时，会详细讲述用法。

    ```ts
    import { KeyMod } from 'monaco-editor'

    // 源码的写法： editor.api.d.ts
    export class KeyMod {
        static readonly CtrlCmd: number;
        static readonly Shift: number;
        static readonly Alt: number;
        static readonly WinCtrl: number;
        static chord(firstPart: number, secondPart: number): number;
    }

    // 因此，可直接调用类的属性及方法，不需要创建实例对象。
    ```

- **Interface（接口）**

    interface 是对象的模板，可以看作是一种类型约定，使用了某个模板的对象，就拥有了指定的类型结构。我们在调用方法时，传入的参数类型必须与接口中定义的类型一致。
    
    ```ts
    import { editor } from 'monaco-editor';
  
    /**
     * Parameters
     * @param { HTMLElement } domElement
     * @param { IStandaloneEditorConstructionOptions } options
     * @param { IEditorOverrideServices } override
     */
    editor.create(domElement, options?, override?): IStandaloneCodeEditor

    // 传入的第二参数约定了options的数据类型，需要与 IStandaloneEditorConstructionOptions 保持一致
    
    /**
     * Interface - IStandaloneEditorConstructionOptions 
     */
    interface IStandaloneEditorConstructionOptions {
        acceptSuggestionOnCommitCharacter?: boolean;
        acceptSuggestionOnEnter?: "off" | "on" | "smart";
        accessibilityHelpUrl?: string;
        // other options ...
    }
    ```

- **Function（函数）**

    Function 则是可以直接进行调用，需要传递对应参数即可。

- **Enumeration（枚举）**

    枚举则是约定了数据的可能取值，需要通过枚举的key进行调用。

- **Type Alias（类型别名）**

    --


## 相关参考资料

1. [Monaco Editor API](https://microsoft.github.io/monaco-editor/docs.html)
2. [Monaco-editor 学习文档](https://aydk.site/)
3. [weixin_45855469的博客](https://blog.csdn.net/weixin_45855469/category_12613808.html)
4. `还有些收费的教程，就不在这推荐了，大家自行搜索吧，尊重作者的版权，所以就不放链接了。`