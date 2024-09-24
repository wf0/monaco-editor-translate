# executeDeleteSlide

<backTop />

- 描述：删除幻灯片 (**自然顺序**)

- 语法：`unippt.command.executeDeleteSlide(index?: number)`

- 参数：`@param index 幻灯片索引 默认为当前 `

- 示例：
```ts
unippt.command.executeDeleteSlide(); // 删除当前幻灯片
unippt.command.executeDeleteSlide(1); // 删除第一张幻灯片
```