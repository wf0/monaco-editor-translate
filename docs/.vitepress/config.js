import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monaco Editor Translate",
  description: "Monaco Editor 官网翻译，中文版学习资料",
  themeConfig: {
    title: "demo",
    outline: {
      label: "页面导航",
    },
    logo: "/logo.png", // 表示docs/public/avartar.png
    nav: [
      { text: "Home", link: "/" },
      { text: "API 文档", link: "/api" },
      // { text: "学习建议", link: "/learn" },
      {
        text: "英文官网",
        link: "https://microsoft.github.io/monaco-editor/docs.html",
      },
    ],
    // 搜索
    search: { provider: "local" },
    // 侧边栏 - 只有 /api 才显示侧边栏
    sidebar: {
      "/api": sidebar,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
