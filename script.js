function toggleMenu() {
  const menu = document.querySelector(".hamburger-nav__links");
  const icon = document.querySelector(".hamburger-nav__icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
