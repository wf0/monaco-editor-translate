# IMouseEvent

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/IMouseEvent.html
:::

```ts
interface IMouseEvent {
    altKey: boolean;
    browserEvent: MouseEvent;
    buttons: number;
    ctrlKey: boolean;
    detail: number;
    leftButton: boolean;
    metaKey: boolean;
    middleButton: boolean;
    posx: number;
    posy: number;
    rightButton: boolean;
    shiftKey: boolean;
    target: HTMLElement;
    timestamp: number;
    preventDefault(): void;
    stopPropagation(): void;
}
```

## 快捷链接

<script setup>
    const data = [
  { icon: "P", link: "altKey" },
  { icon: "P", link: "browserEvent" },
  { icon: "P", link: "buttons" },
  { icon: "P", link: "ctrlKey" },
  { icon: "P", link: "detail" },
  { icon: "P", link: "leftButton" },
  { icon: "P", link: "metaKey" },
  { icon: "P", link: "middleButton" },
  { icon: "P", link: "posx" },
  { icon: "P", link: "posy" },
  { icon: "P", link: "rightButton" },
  { icon: "P", link: "shiftKey" },
  { icon: "P", link: "target" },
  { icon: "P", link: "timestamp" },
  { icon: "M", link: "preventDefault" },
  { icon: "M", link: "stopPropagation" },
];

</script>
<dataItems :data="data"/>


## altKey
- 类型: `boolean`


## browserEvent
- 类型: `MouseEvent`


## buttons
- 类型: `number`


## ctrlKey
- 类型: `boolean`


## detail
- 类型: `number`


## leftButton
- 类型: `boolean`


## metaKey
- 类型: `boolean`


## middleButton
- 类型: `boolean`


## posx
- 类型: `number`


## posy
- 类型: `number`


## rightButton
- 类型: `boolean`


## shiftKey
- 类型: `boolean`


## target
- 类型: `HTMLElement`


## timestamp
- 类型: `number`


## preventDefault
- 语法: `preventDefault(): void`


## stopPropagation
- 语法: `stopPropagation(): void`

