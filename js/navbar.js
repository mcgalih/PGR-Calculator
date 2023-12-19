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
    hamb_menu.classList.toggle("open");
    hamb_icon.classList.toggle("open");
    menu_construct.style.display = "block";
    menu_weapon.style.display = "none";
    menu_cub.style.display = "none";
}

function MenuWeapon() {
    let hamb_menu = document.getElementById("hamb-menu");
    let hamb_icon = document.getElementById("hamb-icon");
    let menu_construct = document.getElementById("menu-construct");
    let menu_weapon = document.getElementById("menu-weapon");
    let menu_cub = document.getElementById("menu-cub");
    hamb_menu.classList.toggle("open");
    hamb_icon.classList.toggle("open");
    menu_construct.style.display = "none";
    menu_weapon.style.display = "block";
    menu_cub.style.display = "none";
}

function MenuCub() {
    let hamb_menu = document.getElementById("hamb-menu");
    let hamb_icon = document.getElementById("hamb-icon");
    let menu_construct = document.getElementById("menu-construct");
    let menu_weapon = document.getElementById("menu-weapon");
    let menu_cub = document.getElementById("menu-cub");
    hamb_menu.classList.toggle("open");
    hamb_icon.classList.toggle("open");
    menu_construct.style.display = "none";
    menu_weapon.style.display = "none";
    menu_cub.style.display = "block";
}
