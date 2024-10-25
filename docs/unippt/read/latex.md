# Latex 公式的使用及注意事项

本项目使用的公式编辑方案是[MathLive Demo](https://cortexjs.io/mathlive/demo/):

<img src='/unippt-mathlive-demo.png' />

支持在线编辑、即时预览、感观效果更加，显示的直接是数学公式，而非 Latex 字符串。

## 注意事项

如果公式显示异常，可能是缺少相应文本文件，可在 `node_modules/mathlive/dist/fonts` 文件夹下，将所有的字体文件，复制到项目 `public/fonts` 文件夹下，即可解决。