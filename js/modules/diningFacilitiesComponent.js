window.loadDiningFacilities = function () {
  const target = document.getElementById("diningFacilitiesComponent");
  if (!target) return;

  // 外框 HTML（只有一個 carousel）
  target.innerHTML = `
    <section class="diningFacilitiesComponent">
      <div class="container my-5">
        <h2 class="hd-title">嚴選食材，精緻饗食</h2>
        <div class="row">
          <div class="col-12 food-section">
            <div class="owl-carousel custom-carousel owl-theme" id="diningCarousel">
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const carousel = document.getElementById("diningCarousel");

  const foodData = [
    { img: "sfd-01.jpg", title: "香煎肋眼牛排", desc: "厚切肋眼煎至五分熟，搭配濃郁胡椒醬與爐烤時蔬，外酥內嫩。" },
    { img: "sfd-02.jpg", title: "香檳佐黃玫瑰", desc: "精緻雙人香檳組合，綠意環繞、黃玫瑰點綴，浪漫氛圍升級。" },
    { img: "sfd-03.jpg", title: "繽紛水果拼盤", desc: "多種當季鮮果搭配優格與堅果，酸甜清爽兼具營養與美感。" },
    { img: "sfd-04.jpg", title: "經典提拉米蘇", desc: "層層堆疊濃郁咖啡與可可風味，義式甜點首選。" },
    { img: "sfd-05.jpg", title: "冰鎮金黃啤酒", desc: "沁涼暢快的生啤酒，搭配微苦餘韻，是炎夏最佳拍檔。" },
    { img: "sfd-06.jpg", title: "豪華日式刺身", desc: "新鮮直送生魚片與壽司盛合，呈現道地日式職人美味。" },
    { img: "sfd-07.jpg", title: "百香果氣泡飲", desc: "熱帶風味融合薄荷與檸檬氣泡，清新解膩，視覺滿分。" },
    { img: "sfd-08.jpg", title: "草莓奶酪甜品", desc: "滑順奶酪淋上草莓醬汁與新鮮果粒，是少女心甜點代表作。" }
  ];

  foodData.forEach((item, i) => {
    const isActive = [0].includes(i) ? 'active' : '';
    const delay = i * 100;

    carousel.innerHTML += `
      <div
        class="item ${isActive}"
        style="background-image: url(images/food-s-pic/${item.img});"
      >
        <div class="item-desc text-white text-center px-3 d-flex flex-column justify-content-end align-items-center h-100">
          <h3 class="mb-2">${item.title}</h3>
          <p class="small">${item.desc}</p>
        </div>
      </div>
    `;
  });

  // 初始化 OwlCarousel
  $(".custom-carousel").owlCarousel({
     autoWidth: true,
  loop: true,
  dots: true,
  margin: 20,
  items: 3,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 }
  }
  });

  // 點擊展開動畫
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
};
