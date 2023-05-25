"use strict";
// add to card
let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
// console.log(addToCartBtns);

// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", function () {
//     productsCountEl.textContent = +productsCountEl.textContent + 1;
//   });
// }
addToCartBtns.forEach((item) => {
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});

// change leke state

let likeBtns = document.querySelectorAll(".like");
// console.log(likeBtns);

// likeBtns.forEach((item) => {
//   item.addEventListener("click", function () {
//     if (item.classList.contains("liked")) {
//       item.classList.remove("liked");
//     } else {
//       item.classList.add("liked");
//     }
//   });
// });

// простіше
likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});

// more details
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
// console.log(moreDetailsBtns);
let modal = document.querySelector(".modal");
// console.log(modal);
moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", function () {
    // console.log("click");
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
});
//або можна винести функцію окремо
// moreDetailsBtns.forEach((item) => {
//   item.addEventListener("click", openModal);
// });
// function openModal() {
//   modal.classList.add("show");
//   modal.classList.remove("hide");
// }

let closeBtn = document.querySelector(".btn-close");
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target === modal) {
    closeModal();
  }
});

//slick
$(".slider").slick({
  dots: true,
});
