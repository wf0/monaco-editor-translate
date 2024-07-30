import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import I18n from "./public/I18n/i18n.json";
import nlsPlugin, {
  Languages,
  esbuildPluginMonacoEditorNls,
} from "./public/I18n/vite-plugin-i18n-nls.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    nlsPlugin({
      locale: Languages.zh_hans,
      localeData: I18n,
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        esbuildPluginMonacoEditorNls({
          locale: Languages.zh_hans,
          localeData: I18n,
        }),
      ],
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
