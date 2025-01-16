import { defineConfig } from "vitepress";
import { api_sidebar } from "./sidebar/api";
import { example_sidebar } from "./sidebar/example";
import { unippt_sidebar } from "./sidebar/unippt";

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
			{ text: "应用示例", link: "/example" },
			{
				text: "其他链接",
				items: [
					{
						text: "英文官网",
						link: "https://microsoft.github.io/monaco-editor/docs.html",
					},
					{ text: "Uni PPT 官网", link: "/unippt" },
				],
			},
		],
		// 搜索
		search: { provider: "local" },
		// 多侧边栏
		sidebar: {
			api: api_sidebar,
			unippt: unippt_sidebar,
			example: example_sidebar,
		},
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/wf0/monaco-editor-translate",
			},
		],

		footer: {
			message: "Released under the MIT License.",
			copyright:
				'<span id="vercount_value_site_pv">Loading</span> \n Copyright © 2019-present pushu',
		},
	},
});
