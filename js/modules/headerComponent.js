// ✅ 修正版本：動態插入 header 與正確點擊展開
window.loadHeader = function () {
  const container = document.getElementById("headerComponent");
  if (!container) return;

  const data = {
    items: [
      {
        title: "最新消息",
        href: "news.html",
        children: [
          { title: "住宿優惠", href: "news.html?category=住宿優惠" },
          { title: "餐飲優惠", href: "news.html?category=餐飲優惠" },
          { title: "活動訊息", href: "news.html?category=活動訊息" },
          { title: "藝文活動", href: "news.html?category=藝文活動" },
        ],
      },
      {
        title: "房型介紹",
        href: "rooms.html",
        children: [
          { title: "尊爵VIP", href: "rooms.html?category=尊爵VIP" },
          { title: "豪華房", href: "rooms.html?category=豪華房" },
          { title: "經典房", href: "rooms.html?category=經典房" },
          { title: "商務房", href: "rooms.html?category=商務房" },
        ],
      },
      { title: "飯店介紹", href: "about.html", children: [] },
      { title: "設施介紹", href: "facility.html", children: [] },
      { title: "線上訂房", href: "step1.html", children: [] },
      { title: "聯絡我們", href: "location.html", children: [] },
    ],
  };

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.className = "menu";

  data.items.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;

    if (item.children && item.children.length > 0) {
      li.classList.add("has-submenu");
      a.innerHTML = `${item.title} <i class="fa-solid fa-chevron-down"></i>`;

      a.addEventListener("click", function (e) {
        if (window.innerWidth < 992) {
          e.preventDefault();
          ul.querySelectorAll("li.open").forEach((el) => {
            if (el !== li) el.classList.remove("open");
          });
          li.classList.toggle("open");
        }
      });
    } else {
      a.textContent = item.title;
    }

    li.appendChild(a);

    if (item.children && item.children.length > 0) {
      const subUl = document.createElement("ul");
      subUl.className = "sub-menu";
      item.children.forEach((subItem) => {
        const subLi = document.createElement("li");
        const subA = document.createElement("a");
        subA.href = subItem.href;
        subA.textContent = subItem.title;
        subLi.appendChild(subA);
        subUl.appendChild(subLi);
      });
      li.appendChild(subUl);
    }

    ul.appendChild(li);
  });

  nav.appendChild(ul);

  const wrapper = document.createElement("div");
  wrapper.className = "navWrap";

wrapper.innerHTML = `
  <div class="logo">
    <a href="index.html">
      <img src="images/ft_logo.svg" alt="LOGO" height="30" />
    </a>
  </div>
  <div class="nav-right">
    <div class="lang-selector">
      <div id="google_translate_element"></div>
    </div>
    <!-- ✅ 桌機版登入按鈕 -->
   <a id="openMemberModalBtn" href="#" class="d-none d-lg-inline-block" title="加入會員">
  <i class="fa-regular fa-circle-user"></i>
</a>
<a id="openMemberModalBtnMobile" href="#" class="d-lg-none" title="加入會員">
  <i class="fa-regular fa-circle-user"></i>
</a>

  </div>
`;

  wrapper.insertBefore(nav, wrapper.querySelector(".nav-right"));

  const header = document.createElement("header");
  header.className = "gn-header";
  header.appendChild(wrapper);

  container.innerHTML = "";
  container.appendChild(header);

  const hamburger = document.createElement("button");
  hamburger.className = "menu-toggle d-lg-none";
  hamburger.innerHTML = `
    <div id="nav-icon3">
      <span></span><span></span><span></span><span></span>
    </div>`;
  wrapper.insertBefore(hamburger, nav);

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("menu-open");
    if (!nav.classList.contains("menu-open")) {
      ul.querySelectorAll("li.open").forEach((li) => {
        li.classList.remove("open");
      });
    }
  });

  ul.querySelectorAll("li").forEach((li) => {
    const hasSub = li.querySelector(".sub-menu");

    if (hasSub) {
      li.addEventListener("mouseenter", () => {
        if (window.innerWidth >= 992) li.classList.add("open");
      });
      li.addEventListener("mouseleave", () => {
        if (window.innerWidth >= 992) li.classList.remove("open");
      });
    }
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".gn-header");
    if (window.scrollY > 100) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  });

  $("#nav-icon3").click(function () {
    $(this).toggleClass("open");
  });

  // 等 header 載入完後再綁事件
const tryBindLoginBtns = () => {
  const mobileBtn = document.getElementById("openMemberModalBtnMobile");
  const desktopBtn = document.getElementById("openMemberModalBtn");

  if (typeof window.loadLoginModal !== "function") {
    console.warn("⚠️ loadLoginModal 尚未定義");
    return;
  }

  if (mobileBtn) {
    console.log("✅ 綁定手機登入按鈕");
    mobileBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("📌 手機登入被點擊");
      window.loadLoginModal();
    });
  }

  if (desktopBtn) {
    console.log("✅ 綁定桌機登入按鈕");
    desktopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("📌 桌機登入被點擊");
      window.loadLoginModal();
    });
  }

  if (!mobileBtn || !desktopBtn) {
    setTimeout(tryBindLoginBtns, 100);
  }
};

// ✅ 在 window.loadHeader() 完成 DOM 插入後立刻執行
tryBindLoginBtns();


};
