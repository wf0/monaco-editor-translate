// 辅助函数实现文件快速创建
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mockdata } from "./node.mock.js";

// 读文件
async function readMarkdownFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

// 读目录
async function readMarkdownDir(path) {
  console.log(path);
  return new Promise((resolve, reject) => {
    fs.readdir(path, async (err, files) => {
      err ? reject(err) : resolve(files);
    });
  });
}

// 创建文件夹
async function createMarkdownDir(path) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, (err) => {
      err ? reject(err) : resolve();
    });
  });
}

// 创建文件
async function createMarkdownFile(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      err ? reject(err) : resolve();
    });
  });
}

// 初始化
async function init() {
  for (let i = 0; i < mockdata.length; i++) {
    const { root, list } = mockdata[i];

    //   1. 先读取有没有这个目录
    const path = "." + root;
    try {
      await readMarkdownDir(path);
      console.log("文件夹已存在");
    } catch (error) {
      // 没有文件夹，则进行文件夹创建
      await createMarkdownDir(path);
      console.log("文件夹创建成功");
    }

    //   2. 根据list 创建文件
    list.forEach(async (filename) => {
      try {
        await createMarkdownFile(
          `${path}/${filename}.md`,
          `# ${filename}
        
::: details 原文链接
This is a details block.
:::
        `
        );
        console.log(filename, "创建完成");
      } catch (error) {
        console.log("文件创建失败");
      }
    });
  }
}
init();
