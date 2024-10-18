export const unippt_sidebar = [
  {
    text: "UniPPT - 在线演示文稿",
    link: "/unippt",
    items: [
      { text: "🎉 快速开始", link: "/unippt/quickstart" },
      { text: "📝 系统指令", link: "/unippt/command" },
      { text: "🔎 事件监听", link: "/unippt/event" },
      { text: "⌛ 快捷键", link: "/unippt/shortcut" },
      {
        text: "🔗 推荐阅读",
        collapsed: true,
        items: [
          { text: "项目架构", link: "/unippt/read/architecture" },
          { text: "重写相关方法", link: "/unippt/read/rewrite" },
          { text: "文本编辑实现", link: "/unippt/read/text" },
          { text: "数据存储方案及优化", link: "/unippt/read/storage" },
          { text: "表格、统计图实现思路", link: "/unippt/read/scene" },
          { text: "自定义系统级主题方案", link: "/unippt/read/theme" },
          { text: "Latex 公式的使用及注意事项", link: "/unippt/read/latex" },
        ],
      },
    ],
  },
];
