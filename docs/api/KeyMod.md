# KeyMod

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#classes/KeyMod.html
:::

```ts
new KeyMod(): KeyMod
// 源码写法 editor.api.d.ts :
export class KeyMod {
    static readonly CtrlCmd: number;
    static readonly Shift: number;
    static readonly Alt: number;
    static readonly WinCtrl: number;
    static chord(firstPart: number, secondPart: number): number;
}
```

::: danger 注意
很多人一想到 Class，就去想 new Class() 得到实例对象，但是别忘了，有些方法和属性是可以直接定义为 static 的，所以，KeyMod.CtrlCmd 等等，都是可以直接访问的，不需要 new KeyMod()。
:::

## Alt
 
- 类型：`number`
- 描述：Alt 键

## CtrlCmd

- 类型：`number`
- 描述：Ctrl 键

## Shift

- 类型：`number`
- 描述：Shift 键


## WinCtrl

- 类型：`number`
- 描述：Windows 键

## chord

- 类型：`(firstPart: number, secondPart: number) => number`
- 描述：组合键

::: danger 注意
// console.log(KeyMod.CtrlCmd) ==> 2048

// 不能执行快捷键

KeyMod.chord(KeyMod.CtrlCmd, KeyCode.KeyM)

// 下面的写法可执行快捷键 Ctrl M

KeyMod.chord(KeyMod.CtrlCmd | KeyCode.KeyM)
:::
