---
navbar: false
---

# 快速开始

<backTop/>



## npm 使用

``` bash
npm install uni-pptx
```
```js
import { UniPPTX } from "uni-pptx";

const pptx = new UniPPTX({ container: "#app" });
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
<link rel="stylesheet" href="https://unpkg.com/uni-pptx/dist/style.css">

<script>
    window.onload = function () {
        const pptx = new UniPPTX({ container: "#app" });
    }
</script>

```

## 源码构建

```bash
## 克隆仓库
git clone https://gitee.com/wfeng0/uni-pptx.git

## 下载依赖
npm install

## 启动项目
npm run dev
```

::: warning 温馨提示
**Node.js（^18.18.0、^20.9.0 或 >=21.1.0）**

项目使用了 Eslint 语法检查工具，因此对 node 的最低版本是有要求的哈~
:::