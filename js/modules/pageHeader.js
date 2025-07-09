window.loadpageHeader = function () {
  const target = document.getElementById("pageHeader");
  if (!target) return;

  const page = document.body.getAttribute("data-page");

  const headerContent = {
    news: {
      subTitle: "KAOHSIUNG",
      title: "NEWS",
      image: "images/banner/BannerPhoto01.jpg",
      text: "掌握最新活動與優惠，讓您的住宿體驗更加豐富。",
    },
    intro: {
      subTitle: "KAOHSIUNG",
      title: "OUR　STORY",
      image: "images/banner/intro.jpg",
      text: "探索我們飯店的歷史與精神，感受無與倫比的熱情款待。",
    },
    facility: {
      subTitle: "KAOHSIUNG",
      title: "FACILITY",
      image: "images/banner/BannerPhoto04.jpg",
      text: "頂級設施與舒適空間，滿足您每一刻的需求與放鬆。",
    },
    contact: {
      subTitle: "KAOHSIUNG",
      title: "CONTACT US",
      image: "images/banner/contact.jpg",
      text: "如有任何疑問或需求，歡迎隨時與我們聯繫。",
    },
    default: {
      subTitle: "KAOHSIUNG",
      title: "STAY",
      image: "images/banner/banner1.jpg",
      text: "我們的每間客房和套房均融合了優雅風格和迷人的現代風格，擁有自己獨特的特色。",
    },
  };

  const content = headerContent[page] || headerContent.default;

  // ✅ 寫入 HTML
  target.innerHTML = `
    <section>
      <div class="hd title text-center" data-aos="fade-right"
           data-aos-offset="300"
           data-aos-easing="ease-in-sine">
           <div class="titleBox">
        <p>${content.subTitle}</p>
        <h1>${content.title}</h1>
        </div>
        <img src="${content.image}" alt="" height="23" />
      </div>
      <div class="text">
       <a href="javascript:void(0);" class="goBack" aria-label="回上一頁">
          <i class="fa-solid fa-arrow-left-long"></i>
          回上一頁
        </a>
        ${content.text}
      </div>
    </section>
  `;

  const backBtn = document.querySelector('.goBack');
  if (backBtn) {
    console.log("✅ 成功找到 .goBack");
    backBtn.addEventListener('click', function (e) {
      e.preventDefault();

      console.log("🔁 點到了返回按鈕");
      console.log("document.referrer =", document.referrer);
      console.log("history.length =", window.history.length);

      if (document.referrer && window.history.length > 1) {
        console.log("▶️ 使用 history.back()");
        history.back();
      } else {
        console.log("⏩ 沒有前頁，跳 news.html");
        window.location.href = "news.html";
      }
    });
  } else {
    console.warn("⚠️ 找不到 .goBack，沒綁成功");
  }

  AOS.init();
};
