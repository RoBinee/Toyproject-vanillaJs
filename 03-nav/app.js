import colors from "./colorData.js";
//navbar -> add classList fixed

//nav도 responsive하게, 색도 지정해야함

window.addEventListener("DOMContentLoaded", () => {
  startUI();
});

//make responsive navbar

function startUI() {
  insertYear();
  insertSection();
}

const navbar = document.querySelector(".navbar");
function insertYear() {
  const years = colors.reduce((total, color) => {
    if (!total.includes(color.year)) {
      total.push(color.year);
    }
    return total;
  }, []);

  navbar.innerHTML = years
    .map((year) => {
      return `<a href="#${year}" class="link">${year}</a>`;
    })
    .join("");
}

//make responsive section

function insertSection() {
  const header = document.getElementById("home");
  const sections = colors
    .map((color) => {
      const { year, colorName } = color;
      return `<section id="${year}" data-id="${year}" class="section">
      <div class="paper">
        <div class="color"></div>
        <div class="info">
          <h2>Pantone</h2>
          <h3 class="color-name">${colorName}</h3>
        </div>
      </div>
    </section>`;
    })
    .join("");

  header.insertAdjacentHTML("afterend", sections);

  setBackground();
}

//set background
//id를 불러온다 -> style.background에 colorCode를 set한다
function setBackground() {
  const sections = [...document.querySelectorAll(".section")];

  sections.forEach((section) => {
    const paperColor = section.querySelector(".color");
    const id = section.dataset.id;

    const sectionColor = colors.find((color) => {
      if (color.year == id) {
        return color;
      }
    });
    section.style.background = `${sectionColor.colorCode}`;
    paperColor.style.background = `${sectionColor.colorCode}`;
  });
}

//scroll
const navPosition = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  //document 기준임

  if (scrollHeight >= navPosition) {
    navbar.classList.add("fixed");
  } else if (scrollHeight < navPosition) {
    navbar.classList.remove("fixed");
  }

  ///why it works...?????
});
