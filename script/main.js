let menuIcon = document.querySelector(".header .bars");
let menu = document.querySelector(".header .bars + nav ul");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("active");
});
