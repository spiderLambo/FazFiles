const allLi = document.querySelectorAll("li");
const body = document.body;

allLi.forEach((li) => {
  li.addEventListener("mouseenter", () => {
    body.classList.add("hovered");
  });

  li.addEventListener("mouseleave", () => {
    body.classList.remove("hovered");
  });
});
