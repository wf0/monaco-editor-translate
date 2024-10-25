---
navbar: false
---

# 文本编辑实现

<backTop/>



http://konvajs-doc.bluehymn.com/docs/sandbox/Editable_Text.html

参照官网的第二个案例使用，通过监听双击事件，动态添加 textarea ，定位到合适的位置，进行文本编辑。为了实现更加真实的效果， 还需要进行 textarea 的样式调整，使其与文本节点样式保持一致。

::: warning 温馨提示

```html
<!-- 本应用采用的编辑方案是： -->
<div contenteditable="true"></div>
```
:::

<img src="/unippt-textarea.gif" />