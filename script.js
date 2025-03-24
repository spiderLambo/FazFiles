const allLi = document.getElementsByClassName("navbarTitle");
const body = document.body;
let camSound = new Audio("./sound/openCamera.mp3");

allLi.forEach((li) => {
  li.addEventListener("click", () => {
    camSound.play();
  });

  li.addEventListener("mouseenter", () => {
    body.classList.add("hovered");
  });

  li.addEventListener("mouseleave", () => {
    body.classList.remove("hovered");
  });
});
