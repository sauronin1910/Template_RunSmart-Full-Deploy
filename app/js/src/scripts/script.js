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


const content = document.querySelectorAll(".catalog-item__content");
const list = document.querySelectorAll(".catalog-item__list");
const btnLink = document.querySelectorAll('.catalog-item__link');
const btnBack = document.querySelectorAll('.catalog-item__back');



btnLink.forEach(function(btn) {
  btn.addEventListener("click", function(e){
    e.preventDefault()


     $(btn).parents('.catalog-item')




  })
})






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

// const content = document.querySelectorAll(".catalog-item__content");
// const list = document.querySelectorAll(".catalog+-item__list");
// const btnLink = document.querySelectorAll('.catalog-item__link');
// const btnBack = document.querySelectorAll('.catalog-item__back');



// function stopAction(item) {
//   item.onclick = function(evt) {
//     evt.preventDefault();
//   }
// };
// btnLink.forEach(stopAction);
// btnBack.forEach(stopAction);



// // var header = document.getElementById("myDIV");
// // var btns = header.getElementsByClassName("btn");



// for (var i = 0; i < btnLink.length; i++) {
//   btnLink[i].addEventListener("click", function() {
//     // var current = document.getElementsByClassName("active");
//     const  list = document.querySelectorAll(".catalog-item__list_active");
//     const content = document.querySelectorAll(".catalog-item__content");
//     list.classList.toggle("catalog-item__list_active");
//     content.classList.toggle("catalog-item__content_active");
//     // list[0].className = list[0].className.replace(" catalog-item__list_active", "");
//     // this.className += " catalog-item__list_active";
//   });
// }


// btnLink.onclick = btn();
// btnBack.onclick = btn();


// function btn() {
//   btn.addEventListener("click", function() {
//     const content = document.querySelectorAll(".catalog-item__content");
// const list = document.querySelectorAll(".catalog-item__list");
//     for(let i = 0; i < list.length; i++) {
//       list[i].classList.toggle("catalog-item__list_active")
//       content[i].classList.toggle("catalog-item__content_active");
//     };

//   })
// }


// function btn(item) {
// item.addEventListener("click", function () {



// // function contentList(item) {
// //       item.classList.toggle("catalog-item__list_active");
// //       item.classList.toggle("catalog-item__content_active");
// //     }
// //     list.forEach(contentList);
// //     content.forEach(contentList);


// // }
// // );
// }
