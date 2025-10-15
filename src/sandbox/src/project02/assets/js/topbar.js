const iconMobileMenu = document.querySelector(".header-menu-icon");
const headerMenu = document.querySelector(".header-menu");
let isMobileMenuOpen = false;
let divMobileMenu;

/**
 * Create a new menu for Mobile
 * @param {*} event
 */
const createMobileMenu = (event) => {
  divMobileMenu = document.createElement("div");
  divMobileMenu.classList.add("header-menu-mobile");
  divMobileMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  divMobileMenu.append(headerMenu.querySelector("ul").cloneNode(true));
  headerMenu.append(divMobileMenu);
};

/**
 * Close Mobile menu
 * @param {*} event
 */
const closeMobileMenu = (event) => {
  divMobileMenu.classList.remove("open");
};

/**
 * Open Mobile menu
 * @param {*} event
 */
const openMobileMenu = (event) => {
  if (!divMobileMenu) {
    // Must create menu
    createMobileMenu(event);
  }
  divMobileMenu.classList.add("open");
};

/**
 * Hide / Show Mobile menu
 * @param {*} event
 */
const toggleMobileMenu = (event) => {
  if (isMobileMenuOpen) {
    closeMobileMenu(event);
  } else {
    openMobileMenu(event);
  }
  isMobileMenuOpen = !isMobileMenuOpen;
};

iconMobileMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMobileMenu(event);
});

window.addEventListener("click", (event) => {
  if (isMobileMenuOpen) {
    toggleMobileMenu(event);
  }
});
window.addEventListener("resize", (event) => {
  if (window.innerWidth > 480 && isMobileMenuOpen) {
    toggleMobileMenu(event);
  }
});
