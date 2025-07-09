document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.querySelector('.goBack');
  if (backBtn) {
    console.log("✅ 成功找到 .goBack");
    backBtn.addEventListener('click', function (e) {
      e.preventDefault();

      console.log("🔁 點到了返回按鈕");
      console.log("document.referrer =", document.referrer);
      console.log("history.length =", window.history.length);

      if (document.referrer && window.history.length > 1) {
        console.log("▶️ 使用 history.back()");
        history.back();
      } else {
        console.log("⏩ 沒有前頁，跳 news.html");
        window.location.href = "news.html";
      }
    });
  } else {
    console.warn("⚠️ 找不到 .goBack，沒綁成功");
  }
});
