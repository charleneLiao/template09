document.addEventListener("DOMContentLoaded", function () {
  const pageTopBtn = document.querySelector(".pageTop");

  // 顯示/隱藏邏輯（可選，若你要控制顯示）
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      pageTopBtn.classList.add("show");
    } else {
      pageTopBtn.classList.remove("show");
    }
  });

  // 點擊滑動回頂部
  pageTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
