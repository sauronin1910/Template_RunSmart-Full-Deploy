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


// const content = document.querySelectorAll(".catalog-item__content");
// const list = document.querySelectorAll(".catalog-item__list");
// const btnLink = document.querySelectorAll('.catalog-item__link');
// const btnBack = document.querySelectorAll('.catalog-item__back');



// function stopAction(item) {
//   item.onclick = function(evt) {
//     evt.preventDefault();
//   }
// };
// btnLink.forEach(stopAction);
// btnBack.forEach(stopAction);


// btnLink.forEach(btn);
// btnBack.forEach(btn);

// function btn(item) {
// item.addEventListener("click", function () {
// function contentList(item) {
//       item.classList.toggle("catalog-item__list_active");
//       item.classList.toggle("catalog-item__content_active");
//     }
//     list.forEach(contentList);
//     content.forEach(contentList);
// });
// }


// btnLink.forEach(function (item) {
//   item.addEventListener("click", function () {
//     list.forEach(function(item) {
//       item.classList.add("catalog-item__list_active");
//       content.forEach(function(item) {
//         item.classList.remove("catalog-item__content_active");
//       })
//     })
//   });
// });
// btnBack.forEach(function (item) {
//   item.addEventListener("click", function () {
//     list.forEach(function (item) {
//       item.classList.remove("catalog-item__list_active");
//     })
//     content.forEach(function(item) {
//       item.classList.add("catalog-item__content_active");
//     })
//   });
// });


//////////////////////////////////////////////////////
const contents = document.querySelector(".catalog-item__content");
const lists = document.querySelector(".catalog-item__list");
const btnLink = document.querySelectorAll('.catalog-item__link');
const btnBack = document.querySelectorAll('.catalog-item__back');



function stopAction(item) {
  item.onclick = function(evt) {
    evt.preventDefault();
  }
};
btnLink.forEach(stopAction);
btnBack.forEach(stopAction);


btnLink.forEach(btn);
btnBack.forEach(btn);

function btn(item) {
item.addEventListener("click", function () {

  // const contents = document.querySelectorAll(".catalog-item__content");
  // const lists = document.querySelectorAll(".catalog-item__list");
function elemLists(item){
  item.classList.toggle("catalog-item__list_active");
  item.classList.toggle("catalog-item__content_active");
}

elemLists(item);

// item.classList.toggle("catalog-item__list_active");
// item.classList.toggle("catalog-item__content_active");


    // list.forEach(contentList);
    // content.forEach(contentList);
});
}


