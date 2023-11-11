/* SHOW MENU*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/* Remove Mobile Menu */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Scroll to active link */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((curent) => {
    const sectionHeight = curent.offsetHesight;
    const sectionTop = curent.offsetTop - 50;
    sectionId = curent.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* Header BG change */

function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 2000) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* -- Scroll Top -- */

function scrollTop() {
  const nav = document.getElementById("scroll-top");

  if (this.scrollY >= 6500) nav.classList.add("scroll-top");
  else nav.classList.remove("scroll-top");
}
window.addEventListener("scroll", scrollTop);
