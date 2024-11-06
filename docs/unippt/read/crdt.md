---
navbar: false
---


# 协同实现原理

<backTop/>


## 协同技术

1. 底层使用的协同库是 [yjs](https://github.com/yjs/yjs)，官网：[https://yjs.dev/](https://yjs.dev/)，文档：[https://docs.yjs.dev/](https://docs.yjs.dev/)

2. 使用的协同数据传输类型为 [y-websocket](https://github.com/yjs/y-websocket)，可自定义协同服务处理逻辑
3. [深度解析 Yjs 协同编辑原理【看这篇就够了】](https://blog.csdn.net/weixin_47746452/article/details/135079472?spm=1001.2014.3001.5501)


## 官方服务源码解析

::: details Step1 创建服务实例
关键就是创建 ws server 实例，然后监听客户端连接事件，当有客户端连接时，调用 setupWSConnection 进行处理。


```js
const WebSocket = require('ws')
const wss = new WebSocket.Server({ noServer: true })
const setupWSConnection = require('./utils.cjs').setupWSConnection

// 关键是监听连接的事件，触发 setupWSConnection 方法
wss.on('connection', setupWSConnection)

```
:::


::: details Step2 客户端连接处理
当有客户端连接时，调用 setupWSConnection 进行处理，并对参数进行处理

```js
exports.setupWSConnection = (conn, req,) => {
   // listen and reply to events   
   /** @param {ArrayBuffer} message */ 
   conn.on('message', message => messageListener(conn, doc, new Uint8Array(message)))
}
```
:::




::: details Step3 消息处理
messageType 0: 消息数据类型，1: 用户意识数据类型（用户名、光标、颜色等）

然后执行异步读取数据

判断是否需要广播发送给其他客户端

```js
const messageListener = (conn, doc, message) => {
  try {
    switch (messageType) {
      case messageSync:
        /** 关注一下这个方法 */
        syncProtocol.readSyncMessage(decoder, encoder, doc, conn)
       
        if (encoding.length(encoder) > 1) {
          send(doc, conn, encoding.toUint8Array(encoder))
        }
        break
    }
  } catch (err) { }
}
```

:::




::: details Step4 读取数据
根据数据类型，判断采用什么方式进行文档的合并操作

```js
export const readSyncMessage = (decoder, encoder, doc, transactionOrigin) => {
  const messageType = decoding.readVarUint(decoder)
  switch (messageType) {
    case messageYjsSyncStep1:
      readSyncStep1(decoder, encoder, doc)
      break
    case messageYjsSyncStep2:
      readSyncStep2(decoder, doc, transactionOrigin)
      break
    case messageYjsUpdate:
      readUpdate(decoder, doc, transactionOrigin)
      break
    default:
      throw new Error('Unknown message type')
  }
  return messageType
}
```

:::


::: details Step5 执行合并
对 ydoc 进行更新操作



```js
/** readSyncStep1 最终调用的函数 */
export const encodeStateAsUpdateV2 = (doc, encodedTargetStateVector = new Uint8Array([0]), encoder = new UpdateEncoderV2()) => {
  if (updates.length > 1) {
    if (encoder.constructor === UpdateEncoderV1) {
      return mergeUpdates(updates.map((update, i) => i === 0 ? update : convertUpdateFormatV2ToV1(update)))
    } else if (encoder.constructor === UpdateEncoderV2) {
      return mergeUpdatesV2(updates)
    }
  }
  return updates[0]
}
```

```js
/**readSyncStep2 、readUpdate 最终调用的函数 */
export const readSyncStep2 = (decoder, doc, transactionOrigin) => {
  try {
    // read update from remote 直到这里，都知道是如何实现协同的了吧
    Y.applyUpdate(doc, decoding.readVarUint8Array(decoder), transactionOrigin)
  } catch (error) {
    // This catches errors that are thrown by event handlers
    console.error('Caught error while handling a Yjs update', error)
  }
}
```
:::

::: warning 温馨提示：
上诉方法是官方的 y-websocket 的实现哈，我们可以直接使用，当然也可以自己实现。官方提供的服务对于个性化功能的拓展，是无法实现的，因此，自己实现的服务，也要会哦！

启动官方服务：
```bash
npm install y-websocket

cd node_modules/y-websocket/bin

node ./server.cjs
```
:::



## 自定义 y-websocket 服务
上诉我们利用的是官方提供的服务端的能力进行协同处理，那么，客户端就没有能力处理嘛？我们看看客户端的代码：

::: details Step1 创建客户端连接
provider 是一个 y-websocket 的实例，它负责和云端进行通信，并且将云端返回的数据同步到本地。
```js
this.provider = new WebsocketProvider(url, roomname, this.doc);
```
:::

::: details Step2 创建客户端 WebSocket 连接
创建客户端连接，并监听message事件，当接收到服务端数据时，执行 readMessage 事件
```js
export class WebsocketProvider extends Observable {
      const websocket = new provider._WS(provider.url, provider.protocols)
      websocket.onmessage = (event) => {
         provider.wsLastMessageReceived = time.getUnixTime()
         const encoder = readMessage(provider, new Uint8Array(event.data), true)
         if (encoding.length(encoder) > 1) {
           websocket.send(encoding.toUint8Array(encoder))
         }
       }
}
```
:::

::: details Step3 监听云端数据更新事件
```js
const readMessage = (provider, buf, emitSynced) => {
    const messageHandler = provider.messageHandlers[messageType]
    messageHandler(encoder, decoder, provider, emitSynced, messageType)
}
messageHandlers[messageSync] = () => {
    // 又看到 readSyncMessage 这个函数了，剩下的就是执行 update 函数啦
    const syncMessageType = syncProtocol.readSyncMessage(decoder,encoder,provider.doc,provider)
}
```
:::

::: details Step4 剩下的就是回到官方的 Step4 
:::

::: warning 总结
整体来说，好多工作 y-websocket 已经帮我们做了，我们只需要做两件事情：

1. 创建 ws 服务实例，并监听连接方法；
2. 监听 ws 的消息，并将数据直接返回其他客户端。
:::

## 最简洁的服务端示例
```js
const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({  port: 9999 });

wss.on("connection", (conn, req) => {
  // 监听消息并广播给其他客户端
  conn.onmessage = (event) => wss.clients.forEach((c) => c.send(event.data));
  /**
   * 监听关闭连接事件，
   * 这里广不广播都一样，
   * 因为可以直接客户端处理，
   * 客户端有一个 provider.emit('connection-close', [event, provider])
   */
  conn.onclose = () => console.warn("用户关闭连接\n")
});
```

## 技术选型及注意事项
<img src="/unippt-shareType.png"/>
Yjs 官网给我们提供了上诉6中数据协同类型，Map、Array、Text、XmlElement、XmlFragment、XmlText。

1. Map 底层是`this._map = new Map()`,因此适合做键值对存储。
2. Array 底层是`this._yarray = new YArray()`, 就是普通的数组对象，因此适合做数组存储，使用下标进行存取值。
3. Text 适合做文本存储，使用文本的插入、删除、替换等操作，应用场景为富文本（例如 Quill）。
4. Xml 则接触的比较少，就不做介绍了。

::: info 提示
`本应用中使用的使用的方案是：Map`
:::

```js
// 下面是最常用的 设置、获取、删除 操作
ymap.set('prop-name', 'value') // value can be anything json-encodable
ymap.get('prop-name') // => 'value'
ymap.delete('prop-name')

// 判断 Map 中是否包含 key
ymap.has(key: string): boolean

// 清空 Map
ymap.clear()

// Map 的遍历操作
ymap.forEach(value: any, key: string, map: Y.Map)

ymap.entries(): Iterator // 返回 key-value 对

ymap.values(): Iterator // 仅返回 value

ymap.keys(): Iterator // 仅返回 key

// 监听 Map 的变化
ymap.observe(function(YMapEvent, Transaction))
ymap.unobserve(function) // 取消监听

// 深度监听 - 可监听 value 对象的对象的...的变化
ymap.observeDeep(function(Array<Y.Event>, Transaction))
ymap.unobserveDeep(function) // 取消监听

/**
 * 监听事件说明
 */
ymap.observe(ymapEvent => {
  //  yevent.changes.keys: Map<string, { action: 'add' | 'update' | 'delete', oldValue: any }>
  ymapEvent.changes.keys.forEach((change, key) => {
    // 直到是哪个key变化了，直接通过 map.get(key) 拿到对应的更新后的值，进行后续操作
  })
})


```

::: danger 特别注意！
1. 既然使用的 Map 类型，那么就要注意 key 值的使用了，因为同一个 key 值，只能对应一个值。
2. 一个 key ，会引起 observe 'add' | 'update' | 'delete' 三个操作。
3. 如果同时对一个 key 进行操作，Map 只能存储最后一个记录。

```js
/**
 *  例如属性协同，用的 key 是 'shape_updateOptions'：
 *    用户A：设置颜色为 blue  
 *      ==> this.ymap.set('shape_updateOptions', { fillColor: 'blue' })
 * 
 *    用户B：设置边框为 yellow 
 *      ==> this.ymap.set('shape_updateOptions', { border: 'yellow' })
 * 
 *    用户C：设置宽度为 100  
 *      ==> this.ymap.set('shape_updateOptions', { width: 100} )
 * 
 *    那么，此时，map 中，key 为 'shape_updateOptions' 的值，为：{ width：100 }
 *    后续用户登录查看的 shape 属性，为：width：100，其他属性会丢失！
 */
```
4. 解决此问题办法：
```js
/**
 * 1. 将用户的操作合并到一个对象中，进行存储
 *    
 *    用户A：设置颜色为 blue  
 *      ==> this.ymap.set('shape_updateOptions', { fillColor: 'blue' })
 *    
 *    用户B：设置边框为 yellow 
 *      ==> this.ymap.set('shape_updateOptions', { fillColor: 'blue', border: 'yellow' })
 * 
 *    用户C：设置宽度为 100  
 *      ==> this.ymap.set('shape_updateOptions', { fillColor: 'blue', border: 'yellow', width: 100} )
 * 
 * 2. 使用不同的key:
 * 
 *   用户A：设置颜色为 blue  
 *      ==> this.ymap.set('shape_updateOptions_fillColor', { fillColor: 'blue' })
 * 
 *    用户B：设置边框为 yellow 
 *      ==> this.ymap.set('shape_updateOptions_border', { border: 'yellow' })
 * 
 *    用户C：设置宽度为 100  
 *      ==> this.ymap.set('shape_updateOptions_width', { width: 100} )
 * 
 *  上诉两个解决办法均能保留属性，方法一适用于能够统一获取属性的场景，方法二适用于无法统一获取属性的场景。
 */
```
:::


## 内存泄漏问题

::: danger 注意 Map 的内存泄漏问题
1. 如果！如果确切知晓 key 的值在后续的操作中不会再应用到，请先执行 this.ymap.delete(key) 删除 key，避免内存泄漏。

2. 请避免对同一个 key 多次设置不同的值，因为每次设置都会创建一个新对象，导致内存泄漏。

3. 如果避免不了，请设置前，先删除同 key 值，再设置。

4. 避免对同一个属性值，设置不同的 key，应该对属性值进行合并后，设置一个 key 值，并引发 update 操作。
:::

## 优劣对比

1. 官方服务端肯定方便快捷啦，直接启动一个服务即可。

2. 但是其缺点也比较明显，对于项目层面来说，其可定制化能力几乎为零。

3. 自定义服务端，可以做到自定义属性、控制访问权限、自定义数据格式、自定义数据处理逻辑等，其灵活性较高，较为推荐。

::: info 文章分享
[深度解析 Yjs 协同编辑原理【看这篇就够了】](https://blog.csdn.net/weixin_47746452/article/details/135079472?spm=1001.2014.3001.5501)
:::

::: warning 温馨提示
1. 当然，这只是停留在技术分析层面，具体的应用需要根据实际需求来选择。

2. 还是推荐大家阅读官方文档，官方文档有详细的介绍，并且有详细的代码示例。

3. 如果对协同部分还有啥不明白的，可以看看我的专题文章 [协同编辑](https://blog.csdn.net/weixin_47746452/category_12491584.html?spm=1001.2014.3001.5482)

欢迎大家留言交流，一起学习，一起进步。
:::