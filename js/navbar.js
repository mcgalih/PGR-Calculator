const hamb_menu = document.getElementById("hamb-menu");
const hamb_icon = document.getElementById("hamb-icon");
const nav_construct = document.getElementById("nav-construct");
const menu_construct = document.getElementById("menu-construct");
const nav_cub = document.getElementById("nav-cub");
const menu_cub = document.getElementById("menu-cub");
const nav_serum = document.getElementById("nav-serum");
const menu_serum = document.getElementById("menu-serum");
const nav_about = document.getElementById("nav-about");
const menu_about = document.getElementById("menu-about");
const btn_calculate = document.getElementById("btn-calculate-wrapper");
const menu_result = document.getElementById("result");

function toggleNavbar() {
    hamb_menu.classList.toggle("open");
    hamb_icon.classList.toggle("open");
}

hamb_icon.addEventListener("click", toggleNavbar)

nav_construct.addEventListener("click", function () {
    toggleNavbar();
    menu_construct.style.display = "block";
    menu_cub.style.display = "none";
    menu_serum.style.display = "none";
    menu_about.style.display = "none";
    btn_calculate.style.display = "flex";
    menu_result.style.display = "block";
})

nav_cub.addEventListener("click", function () {
    toggleNavbar();
    menu_construct.style.display = "none";
    menu_cub.style.display = "block";
    menu_serum.style.display = "none";
    menu_about.style.display = "none";
    btn_calculate.style.display = "flex";
    menu_result.style.display = "block";
})

nav_serum.addEventListener("click", function () {
    toggleNavbar();
    menu_construct.style.display = "none";
    menu_cub.style.display = "none";
    menu_serum.style.display = "block";
    menu_about.style.display = "none";
    btn_calculate.style.display = "flex";
    menu_result.style.display = "block";
})

nav_about.addEventListener("click", function () {
    if(hamb_menu.classList.contains("open") && hamb_icon.classList.contains("open")){
        toggleNavbar();
    }
    menu_construct.style.display = "none";
    menu_cub.style.display = "none";
    menu_serum.style.display = "none";
    menu_about.style.display = "block";
    btn_calculate.style.display = "none";
    menu_result.style.display = "none";
})
