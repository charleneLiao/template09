// ✅ loadingComponent.js
window.showPageAfterLoad = function () {
  window.addEventListener("load", function () {
    const loader = document.getElementById("pageLoader");
    loader?.classList.add("fade-out");
    setTimeout(() => {
      loader?.remove();
      const main = document.querySelector("main");
      if (main) main.style.visibility = "visible";
    }, 400);
  });
};
