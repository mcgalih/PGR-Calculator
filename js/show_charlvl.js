const value = document.querySelector("#show_lvl_input");
const lvl_input = document.querySelector("#lvl_input");
value.textContent = lvl_input.value;
lvl_input.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;
    value.textContent = tempSliderValue;
    const progress = (tempSliderValue / lvl_input.max) * 100;
    lvl_input.style.background = `linear-gradient(to right, #940000 ${progress}%, #ccc ${progress}%)`;
});
