window.loadPopularRooms = function () {
  const target = document.getElementById("popularRoomsComponent");
  if (!target) return;

  const rooms = [
    {
      title: "豪華雙人房",
      desc: "舒適典雅設計，附贈早餐與浴缸。",
      category: "room",
      imgs: [
        "images/rooms/room01.jpg",
        "images/rooms/room-bath.jpg",
        "images/rooms/room03-3.jpg",
      ],
    },
    {
      title: "城市景觀房",
      desc: "大片窗景可俯瞰市中心，附陽台。",
      category: "room",
      imgs: [
        "images/rooms/room01_2.jpg",
        "images/rooms/room-bath.jpg",
        "images/rooms/room03-3.jpg",
      ],
    },
    {
      title: "家庭四人房",
      desc: "空間寬敞，適合親子入住，附沙發區。",
      category: "suite",
      imgs: [
        "images/rooms/room02.jpg",
        "images/rooms/room-bath.jpg",
        "images/rooms/room03-3.jpg",
      ],
    },
    {
      title: "行政套房",
      desc: "專屬會客空間與景觀浴室，尊爵享受。",
      category: "suite",
      imgs: [
        "images/rooms/room03.jpg",
        "images/rooms/room-bath.jpg",
        "images/rooms/room03-3.jpg",
      ],
    },
    {
      title: "主題特色房A",
      desc: "設計感十足，適合拍照打卡。",
      category: "special",
      imgs: [
        "images/rooms/room01.jpg",
        "images/rooms/room02.jpg",
        "images/rooms/room03.jpg",
      ],
    },
    {
      title: "主題特色房B",
      desc: "異國風情主題，充滿驚喜。",
      category: "special",
      imgs: [
        "images/rooms/room03.jpg",
        "images/rooms/room-bath.jpg",
        "images/rooms/room01_2.jpg",
      ],
    },
  ];

  function renderRoomCards(category) {
    const filteredRooms =
      category === "all"
        ? rooms
        : rooms.filter((room) => room.category === category);

    const swiperSlides = filteredRooms
      .map(
        (room, i) => `
      <div class="swiper-slide">
        <div class="card">
          <div class="imgBox">
            <div class="swiper nested-swiper nested-swiper${i}">
              <div class="swiper-wrapper">
                ${room.imgs
                  .map(
                    (img) => `
                  <div class="swiper-slide">
                    <img src="${img}" alt="${room.title}">
                  </div>`
                  )
                  .join("")}
              </div>
              <div class="swiper-pagination swiper-pagination${i}"></div>
            </div>
          </div>
          <div class="card-body text-center">
            <h5>${room.title}</h5>
            <p>${room.desc}</p>
            <div class="btn-group">
              <button class="btn btn-outline-secondary">詳細介紹</button>
              <button class="btn btn-success">預定</button>
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    const wrapperEl = target.querySelector(".roomSwiper .swiper-wrapper");
    wrapperEl.innerHTML = swiperSlides;

    // 重新初始化每個 nested swiper
    filteredRooms.forEach((room, index) => {
      new Swiper(`.nested-swiper${index}`, {
        slidesPerView: 1,
        pagination: {
          el: `.swiper-pagination${index}`,
          clickable: true,
        },
      });
    });
    // 銷毀舊的外層 Swiper
    if (window.outerSwiper) {
      window.outerSwiper.destroy(true, true);
    }

    // 重新建立外層 Swiper
    window.outerSwiper = new Swiper(".roomSwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  target.innerHTML = `
    <section class="popularRoomsComponent">
      <div class="container">
        <div class="hd-title">
          <h3>入住</h3>
          <p>靜謐入眠．城市心中的度假時光</p>
        </div>

        <div class="room-tabs-wrapper position-relative js-room-tabs">
          <div class="room-tabs nav nav-pills justify-content-center" role="tablist">
            <button class="nav-link active" data-category="all">全部房型</button>
            <button class="nav-link" data-category="room">客房</button>
            <button class="nav-link" data-category="suite">套房</button>
            <button class="nav-link" data-category="special">特色套房</button>
          </div>
          <span class="tab-indicator nav__slider-rect"></span>
        </div>

        <div class="swiper roomSwiper">
          <div class="swiper-wrapper"></div>
          <div class="swiper-nav">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </section>
  `;

  renderRoomCards("all");

  // 外層輪播初始化
  new Swiper(".roomSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 標籤切換效果
document.querySelectorAll(".room-tabs .nav-link").forEach((btn) => {
  btn.addEventListener("click", function () {
    // 切換 active 樣式
    document.querySelectorAll(".room-tabs .nav-link").forEach((b) =>
      b.classList.remove("active")
    );
    this.classList.add("active");
    renderRoomCards(this.getAttribute("data-category"));

    // 👉 scroll 精準居中（考慮整體 scroll 寬度）
    const parent = wrapper.querySelector(".room-tabs");
    const tabLeft = this.offsetLeft;
    const tabWidth = this.offsetWidth;
    const parentWidth = parent.clientWidth;
    const scrollTarget = tabLeft - (parentWidth - tabWidth) / 2;

    parent.scrollTo({
      left: scrollTarget,
      behavior: "smooth",
    });

    // 👉 移動 indicator（改成 offsetLeft 計算 + scrollLeft）
    moveIndicator(this);
  });
});


  // 移動底線效果
  const wrapper = document.querySelector(".room-tabs-wrapper");
  if (wrapper) {
    const links = wrapper.querySelectorAll(".room-tabs .nav-link");
    const indicator = wrapper.querySelector(".tab-indicator");

    function moveIndicator(el) {
      const parent = wrapper.querySelector(".room-tabs");
      const scrollLeft = parent.scrollLeft;
      const offset = el.offsetLeft - parent.offsetLeft - scrollLeft;

      indicator.style.left = `${offset}px`;
      indicator.style.width = `${el.offsetWidth}px`;
    }

    links.forEach((link) => {
      link.addEventListener("click", () => moveIndicator(link));
    });

    const active = wrapper.querySelector(".room-tabs .nav-link.active");
    if (active) {
      setTimeout(() => moveIndicator(active), 50); // 避免初始化太早位置錯誤
    }
  }
};
