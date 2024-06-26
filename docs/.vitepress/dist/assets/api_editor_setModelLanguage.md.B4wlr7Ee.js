import{_ as e,c as s,o as i,a3 as a}from"./chunks/framework.B6VZG4DT.js";const u=JSON.parse('{"title":"setModelLanguage","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/setModelLanguage.md","filePath":"api/editor/setModelLanguage.md"}'),t={name:"api/editor/setModelLanguage.md"},l=a(`<h1 id="setmodellanguage" tabindex="-1">setModelLanguage <a class="header-anchor" href="#setmodellanguage" aria-label="Permalink to &quot;setModelLanguage&quot;">​</a></h1><details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#functions/editor.setModelLanguage.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#functions/editor.setModelLanguage.html</a></p></details><ul><li><p>语法：<code>setModelLanguage(model, mimeTypeOrLanguageId): void</code></p></li><li><p>参数：</p><ul><li><code>model</code>: <a href="/api/editor/ITextModel.html">ITextModel</a></li><li><code>mimeTypeOrLanguageId</code>: <code>string</code></li></ul></li><li><p>返回值：<code>void</code></p></li><li><p>描述：设置模型语言。</p></li><li><p>示例：</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> editor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello world!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;javascript&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">editor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setModelLanguage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;typescript&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,4),o=[l];function d(n,p,h,r,c,g){return i(),s("div",null,o)}const m=e(t,[["render",d]]);export{u as __pageData,m as default};
