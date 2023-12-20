function toggleMobileMenu() {
    let hamb_menu = document.getElementById("hamb-menu");
    let hamb_icon = document.getElementById("hamb-icon");
    hamb_menu.classList.toggle("open");
    hamb_icon.classList.toggle("open");
}

function MenuConstruct() {
    let hamb_menu = document.getElementById("hamb-menu");
    let hamb_icon = document.getElementById("hamb-icon");
    let menu_construct = document.getElementById("menu-construct");
    let menu_weapon = document.getElementById("menu-weapon");
    let menu_cub = document.getElementById("menu-cub");
    let menu_about = document.getElementById("menu-about");
    hamb_menu.classList.toggle("open");
    hamb_icon.classList.toggle("open");
    menu_construct.style.display = "block";
    menu_weapon.style.display = "none";
    menu_cub.style.display = "none";
    menu_about.style.display = "none";
}

function MenuWeapon() {
    let hamb_menu = document.getElementById("hamb-menu");
    let hamb_icon = document.getElementById("hamb-icon");
    let menu_construct = document.getElementById("menu-construct");
    let menu_weapon = document.getElementById("menu-weapon");
    let menu_cub = document.getElementById("menu-cub");
    let menu_about = document.getElementById("menu-about");
    hamb_menu.classList.toggle("open");
    hamb_icon.classList.toggle("open");
    menu_construct.style.display = "none";
    menu_weapon.style.display = "block";
    menu_cub.style.display = "none";
    menu_about.style.display = "none";
}

function MenuCub() {
    let hamb_menu = document.getElementById("hamb-menu");
    let hamb_icon = document.getElementById("hamb-icon");
    let menu_construct = document.getElementById("menu-construct");
    let menu_weapon = document.getElementById("menu-weapon");
    let menu_cub = document.getElementById("menu-cub");
    let menu_about = document.getElementById("menu-about");
    hamb_menu.classList.toggle("open");
    hamb_icon.classList.toggle("open");
    menu_construct.style.display = "none";
    menu_weapon.style.display = "none";
    menu_cub.style.display = "block";
    menu_about.style.display = "none";
}

function MenuAbout() {
    let hamb_menu = document.getElementById("hamb-menu");
    let hamb_icon = document.getElementById("hamb-icon");
    let menu_construct = document.getElementById("menu-construct");
    let menu_weapon = document.getElementById("menu-weapon");
    let menu_cub = document.getElementById("menu-cub");
    let menu_about = document.getElementById("menu-about");
    let menu_result = document.getElementById("result");
    hamb_menu.classList.toggle("open");
    hamb_icon.classList.toggle("open");
    menu_construct.style.display = "none";
    menu_weapon.style.display = "none";
    menu_cub.style.display = "none";
    menu_about.style.display = "block";
    menu_result.style.display = "none";
}
