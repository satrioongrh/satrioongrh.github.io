window.onscroll = function () {
  const nav = document.querySelector("#navbar");
  const fixednav = nav.offsetTop;

  if (window.pageYOffset > fixednav) {
    nav.classList.add("navbar-fixed");
  } else {
    nav.classList.remove("navbar-fixed");
  }
};

const menuToogle = document.querySelector(".menu-toogle input");
const nav = document.querySelector("nav ul");

menuToogle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
