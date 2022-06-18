import { HIDDEN_CLASSNAME } from "./module.js";
import { showTodoForm } from "./todos.js";

const loginH1 = document.querySelector("#login-title");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greetingH1 = document.querySelector("#greeting");

const USERNAME_KEY = "username";

const checkTimeToGreet = () => {
  const nowTime = new Date().getHours();
  if (nowTime < 5) {
    return "night";
  } else if (nowTime < 12) {
    return "morning";
  } else if (nowTime < 18) {
    return "afternoon";
  } else if (nowTime < 22) {
    return "evening";
  } else {
    return "night";
  }
};

// 로그인 양식 제출 후 화면에 사용자 정보 표시 함수
const paintGreeting = () => {
  const username = localStorage.getItem(USERNAME_KEY);
  greetingH1.innerText = `Good ${checkTimeToGreet()}, ${username}.`;
  greetingH1.classList.remove(HIDDEN_CLASSNAME);
};

// 사용자 이름이 없는 경우 실행되는 로그인 함수
const onSubmitHandler = (e) => {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginH1.classList.add(HIDDEN_CLASSNAME);
  paintGreeting();
  showTodoForm();
};

export const savedUsername = localStorage.getItem(USERNAME_KEY);
if (!savedUsername) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginH1.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmitHandler);
} else {
  paintGreeting();
  showTodoForm();
}
