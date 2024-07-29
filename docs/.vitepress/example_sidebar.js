// 插件拓展 plugins
const plugins = [
  { text: "中文汉化", link: "/example/plugins/I18n" },
  { text: "主题定制", link: "/example/plugins/Theme" },
  { text: "格式化插件", link: "/example/plugins/Formatter" },
];

// 自身功能 func
const func = [
  { text: "隐藏右键某项菜单", link: "/example/func/HiddenMenu" },
  { text: "版本对比", link: "/example/func/Diff" },
  { text: "选中代码执行", link: "/example/func/ChooseCode" },
  { text: "多 Tab 标签", link: "/example/func/Tabs" },
];

// 其他 other
const other = [
  { text: "UnexpectedUsage报错", link: "/example/other/UnexpectedUsage" },
];

export const example_sidebar = [
  {
    text: "示例说明",
    link: "/example",
    items: [
      { text: "插件拓展", collapsed: true, items: plugins },
      { text: "自身功能", collapsed: true, items: func },
      { text: "其他", collapsed: true, items: other },
    ],
  },
];
