import images from "./imgData.js";

//1.회원 가입
//1-1 회원가입 창 띄우기
const helpBtn = document.querySelector(".help-btn");
const modal = document.querySelector(".modal");
const cancelBtn = document.querySelector(".cancel-btn");

helpBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

cancelBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});

//1-2 회원가입 시키기 -> localstorage에 저장하기
const signUpForm = document.querySelector(".new-account-form");
//함수안에 넣장...

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = signUpForm.querySelector(".email");
  const passwordInput = signUpForm.querySelector(".password");
  let oldData = getData(); //저장된 데이터를 불러온다
  oldData.push({
    email: `${emailInput.value}`,
    password: `${passwordInput.value}`,
  });

  saveData(oldData);

  emailInput.value = "";
  passwordInput.value = "";

  modal.classList.remove("open-modal");
});

/*
=========
localstorage start
=========
*/

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

/*
=========
localstorage end
=========
*/

//2.로그인하기

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

  const flag = oldData.find((item) => {
    const { email, password } = item;
    if (email == userEmail && password == userPassword) {
      return item;
    }
  });
  console.log(flag);
  if (flag) {
    //user exist
    //alarm..
    alert("Login Success!");
  } else if (!flag) {
    //wrong id or password
    //밑 두개를 일시적으로만 해야함

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

//3. 이미지 클릭 -> 이미지 바꾸기
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
