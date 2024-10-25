# 自定义系统级主题方案

为了将系统主题定制功能交还用户，本项目采用默认值实现的主题，用户只需要提供指定名称变量，即可覆盖默认效果：

## 可配置主题名

```css
/** 
 * 本项目仅提供样式，可在此基础上，进行拓展（应用本身不提供切换主题功能） 
 * 为了用户更便捷的定制主题，因此应该将 root 的权限交给用户，使用默认值处理
 */

// 系统主题色
@konva-main-color: #ff5e00;

// 系列色
@konva-main-color-1: #fff3e6;
@konva-main-color-2: #ffd1a3;
@konva-main-color-3: #ffb87a;
@konva-main-color-4: #ff9d52;
@konva-main-color-5: #ff7e29;
@konva-main-color-6: #ff5e00;
@konva-main-color-7: #d94800;
@konva-main-color-8: #b33600;
@konva-main-color-9: #8c2500;
@konva-main-color-10: #661800;

// 主背景颜色
@konva-background-color: #f9f9f9;

// 统一边框颜色
@konva-border-color: #eee;

// 文字颜色
@konva-text-color: #333333;
// 快捷键提示小文字(shortcut)
@konva-text-info-color: #93a2b3;

// 菜单项(顶部菜单、二级菜单、右键菜单)的背景色
@konva-menu-background-color: #fff;
// 菜单子项 hover 背景色
@konva-menu-hover-bgcolor: #f1f1f1;

// 阴影颜色
@konva-box-shadow-color: rgba(0, 0, 0, 0.1);

// 滚动条滑块颜色
@konva-scrollbar-thumb-color: #a9a9a9;
```

## 使用方法

在任意地方，配置 html:root{} 的变量，即可覆盖默认值:

::: warning 注意
上诉的变量，必须以 `--` 开头，去除 `@`，否则无效。
:::


```html

<!-- css 方案 -->
<style>
html:root {
    --konva-main-color: #ff5e00;
}
</style>


<!-- javascript 方案 -->
<script>
document.querySelector('html').style.setProperty('--konva-main-color', '#ff5e00');
</script>
```

## 预览
<img src='/unipptx-root-theme.png' />