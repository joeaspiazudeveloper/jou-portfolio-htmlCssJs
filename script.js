let mediaQueryObj = window.matchMedia("(prefers-color-scheme: dark)");
let isDarkMode = mediaQueryObj.matches; //
if (isDarkMode) {
  document.body.className = "dark";
} else {
  document.body.className = "light";
}

function toggleMenu() {
  const menu = document.querySelector(".hamburger-nav__links");
  const icon = document.querySelector(".hamburger-nav__icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
