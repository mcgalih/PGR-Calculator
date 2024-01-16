

function calculate() {
    // ============================== result view ==============================
    var view_full_serum = document.getElementById("full-serum");
    var view_serum_time = document.getElementById("serum-time");

    //=============================== Get value ===============================
    var serumVal = parseInt(document.querySelector('#serum_input').value);
    var today = new Date();
    var current_hours = today.getHours();
    var current_minutes = today.getMinutes();
    var current_seconds = today.getSeconds();

    var remainingSerum = 160 - serumVal;
    var totalMinutes = remainingSerum * 6;

    var remaining_hours = parseInt(totalMinutes / 60);
    var remaining_minutes = totalMinutes % 60;

    var maxSerum_hours = current_hours + remaining_hours;
    var maxSerum_minutes = current_minutes + remaining_minutes;

    if(maxSerum_minutes >= 60){
        maxSerum_hours += 1;
        maxSerum_minutes -= 60;
    }
    var maxSerum_day = "today";
    if (maxSerum_hours >= 24) {
        maxSerum_hours -= 24;
        maxSerum_day = "tomorrow";
    }

    if (remainingSerum == 0){
        view_full_serum.style.display = "flex";
        view_serum_time.style.display = "none";
    } else {
        view_full_serum.style.display = "none";
        view_serum_time.style.display = "block";
    }
    
    if (maxSerum_hours < 10) maxSerum_hours = "0" + maxSerum_hours;
    if (maxSerum_minutes < 10) maxSerum_minutes = "0" + maxSerum_minutes;

    var maxSerum_time = maxSerum_day + ", [" + maxSerum_hours + ":" + maxSerum_minutes+"]";
    document.querySelector('#serum-time-remaining').textContent = maxSerum_time;
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