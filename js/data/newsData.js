document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("categoryContainer");
  const groups = container.querySelectorAll(".category-group");
  const navLinks = document.querySelectorAll(".carousel-nav a");

  // 預設只顯示第一分類
  groups.forEach((g) => (g.style.display = "none"));
  const defaultCategory = "住宿優惠";
  const defaultGroup = container.querySelector(
    `[data-category="${defaultCategory}"]`
  );
  if (defaultGroup) defaultGroup.style.display = "block";

  // 點擊分類切換
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const selected = this.dataset.category;

      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      groups.forEach((g) => {
        g.style.display = g.dataset.category === selected ? "block" : "none";
      });
    });
  });

  // 若網址帶 ?category=... 自動顯示
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  if (category) {
    navLinks.forEach((link) => {
      if (link.dataset.category === category) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    groups.forEach((g) => {
      g.style.display = g.dataset.category === category ? "block" : "none";
    });
  }
});