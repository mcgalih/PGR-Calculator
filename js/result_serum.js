var cogs_needed = 0;

function calculate() {
    // ============================== result view ==============================
    const view_result = document.getElementById("result");
    view_result.style.display = "block";

    //=============================== Get value ===============================
    
}

function round_up(numerator, denominator) {
    if (numerator / denominator > Math.floor(numerator / denominator)){
        return Math.ceil(numerator / denominator);
    } else {
        return Math.floor(numerator / denominator);
    }
}

function show_item(itemViewId, resultValue, valueId) {
    if (resultValue == 0) {
        itemViewId.classList.add("result-dontshow");
        itemViewId.classList.remove("result-show");
    } else {
        itemViewId.classList.remove("result-dontshow");
        itemViewId.classList.add("result-show");
        document.querySelector(valueId).textContent = resultValue;
    }
}

// input number validations
const onlyNumber = document.querySelectorAll(".InputNumber");
onlyNumber.forEach(function(button) {
    button.addEventListener("keydown", function(event){
        let key = event.key;
        if (key !== "9" && key !== "8" && key !== "7" && key !== "6" && key !== "5" &&
        key !== "4" && key !== "3" && key !== "2" && key !== "1" && key !== "0" &&
        key !== "ArrowUp" && key !== "ArrowDown" && key !== "Tab" && key !== "Backspace"){
            // console.log("only allow number");
            event.preventDefault();
        }
    })
});