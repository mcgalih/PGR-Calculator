const max_lvlcub = document.getElementById("max-lvlcub");
const min_lvlcub = document.getElementById("min-lvlcub");
const custom_lvlcub = document.getElementById("custom-lvlcub");
const wrapper_lvlcub = document.getElementById("cublvl-wrapper");

for (let j = 1; j <= 3; j++) {
    document.getElementsByClassName("cub-overclock-img")[j].style.display = "none";
}

max_lvlcub.addEventListener("click", set_max_lvlcub);
min_lvlcub.addEventListener("click", set_min_lvlcub);

function set_max_lvlcub(){
    min_lvlcub.classList.remove("minmax-toggle");
    max_lvlcub.classList.add("minmax-toggle");
    custom_lvlcub.classList.remove("minmax-toggle");
    wrapper_lvlcub.classList.add("dont_show");
    wrapper_lvlcub.classList.remove("cublvl-wrapper");
    //=== max value
    document.getElementsByName("cuboverclock")[3].checked = true;
    document.getElementById("cub_lvl").value = 30;
    for (let j = 0; j <= 2; j++) {
        document.getElementsByClassName("cub-overclock-img")[j].style.display = "none";
    }
    document.getElementsByClassName("cub-overclock-img")[3].style.display = "block";
}

function set_min_lvlcub(){
    min_lvlcub.classList.add("minmax-toggle");
    max_lvlcub.classList.remove("minmax-toggle");
    custom_lvlcub.classList.remove("minmax-toggle");
    wrapper_lvlcub.classList.add("dont_show");
    wrapper_lvlcub.classList.remove("cublvl-wrapper");
    //=== min value
    document.getElementsByName("cuboverclock")[0].checked = true;
    document.getElementById("cub_lvl").value = 1;
    for (let j = 1; j <= 3; j++) {
        document.getElementsByClassName("cub-overclock-img")[j].style.display = "none";
    }
    document.getElementsByClassName("cub-overclock-img")[0].style.display = "block";
}

custom_lvlcub.addEventListener("click", function(){
    min_lvlcub.classList.remove("minmax-toggle");
    max_lvlcub.classList.remove("minmax-toggle");
    custom_lvlcub.classList.add("minmax-toggle");
    wrapper_lvlcub.classList.remove("dont_show");
    wrapper_lvlcub.classList.add("cublvl-wrapper");
    //=== set to current value
    var val = document.getElementsByName("cuboverclock");
    var overclock = 0;
    for (let j = 0; j <= 3; j++) {
        if(val[j].checked){
            overclock = parseInt(val[j].value);
        }
    }
    var input_num = document.getElementById("cub_lvl");
    switch (overclock) {
        case 0:
            input_num.setAttribute("max",10);
            break;
        case 1:
            input_num.setAttribute("max",15);
            break;
        case 2:
            input_num.setAttribute("max",25);
            break;
        case 3:
            input_num.setAttribute("max",30);
            break;
    }
})

var cub_overclock = 0;
function mod_cub_overclock(){
    var val = document.getElementsByName("cuboverclock");
    var img = document.getElementsByClassName("cub-overclock-img");
    var input_num = document.getElementById("cub_lvl");
    for (let i = 0; i <= 3; i++) {
        if(val[i].checked){
            cub_overclock = parseInt(val[i].value);
        }
    }
    cub_overclock++;
    if (cub_overclock > 3) cub_overclock = 0;
    val[cub_overclock].checked = true;

    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[cub_overclock].style.display = "block";
    switch (cub_overclock) {
        case 0:
            input_num.setAttribute("max",10);
            if (parseInt(input_num.value) > 10) input_num.value = 10;
            break;
        case 1:
            input_num.setAttribute("max",15);
            break;
        case 2:
            input_num.setAttribute("max",25);
            break;
        case 3:
            input_num.setAttribute("max",30);
            break;
    }
}

function mod_cub_level(el) {
    if (el.id == "pcub"){
        document.getElementById("cub_lvl").value++;
    }
    if (el.id == "ncub") {
        document.getElementById("cub_lvl").value--;
    }
    imposeMinMax(document.getElementById("cub_lvl"));
}

function imposeMinMax(el) {
    if (el.value != '') {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max;
        }
    } else {
        el.value = el.min;
    }
}

//====================== cub toggle ===============================//
var toggle_cub_val = document.getElementById("toggle-cub");
var content_cub = document.getElementById("content-cub");
content_cub.style.display = "none";
function toggle_cub(){    
    if(toggle_cub_val.checked == false){
        content_cub.style.display = "none";
    } else {
        content_cub.style.display = "block";
    }
}