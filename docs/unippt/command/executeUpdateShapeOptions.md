# executeUpdateShapeOptions

<backTop />

- 描述：更新元素属性

- 语法：`unippt.command.executeUpdateShapeOptions(options: IShapeOptions)`

- 参数：
```ts
/** 更新元素属性 */
export type IShapeOptions = {
  x?: number;
  y?: number;
  text?: string;
  fill?: string;
  width?: number;
  height?: number;
  stroke?: string;
  fontSize?: number;
  textColor?: string;
  strokeWidth?: number;
  hiddenStroke?: boolean;
  strokeType?: "dash" | "solid";
};
```

- 示例：
```ts
// 设置元素属性也是需要先选中元素哈！
unippt.command.executeUpdateShapeOptions({x:100}) // 更新元素位置 x
unippt.command.executeUpdateShapeOptions({text:"hello world"}) // 更新元素文本
```

- 输出: 
<img src="/unippt-executeUpdateShapeOptions.gif" />