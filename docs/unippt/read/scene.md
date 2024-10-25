# 表格、统计图实现思路

<backTop/>
<HiddenHeder />

表格、统计图、LOGO 等绘制类实现思路相通，均采用 **[Konva 自定义图形](http://konvajs-doc.bluehymn.com/docs/shapes/Custom.html)** 实现，底层是通过 canvas API 手动绘制想要图案，如下示例：

```ts

const logo = new Konva.Shape({
    x: 0,
    y: 0,
    fill: undefined,
    /** 自定义LOGO实现方法 */
    sceneFunc: this.getLogoOptions.bind(this),
    // 绘制事件响应区域
    hitFunc: this.hitFunc,
});


/** 辅助函数 - 绘制 logo */
private getLogoOptions(ctx: Konva.Context, shape: Konva.Shape) {
    const { width, height } = shape.size();
    // 定义圆弧大小
    const radius = 10;
    // 绘制矩形
    ctx.beginPath();
    ctx.fillStyle = this.nodeFillColor;
    ctx.moveTo(radius, 0);
    ctx.lineTo(width - radius, 0);
    // 绘制右上圆角
    ctx.arc(width - radius, radius, radius, Math.PI * 1.5, Math.PI * 2);
    ctx.lineTo(width, height - radius);
    // 绘制右下圆角
    ctx.arc(width - radius, height - radius, radius, 0, Math.PI * 0.5);
    ctx.lineTo(radius, height);
    // 绘制左下圆角
    ctx.arc(radius, height - radius, radius, Math.PI * 0.5, Math.PI);
    ctx.lineTo(0, radius);
    // 绘制左上圆角
    ctx.arc(radius, radius, radius, Math.PI, Math.PI * 1.5);
    ctx.closePath();
    ctx.fill();

    // 绘制内部文字 - P
    ctx.fillStyle = this.nodeTextColor;
    ctx.font = "bold 60px Arial";
    ctx.textBaseline = "bottom";
    ctx.fillText(
        "P",
        width * 0.5 - ctx.measureText("p").width / 2,
        height * 0.5 + ctx.measureText("p").fontBoundingBoxAscent / 2
    );

    ctx.fillStrokeShape(shape);
}
```