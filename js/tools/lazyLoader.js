window.lazyLoader = function () {
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading') && !img.classList.contains('no-lazy')) {
      img.setAttribute('loading', 'lazy');

      // 加上淡入效果（可選）
      img.addEventListener('load', () => {
        img.classList.add('lazy-loaded');
      });
    }
  });
};
