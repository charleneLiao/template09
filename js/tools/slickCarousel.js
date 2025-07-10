$(".intro-carousel").slick({
    speed: 18000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
    slidesToShow: 5,
  	slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
  	centerMode: true,
    focusOnSelect: true,
    arrows: false,
    variableWidth: true,
    responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              }
            }
            ]
});