# Unicode-IDE 在线代码编辑器

<p align='center'>
  <img src='/logo.svg' />
</p>

## 技术说明

- **Monaco Editor**

  - [译文链接](https://wf0.github.io/)
  - 负责代码编辑、冲突模型处理等有关代码文件事项；

- **WebContainer**

  - [官网链接](https://webcontainers.io/)
  - 是整个 Web 运行项目的核心，提供了直接运行 js 文件的能力，同时具备 Node API，可执行相关 npm i 、npm run dev 等命令；同时，完备的 FileSystemAPI 也是整个项目的关键，提供的文件操作 API，提供 Web 可直接操作文件，包括新建文件、重命名、删除文件、读取目录等多项能力；

- **Vue-Web-Terminal**
  - [官网链接](https://tzfun.github.io/vue-web-terminal/zh/)
  - 一个由 Vue 构建的支持多内容格式显示的网页端命令行窗口插件，支持表格、json、代码等多种消息格式，支持自定义消息样式、命令行库、键入搜索提示等，模拟原生终端窗口支持 ← → 光标切换和 ↑ ↓ 历史命令切换。

## 系统架构图

![系统架构](/jiagou.png)

- 如上图，WebContainer 及 MonacoEditor 是整个系统的核心模块，通过 File System API，进行文件操作，与页面展示层（Element Tree）进行交互，提供了虚拟文件的可视化功能；同时，启动后的服务，通过回传 iframe 实现页面展示；

- 对 Terminal 而言，主要就是通过 terminal 的输入命令与 spawn 的交互，实现命令执行、回显；

- 而 Monaco Editor 则是从 web Container 中的文件关系进行文件读取编辑，保存后重新回写到 Container 中。

## 启动项目

```shell

  ##  克隆仓库
  git clone https://gitee.com/wfeng0/unicode-ide.git

  ##  推荐使用pnpm进行依赖管理
  pnpm install

  ##  本地运行
  pnpm run dev

  ##  如果提交代码，请先执行 lint 与 build 命令进行代码检查与打包 ，确认没错误后再提交。
  pnpm run lint

  pnpm run build

```

## 整体效果

<img src='/demo.gif' />

## 功能列表

- 新建文件/文件夹、重命名、删除文件、拖拽更换文件位置
- 文件 icon 图标显示、文件内容编辑与保存
- 命令执行、项目运行、编译
  `例如：node index.js 、 npm run dev 、 ls 、 cd .. 、 mkdir...`
- 多 tab 文件展示、格式化代码、代码高亮显示
- **文件导入、文件夹拖拽识别文件**
  <img src='/import-file.gif'/>

- **拖拽上传文件夹**
  <img src='/drag-file.gif'/>

- 拖拽实现区域缩放
  <img src='/drag-demo.gif'/>

- 文件搜索并跳转
  <img src='/search-result.gif'/>

## 计划开发

- 插件系统
- diff 代码冲突模型对比
- Monaco Editor 协同编辑
- 对图片、makrdown等资源提供支持，并提供 preview 功能
- 支持外部拖拽图片等其他媒体文件放置到文件树中

## 联系交流

如果对项目优化或功能有好的想法并乐意贡献代码欢迎提交[PR](https://gitee.com/wfeng0/unicode-ide/pulls) ，对项目使用存在疑问或发现 bug 请提交[issue](https://gitee.com/wfeng0/unicode-ide/issues)。

欢迎大家加入 QQ 群，不限于 Socket.IO、前端技术、Node 等，都可以进行沟通交流哦~

仓库有 master/master-alpha 两个分支，master 是稳定版本， master-alpha 是最新版本，大家按需拉取。

![qq群](/qq.png)
