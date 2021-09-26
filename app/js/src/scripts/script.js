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

const content = document.querySelectorAll(".catalog-item__content");
const list = document.querySelectorAll(".catalog-item__list");
const btnLink = document.querySelectorAll('.catalog-item__link');
const btnBack = document.querySelectorAll('.catalog-item__back');

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

btnLink.forEach(stopAction);
btnBack.forEach(stopAction);

function stopAction(item) {
  item.onclick = function(evt) {
    evt.preventDefault();
  }
};



// const content = document.querySelectorAll(".catalog-item__content");
// const list = document.querySelectorAll(".catalog-item__list");

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
});

// const content = document.querySelectorAll(".catalog-item__content");
// const list = document.querySelectorAll(".catalog-item__list");
// const btnLink = document.querySelectorAll(".catalog-item__link");
// const btnBack = document.querySelectorAll(".catalog-item__back");

// const catalogItems = document.querySelectorAll('.catalog-item');

// catalogItems.forEach(item => {

//   const btn = item.querySelector('.link')
//   btn.addEventListener("click", function() {
//     item.addEventListener.classList("catalog-item__list_active ")
//   })
// })
