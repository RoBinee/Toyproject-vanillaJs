import images from "./imgData.js";

//1. sign up
//1-1 show the sign up modal
const helpBtn = document.querySelector(".help-btn");
const modal = document.querySelector(".modal");
const cancelBtn = document.querySelector(".cancel-btn");

helpBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

cancelBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});

//1-2 sign up
const signUpForm = document.querySelector(".new-account-form");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = signUpForm.querySelector(".email");
  const passwordInput = signUpForm.querySelector(".password");
  let oldData = getData(); //get data from localstorage
  oldData.push({
    email: `${emailInput.value}`,
    password: `${passwordInput.value}`,
  });

  saveData(oldData);

  emailInput.value = "";
  passwordInput.value = "";

  modal.classList.remove("open-modal");
});

function getData() {
  //account? member?
  const data = localStorage.getItem("account")
    ? JSON.parse(localStorage.getItem("account"))
    : [];

  return data;
}

function saveData(arr) {
  localStorage.setItem("account", JSON.stringify(arr));
}

//2.login in

const loginForm = document.querySelector(".login-form");
const message = document.querySelector(".message");

loginForm.addEventListener("submit", (e) => {
  const emailInput = loginForm.querySelector(".email");
  const passwordInput = loginForm.querySelector(".password");
  e.preventDefault();

  let oldData = getData();
  //emailInput이랑 passwordInput이 모두 같아야해...
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;

  const errorFlag = oldData.find((item) => {
    const { email, password } = item;
    if (email == userEmail && password == userPassword) {
      return item;
    }
  });
  console.log(errorFlag);
  if (errorFlag) {
    //user exist
    //alarm..
    alert("Login Success!");
  } else if (!errorFlag) {
    //wrong id or password
    message.classList.add("error");
    message.textContent = "Error! Please write down again";

    let time = setTimeout(() => {
      message.classList.remove("error");
      message.textContent = "Please Enter Your Details";
    }, 2000);
  }

  emailInput.value = "";
  passwordInput.value = "";
});

//3. click -> change the img
const imgContainer = document.querySelector(".img-box");
const image = document.querySelector(".image");
let i = 1;

image.src = images[0].url;

imgContainer.addEventListener("click", () => {
  image.src = `${images[i].url}`;
  i++;
  if (i == images.length) {
    i = 0;
  }
});
