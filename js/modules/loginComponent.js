window.loadLoginModal = function () {
  const existing = document.getElementById('memberModal');
  if (existing) {
    const modal = new bootstrap.Modal(existing);
    modal.show();
    return;
  }
};

// 會員登入tab
  document.addEventListener("DOMContentLoaded", function () {
    const tabLogin = document.getElementById("tabLogin");
    const tabRegister = document.getElementById("tabRegister");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

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
  });
