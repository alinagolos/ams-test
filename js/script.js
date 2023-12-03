var swiper = new Swiper('.promo__swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.promo__pagination',
  },
});
Fancybox.bind('[data-fancybox]', {});
