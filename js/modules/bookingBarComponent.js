window.loadBookingBar = function () {
  const target = document.getElementById("bookingBarComponent");
  if (!target) return;

  target.innerHTML = `
   <section class="bookingBarComponent" data-aos="">
  <div class="container">
    <div class="row bookingWrap">
      <div class="in">
        <!-- 入住 -->
        <div class="col-md-6">
          <p>入住/退房日期</p>
          <input
            class="flatpickr flatpickr-input"
            type="text"
            id="rangePreload"
            placeholder="Select Date.."
            readonly="readonly"
            placeholder="Select Date.."
            data-id="rangePreload"
          />
        </div>

        <!-- 成人 -->
        <div class="col-md-2">
          <div class="">
            <p>成人</p>
            <button type="button" class="action" onclick="adjust('adult', -1)">
              －
            </button>
            <span id="adultCount">2</span>
            <button type="button" class="action" onclick="adjust('adult', 1)">
              ＋
            </button>
          </div>
        </div>

        <!-- 兒童 -->
        <div class="col-md-2">
          <div class="">
            <p>兒童</p>
            <button type="button" class="action" onclick="adjust('child', -1)">
              －
            </button>
            <span id="childCount">0</span>
            <button type="button" class="action" onclick="adjust('child', 1)">
              ＋
            </button>
          </div>
        </div>
      </div>

      <!-- 預訂按鈕 -->
      <div class="col-md-2">
        <button type="button" class="btn btn-dark glow-btn">
          <i class="fa-solid fa-arrow-right-long"></i>立即預訂
        </button>
      </div>
    </div>
  </div>
</section>

  `;

  // ✨ 預設入住 / 退房日期
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  function formatDate(date) {
    return date.toISOString().split("T")[0]; // YYYY-MM-DD
  }

 if (window.flatpickr) {
  // 中文化
  flatpickr.localize(flatpickr.l10ns.zh);

  // 取得今天與明天的日期
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // 轉成 flatpickr 需要的格式字串
  const formatDate = (date) =>
    date.toISOString().split("T")[0]; // 例如 "2025-06-16"

  const defaultRange = [formatDate(today), formatDate(tomorrow)];

  // 初始化 flatpickr（區間）
  const instance = flatpickr("#rangePreload", {
    mode: "range",
    dateFormat: "Y-m-d",
    defaultDate: defaultRange,
    minDate: "today"
  });

  // 顯示預設值文字在 input 欄位中（如果需要手動處理）
  document.getElementById("rangePreload").value = defaultRange.join(" to ");

} else {
  console.warn("flatpickr 未載入");
}

};

// ✅ 成人 / 兒童數量調整函式
window.adjust = function (type, change) {
  const targetId = type === "adult" ? "adultCount" : "childCount";
  const span = document.getElementById(targetId);
  if (!span) return;

  let count = parseInt(span.textContent, 10) || 0;
  count += change;
  if (count < 0) count = 0;
  span.textContent = count;
};
