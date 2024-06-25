# KeyCode
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#enums/KeyCode.html
:::

## 注意事项
::: danger 注意 
这里的 KeyCode 是 Monaco Editor，是虚拟代码，该值不具有任何固有含义。

**该值与 Windows 键盘键码不同，不具备一致性，仅作为虚拟键盘键码，在 Monaco Editor 中使用。**

如下举例了 Monaco Editor 与 Windows 键盘键码的输出结果对比：
<img src="/KeyB.png"/>
:::

::: details 示例
```js
const edi = editor.create(dom, {
    value: 'function foo() { console.log("Hello, world!"); }',
    language: "javascript",
});
edi.onKeyDown(({ keyCode, code }) => {
    console.log("onKeyDown", code, keyCode);
});
window.addEventListener("keydown", (e) => {
    console.log("window", e.code, e.keyCode);
});

```
:::



::: danger 温馨提示
KeyCode 不需要铭记，使用过程中，实时打印 keyCode 查看键码即可。

实测键码会根据键盘类型、键盘布局、系统语言等，会有所差异。
:::

## 使用须知

列举这么多键码，并不是为了用户在使用过程中进行查询映射，而是快捷使用键值🐎，方便使用。

::: danger 枚举特性实现 keyCode 的映射
```js
import { KeyCode } from 'monaco-editor';
 edi.onKeyDown((e) => {
    // 更推荐使用枚举的特性实现 keyCode 的映射
    if(e.keyCode === KeyCode.Escape) // ...
 })
```
:::

## ABNT_C1
- 键码：`115`
- 描述：`ABNT_C1（巴西）键`

## ABNT_C2
- 键码：`116`
- 描述：`ABNT_C2（巴西）键`

## Alt
- 键码：`6`
- 描述：`Alt 键`

## AudioVolumeDown
- 键码：`119`
- 描述：`音量减键`
- 示例：
<img src='/audioVolumeDown.png'/>

## AudioVolumeMute
- 键码：`117`
- 描述：`音量静音键`

## AudioVolumeUp
- 键码：`118`
- 描述：`音量加键`

## Backquote
- 键码：`91`
- 描述：`键盘 ~ 键`
- 示例：
<img src='/Backquote.png'/>

## Backslash
- 键码：`93`
- 描述：`键盘 | 键`
- 示例：
<img src='/Backslash.png'/>

## Backspace
- 键码：`1`
- 描述：`Backspace 键`
- 示例：
<img src='/Backspace.png'/>

## BracketLeft
- 键码：`92`
- 描述：`键盘 [ 键`
- 示例：
<img src='/BracketLeft.png'/>

## BracketRight
- 键码：`94`
- 描述：`键盘 ] 键`
- 示例：
<img src='/BracketRight.png'/>

## BrowserBack
- 键码：`122`
- 描述：`浏览器后退键`

## BrowserForward
- 键码：`123`
- 描述：`浏览器前进键`

## BrowserHome
- 键码：`121`
- 描述：`浏览器首页键`

## BrowserSearch
- 键码：`120`
- 描述：`浏览器搜索键`

## CapsLock
- 键码：`8`
- 描述：`CapsLock 键`

## Clear
- 键码：`131`
- 描述：`清除键`

## Comma
- 键码：`87`
- 描述：`键盘 , 键`

## ContextMenu
- 键码：`58`
- 描述：`系统菜单键`

## Ctrl
- 键码：`5`
- 描述：`Ctrl 键`

## Delete
- 键码：`20`
- 描述：`Delete 键`

## DependsOnKbLayout
- 键码：`-1`
- 描述：`键码依赖键盘布局`

## Digit0
- 键码：`21`
- 描述：`键盘 0 键`

## Digit1
- 键码：`22`
- 描述：`键盘 1 键`

## Digit2
- 键码：`23`
- 描述：`键盘 2 键`

## Digit3
- 键码：`24`
- 描述：`键盘 3 键`

## Digit4
- 键码：`25`
- 描述：`键盘 4 键`

