//============================== serum ===============================//
const show_value = document.querySelector("#show_serum");
const serum_input = document.querySelector("#serum_input");
const serum_dec = document.querySelector("#serum_dec");
const serum_inc = document.querySelector("#serum_inc");

show_value.textContent = serum_input.value;

function increaseValue() {
    var tempSliderValue = parseInt(document.getElementById('serum_input').value);
    tempSliderValue = isNaN(tempSliderValue) ? 0 : tempSliderValue;
    tempSliderValue++;
    if (tempSliderValue > 160) {
        tempSliderValue = 160;
    }
    document.getElementById('serum_input').value = tempSliderValue;
    sliderVal(tempSliderValue);
}

function decreaseValue() {
    var tempSliderValue = parseInt(document.getElementById('serum_input').value);
    tempSliderValue = isNaN(tempSliderValue) ? 0 : tempSliderValue;
    tempSliderValue--;
    if (tempSliderValue < 0) {
        tempSliderValue = 0;
    }
    document.getElementById('serum_input').value = tempSliderValue;
    sliderVal(tempSliderValue);
}

serum_input.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;
    sliderVal(tempSliderValue);
});

function sliderVal(value) {
    show_value.textContent = value;
    const progress = (value / serum_input.max) * 100;
    serum_input.style.background = `linear-gradient(to right, #940000 ${progress}%, #ccc ${progress}%)`;
}