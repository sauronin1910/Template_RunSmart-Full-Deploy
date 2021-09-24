const swiper = new Swiper(".carousel__container", {
  // autoHeight: true,
  spaceBetween: 20,
  loop: true,
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

$(function() {
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  
  $(".catalog-item__back").each(function(i) {
    $(this).on("click", function(e) {
      e.preventDefault();
      $(".catalog-item__content ").eq(i).toggleClass("catalog-item__content_active");
      $(".catalog-item__list ").eq(i).toggleClass("catalog-item__list_active")
    })
  });


function toggleSlide(item) {
  $(item).each(function(i) {
    $(this).on("click", function(e) {
      e.preventDefault();
      $(".catalog-item__content ").eq(i).toggleClass("catalog-item__content_active");
      $(".catalog-item__list ").eq(i).toggleClass("catalog-item__list_active")
    })
  });
};
  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

});