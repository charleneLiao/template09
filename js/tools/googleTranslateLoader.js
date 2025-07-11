(function () {
  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement(
      {
        pageLanguage: "zh-TW",
        includedLanguages: "zh-TW,en,ja",
        layout: google.translate.TranslateElement.InlineLayout.VERTICAL, // ✅ 改成直式
      },
      "google_translate_element"
    );
  };

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      if (document.getElementById("google_translate_element")) {
        const script = document.createElement("script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
      }
    }, 300);
  });
})();