## Digit5
- 键码：`26`
- 描述：`键盘 5 键`

## Digit6
- 键码：`27`
- 描述：`键盘 6 键`

## Digit7
- 键码：`28`
- 描述：`键盘 7 键`

## Digit8
- 键码：`29`
- 描述：`键盘 8 键`

## Digit9
- 键码：`30`
- 描述：`键盘 9 键`

## DownArrow
- 键码：`18`
- 描述：`下箭头键`

## End
- 键码：`13`
- 描述：`End 键`

## Enter
- 键码：`3`
- 描述：`Enter 键`

## Equal
- 键码：`86`
- 描述：`键盘 = 键`

## Escape
- 键码：`9`
- 描述：`Escape 键`

## F1
- 键码：`59`
- 描述：`F1 键`

## F2
- 键码：`60`
- 描述：`F2 键`

## F3
- 键码：`61`
- 描述：`F3 键`

## F4
- 键码：`62`
- 描述：`F4 键`

## F5
- 键码：`63`
- 描述：`F5 键`

## F6
- 键码：`64`
- 描述：`F6 键`

## F7
- 键码：`65`
- 描述：`F7 键`

## F8
- 键码：`66`
- 描述：`F8 键`

## F9
- 键码：`67`
- 描述：`F9 键`

## F10
- 键码：`68`
- 描述：`F10 键`

## F11
- 键码：`69`
- 描述：`F11 键`

## F12
- 键码：`70`
- 描述：`F12 键`

## F13
- 键码：`71`
- 描述：`F13 键`

## F14
- 键码：`72`
- 描述：`F14 键`

## F15
- 键码：`73`
- 描述：`F15 键`

## F16
- 键码：`74`
- 描述：`F16 键`

## F17
- 键码：`75`
- 描述：`F17 键`

## F18
- 键码：`76`
- 描述：`F18 键`

## F19
- 键码：`77`
- 描述：`F19 键`

## F20
- 键码：`78`
- 描述：`F20 键`

## F21
- 键码：`79`
- 描述：`F21 键`

## F22
- 键码：`80`
- 描述：`F22 键`

## F23
- 键码：`81`
- 描述：`F23 键`

## F24
- 键码：`82`
- 描述：`F24 键`

## Home
- 键码：`14`
- 描述：`Home 键`

## Insert
- 键码：`19`
- 描述：`Insert 键`

## IntlBackslash
- 键码：`97`
- 描述：`键盘 \ 键`
- 示例：
<img src='/IntlBackslash.png' />

## KEY_IN_COMPOSITION
- 键码：`114`
- 描述：`IME处理输入时覆盖所有键代码`

## KeyA
- 键码：`31`
- 描述：`键盘 A 键`

## KeyB
- 键码：`32`
- 描述：`键盘 B 键`

## KeyC
- 键码：`33`
- 描述：`键盘 C 键`

## KeyD
- 键码：`34`
- 描述：`键盘 D 键`

## KeyE
- 键码：`35`
- 描述：`键盘 E 键`

## KeyF
- 键码：`36`
- 描述：`键盘 F 键`

## KeyG
- 键码：`37`
- 描述：`键盘 G 键`

## KeyH
- 键码：`38`
- 描述：`键盘 H 键`

## KeyI
- 键码：`39`
- 描述：`键盘 I 键`

## KeyJ
- 键码：`40`
- 描述：`键盘 J 键`

## KeyK
- 键码：`41`
- 描述：`键盘 K 键`

## KeyL
- 键码：`42`
- 描述：`键盘 L 键`

## KeyM
- 键码：`43`
- 描述：`键盘 L 键`

## KeyN
- 键码：`44`
- 描述：`键盘 M 键`

## KeyO
- 键码：`45`
- 描述：`键盘 O 键`

## KeyP
- 键码：`46`
- 描述：`键盘 P 键`

## KeyQ
- 键码：`47`
- 描述：`键盘 Q 键`

## KeyR
- 键码：`48`
- 描述：`键盘 R 键`

