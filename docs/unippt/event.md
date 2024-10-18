# 事件

::: tip 提示
为了规避 listener 只能响应一个方法的小缺陷，本项目使用 eventBus 进行事件的派发监听,不再提供 listener 方式进行事件监听。
:::

## 使用方法

```ts
import { UniPPTX } from "uni-pptx";
import "uni-pptx/style.css";

const pptx = new UniPPTX({ container: "#app" });

pptx.eventBus.on(eventName, eventHandler)
```



## saved

- 描述：Ctrl + S 保存时触发事件

- 语法：`unippt.eventBus.on('saved',(data: string)=>void)`

- 参数：`data: string` 返回值是幻灯片数组的JSON字符串, 例如 `[layer1.json,layer2.json]`

- 示例：
```ts
unippt.eventBus.on('saved',(data)=>{
    console.log('saved data:', data)
})
```

## loaded

- 描述：幻灯片编辑器加载完成事件

- 语法：`unippt.eventBus.on('loaded',()=>void)`

- 示例：
```ts
unippt.eventBus.on('loaded',()=>{
    console.log('编辑器加载完成')
})
```

## destroyed

- 描述：幻灯片编辑器销毁事件

- 语法：`unippt.eventBus.on('destroyed',()=>void)`

- 示例：
```ts
unippt.eventBus.on('destroyed',()=>{
    console.log('编辑器已销毁')
})
```


## thumbChanged

- 描述：幻灯片缩略图变化事件

- 语法：`unippt.eventBus.on('thumbChanged',(data: string[])=>void)`

- 参数：`data: string[]` 返回值为缩略图列表

- 示例：
```ts
unippt.eventBus.on('thumbChanged',(imageList)=>{
    console.log('thumbChanged', imageList)
})
```