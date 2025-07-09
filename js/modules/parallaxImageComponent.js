window.loadParallaxImage = function () {
  const container = document.getElementById("parallaxImageComponent");
  if (!container) return;

  container.innerHTML = `
  <div class="parallax-wrapper">
    <div class="parallax-image rellax" data-rellax-speed="-8"></div>
  </div>

  `;
  
};
