const max_weapon = document.getElementById("max-weapon");
const min_weapon = document.getElementById("min-weapon");
const weapon_5 = document.getElementById("5stars-weapon");
const weapon_6 = document.getElementById("6stars-weapon");
const weapon_5_view = document.getElementById("w5-container");
const weapon_6_view = document.getElementById("w6-container");
var weapon_rate =  document.getElementsByName("weapon-rate");

weapon_5_view.style.display = "none";
for (let j = 1; j <= 4; j++) {
    document.getElementsByClassName("w6-overclock-img")[j].style.display = "none";
}
for (let j = 0; j <= 3; j++) {
    document.getElementsByClassName("w5-overclock-img")[j].style.display = "none";
}

min_weapon.addEventListener("click", function () {
    min_btn_select();
    var weapon_rate_id = "";
    if(weapon_rate[0].checked) weapon_rate_id = "5";
    else if (weapon_rate[1].checked) weapon_rate_id = "6";
    set_min_weapon(weapon_rate_id);
})

max_weapon.addEventListener("click", function () {
    max_btn_select();
    var weapon_rate_id = "";
    if(weapon_rate[0].checked) weapon_rate_id = "5";
    else if (weapon_rate[1].checked) weapon_rate_id = "6";
    set_max_weapon(weapon_rate_id);
})

weapon_5.addEventListener("click", function () {
    weapon_rate[0].checked = true;
    weapon_5.classList.add("minmax-toggle");
    weapon_6.classList.remove("minmax-toggle");
    weapon_5_view.style.display = "flex";
    weapon_6_view.style.display = "none";
    min_btn_select();
    set_min_weapon(5);
    set_max_weapon(6);

})
weapon_6.addEventListener("click", function () {
    weapon_rate[1].checked = true;
    weapon_5.classList.remove("minmax-toggle");
    weapon_6.classList.add("minmax-toggle");
    weapon_5_view.style.display = "none";
    weapon_6_view.style.display = "flex";
    min_btn_select();
    set_min_weapon(6);
    set_max_weapon(5);
})

var w_overclock = 0;
function mod_w_overclock(el){
    id = parseInt(el.id.charAt(1));
    var val = document.getElementsByName("w" + id);
    var img = document.getElementsByClassName("w"+id+"-overclock-img");
    var input_num = document.getElementById("weapon_"+id);
    for (let i = 0; i <= 4; i++) {
        if(val[i].checked){
            w_overclock = parseInt(val[i].value);
        }
    }
    w_overclock++;
    if (w_overclock > 4) w_overclock = 0;
    val[w_overclock].checked = true;

    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[w_overclock].style.display = "block";
    switch (w_overclock) {
        case 0:
            input_num.setAttribute("max",25);
            if (parseInt(input_num.value) > 25) input_num.value = 25;
            if (parseInt(input_num.value) == 1) min_btn_select();
            else minmax_btn_deselect();
            break;
        case 1:
            input_num.setAttribute("max",30);
            minmax_btn_deselect();
            break;
        case 2:
            input_num.setAttribute("max",35);
            minmax_btn_deselect();
            break;
        case 3:
            input_num.setAttribute("max",40);
            minmax_btn_deselect();
            break;
        case 4:
            input_num.setAttribute("max",45);
            if (parseInt(input_num.value) == 45) max_btn_select();
            else minmax_btn_deselect();
            break;
    }
}

function imposeMinMax(el) {
    if (el.value != '') {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max;
        }
        if (parseInt(el.value) == 45) {
            max_btn_select();
        } else if (parseInt(el.value) == 1){
            var overclockw5 = document.getElementsByName("w5");
            var overclockw6 = document.getElementsByName("w6");
            if(overclockw5[0].checked || overclockw6[0].checked){
                min_btn_select();
            }
        } else {
            minmax_btn_deselect();
        }
    } else {
        el.value = el.min;
    }
}

function mod_w_level(el) {
    var inId = el.id;
    if (inId.charAt(0) == 'p'){
        var targetId = 'weapon_' + inId.charAt(2);
        document.getElementById(targetId).value++;
        // console.log("+"+targetId);
        imposeMinMax(document.getElementById(targetId));
    }
    if (inId.charAt(0) == 'n') {
        var targetId = 'weapon_' + inId.charAt(2);
        document.getElementById(targetId).value--;
        // console.log("-"+targetId);
        imposeMinMax(document.getElementById(targetId));
    }
}

function set_min_weapon(weapon_numId) {
    document.getElementsByName("w" + weapon_numId)[0].checked = true;
    document.getElementById("weapon_"+ weapon_numId).value = 1;
    for (let i = 1; i <= 4; i++) {
        document.getElementsByClassName("w"+weapon_numId+"-overclock-img")[i].style.display = "none";
    }
    document.getElementsByClassName("w"+weapon_numId+"-overclock-img")[0].style.display = "block";
}

function set_max_weapon(weapon_numId) {
    document.getElementsByName("w" + weapon_numId)[4].checked = true;
    document.getElementById("weapon_"+ weapon_numId).value = 45;
    for (let i = 0; i <= 3; i++) {
        document.getElementsByClassName("w"+weapon_numId+"-overclock-img")[i].style.display = "none";
    }
    document.getElementsByClassName("w"+weapon_numId+"-overclock-img")[4].style.display = "block";
}

function min_btn_select() {
    min_weapon.classList.add("minmax-toggle");
    max_weapon.classList.remove("minmax-toggle");
}

function max_btn_select() {
    min_weapon.classList.remove("minmax-toggle");
    max_weapon.classList.add("minmax-toggle");
}

function minmax_btn_deselect() {
    min_weapon.classList.remove("minmax-toggle");
    max_weapon.classList.remove("minmax-toggle");
}