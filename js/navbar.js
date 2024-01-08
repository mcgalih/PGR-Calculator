const hamb_menu = document.getElementById("hamb-menu");
const hamb_icon = document.getElementById("hamb-icon");
const hamb_list = document.querySelectorAll(".hamb-list");

function toggleNavbar() {
    hamb_menu.classList.toggle("open");
    hamb_icon.classList.toggle("open");
}

hamb_icon.addEventListener("click", toggleNavbar)

hamb_list.forEach(button => {
    button.addEventListener("click", toggleNavbar);
})