const btn = document.getElementsByTagName("button");
const target = document.querySelector("#target");
let arr = Array.from(btn);

if (window.localStorage.getItem("color")) {
  target.style.backgroundColor = window.localStorage.getItem("color");
  arr.forEach((e) => {
    e.classList.remove("active");
  });
  document
    .querySelector(`[data-color = ${window.localStorage.getItem("color")}]`)
    .classList.add("active");
}

arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    arr.forEach((el) => {
      el.classList.remove("active");
    });
    btn.classList.add("active");
    window.localStorage.setItem("color", btn.dataset.color);
    target.style.backgroundColor = window.localStorage.getItem("color");
    target.style.transition = "background-color 200ms ease";
  });
});
