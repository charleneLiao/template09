window.loadSpecialOffers = function () {
  const target = document.getElementById("specialOffersComponent");
  if (!target) return;

  // 插入 HTML 結構（含頁碼區）
  target.innerHTML = `
<section class="specialOffersComponent">
  <div class="container-fluid">
    <div class="promo-sliderBox position-relative">
      <div class="promo-sliderIn">
        <div class="promo-slider"></div>
        <div class="slider-page-indicator text-center mt-3">
          <span id="slickPageNow">1</span> / <span id="slickPageTotal">2</span>
        </div>
      </div>
    </div>
  </div>
</section>
  `;

  const slider = document.querySelector(".promo-slider");
  // 插入內容卡片
  for (let i = 1; i <= 8; i++) {
    const num = String(i).padStart(2, "0");
    const promo = {
      img: `images/news/news${num}.jpg`,
      date: `2025/06/${String(8 + i).padStart(2, "0")}`,
      title: `最新消息 ${i}`,
      desc: `這是第 ${i} 筆新聞的簡要說明內容，可替換為實際資料。`,
    };
    const delay = i * 500;
    slider.innerHTML += `
    <div class="card mx-4" data-aos="fade-down" data-aos-delay="${delay}" data-aos-duration="1000">
      <div class="card-inner" style="--clr: #fff">
        <div class="box">
          <div class="imgBox">
             <img src="${promo.img}" class="card-img-top" alt="${promo.title}">
          </div>
          <div class="icon">
            <a href="news_detail.html" class="iconBox">
              <span class="material-symbols-outlined"> arrow_outward </span></a
            >
          </div>
        </div>
      </div>
      <div class="content">
        <div class="date-range">
          <div class="date-block">
            <span class="year">2025</span>
            <span class="date">06.08</span>
          </div>
          <span class="arrow">▶</span>
          <div class="date-block">
            <span class="year">2025</span>
            <span class="date">06.09</span>
          </div>
        </div> 
        <h3>${promo.title}</h3>
        <p>
         ${promo.desc}
        </p>
        <ul>
          <li style="--clr-tag: #d3b19a" class="branding">住宿優惠</li>
          <li style="--clr-tag: #70b3b1" class="packaging">餐飲優惠</li>
        </ul>
      </div>
    </div>
  `;
  }

  const $slider = $(".promo-slider");

  // ✅ 頁數監控邏輯（在 slick() 前綁定）
  $slider.on("init reInit afterChange", function (event, slick, currentSlide) {
    const totalPages = Math.ceil(
      slick.slideCount / slick.options.slidesToScroll
    );
    const currentPage =
      Math.floor((currentSlide || 0) / slick.options.slidesToScroll) + 1;
    document.getElementById("slickPageNow").textContent = currentPage;
    document.getElementById("slickPageTotal").textContent = totalPages;
  });

  // ✅ Slick 初始化
  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-angle-right"></i></button>`,
    dots: false,
    autoplay: false,
    infinite: true,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
};
