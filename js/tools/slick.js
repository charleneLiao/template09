$(document).ready(function () {
  // 一般輪播區塊（例如：最新消息）
  $("#promoSlider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // ✅ 加上這行
    autoplaySpeed: 3000,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1400, // ⬅️ 桌機大尺寸
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // ⬅️ 平板橫向
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // ⬅️ 手機直式
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // 自動輪播區塊（例如：推薦商品、品牌 Logo 等）
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });


});


