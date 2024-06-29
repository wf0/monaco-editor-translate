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
      // { text: "学习建议", link: "/learn" },
      {
        text: "英文官网",
        link: "https://microsoft.github.io/monaco-editor/docs.html",
      },
      // {
      //   text: "GitHub",
      //   link: "https://github.com/wfeng0/monaco-editor-translate",
      // },
      // {
      //   text: "Gitee",
      //   link: "https://gitee.com/wfeng0/monaco-editor-translate",
      // },
    ],
    // 搜索
    search: { provider: "local" },
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/wf0/monaco-editor-translate" },
      // {
      //   icon: {
      //     svg: '<svg t="1719624380656" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4391" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4392"></path></svg>',
      //   },
      //   link: "https://gitee.com/wfeng0/monaco-editor-translate",
      // },
    ],
  },
});
