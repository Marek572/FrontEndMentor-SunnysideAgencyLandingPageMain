let mobileNav = document.getElementById("mobileNav");
let navItems = document.getElementsByClassName("mNavItem");
let contactButton = document.getElementById("contact");
const style = document.head.appendChild(document.createElement("style"));

let state = false;

function mNavExpand() {

  if (state) {
    state = false;
    mobileNav.style.animation = "collapse 2s forwards";
    style.innerHTML = "#mobileNav::before {opacity: 0; transition-delay: 1.9s;}";
    contactButton.style.animation = "fadeOut 0.5s forwards";
    for (let i = 0; i < 3; i++) {
      navItems[i].style.animation = "fadeOut 0.5s forwards";
    }
  } else {
    state = true;
    mobileNav.style.animation = "expand 2s forwards";
    style.innerHTML = "#mobileNav::before {opacity: 1;}";
    contactButton.style.animation = "fadeIn 1s 0.8s forwards";
    for (let i = 0; i < 3; i++) {
      navItems[i].style.animation = "fadeIn 1s 0.8s forwards";
    }
  }
}
