# 项目架构

<p>
    <img src="/unippt-jgt.png" />
    <img src="/unippt-yjsjgt.png" />
</p>

结构图如上，在架构上，借鉴了 [canvas-editor](https://hufe.club/canvas-editor-docs/) 的优秀思路，向外暴露 UniPPTX 核心模块，并提供用户可操作对象：
```ts
class UniPPTX {
  public command: Command; // Command API
  public eventBus: EventBus<EventBusMap>; // 事件监听器
  public register: Register; // 注册快捷键
  public destroy: () => void; // 销毁编辑器方法
  public render: () => void; // 重新渲染
}
```

在协同部分，将 Yjs 与 Draw 进行唯一联系，降低协同部分对源功能代码的侵入，同时也将 Yjs 模块与其他模块进行解耦，提升可阅读性、可维护性。
```ts
// Draw.ts 提供唯一方法 广播协同数据，其他模块需要协同，调用此方法即可
// 广播 websocket
public broadcast(data: YjsSendData) {
    if (!this.websocket) return;
    this.websocket.send(data);
}

// WebSocket.ts 中，监听协同事件，通过唯一的 draw 参数，实现事件的响应
// 任何的事件，都直接触发 draw eventHandle 即可
this.ymap.observe((event, transaction) => {
    if (transaction.local) return; // 本地触发的 observer 不需要观察
    this.onYjsEvent(event);
});
```