const allTitles = document.querySelectorAll(".navbarTitle");
const body = document.body;
let camSound = new Audio("./sound/openCamera.mp3");

allTitles.forEach((title) => {
  title.addEventListener("click", () => {
    camSound.play();
  });

  title.addEventListener("mouseenter", () => {
    body.classList.add("hovered");
  });

  title.addEventListener("mouseleave", () => {
    body.classList.remove("hovered");
  });
});
