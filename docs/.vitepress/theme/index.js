// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import dataItems from "./components/dataItems.vue";
import backTop from "./components/backTop.vue";
import HiddenHeder from "./components/hiddenHeader.vue";
import "./custom/index.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component("HiddenHeder", HiddenHeder);
    app.component("DataItems", dataItems);
    app.component("backTop", backTop);
  },
};
