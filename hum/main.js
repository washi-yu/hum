$(function () {
  // window.onload = function () {
  const nav = document.getElementById("nav-wrapper");
  const hamburger = document.getElementById("js-hamburger");
  const blackBg = document.getElementById("js-black-bg");
  // const headersp = document.getElementById("header-sp");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("open");
    // headersp.classList.toggle("none");
  });
  blackBg.addEventListener("click", function () {
    nav.classList.remove("open");
  });

  // };
});
