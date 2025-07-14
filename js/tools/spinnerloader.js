window.addEventListener("load", function () {
  const loader = document.getElementById("pageLoader");
  if (loader) {
    // 延遲 1.5 秒，讓動畫完整跑一圈後才關閉 loader
    setTimeout(() => {
      loader.classList.add("hidden");
      setTimeout(() => loader.remove(), 400); // 等動畫結束移除 DOM
    }, 1200);
  }
});
