$(document).ready(function () {

  var swiper1 = new Swiper(".main-slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".main-slide .paging",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slide .next",
      prevEl: ".main-slide .prev",
    },
  });

  var swiper2 = new Swiper(".sub-slide", {
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".sub-slide .paging",
      clickable: true,
    },
  });

});