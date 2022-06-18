const bgItem = document.querySelector(".background-item");

const bgImgArr = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImage = bgImgArr[Math.floor(Math.random() * bgImgArr.length)];

bgItem.style.backgroundImage = `url("./src/asset/img/${chosenImage}")`