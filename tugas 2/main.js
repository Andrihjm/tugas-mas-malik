// BUTOON
const navbarNav = document.querySelector(".main-js")
document.querySelector("#button-menu").onclick = () => {
  navbarNav.classList.toggle("active");
}

//CLICK DI LUAR BUTTON
const hamburger = document.querySelector('#button-menu')
document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
})