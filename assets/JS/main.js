const items = document.querySelectorAll(".list_ip .list_ip__item");
const bgColor = document.querySelectorAll(".background_color .background_item");
let active = 0;

function autoSlideNext() {
  active++;
  const firstItem = document.querySelector(
    ".list_ip .list_ip__item:first-child"
  );
  document.querySelector(".list_ip").appendChild(firstItem);
  updateBG();
}

function updateBG() {
  bgColor.forEach((bg, index) => {
    // sau nhấn lần đầu active=1%4=1 --> active vt 2
    if (index === active % bgColor.length) {
      bg.classList.add("active");
    } else {
      bg.classList.remove("active");
    }
  });
}

function autoSlideBack() {
  active--;
  const lastItem = document.querySelector(".list_ip .list_ip__item:last-child");
  document.querySelector(".list_ip").prepend(lastItem);
  updateBG();
}

// phần màu sắc
const colorList = document.querySelectorAll(
  ".slide_last_ip .list_color_select .item_color"
);
const boxColor = document.querySelector(".slide_last_ip .list_color_select");

var tgColor = 0;

function colorActiveNext() {}

// phần nút bấm chuyển
const leftVector = document.getElementById("left-btn");
const rightVector = document.getElementById("right-btn");

rightVector.addEventListener("click", () => {
  const firstColor = document.querySelector(
    ".slide_last_ip .list_color_select .item_color:first-child"
  );
  document.querySelector(".list_color_select").appendChild(firstColor);
  autoSlideNext();
});
leftVector.addEventListener("click", () => {
  const lastColor = document.querySelector(
    ".slide_last_ip .list_color_select .item_color:last-child"
  );
  document.querySelector(".list_color_select").prepend(lastColor);
  autoSlideBack();
});
