document.querySelector(".fa-bars").addEventListener("click", () => {
  var nav = (document.getElementById("nav").style.left = "0");
});

document.querySelector(".fa-xmark").addEventListener("click", () => {
  document.getElementById("nav").style.left = "-40%";
});
