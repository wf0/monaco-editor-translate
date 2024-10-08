# 快速开始


## npm 使用

``` bash
npm install uni-pptx
```
```js
import { UniPPT } from "uni-pptx";
import "uni-pptx/style.css";

const uniPPT = new UniPPT({ container: "#app" });
```

```css
#app {
    min-width: 1000px;
    min-height: 600px;
  }
```
::: warning 温馨提示
为了达到最佳的显示效果，本项目推荐的挂载元素宽高尺寸应大于 **1000 x 600**;
:::

## 浏览器使用

```js
<script src="https://unpkg.com/uni-pptx"></script>
<link rel="stylesheet" href="https://unpkg.com/uni-pptx/style.css">

<script>
    window.onload = function () {
        const uniPPT = new UniPPT({ container: "#app" });
    }
</script>

```

## 类型接口
```ts
/** 导出 PPtx 构造函数参数对象 */
export interface IPptxOptions {
  container: Element | HTMLElement | string; // 选择器
  width?: number; // konva 宽度
  height?: number; // konva 高度
  websocket?: IYjsWebsocket;
}

// websocket 协同参数
export interface IYjsWebsocket {
  url: string; // 链接地址
  roomname: string; // 房间名 - 用于区分不同的 协同 room
  userid: string; // 用户id
  username?: string; // 用户名
}
```