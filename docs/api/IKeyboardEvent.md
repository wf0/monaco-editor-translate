# IKeyboardEvent

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/IKeyboardEvent.html
:::

```ts
interface IKeyboardEvent {
    _standardKeyboardEventBrand: true;
    altGraphKey: boolean;
    altKey: boolean;
    browserEvent: KeyboardEvent;
    code: string;
    ctrlKey: boolean;
    keyCode: KeyCode;
    metaKey: boolean;
    shiftKey: boolean;
    target: HTMLElement;
    equals(keybinding): boolean;
    preventDefault(): void;
    stopPropagation(): void;
}
```

## 快捷链接

<script setup>
    const data = [
  { icon: "P", link: "_standardKeyboardEventBrand" },
  { icon: "P", link: "altGraphKey" },
  { icon: "P", link: "altKey" },
  { icon: "P", link: "browserEvent" },
  { icon: "P", link: "code" },
  { icon: "P", link: "ctrlKey" },
  { icon: "P", link: "keyCode" },
  { icon: "P", link: "metaKey" },
  { icon: "P", link: "shiftKey" },
  { icon: "P", link: "target" },
  { icon: "M", link: "equals" },
  { icon: "M", link: "preventDefault" },
  { icon: "M", link: "stopPropagation" },
];

</script>
<dataItems :data="data"/>


## _standardKeyboardEventBrand
- 类型：`true`


## altGraphKey
- 类型：`boolean`


## altKey
- 类型：`boolean`


## browserEvent
- 类型：`KeyboardEvent`


## code
- 类型：`string`


## ctrlKey
- 类型：`boolean`


## keyCode
- 类型：[KeyCode](/api/KeyCode.md)


## metaKey
- 类型：`boolean`


## shiftKey
- 类型：`boolean`


## target
- 类型：`HTMLElement`


## equals
- 语法：`equals(keybinding: number): boolean`
- 参数：`keybinding`：`number`


## preventDefault
- 语法：`stopPropagation(): void`
- 描述：阻止默认行为


## stopPropagation
- 语法：`stopPropagation(): void`
- 描述：阻止事件冒泡

