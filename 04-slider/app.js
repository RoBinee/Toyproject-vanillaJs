import data from "./data.js";

window.addEventListener("DOMContentLoaded", () => {
  setUp();
});

let current = 0;

function setUp() {
  displayData();
  displayDots();
}

function displayData() {
  const sliderContainer = document.querySelector(".slide-container");

  const slides = data
    .map((item, index) => {
      const { img, title } = item;

      return `<article class="single-slide ${index == current ? `show` : ``}">
    <p class="page">${index + 1} / ${data.length}</p>
    <img
      src="${img}"
      alt="${title} img"
      class="single-img"
    />
    <h1 class="title">${title}</h1>
  </article>`;
    })
    .join("");

  sliderContainer.innerHTML = slides;
}

function displayDots() {
  const dotsContainer = document.querySelector(".dots-container");

  const dots = data
    .map((_, index) => {
      return `<span class="dot ${index == current ? `active` : ``}"></span>`;
    })
    .join("");
  dotsContainer.innerHTML = dots;
}

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("prev-btn")) {
      if (current == 0) {
        current = data.length - 1;
      } else {
        current--;
      }
    } else if (btn.classList.contains("next-btn")) {
      if (current == data.length - 1) {
        current = 0;
      } else {
        current++;
      }
    }
    setUp();
  });
});
