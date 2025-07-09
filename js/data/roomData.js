document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("categoryContainer");
  const groups = container.querySelectorAll(".category-group");
  const navLinks = document.querySelectorAll(".carousel-nav a");

  const roomArticles = [
    {
      img: "images/room/room-vip.jpg",
      title: "尊爵VIP｜極致尊寵之選",
      content:
        "獨立景觀陽台、專屬mini bar與奢華備品，為您打造極致尊榮的住宿體驗，推薦給追求高規格旅程的您。",
      href: "rooms-vip.html",
      category: "尊爵VIP",
    },
    {
      img: "images/room/room-vip.jpg",
      title: "尊爵VIP｜極致尊寵之選",
      content:
        "獨立景觀陽台、專屬mini bar與奢華備品，為您打造極致尊榮的住宿體驗，推薦給追求高規格旅程的您。",
      href: "rooms-vip.html",
      category: "尊爵VIP",
    },
    {
      img: "images/room/room-vip.jpg",
      title: "尊爵VIP｜極致尊寵之選",
      content:
        "獨立景觀陽台、專屬mini bar與奢華備品，為您打造極致尊榮的住宿體驗，推薦給追求高規格旅程的您。",
      href: "rooms-vip.html",
      category: "尊爵VIP",
    },
    {
      img: "images/room/room-elegant.jpg",
      title: "豪華房｜寬敞舒適好品味",
      content:
        "現代質感設計與大片窗景，打造明亮舒適的住宿氛圍，最適合放鬆渡假與浪漫旅程的選擇。",
      href: "rooms-elegant.html",
      category: "豪華房",
    },
    {
      img: "images/room/room-elegant.jpg",
      title: "豪華房｜寬敞舒適好品味",
      content:
        "現代質感設計與大片窗景，打造明亮舒適的住宿氛圍，最適合放鬆渡假與浪漫旅程的選擇。",
      href: "rooms-elegant.html",
      category: "豪華房",
    },
    {
      img: "images/room/room-elegant.jpg",
      title: "豪華房｜寬敞舒適好品味",
      content:
        "現代質感設計與大片窗景，打造明亮舒適的住宿氛圍，最適合放鬆渡假與浪漫旅程的選擇。",
      href: "rooms-elegant.html",
      category: "豪華房",
    },
    {
      img: "images/room/room-classic.jpg",
      title: "經典房｜簡約中的精緻細節",
      content:
        "兼具實用與設計感，採光良好、配備齊全，適合商務差旅或輕旅行的完美起點。",
      href: "rooms-classic.html",
      category: "經典房",
    },
    {
      img: "images/room/room-classic.jpg",
      title: "經典房｜簡約中的精緻細節",
      content:
        "兼具實用與設計感，採光良好、配備齊全，適合商務差旅或輕旅行的完美起點。",
      href: "rooms-classic.html",
      category: "經典房",
    },
    {
      img: "images/room/room-classic.jpg",
      title: "經典房｜簡約中的精緻細節",
      content:
        "兼具實用與設計感，採光良好、配備齊全，適合商務差旅或輕旅行的完美起點。",
      href: "rooms-classic.html",
      category: "經典房",
    },
    {
      img: "images/room/room-business.jpg",
      title: "商務房｜效率與舒適兼具",
      content:
        "設有書桌與高速網路，提供安靜的工作空間與貼心備品，讓您的出差也能輕鬆如家。",
      href: "rooms-business.html",
      category: "商務房",
    },
    {
      img: "images/room/room-business.jpg",
      title: "商務房｜效率與舒適兼具",
      content:
        "設有書桌與高速網路，提供安靜的工作空間與貼心備品，讓您的出差也能輕鬆如家。",
      href: "rooms-business.html",
      category: "商務房",
    },
    {
      img: "images/room/room-business.jpg",
      title: "商務房｜效率與舒適兼具",
      content:
        "設有書桌與高速網路，提供安靜的工作空間與貼心備品，讓您的出差也能輕鬆如家。",
      href: "rooms-business.html",
      category: "商務房",
    },
  ];

  function shuffle(array) {
    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  groups.forEach((group) => {
    const category = group.dataset.category;
    const matched =
      category === "全部房型"
        ? shuffle(roomArticles)
        : shuffle(roomArticles.filter((a) => a.category === category));

    group.innerHTML = `
    <div class="card-row">
      ${matched
        .map(
          (article) => `
                    <div class="card-box">
            <a href="${article.href}" class="cardRoom d-block card-fade-in">
                <div class="card">
                <img src="${article.img}" alt="${article.title}" />
                <div class="text">
                    <h5>${article.title}</h5>
                    <p>${article.content}</p>
                </div>
                <div class="features">
                    <div class="hd">房型特色：</div>
                    <div>
                    <ul>
                        <li><i class="fa-solid fa-umbrella-beach"></i> 帶座椅的陽台</li>
                        <li><i class="fa-solid fa-couch me-1"></i> 客廳</li>
                        <li><i class="fa-solid fa-utensils me-1"></i> 用餐區</li>
                        <li><i class="fa-solid fa-bath me-1"></i> 浴缸和雨林淋浴</li>
                    </ul>
                    </div>
                </div>
                <div class="btnBox">
                    <a href="rooms_detail.html" class="btn btn-primary-border">詳細介紹</a>
                    <a class="btn btn-booking">預定房間</a>
                    </div>
                </div>
            </a>
            </div>
      `
        )
        .join("")}
    </div>
  `;
  });

  // 初始只顯示第一類
  groups.forEach((g) => (g.style.display = "none"));
  const defaultCategory = "全部房型";
  const defaultGroup = container.querySelector(
    `[data-category="${defaultCategory}"]`
  );
  if (defaultGroup) defaultGroup.style.display = "block";

  // 分類點擊切換
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
  // 連結點擊直接住停在該分類
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  if (category) {
    const currentScrollY = window.scrollY;

    document.querySelectorAll(".category-group").forEach((group) => {
      group.style.display = "none";
    });

    const target = document.querySelector(
      `.category-group[data-category="${category}"]`
    );
    if (target) {
      target.style.display = "block";
      target.querySelectorAll(".cardRoom").forEach((card) => {
        card.classList.add("card-fade-in");
      });
    }

    // ✅ 將對應 tab 加上 active 樣式
    navLinks.forEach((link) => {
      if (link.dataset.category === category) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // ✅ 還原 scroll 避免跳動
    requestAnimationFrame(() => {
      window.scrollTo({
        top: currentScrollY,
        behavior: "auto",
      });
    });
  }
});
