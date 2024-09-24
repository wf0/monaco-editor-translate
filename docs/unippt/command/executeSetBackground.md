# executeSetBackground

<backTop />

- 描述：添加网格线

- 语法：`unippt.command.executeSetBackground(payload: IBackgroundLayerOptions)`

- 参数：
```ts
/** 背景图层管理器参数 */
export interface IBackgroundLayerOptions {
  global?: boolean; // 是否应用全部 - 特指背景颜色等属性是否应用到全局
  grid?: boolean; // 是否添加网格
  gridColor?: string; // 网格颜色
  ruler?: boolean; // 是否添加标尺
  bgType?: "fill" | "image"; // 背景类型
  fill?: string; // 背景填充颜色
  stroke?: string; // 背景边框颜色
  image?: string; // 背景图片
}
```

- 示例：
```ts
unippt.command.executeSetBackground({grid: true}) // 添加网格线
unippt.command.executeSetBackground({grid: false}) // 移除网格线

unippt.command.executeSetBackground({fill: 'red'}) // 设置背景颜色为红色
unippt.command.executeSetBackground({stroke: '#000'}) // 设置边框颜色为黑色

unippt.command.executeSetBackground({image: 'https://xxx.jpg'}) // 设置图片为背景
unippt.command.executeSetBackground({image: 'data:image/png;base64,xxx'}) // 设置 base64 图片为背景
unippt.command.executeSetBackground({bgType: "fill"}) // 移除背景图片

unippt.command.executeSetBackground({fill: "#00ff00", global: true}) // 应用到全局
```

- 输出: 
<img src="/unippt-executeSetBackground.gif" />