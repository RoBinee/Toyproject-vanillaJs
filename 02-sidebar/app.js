import data from "./data.js";

const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle");
// let categories;

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  //   if (sidebar.classList.contains("close")) {
  //     // console.log(categories);
  //     changeTitle();
  //   }
  changeWidth();
});

// 1. data 전시하기
const linksContainer = document.querySelector(".links-container");

// window.addEventListener("load", displayCategories);
window.addEventListener("DOMContentLoaded", () => {
  displayCategories();
  changeWidth();
});

function displayCategories() {
  //put data into linksContainer
  linksContainer.innerHTML = data
    .map((item) => {
      const { category, links } = item;
      const formattedLinks = links
        .map((link) => {
          const { label, icon } = link;
          return `<a href="#">
    <i class="${icon}"></i>
    <span class="label">${label}</span>
  </a>`;
        })
        .join("");

      return `<article class="single-category">
            <h4>${category}</h4>
            <div class="sidebar-sublink">
              ${formattedLinks}
            </div>
          </article>`;
    })
    .join("");
}

//close일때 아닐때 -> width 수정, 그에 따른 main left 수정

function changeWidth() {
  const container = document.querySelector(".container");
  const containerWidth = container.getBoundingClientRect().width;
  // 2. getBounding이용해서 width 정하기
  sidebar.style.width = `${containerWidth}px`;

  // 3. main width...어떻게할지
  const main = document.querySelector("main");
  //   main.style.left = `${containerWidth}px`;
  main.style.paddingLeft = `${containerWidth}px`;
  //   main.style.width = `${100% - }px`
}

const switchBtn = document.querySelector(".switch-btn");

switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("dark");
  document.documentElement.classList.toggle("dark-mode");
});
