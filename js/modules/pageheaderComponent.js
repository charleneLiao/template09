window.loadpageHeader = function () {
  const container = document.getElementById("pageHeaderComponent");
  if (!container) return;

  // Create headerMain and headerSticky
  const mainHeader = document.createElement("div");
  mainHeader.id = "headerMain";

  const stickyHeader = document.createElement("div");
  stickyHeader.id = "headerSticky";

  const headerContent = () => {
    const section = document.createElement("section");
    section.className = "gn-header container-fluid";

    const wrapper = document.createElement("div");
    wrapper.className = "d-flex justify-content-between align-items-center";

    wrapper.innerHTML += `
      <div class="logo d-flex align-items-center">
      <a href="index.html">
      <img src="images/TESTOLOGO _logo.svg" alt="TESTO HOTEL" height="23" />
      </a>
      </div>
      <div class="language-selector dropdown d-md-block ms-auto">
        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          語言
        </button>
        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
          <li><a class="dropdown-item" href="#" data-lang="zh-TW">CN</a></li>
          <li><a class="dropdown-item" href="#" data-lang="en">EN</a></li>
          <li><a class="dropdown-item" href="#" data-lang="ja">JP</a></li>
        </ul>
      </div>
      <div class="action-buttons d-flex"> 
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-regular fa-circle-user"></i>
      </div>
      <svg id="menuToggle" class="ham hamRotate ham1 menu-icon" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
      <path class="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"></path>
      <path class="line middle" d="m 30,50 h 40"></path>
      <path class="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"></path>
    </svg>
    `;

    section.appendChild(wrapper);
    return section;
  };

  mainHeader.appendChild(headerContent());
  stickyHeader.appendChild(headerContent());
  container.innerHTML = '';
  container.appendChild(mainHeader);
  container.appendChild(stickyHeader);

  // Build Main Menu with Submenus
  const nav = document.createElement("nav");
  nav.className = "main-menu";
  const ul = document.createElement("ul");
  ul.className = "menu list-unstyled";

  const data = {
    items: [
      {
        title: "最新消息",
        children: [
          { title: "住宿優惠", href: "news.html?category=住宿優惠" },
          { title: "餐飲優惠", href: "news.html?category=餐飲優惠" },
          { title: "活動訊息", href: "news.html?category=活動訊息" },
          { title: "藝文活動", href: "news.html?category=藝文活動" }
        ]
      },
      {
        title: "房型介紹",
        href: "rooms.html",
        children: [
          { title: "尊爵VIP", href: "rooms.html?category=尊爵VIP" },
          { title: "豪華房", href: "rooms.html?category=豪華房" },
          { title: "經典房", href: "rooms.html?category=經典房" },
          { title: "商務房", href: "rooms.html?category=商務房" }
        ]
      },
      { title: "飯店介紹", href: "about.html", children: [] },
      { title: "設施介紹", href: "facility.html", children: [] },
      { title: "聯絡我們", href: "location.html", children: [] },
    ]
  };

  data.items.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    if (item.children && item.children.length > 0) {
      a.innerHTML = `${item.title} <i class="fa-solid fa-angle-down toggle-icon"></i>`;
    } else {
      a.textContent = item.title;
    }

    if (item.target) a.target = item.target;
    if (item.modalTarget) {
      a.setAttribute("data-toggle", "modal");
      a.setAttribute("data-target", item.modalTarget);
    }
    li.appendChild(a);

    if (item.children && item.children.length > 0) {
      li.classList.add("has-submenu");
      const submenu = document.createElement("ul");
      submenu.className = "submenu list-unstyled";
      item.children.forEach(sub => {
        const subLi = document.createElement("li");
        const subA = document.createElement("a");
        subA.href = sub.href;
        subA.textContent = sub.title;
        subLi.appendChild(subA);
        submenu.appendChild(subLi);
      });
      li.appendChild(submenu);
    }

    ul.appendChild(li);
  });

  nav.appendChild(ul);
  container.appendChild(nav);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      mainHeader.style.display = "none";
      stickyHeader.classList.add("show");
    } else {
      mainHeader.style.display = "block";
      stickyHeader.classList.remove("show");
    }
  });

  const langItems = container.querySelectorAll('.language-selector .dropdown-item');
  const savedLang = localStorage.getItem("lang") || "zh-TW";
  const langBtn = container.querySelector("#languageDropdown");
  if (langBtn) langBtn.textContent = getLangLabel(savedLang);

  langItems.forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.dataset.lang;
      localStorage.setItem("lang", lang);
      location.reload();
    });
  });

  function getLangLabel(code) {
    switch (code) {
      case "zh-TW": return "CN";
      case "en": return "EN";
      case "ja": return "JP";
      default: return "Language";
    }
  }

  container.addEventListener("click", function (e) {
    const toggle = e.target.closest("#menuToggle");
    if (toggle) {
      nav.classList.toggle("show");
      toggle.classList.toggle("open");
      const label = toggle.querySelector(".mt-1");
      if (label) label.textContent = nav.classList.contains("show") ? "關閉" : "菜單";
    }
  });

};
