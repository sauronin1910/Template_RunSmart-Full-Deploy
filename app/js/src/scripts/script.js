const swiper = new Swiper(".carousel__container", {
  autoHeight: true,
  spaceBetween: 20,
  pagination: {
    el: ".carousel__dots",
    bulletClass: "carousel__dot-item swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
    bulletElement: "span",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: false,
  navigation: {
    nextEl: ".carousel__btn-next",
    prevEl: ".carousel__btn-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
