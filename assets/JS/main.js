const items = document.querySelectorAll(".list_ip .list_ip__item");
const bgColor = document.querySelectorAll(".background_color .background_item");
const listChosse = document.querySelectorAll(
  ".slide_last_ip .list_color_select li"
);
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

listChosse.forEach((li, index) => {
  li.addEventListener("click", () => {
    // Di chuyển các slide cho đến khi slide tương ứng với dot được nhấp hiển thị
    while (active % listChosse.length !== index) {
      if (active % listChosse.length > index) {
        autoSlideBack();
      } else {
        autoSlideNext();
      }
    }
  });
});
