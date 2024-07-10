# IViewZoneChangeAccessor

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IViewZoneChangeAccessor.html
:::

允许添加或删除区域的访问者。

```ts
interface IViewZoneChangeAccessor {
    addZone(zone): string;
    layoutZone(id): void;
    removeZone(id): void;
}
```

## addZone
- 语法：`addZone(zone): string`
- 参数：`zone`: [ IViewZone](/api/editor/IViewZone.md)
- 描述：添加一个区域。
## layoutZone
- 语法：`layoutZone(id): void`
- 参数：`id`: `string`
- 描述：重新布局一个区域。
## removeZone
- 语法：`removeZone(id): void`
- 参数：`id`: `string`
- 描述：移除一个区域。