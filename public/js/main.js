const hamburger = document.querySelector(".hamburger-icon");
const nav_list = document.querySelector(".nav-list");
const nav_links = [...document.querySelectorAll(".nav-link")];
const nav_items = [...document.querySelectorAll(".nav-item")];

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("change");

    nav_list.classList.toggle("nav-list-active");

    nav_links.forEach(function (element) {
        element.classList.toggle("nav-link-active");
    });
});