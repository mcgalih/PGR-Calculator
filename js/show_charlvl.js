const value = document.querySelector("#show_lvl_input");
const lvl_input = document.querySelector("#lvl_input");
value.textContent = lvl_input.value;
lvl_input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
});
