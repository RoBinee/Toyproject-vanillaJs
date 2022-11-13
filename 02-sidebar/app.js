import data from "./data.js";

const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle");

/**Display data */
const linksContainer = document.querySelector(".links-container");
const switchBtn = document.querySelector(".switch-btn");

/**EventListener */
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  changePadding();
});

window.addEventListener("DOMContentLoaded", () => {
  displayCategories();
  changePadding();
});
switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("dark");
  document.documentElement.classList.toggle("dark-mode");
});

/**function */

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

function changePadding() {
  const container = document.querySelector(".container");
  const containerWidth = container.getBoundingClientRect().width;
  sidebar.style.width = `${containerWidth}px`;

  const main = document.querySelector("main");
  main.style.paddingLeft = `${containerWidth + 20}px`;
}
