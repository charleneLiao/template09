window.loadprecautions = function () {
  const target = document.getElementById("precautions");
  if (!target) return;

  target.innerHTML = `
    ${generateAccordionHTML([
      {
        title: "入住與退房",
        items: [
          "入住時間:15:00 後",
          "退房時間:12:00 前",
          "彈性保留:17:00"
        ]
      },
      {
        title: "行政俱樂部服務",
        items: [
          "行政俱樂部開放時間：06:30-22:00（限行政樓層房客使用）",
          "行政俱樂部早餐：06:30-10:00（週六06:30-10:30）",
          "雞尾酒會：17:00-19:00"
        ]
      },
      {
        title: "付款與加人政策",
        items: [
          "訂金為房價之 50%",
          "謝絕訪客，無加床服務，加人酌收 1,000 元清潔費。",
          "請務必依照民宿人數入住，若自行增加人數，民宿有權加倍收費。"
        ]
      },
      {
        title: "日期定義",
        items: [
          "假日定義：週六；平日定義：週日至週五。",
          "旺季：6 月～9 月、農曆新年及連續假日；淡季：10 月～5 月。"
        ]
      },
      {
        title: "安全與規範",
        items: [
          "貴重物品請隨身攜帶妥善保管，如有遺失恕不負責。",
          "為維護住宿安全，本民宿範圍內室內外皆禁菸、禁帶寵物、禁烤肉。",
          "如私自攜帶寵物入住，恕不退費並強制退房。",
          "嚴禁酗酒轟趴、嗑藥及違法行為，發現將立即報警處理。"
        ]
      }
    ])}
  `;

  // 控制展開收合動畫
  document.querySelectorAll(".panel-title").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const plus = btn.querySelector(".plus");

      const isOpen = content.style.maxHeight;

      // 收合
      if (isOpen) {
        content.style.maxHeight = null;
        content.style.opacity = 0;
        plus.style.transform = "rotate(0deg)";
      } else {
        // 展開
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = 1;
        plus.style.transform = "rotate(45deg)";
      }
    });
  });
};

// 協助產出 HTML 的函數
function generateAccordionHTML(groups) {
  return groups
    .map(
      (group) => `
    <div class="elem">
      <button class="panel-title">
        ${group.title}
        <span class="plus">＋</span>
      </button>
      <div class="panel-content policy-box">
        <ul class="policy-list">
          ${group.items.map((i) => `<li>${i}</li>`).join("")}
        </ul>
      </div>
    </div>
  `
    )
    .join("");
}
