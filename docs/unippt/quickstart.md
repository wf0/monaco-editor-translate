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