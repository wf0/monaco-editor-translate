const url = "http://127.0.0.1:5500/demo.html";
const puppeteer = require("puppeteer");
const fs = require("fs");
(async () => {
  // 启动浏览器
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(url);

  const list = await page.$eval("ul", (nav) => {
    const list = [];
    // 找所有的 span
    nav.querySelectorAll("span").forEach((span) => {
      //    取innerText
      span.innerText && list.push(span.innerText);
    });
    return list;
  });
  fs.writeFile("./demo.js", JSON.stringify(list.filter((i) => i)), (err) => {
    console.log("保存成功");
  });
})();

