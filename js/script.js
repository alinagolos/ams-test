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

const menuBtn = document.querySelector('.button--mobile');
const menuMobile = document.querySelector('.header__menu-wrapper');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('nav--open');
});
