import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monaco Editor",
  description: "Monaco Editor 官网翻译，中文版学习资料",
  themeConfig: {
    title: "demo",
    logo: "/logo.png", // 表示docs/public/avartar.png
    nav: [
      { text: "Home", link: "/" },
      { text: "API 文档", link: "/api" },
    ],
    // 搜索
    search: { provider: "local" },
    // 侧边栏
    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
