let mediaQueryObj = window.matchMedia("(prefers-color-scheme: dark)");
let isDarkMode = mediaQueryObj.matches; //
if (isDarkMode) {
  document.body.className = "dark";
} else {
  document.body.className = "light";
}

const toggle = document.getElementById('toggle');
const toggle1 = document.getElementById('toggle1');
const body = document.getElementsByClassName('dark')[0];

toggle.onclick = function() {
  toggle.classList.toggle('active');
  body.classList.toggle('dark');
};

toggle1.onclick = function() {
  toggle1.classList.toggle('active');
  body.classList.toggle('dark');
};


function toggleMenu() {
  const menu = document.querySelector(".hamburger-nav__links");
  const icon = document.querySelector(".hamburger-nav__icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
