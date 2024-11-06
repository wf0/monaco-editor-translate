---
navbar: false
---


# 常见问题（FAQ）

<backTop/>

本章内容搜集了大家反馈的常见问题，如果官方文档和此列表都不能解答您的疑问，可加群讨论、提[ISSUES](https://gitee.com/wfeng0/uni-pptx/issues/new), 很乐意帮您解决问题。

::: details 交流群：
<img src="/user.png" />
:::

## 如何使用

::: details npm 使用

``` js
// 下载依赖
npm install uni-pptx

// 引入uni-pptx
import { UniPPTX } from "uni-pptx";

const pptx = new UniPPTX({ container: "#app" });
```

:::



::: details 浏览器使用

```js
<script src="https://unpkg.com/uni-pptx"></script>
<link rel="stylesheet" href="https://unpkg.com/uni-pptx/dist/style.css">

<script>
    window.onload = function () {
        const pptx = new UniPPTX({ container: "#app" });
    }
</script>

```
:::


::: details 源码构建

```bash
## 克隆仓库
git clone https://gitee.com/wfeng0/uni-pptx.git

## 下载依赖
npm install

## 启动项目
npm run dev
```
:::

::: warning 温馨提示
为了达到最佳的显示效果，本项目推荐的挂载元素宽高尺寸应大于 **1000 x 600**;

```css
#app {
    min-width: 1000px;
    min-height: 600px;
  }
```
:::

## 性能问题
1. 主编辑区基于 Konva 构建，它是一个HTML5 Canvas JavaScript 框架，相较于 SVG、DOM 渲染方案，Konva 在性能上表现更好;
2. 当然，本项目菜单、工具栏等都是 DOM 渲染，性能上不如 Konva，但可以满足大部分需求;

## 兼容性问题
1. 本项目采用了大量的 css 3 动画、ES 6 新特性，在IE浏览器上可能无法正常显示，建议使用 Chrome 浏览器。
2. 暂不支持移动端，后续会考虑支持。

## 二次开发问题
1. 本项目完全开源，欢迎大家 fork，贡献代码，一起完善本项目。
2. 本项目是 TypeScript 开发的，可在任意框架中使用，如 Vue、React 等。
3. 本项目具备完善的文档，文档中已详细描述了项目使用技术、难点等，可参考文档进行二次开发。

## 如何实现协同
1. 需要提供可用的 WebSocket 服务，可使用[官方 y-websocket](/unippt/read/crdt.html#官方服务源码解析)或者自己搭建。
2. 具体使用、搭建方法，请参照 [协同实现原理](/unippt/read/crdt.html) 章节。

## 导入导出如何实现
请参照 [文件导入导出](/unippt/read/pptxIAO.html) 章节。



## 代码质量及可维护性
1. 本应用采用 TypeScript 开发，使用 Vite 构建，代码质量及可维护性都得到了很好的保障，同时，还采用了 Eslint 等工具进行代码检查，保证代码质量
2. npm 提供了完整的项目类型标注文件，方便使用者使用。
3. 如若使用 TS，则提供完整的类型提示，如下：

<img src="/unipptx-tips.png" />


## saved 返回数据结构说明


## 如何把数据保存到数据库？有没有服务端存储和协作的解决方案？

