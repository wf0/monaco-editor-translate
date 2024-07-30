# 应用示例

<backTop/>

    本篇的目的是以翻译好的文档，提供一些示例，帮助大家快速上手，可以更好的理解文档内容，体验 Monaco Editor 的一些使用场景，对大家项目开发过程有所帮助，避免一些文章搜索、查找、理解的麻烦。
    
如常见的 `中文汉化、主题定制、代码提示及多Tab签`，在SQL编辑器中的`选中代码执行、相关的格式化插件（sql-formatter）`，`隐藏右键某项菜单、差异对比`等功能，均在此篇中进行详细的说明。

::: danger © 版权声明
<div style='color:red;font-weight:bold;'>本篇大部分解决方案来源网络，使用时，会注明来源，如有侵权，请及时联系删除。</div>
<div style='color:red;font-weight:bold;'>本篇大部分解决方案来源网络，使用时，会注明来源，如有侵权，请及时联系删除。</div>
<div style='color:red;font-weight:bold;'>本篇大部分解决方案来源网络，使用时，会注明来源，如有侵权，请及时联系删除。</div>
:::





## 分类

本篇大致分为 3 大类：
1. **插件拓展**
    
    例如中文汉化、主题定制、代码提示等通过外部插件实现的功能

2. **自身功能**
    
    例如选中代码执行、多Tab签、差异对比等功能，是自身具备的功能，实现起来也相对简单
    
3. **其他**
    
    这部分主要是开发过程中，遇到的一些其他的BUG、问题修复等



## 快速链接
<script setup>
const data = [
   {icon:"D", title: "中文汉化", link: "/example/plugins/I18n.html" },
   {icon:"D", title: "主题定制", link: "/example/plugins/Theme.html" },
   {icon:"D", title: "格式化插件", link: "/example/plugins/Formatter.html" },
   {icon:"D", title: "隐藏右键某项菜单", link: "/example/func/HiddenMenu.html" },
   {icon:"D", title: "差异对比", link: "/example/func/Diff.html" },
   {icon:"D", title: "多 Tab 标签", link: "/example/func/Tabs.html" },
   {icon:"D", title: "UnexpectedUsage报错", link: "/example/other/UnexpectedUsage.html" },
];

</script>
<dataItems :data="data" />

<!-- 
    相关可参考文件：
    https://juejin.cn/post/7329353489678680103?searchId=2024072509524948EB7026F368D6B89D06#heading-6
    https://juejin.cn/post/7376514713742819378?searchId=2024072509524948EB7026F368D6B89D06
    https://blog.csdn.net/violetjack0808/article/details/138083552
 -->