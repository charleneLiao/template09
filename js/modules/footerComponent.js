
window.loadFooter = function () {
  const target = document.getElementById("footerComponent");
  if (!target) return;

  const data = {
    logo: "images/ft_logo.svg",
    hotelName: "高雄特斯德酒店",
    address: "高雄市新光路38號24F-6",
    phone: "+886-7-968-2715",
    fax: "+886-7-952-2221",
    social: [
      { href: "https://www.facebook.com/85SkyTowerHotel", icon: "fa-facebook", name: "Facebook" },
      { href: "http://www.weibo.com/1854503391/profile?topnav=1&amp;wvr=3.6", icon: "fa-youtube", name: "YouTube" },
      { href: "https://plus.google.com/u/0/b/110324599943771007016", icon: "fa-google", name: "Google+" }
    ],
    chains: [
      {
        group: "特斯德酒店",
        links: ["新竹特斯德酒店", "知本特斯德酒店", "礁溪特斯德酒店", "台北特斯德酒店", "北投特斯德酒店"]
      },
      {
        group: "特斯德酒店",
        links: ["宜蘭傳藝特斯德酒店", "特斯德大飯店"]
      },
      {
        group: "特斯德會館",
        links: ["特斯德會館台北南西", "特斯德會館台北林森"]
      },
      {
        group: "海外酒店",
        links: ["模里西斯帝王酒店", "尼加拉瓜馬拿瓜皇冠廣場飯店", "帛琉特斯德酒店", "西貢特斯德酒店"]
      }
    ],
    bottomLinks: [
      { text: "關於特斯德酒店", href: "#" },
      { text: "隱私權政策", href: "#" },
      { text: "連絡我們", href: "#" }
    ],
    note: "網頁中使用之飯店照片皆由四方通行拍攝，如有任何的拍攝服務需求，請與我們聯絡",
   button: ["攝影諮詢", "預定房間"]
  };

let html = `
<footer class="footerComponent py-2">
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5">
        <a href="index.html"><img src="${data.logo}" alt="logo" class="logo img-fluid mb-3" /></a>
      </div>
      <div class="col-md-4 mb-4 mb-md-0">
       <ul class="ftLink">
        <li><a href="news.html">最新消息</a></li>
        <li><a href="rooms.html">房型介紹</a></li>
        <li><a href="about.html">飯店介紹</a></li>
        <li><a href="facility.html">設施介紹</a></li>
        <li><a href="location.html">聯絡我們</a></li>
       </ul>
      </div>

      <div class="col-md-4 mb-4 mb-md-0">
        <div class="row">
        <div class="section-label">相關飯店</div>
          ${data.chains.map(group => `
          <div class="col-6 mb-2">
            <strong>${group.group}</strong>
            <ul class="list-unstyled small">
              ${group.links.map(name => `
              <li><a href="#">${name}</a></li>
              `).join("")}
            </ul>
          </div>
          `).join("")}
        </div>
      </div>

      <div class="col-md-4 text-md-end text-center">
      <div class="section-label d-flex justify-content-end">我們的位置</div>
        <ul class="list-unstyled small">
          <li class="fw-bold fs-6 mb-1">${data.hotelName}</li>
          <li class="mb-1">${data.address}</li>
          <li class="mb-1">訂房專線：${data.phone}</li>
          <li>傳真號碼：${data.fax}</li>
        </ul>
        <h6 class="fw-bold mb-3">Follow Us</h6>
        <div class="socialBox mb-3">
          ${data.social.map(item => `
          <a
            target="_blank"
            href="${item.href}"
            class="text-dark fs-5 me-3"
            aria-label="${item.name}"
          >
            <i class="fa-brands ${item.icon}"></i>
          </a>
          `).join("")}
        </div>
        <div class="btnWrap">
        ${data.button.map(text => `<button class="btn">${text}</button>`).join('')}
        </div>
       

      </div>
    </div>
    <div class="ft-des text-center small mt-5">
      <p class="mb-1">
        ${data.bottomLinks.map(link => `<a href="${link.href}" class="me-3"
          >${link.text}</a
        >`).join("")}
        <span>Copyright Easytravel</span>
      </p>
      <p class="mb-0">${data.note}</p>
    </div>
  </div>
</footer>

`;


  target.innerHTML = html;
};