## KeyS
- 键码：`49`
- 描述：`键盘 S 键`

## KeyT
- 键码：`50`
- 描述：`键盘 T 键`

## KeyU
- 键码：`51`
- 描述：`键盘 U 键`

## KeyV
- 键码：`52`
- 描述：`键盘 V 键`

## KeyW
- 键码：`53`
- 描述：`键盘 W 键`

## KeyX
- 键码：`54`
- 描述：`键盘 X 键`

## KeyY
- 键码：`55`
- 描述：`键盘 Y 键`

## KeyZ
- 键码：`56`
- 描述：`键盘 Z 键`

## LaunchApp2
- 键码：`130`
- 描述：`打开第二应用程序键`

## LaunchMail
- 键码：`129`
- 描述：`打开邮件键`

## LaunchMediaPlayer
- 键码：`128`
- 描述：`打开媒体播放器键`

## LeftArrow
- 键码：`15`
- 描述：`左箭头键`

## MAX_VALUE
- 键码：`132`
- 描述：`最大键码`

## MediaPlayPause
- 键码：`127`
- 描述：`播放/暂停键`

## MediaStop
- 键码：`126`
- 描述：`停止键`

## MediaTrackNext
- 键码：`124`
- 描述：`下一曲键`

## MediaTrackPrevious
- 键码：`125`
- 描述：`上一曲键`

## Meta
- 键码：`57`
- 描述：`Meta 键`

## Minus
- 键码：`88`
- 描述：`键盘 - 键`

## NUMPAD_SEPARATOR
- 键码：`110`
- 描述：`键盘 , 键`

## NumLock
- 键码：`83`
- 描述：`键盘 NumLock 键`

## Numpad0
- 键码：`98`
- 描述：`键盘 0 键`

## Numpad1
- 键码：`99`
- 描述：`键盘 1 键`

## Numpad2
- 键码：`100`
- 描述：`键盘 2 键`

## Numpad3
- 键码：`101`
- 描述：`键盘 3 键`

## Numpad4
- 键码：`102`
- 描述：`键盘 4 键`

## Numpad5
- 键码：`103`
- 描述：`键盘 5 键`

## Numpad6
- 键码：`104`
- 描述：`键盘 6 键`

## Numpad7
- 键码：`105`
- 描述：`键盘 7 键`

## Numpad8
- 键码：`106`
- 描述：`键盘 8 键`

## Numpad9
- 键码：`107`
- 描述：`键盘 9 键`

## NumpadAdd
- 键码：`109`
- 描述：`键盘 + 键`

## NumpadDecimal
- 键码：`112`
- 描述：`键盘 , 键`

## NumpadDivide
- 键码：`113`
- 描述：`键盘 / 键`

## NumpadMultiply
- 键码：`108`
- 描述：`键盘 * 键`

## NumpadSubtract
- 键码：`111`
- 描述：`键盘 - 键`

## OEM_8
- 键码：`91`
- 描述：`用于杂项字符，它可以根据键盘的不同而变化。`

## PageDown
- 键码：`12`
- 描述：`PageDown 键`

## PageUp
- 键码：`11`
- 描述：`PageUp 键`

## PauseBreak
- 键码：`7`
- 描述：`Pause/Break 键`

## Period
- 键码：`89`
- 描述：`键盘 . 键`

## Quote
- 键码：`95`
- 描述：`键盘 ' 键`

## RightArrow
- 键码：`17`
- 描述：`右箭头键`

## ScrollLock
- 键码：`84`
- 描述：`ScrollLock 键`

## Semicolon
- 键码：`85`
- 描述：`键盘 ; 键`

## Shift
- 键码：`4`
- 描述：`Shift 键`

## Slash
- 键码：`90`
- 描述：`键盘 / 键`

## Space
- 键码：`10`
- 描述：`Space 键`

## Tab
- 键码：`2`
- 描述：`Tab 键`

## Unknown
- 键码：`0`
- 描述：`未知键`

## UpArrow
- 键码：`16`
- 描述：`上箭头键`
