window.onload = function () {
document.querySelectorAll(".panel-title").forEach((btn) => {
  btn.addEventListener("click", function () {
    const panel = this.nextElementSibling;
    const isOpen = panel.classList.contains("expanded");

    if (isOpen) {
      panel.style.maxHeight = null;
      panel.style.opacity = 0;
      panel.classList.remove("expanded");
      this.querySelector(".plus").textContent = "＋";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.opacity = 1;
      panel.classList.add("expanded");
      this.querySelector(".plus").textContent = "－";
    }
  });
});


  const mainNav = document.querySelector(".main-nav");
  const menuBtn = document.querySelector(".menuBtn");
  const menuText = document.querySelector(".menuBtn__text--menu");
  const closeText = document.querySelector(".menuBtn__text--close");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  const navItems = document.querySelectorAll(".main-nav > ul > li");

  // 👉 點選 menuBtn 切換主選單
  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = mainNav.classList.toggle("is-open");
      menuText.style.display = isOpen ? "none" : "";
      closeText.style.display = isOpen ? "" : "none";
      hamburgerMenu?.classList.toggle("animate", isOpen);
    });
  }

  // 👉 子選單 toggle
  navItems.forEach((li) => {
    const link = li.querySelector("a");
    const subMenu = li.querySelector("ul");
    const plusSign = link?.querySelector("span");

    if (link && subMenu && plusSign) {
      subMenu.style.maxHeight = null;

      link.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = li.classList.contains("open");

        navItems.forEach((otherLi) => {
          const otherSub = otherLi.querySelector("ul");
          const otherPlus = otherLi.querySelector("a span");
          if (otherLi !== li && otherSub) {
            otherLi.classList.remove("open");
            otherSub.style.maxHeight = null;
            if (otherPlus) otherPlus.textContent = "+";
          }
        });

        if (!isOpen) {
          li.classList.add("open");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          plusSign.textContent = "−";
        } else {
          li.classList.remove("open");
          subMenu.style.maxHeight = null;
          plusSign.textContent = "+";
        }
      });
    }
  });

// 👉 點擊空白處關閉主選單與子選單
document.addEventListener("click", function (e) {
  const clickedInsideMainNav = e.target.closest(".main-nav");
  const clickedInsideMenuArea = e.target.closest(".menuBtn, .hamburger-menu");

  if (!clickedInsideMainNav && !clickedInsideMenuArea) {
    // 關主選單
    if (mainNav.classList.contains("is-open")) {
      mainNav.classList.remove("is-open");
      hamburgerMenu?.classList.remove("animate");
      menuText.style.display = "";
      closeText.style.display = "none";
    }

    // 關所有子選單
    navItems.forEach((li) => {
      li.classList.remove("open");
      const ul = li.querySelector("ul");
      const plusSign = li.querySelector("a span");
      if (ul) ul.style.maxHeight = null;
      if (plusSign) plusSign.textContent = "+";
    });
  }
});

};
