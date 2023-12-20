const show_value = document.querySelector("#show_lvl_input");
const lvl_input = document.querySelector("#lvl_input");
const lvl_dec = document.querySelector("#lvl_dec");
const lvl_inc = document.querySelector("#lvl_inc");
show_value.textContent = lvl_input.value;

function increaseValue() {
    var tempSliderValue = parseInt(document.getElementById('lvl_input').value);
    tempSliderValue = isNaN(tempSliderValue) ? 0 : tempSliderValue;
    tempSliderValue++;
    if (tempSliderValue > 80) {
        tempSliderValue = 80;
    }
    document.getElementById('lvl_input').value = tempSliderValue;
    // console.log(value);
    sliderVal(tempSliderValue);
}

function decreaseValue() {
    var tempSliderValue = parseInt(document.getElementById('lvl_input').value);
    tempSliderValue = isNaN(tempSliderValue) ? 0 : tempSliderValue;
    tempSliderValue--;
    if (tempSliderValue < 1) {
        tempSliderValue = 1;
    }
    document.getElementById('lvl_input').value = tempSliderValue;
    // console.log(value);
    sliderVal(tempSliderValue);
}

lvl_input.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;
    sliderVal(tempSliderValue);
});

function sliderVal(value) {
    show_value.textContent = value;
    const progress = (value / lvl_input.max) * 100;
    lvl_input.style.background = `linear-gradient(to right, #940000 ${progress}%, #ccc ${progress}%)`;
}