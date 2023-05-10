// define variables
const infoList = document.querySelectorAll(".item");
const infoText = document.querySelectorAll(".text");

infoList.forEach((li) => {
  li.addEventListener("click", () => {
    infoList.forEach((e) => {
      e.classList.remove("selected");
    });
    li.classList.add("selected");
    infoText.forEach((d) => {
      if (d.dataset.name === li.dataset.name) {
        d.classList.add("selected");
      } else {
        d.classList.remove("selected");
      }
    });
  });
});
