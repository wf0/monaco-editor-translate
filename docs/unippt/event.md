# 事件

::: tip 提示
为了规避 listener 只能响应一个方法的小缺陷，本项目使用 eventBus 进行事件的派发监听,不再提供 listener 方式进行事件监听。
:::

## 使用方法

```ts
import { UniPPT } from "uni-pptx";
import "uni-pptx/style.css";

const uniPPT = new UniPPT({ container: "#app" });

uniPPt.eventBus.on(eventName, eventHandler)
```

## saved
## loaded
## destroyed
## thumbChanged