const hamburger = document.querySelector(".hamburger-menu");
const nav_list = document.querySelector(".nav_list");
const nav_links = [...document.querySelectorAll(".nav_link")];
const nav_items = [...document.querySelectorAll(".nav_item")];

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("change");

    nav_list.classList.toggle("nav-list-active");

    nav_links.forEach(function (element) {
        element.classList.toggle("nav-mobile-nav_link");
    });
    nav_items.forEach(function (element) {
        element.classList.toggle("nav-mobile-nav_item");
    });
});