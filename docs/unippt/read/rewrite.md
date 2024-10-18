# 重写相关方法


## 重写 konva 基类

konva 所提供的节点类型，是基础的节点（Rect、Circle、Ellipse...），为了满足应用中复杂的交互，我们将 konva 底层设计为下结构：

<p>
    <img src="/base-group.png" />
</p>

这样，所有的基类都是 Konva.Group 类型，既能实现基本元素的绘制，还能为每一个元素添加文本节点（Konva.Text），同时，在事件机制上，统一由 Group 进行捕获，也便于我们的设计开发，关键代码如下：

```ts
// Rect 矩形
public Rect(payload: Konva.RectConfig) {
    // 创建分组
    const group = this.getGroup(payload);
    // 创建konva原型 【修正坐标】
    const rect = new Konva.Rect({ ...payload, x: 0, y: 0 });
    // 创建默认文字
    const text = this.getGroupText(payload);
    // 添加注意顺序，后添加的 ZIndex 大
    this.overwriteGraph(group.add(rect, text));
    return group;
}

/**
 * 重写 Konva.Node 的事件，以实现更多功能
 * @param graph
 */
public overwriteGraph(graph: Konva.Node) {
    graph.on("click", (e) => groupClick(e, this.draw));
    graph.on("dragstart", () => groupDragStart(this.draw));
    graph.on("dragmove", (e) => groupDragMove(e, this.draw));
    graph.on("dragend", (e) => groupDragend(e, this.draw));
    graph.on("mouseenter", () => groupMouseEnter(this.draw));
    graph.on("mouseleave", () => groupMouseLeave(this.draw));
    graph.on("dblclick", (e) => groupDbclick(e, this.draw));
}
```

::: warning 提示
```ts
const group = new Konva.Group({x:10,y:10})

const rect = new Konva.Rect({x:10,y:10})

group.add(rect)
```

上诉代码会导致 Rect 的坐标偏移是基于父类 Group，因此页面上显示的效果为 rect 在 ({x:20,y:20}) 的位置上。因此才需要修正 group 子类的坐标。**用了此类设计思路的基类，都做了这个偏移修复哈**
:::


## 重写 Konva.Image 类型

原生的 konva.image 的用法是基于 image.onload 方案：

::: details 官网案例(Image 图片)
```ts
 // 官网案例 API:
var imageObj = new Image();
imageObj.onload = function() {
  var yoda = new Konva.Image({
    x: 50,
    y: 50,
    image: imageObj,
    width: 106,
    height: 118
  });

  // add the shape to the layer
  layer.add(yoda);
  layer.batchDraw();
};
imageObj.src = '/assets/yoda.jpg';
```
:::

我们在实现中，为了支持更多类型的图片资源，需要先对图片资源进行解析，才能创建 Image ，例如：**需要支持用户选择图片、需要支持网络 URL、需要支持请求回调 Blob 类型的图片等**

```ts

/**
 * Image 图片
 *  1. 为了满足用户多需求图片上传方案，需要先进行图片资源解析，判断是 File Blob String 资源类型
 *  2. 根据解析的图片资源，进行 new Image() 创建，并添加到 Group 中
 */
public async Image(payload: IKonvaImageConfig) {
    // 解析图片资源 File、Blob 均创建 FileReader 读取，string 则默认url
    const source = await getImageSource(payload.source);
    // 实现 Promise 回调
    return new Promise<Konva.Group>((resolve) => {
        const image = new Image();
        image.src = source;
        // 图片的处理需要基于 image.onload 事件回调
        image.onload = () => {
            // 创建 Group
            const group = this.getGroup(payload);
            // 注意此处的 x y 修正，否则图片会偏移
            const konvaImage = new Konva.Image({width,height,...payload,image,x: 0,y: 0});
            // 重写事件
            this.overwriteGraph(group.add(konvaImage));
            resolve(group);
        }
    })
 }
```

::: warning 温馨提示
下列用法部分仅针对源码部分的讲解及使用示例，项目所提供的 executeInsertImage command API 使用的是第一种(文件上传式)方案，本项目不涉及服务端，因此没做 URL 兼容，但是Image实现部分已支持，请放心使用。
:::


::: tip 使用方法
1. 文件上传式：
```ts
const input = document.createElement("input");
input.onchange = async (e: Event) => {
   const source = input.files[0];
   const image = await konvaGraph.Image({
     source,
   });
   konvaGraph.addShape({ shape: image }); // 将 Image 添加到 Stage 画布上
   input.value = "";
   input.remove();
 };
 input.click();
```

1. Fetch Blob 式：
```ts
const blob = xxx; // 这个blob可以是网络请求回调、等其他渠道获取/生成的
const image = await konvaGraph.Image({
     source: blob,
});
konvaGraph.addShape({ shape: image }); // 将 Image 添加到 Stage 画布上
```


3. 网络 URL 式：

**注意：网络资源会存在图片跨域问题，无法直接生成缩略图！请确保URL不存在跨域！！！**
```ts
const image = await konvaGraph.Image({
     source: 'https://www.image.com/random/100/200', // 示例地址
});
konvaGraph.addShape({ shape: image }); // 将 Image 添加到 Stage 画布上
```
:::
