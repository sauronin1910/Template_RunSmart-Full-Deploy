const swiper = new Swiper(".carousel__container", {
  // autoHeight: true,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".carousel__dots",
    bulletClass: "carousel__dot-item swiper-pagination-bullet",
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

// tabs
const tabsCatalog = document.querySelectorAll(".catalog__tab");
const tabsContent = document.querySelectorAll(".catalog__content");

tabsCatalog.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentCat = item;
    let tabId = currentCat.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentCat.classList.contains("catalog__tab_active")) {
      tabsCatalog.forEach(function (item) {
        item.classList.remove("catalog__tab_active");
      });
      tabsContent.forEach(function (item) {
        item.classList.remove("catalog__content_active");
      });
    }

    currentCat.classList.add("catalog__tab_active");
    currentTab.classList.add("catalog__content_active");
  });
}

const link = document.querySelectorAll('.catalog-item__link')
const black = document.querySelectorAll('.catalog-item__back')

link.forEach(function(item){
  item.onclick = function (evt) {
    evt.preventDefault();
  }
})
black.forEach(function(item){
  item.onclick = function (evt) {
    evt.preventDefault();
  }
})



// const catalogBtn = document.querySelectorAll(".catalog-item__link");
// const catalogBtnBack = document.querySelectorAll(".catalog-item__back");
// const catItemCon = document.querySelectorAll(".catalog-item__content");
// const cotItemList = document.querySelectorAll(".catalog-item__list");


const content = document.querySelectorAll(".catalog-item__content");
const list = document.querySelectorAll(".catalog-item__list");
const btnLink = document.querySelectorAll(".catalog-item__link");
const btnBack = document.querySelectorAll(".catalog-item__back");

btnLink.forEach(function (item) {
  item.addEventListener("click", function () {
    list.forEach(function(item) {
      item.classList.add("catalog-item__list_active");
      content.forEach(function(item) {
        item.classList.remove("catalog-item__content_active");
      })
    })
  });
});
btnBack.forEach(function (item) {
  item.addEventListener("click", function () {
    list.forEach(function (item) {
      item.classList.remove("catalog-item__list_active");
    })
    content.forEach(function(item) {
      item.classList.add("catalog-item__content_active");
    })
  });
})



