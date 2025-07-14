// 彈出登入 Modal 功能
window.loadLoginModal = function () {
  const existing = document.getElementById('memberModal');
  if (existing) {
    const modal = new bootstrap.Modal(existing);
    modal.show();
    return;
  }
};

// 會員登入與註冊 tab 切換
document.addEventListener("DOMContentLoaded", function () {
  const tabLogin = document.getElementById("tabLogin");
  const tabRegister = document.getElementById("tabRegister");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (tabLogin && tabRegister && loginForm && registerForm) {
    tabLogin.addEventListener("click", function () {
      tabLogin.classList.add("text-danger");
      tabLogin.classList.remove("text-muted");
      tabRegister.classList.remove("text-danger");
      tabRegister.classList.add("text-muted");

      loginForm.classList.remove("d-none");
      registerForm.classList.add("d-none");
    });

    tabRegister.addEventListener("click", function () {
      tabRegister.classList.add("text-danger");
      tabRegister.classList.remove("text-muted");
      tabLogin.classList.remove("text-danger");
      tabLogin.classList.add("text-muted");

      registerForm.classList.remove("d-none");
      loginForm.classList.add("d-none");
    });
  }

  // 會員登入按鈕綁定邏輯
  let loginBound = false;

  const bindLoginButtons = () => {
    if (loginBound) return;

    const desktopBtn = document.getElementById("openMemberModalBtn");
    const mobileBtn = document.getElementById("openMemberModalBtnMobile");

    if (typeof window.loadLoginModal !== "function") {
      console.warn("⚠️ loadLoginModal 尚未定義，稍後重試");
      setTimeout(bindLoginButtons, 100);
      return;
    }

    if (desktopBtn) {
      console.log("✅ 找到桌機登入按鈕");
      desktopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("📌 點擊桌機登入按鈕");
        window.loadLoginModal();
      });
    }

    if (mobileBtn) {
      console.log("✅ 找到手機登入按鈕");
      mobileBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("📌 點擊手機登入按鈕");
        window.loadLoginModal();
      });
    }

    loginBound = true;
  };

  bindLoginButtons(); // ✅ 初始執行綁定
});
