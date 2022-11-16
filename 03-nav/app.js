import colors from "./colorData.js";

// variables
const navbar = document.querySelector(".navbar");
const navPosition = navbar.offsetTop;

//addEventListener
window.addEventListener("DOMContentLoaded", () => {
  startUI();
});

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  //pageYOffset is used for scroll

  if (scrollHeight >= navPosition) {
    navbar.classList.add("fixed");
  } else if (scrollHeight < navPosition) {
    navbar.classList.remove("fixed");
  }
});

//make responsive navbar
function startUI() {
  insertYear();
  insertSection();
  adjustPosition();
}

//make responsive nav
function insertYear() {
  const years = colors.reduce((total, color) => {
    if (!total.includes(color.year)) {
      total.push(color.year);
    }
    return total;
  }, []);

  navbar.innerHTML = years
    .map((year) => {
      return `<a href="#${year}" class="link" >${year}</a>`;
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

//control scroll

function adjustPosition() {
  const links = document.querySelectorAll(".link");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const year = link.textContent;
      const section = document.getElementById(year);
      let position = section.offsetTop;
      let navHeight = navbar.getBoundingClientRect().height;
      //viewport가 기준이기 때문에 클릭할때마다 상대위치가 이상하게 바뀐다...
      //getBounding대신 offsetTop으로 해결

      position = position - navHeight;

      window.scrollTo(0, position);
    });
  });
}
