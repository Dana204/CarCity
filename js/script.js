const hamburger = document.querySelector(".toggle");
const navMenu = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
const searchIcon = document.querySelector(".search-icon");
const carSearch = document.querySelector(".search");

hamburger.addEventListener("click", mobileMenu);
searchIcon.addEventListener("click", displaySearch);

navLinks.forEach(link => link.addEventListener("click", closeMenu));

function mobileMenu() {
    removeSearch();
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function displaySearch() {
    closeMenu()
    carSearch.classList.toggle("active");
}

function removeSearch() {
    carSearch.classList.remove("active");
}