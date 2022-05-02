document.querySelector(".fa-bars").addEventListener("click", () => {
  var nav = document.getElementById("nav");
  nav.style.left = "0";
  var menuHolder = document.getElementById("menu-holder");
  menuHolder.style.boxShadow = "0 0.5em 3em #000";
});

document.querySelector(".fa-xmark").addEventListener("click", () => {
  var nav = document.getElementById("nav");
  nav.style.left = "-200%";
  var menuHolder = document.getElementById("menu-holder");
  menuHolder.style.boxShadow = "0 0 0 #000;";
});

window.addEventListener("resize", () => {
  document.getElementById("window-width").textContent = window.innerWidth;
});
