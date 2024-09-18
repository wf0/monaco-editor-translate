import fs from "node:fs";
import path from "node:path";

const data = [
  "executePrevSlide",
  "executeNextSlide",
  "executeSwitchSlide",
  "executeAddSlide",
  "getSlideImage",
  "executePreviewBeginning",
  "executePreviewCurrent",
  "executePreviewSlide",
  "executeRecord",
  "executeAddGrid",
  "executeAddRuler",
  "executeDeleteSlide",
  "executeRename",
  "executeImportPptx",
  "executeExportPptx",
  "executeExportPdf",
  "executeExportImage",
  "executeShare",
  "executeEncrypt",
  "executePrint",
  "executeHelp",
  "executeSave",
  "executeUndo",
  "executeRedo",
  "executeCut",
  "executeCopy",
  "executePaste",
  "executeTop",
  "executeHoldUp",
  "executePutDown",
  "executeBottom",
  "executeHorizontLeft",
  "executeHorizonCenter",
  "executeHorizonRight",
  "executeVerticalTop",
  "executeVerticalCenter",
  "executeVerticalBottom",
  "executeAnimation",
  "executeOpenSetting",
  "executeUpdateShapeOptions",
  "executeInsertImage",
  "executeInsertMedia",
  "executeInsertLatex",
  "executeInsertTable",
  "executeInsertChart",
  "executeInsertRichText",
  "executeDeleteGraph",
];

async function createMarkdownFile(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      err ? reject(err) : resolve();
    });
  });
}

async function init() {
  for (let i = 0; i < data.length; i++) {
    const filename = data[i];
    // 创建文件
    try {
      await createMarkdownFile(
        `./docs/unippt/command/${filename}.md`,
        `# ${filename}

<backTop />

- 描述：

- 语法：

- 参数：

- 返回值：

- 示例：

- 输出: `
      );
      console.log(filename, "创建完成");
    } catch (error) {
      console.log("文件创建失败", error);
    }
  }
}

init();
