import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monaco Editor Translate",
  description: "Monaco Editor 官网翻译，中文版学习资料",
  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/wf0/monaco-editor-translate/tree/master/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },

    lastUpdated: {
      text: "最后更新时间",
    },
    title: "demo",
    outline: {
      label: "页面导航",
    },
    logo: "/logo.png", // 表示docs/public/avartar.png
    nav: [
      { text: "Home", link: "/" },
      { text: "API 文档", link: "/api" },
      {
        text: "英文官网",
        link: "https://microsoft.github.io/monaco-editor/docs.html",
      },
    ],
    // 搜索
    search: { provider: "local" },
    sidebar,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/wf0/monaco-editor-translate",
      },
    ],
  },
});
