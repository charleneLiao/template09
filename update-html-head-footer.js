const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const excludedFiles = [
  "index.html",
  "README.md",
  "step1.html",
  "step2.html",
  "step3.html"
];

// 讀取 index.html 內容
const indexHtml = fs.readFileSync("index.html", "utf8");
const $index = cheerio.load(indexHtml, { decodeEntities: false });

// 抽取 index.html 中的各個區塊
const indexFooter = $index("footer").html() || "";
const indexHeadDom = $index("head").html();
const indexScripts = [];
$index("script[src]").each((i, el) => {
  const src = $index(el).attr("src");
  if (src) indexScripts.push(src);
});

// 抓出 index 中 <div id="head">...</div>（用來取代其他頁的 <div id="headerComponent">）
const indexHeaderHtml = $index("#head").length > 0 ? $index("#head").prop("outerHTML") : "";

// 處理目標檔案
fs.readdirSync(__dirname)
  .filter(file => file.endsWith(".html") && !excludedFiles.includes(file))
  .forEach(file => {
    const html = fs.readFileSync(file, "utf8");
    const $ = cheerio.load(html, { decodeEntities: false });

    // 1️⃣ 替換 head
    $("head").html(indexHeadDom);

    // 2️⃣ 移除重複 script[src]
    $("script[src]").each((i, el) => {
      const src = $(el).attr("src");
      if (indexScripts.includes(src)) {
        $(el).remove();
      }
    });

    // 3️⃣ 在 head 結尾補上 index 的所有 script[src]
    indexScripts.forEach(src => {
      $("head").append(`<script src="${src}"></script>`);
    });

    // 4️⃣ footer 替換
    if ($("footer").length > 0) {
      $("footer").replaceWith(`<footer>${indexFooter}</footer>`);
    } else {
      $("body").append(`<footer>${indexFooter}</footer>`);
    }

    // 5️⃣ 移除 <div id="headerComponent">，插入 <div id="head">
    $("#headerComponent").remove();
    if (indexHeaderHtml) {
      $("body").prepend(indexHeaderHtml); // 可根據實際位置調整插入點
    }

    // 6️⃣ 清理多餘空白行
    let result = $.html().replace(/\n{2,}/g, "\n");

    // 7️⃣ 寫入檔案
    fs.writeFileSync(file, result, "utf8");
    console.log(`✅ 已處理 ${file}`);

  });
