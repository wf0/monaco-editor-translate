# IActionDescriptor

<backTop />
        
::: details 原文链接
https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IActionDescriptor.html
:::

```ts
interface IActionDescriptor {
    contextMenuGroupId?: string;
    contextMenuOrder?: number;
    id: string;
    keybindingContext?: string;
    keybindings?: number[];
    label: string;
    precondition?: string;
    run(editor, ...args): void | Promise<void>;
}
```

## id

- 类型：`string`
- 描述：action 唯一标识符

## label

- 类型：`string`
- 描述：action 显示的名称

## contextMenuGroupId

- 类型：`string`
- 描述：action 显示在菜单中的分组，可选以下值:
    - `navigation`: 导航组
    - `1_modification`: 修改
    - `2_cutcopypaste`: 剪切、复制、粘贴
    - `null`:不显示在上下文菜单中


<p>
    <img src='/editor-addEditorAction-actionContextGroupID.png' />
</p>

## contextMenuOrder

- 类型：`number`
- 描述：action 显示在菜单中的排序，值越小越靠前

## keybindingContext

- 类型：`string`
- 描述：action 运行前的条件（官网并没有给出太多的示例，这块也是有点难理解）

## keybindings

- 类型：`number[]`
- 描述：快捷键列表

## precondition

- 类型：`string`
- 描述：先决条件规则，该值应该是上下文键表达式（官网并没有给出太多的示例，这块也是有点难理解）

## run

- 类型：`(editor, ...args) => void | Promise<void>`
- 描述：action 运行函数
