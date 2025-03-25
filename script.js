const allTitles = document.querySelectorAll(".navbarTitle");
const body = document.body;
const animatronicsBar = document.querySelector(".navbarTitle + ul");
let camSound = new Audio("./sound/openCamera.mp3");

allTitles.forEach((title) => {
  title.addEventListener("click", () => {
    animatronicsBar.style.opacity = 1;
    animatronicsBar.style.translate = "0 0";
    camSound.play();
  });

  title.addEventListener("mouseenter", () => {
    body.classList.add("hovered");
  });

  title.addEventListener("mouseleave", () => {
    body.classList.remove("hovered");
  });
});
