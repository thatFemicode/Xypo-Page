var menuBtn = document.getElementById("menubtn");
var sideNav = document.getElementById("sidenav");

sideNav.style.right = "-250px";
menuBtn.addEventListener("click", function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.transition = ".5s";
    sideNav.style.opacity = "0.5";
    sideNav.style.right = "0";
  } else {
    sideNav.style.right = "-250px";
  }
});

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
