const allTitles = document.querySelectorAll(".navbarTitle");
const body = document.body;
const animatronicsBar = document.getElementById("animatronicList");
let camSound = new Audio("./sound/openCamera.mp3");

allTitles.forEach((title) => {
  title.addEventListener("click", () => {
    animatronicsBar.classList.remove("nav-nothovered");
    camSound.play();
  });

  title.addEventListener("mouseenter", () => {
    body.classList.add("hovered");
  });

  title.addEventListener("mouseleave", () => {
    body.classList.remove("hovered");
  });
});
