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
const btnLink = document.querySelectorAll(".catalog-item__link");
const btnBack = document.querySelectorAll(".catalog-item__back");

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
//////////////////// Create Parent to native JS

Element.prototype.parents = function (selector) {
  var elements = [];
  var elem = this;
  var ishaveselector = selector !== undefined;

  while ((elem = elem.parentElement) !== null) {
    if (elem.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    if (!ishaveselector || elem.matches(selector)) {
      elements.push(elem);
    }
  }

  return elements;
};
btnLink.forEach(btnClick);
btnBack.forEach(btnClick);

function btnClick(btn){
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const catalogItem = btn.parents(".catalog-item")[0];
    const catalogItemList = catalogItem.querySelector(".catalog-item__list");
    const catalogItemContent = catalogItem.querySelector(
      ".catalog-item__content"
    );

    catalogItemList.classList.toggle("catalog-item__list_active");
    catalogItemContent.classList.toggle("catalog-item__list_active");
  });
};

