window.loadBanner = function () {
  const target = document.getElementById("bannerComponent");
  if (!target) return;

  target.innerHTML = `
    <section class="bannerComponent position-relative container-fluid overflow-hidden">
      <!-- 上下頁按鈕 -->
      <div class="slider-controls">
        <button class="slick-prev-custom" aria-label="上一張">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button class="slick-next-custom" aria-label="下一張">
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div class="row">

        <!-- 背景遮罩 -->
        <div class="darkMask"></div>

        <!-- 輪播圖片 -->
        <div class="slider">
          <div><img src="images/banner/Banner001.jpg" alt="Banner 1"></div>
          <div><img src="images/banner/BannerPhoto04.jpg" alt="Banner 2"></div>
          <div><img src="images/banner/room.jpg" alt="Banner 3"></div>
        </div>

        <!-- 圓點包裹容器 -->
        <div class="slick-dots-wrapper"></div>
      </div>
    </section>
  `;

  // 初始化 slick 輪播
  if (window.$ && $.fn.slick) {
    const $slider = $(".slider");

    // 防止 slick 重複初始化
    if (!$slider.hasClass("slick-initialized")) {
      // 把 slick-dots 搬移到指定容器
      $slider.on("init", function (event, slick) {
        const dots = $slider.find(".slick-dots").detach();
        $(".slick-dots-wrapper").empty().append(dots);
        console.log("dots 移動完成");
      });

      $slider.slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        fade: true,
        speed: 800,
        customPaging: function () {
          return `<button type="button"><span class="dot"></span></button>`;
        },
      });
    }

    // 自訂上下控制按鈕（綁一次就好）
    $(document).off("click.slickCustom");
    $(document).on("click.slickCustom", ".slick-prev-custom", function () {
      $slider.slick("slickPrev");
    });
    $(document).on("click.slickCustom", ".slick-next-custom", function () {
      $slider.slick("slickNext");
    });
  } else {
    console.warn("Slick Carousel 未載入");
  }
  // 每張進場強制動畫
$(".slider").on("afterChange", function (event, slick, currentSlide) {
  const $img = $('.slider .slick-slide[data-slick-index="' + currentSlide + '"] img');

  $img.removeClass("bg-zoom");

  // 強制 reflow 觸發動畫重啟
  void $img[0].offsetWidth;

  $img.addClass("bg-zoom");
});

};
