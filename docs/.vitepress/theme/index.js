// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import dataItems from "./dataItems.vue";
import "./custom.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component("DataItems", dataItems);
  },
};
