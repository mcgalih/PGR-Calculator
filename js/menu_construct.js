//============================== level ===============================//
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

function set_max_lvl_construct() {
    document.getElementById('lvl_input').value = 80;
    sliderVal(80);
}

function set_min_lvl_construct() {
    document.getElementById('lvl_input').value = 1;
    sliderVal(1);
}

//============================== Skills ===============================//
const max_skill = document.getElementById("max-skill");
const min_skill = document.getElementById("min-skill");
const custom_skill = document.getElementById("custom-skill");
const wrapper_skill = document.getElementById("skills-wrapper");

max_skill.addEventListener("click", function () {
    set_max_Skill_construct();
})

min_skill.addEventListener("click", function () {
    set_min_Skill_construct();
})

function set_max_Skill_construct(){
    min_skill.classList.remove("minmax-toggle");
    max_skill.classList.add("minmax-toggle");
    custom_skill.classList.remove("minmax-toggle");
    for (let i = 1; i <= 8; i++) {
        document.getElementById("skill_" + i).value = 18;
    }
    document.getElementById("skill_9").checked = true;
    wrapper_skill.classList.add("dont_show");
    wrapper_skill.classList.remove("grid-wrapper");
}

function set_min_Skill_construct(){
    min_skill.classList.add("minmax-toggle");
    max_skill.classList.remove("minmax-toggle");
    custom_skill.classList.remove("minmax-toggle");
    for (let i = 1; i <= 8; i++) {
        document.getElementById("skill_" + i).value = 1;
    }
    document.getElementById("skill_9").checked = false;
    wrapper_skill.classList.add("dont_show");
    wrapper_skill.classList.remove("grid-wrapper");
}

custom_skill.addEventListener("click", function(){
    min_skill.classList.remove("minmax-toggle");
    max_skill.classList.remove("minmax-toggle");
    custom_skill.classList.add("minmax-toggle");
    wrapper_skill.classList.remove("dont_show");
    wrapper_skill.classList.add("grid-wrapper");
})

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

function modIn(el) {
    var inId = el.id;
    if (inId.charAt(0) == 'p'){
        var targetId = 'skill_' + inId.charAt(2);
        document.getElementById(targetId).value++;
        // console.log("+"+targetId);
        imposeMinMax(document.getElementById(targetId));
    }
    if (inId.charAt(0) == 'n') {
        var targetId = 'skill_' + inId.charAt(2);
        document.getElementById(targetId).value--;
        // console.log("-"+targetId);
        imposeMinMax(document.getElementById(targetId));
    }
}

//============================== Memory ===============================//
const max_memory = document.getElementById("max-memory");
const min_memory = document.getElementById("min-memory");
const custom_memory = document.getElementById("custom-memory");
const wrapper_memory = document.getElementById("memory-wrapper");

for (let i = 1; i <= 6; i++) {
    // initial memory stamp display, overclock 0 -> display = block
    for (let j = 1; j <= 4; j++) {
        document.getElementsByClassName("m"+i+"-overclock-img")[j].style.display = "none";
    }
}

max_memory.addEventListener("click", function () {
    set_max_memory();
})

min_memory.addEventListener("click", function () {
    set_min_memory();
})

function set_max_memory(){
    min_memory.classList.remove("minmax-toggle");
    max_memory.classList.add("minmax-toggle");
    custom_memory.classList.remove("minmax-toggle");
    wrapper_memory.classList.add("dont_show");
    wrapper_memory.classList.remove("grid-wrapper");
    //=== max value
    for (let i = 1; i <= 6; i++) {
        document.getElementsByName("m"+i)[4].checked = true;
        document.getElementById("memory_"+i).value = 45;
        for (let j = 0; j <= 3; j++) {
            document.getElementsByClassName("m"+i+"-overclock-img")[j].style.display = "none";
        }
        document.getElementsByClassName("m"+i+"-overclock-img")[4].style.display = "block";
    }
}

function set_min_memory(){
    min_memory.classList.add("minmax-toggle");
    max_memory.classList.remove("minmax-toggle");
    custom_memory.classList.remove("minmax-toggle");
    wrapper_memory.classList.add("dont_show");
    wrapper_memory.classList.remove("grid-wrapper");
    //=== min value
    for (let i = 1; i <= 6; i++) {
        document.getElementsByName("m"+i)[0].checked = true;
        document.getElementById("memory_"+i).value = 1;
        for (let j = 1; j <= 4; j++) {
            document.getElementsByClassName("m"+i+"-overclock-img")[j].style.display = "none";
        }
        document.getElementsByClassName("m"+i+"-overclock-img")[0].style.display = "block";
    }
}

custom_memory.addEventListener("click", function(){
    min_memory.classList.remove("minmax-toggle");
    max_memory.classList.remove("minmax-toggle");
    custom_memory.classList.add("minmax-toggle");
    wrapper_memory.classList.remove("dont_show");
    wrapper_memory.classList.add("grid-wrapper");
    //=== set to current value
    for (let i = 1; i <= 6; i++) {
        var val = document.getElementsByName("m"+i);
        var overclock = 0;
        for (let j = 0; j <= 4; j++) {
            if(val[j].checked){
                overclock = parseInt(val[j].value);
            }
        }
        var input_num = document.getElementById("memory_"+i);
        switch (overclock) {
            case 0:
                input_num.setAttribute("max",25);
                break;
            case 1:
                input_num.setAttribute("max",30);
                break;
            case 2:
                input_num.setAttribute("max",35);
                break;
            case 3:
                input_num.setAttribute("max",40);
                break;
            case 4:
                input_num.setAttribute("max",45);
                break;
        }
    }
})

var m_overclock = 0;
function mod_m_overclock(el){
    id = parseInt(el.id.charAt(1));
    var val = document.getElementsByName("m" + id);
    var img = document.getElementsByClassName("m"+id+"-overclock-img");
    var input_num = document.getElementById("memory_"+id);
    for (let i = 0; i <= 4; i++) {
        if(val[i].checked){
            m_overclock = parseInt(val[i].value);
        }
    }
    m_overclock++;
    if (m_overclock > 4) m_overclock = 0;
    val[m_overclock].checked = true;

    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[m_overclock].style.display = "block";
    switch (m_overclock) {
        case 0:
            input_num.setAttribute("max",25);
            if (parseInt(input_num.value) > 25) input_num.value = 25;
            break;
        case 1:
            input_num.setAttribute("max",30);
            break;
        case 2:
            input_num.setAttribute("max",35);
            break;
        case 3:
            input_num.setAttribute("max",40);
            break;
        case 4:
            input_num.setAttribute("max",45);
            break;
    }
}

function mod_m_level(el) {
    var inId = el.id;
    if (inId.charAt(0) == 'p'){
        var targetId = 'memory_' + inId.charAt(2);
        document.getElementById(targetId).value++;
        // console.log("+"+targetId);
        imposeMinMax(document.getElementById(targetId));
    }
    if (inId.charAt(0) == 'n') {
        var targetId = 'memory_' + inId.charAt(2);
        document.getElementById(targetId).value--;
        // console.log("-"+targetId);
        imposeMinMax(document.getElementById(targetId));
    }
}

//============================== Weapon ===============================//
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
    min_weapon_btn_select();
    for (let i = 0; i < 2; i++) {
        if(weapon_rate[i].checked) set_min_weapon(weapon_rate[i].value);
    }
})

max_weapon.addEventListener("click", function () {
    max_weapon_btn_select();
    for (let i = 0; i < 2; i++) {
        if(weapon_rate[i].checked) set_max_weapon(weapon_rate[i].value);
    }
})

weapon_5.addEventListener("click", function () {
    weapon_rate[0].checked = true;
    weapon_5.classList.add("minmax-toggle");
    weapon_6.classList.remove("minmax-toggle");
    weapon_5_view.style.display = "flex";
    weapon_6_view.style.display = "none";
    min_weapon_btn_select();
    set_min_weapon(weapon_rate[0].value);
    set_max_weapon(weapon_rate[1].value);

})
weapon_6.addEventListener("click", function () {
    weapon_rate[1].checked = true;
    weapon_5.classList.remove("minmax-toggle");
    weapon_6.classList.add("minmax-toggle");
    weapon_5_view.style.display = "none";
    weapon_6_view.style.display = "flex";
    min_weapon_btn_select();
    set_min_weapon(weapon_rate[1].value);
    set_max_weapon(weapon_rate[0].value);
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
            if (parseInt(input_num.value) == 1) min_weapon_btn_select();
            else minmax_weapon_btn_deselect();
            break;
        case 1:
            input_num.setAttribute("max",30);
            minmax_weapon_btn_deselect();
            break;
        case 2:
            input_num.setAttribute("max",35);
            minmax_weapon_btn_deselect();
            break;
        case 3:
            input_num.setAttribute("max",40);
            minmax_weapon_btn_deselect();
            break;
        case 4:
            input_num.setAttribute("max",45);
            if (parseInt(input_num.value) == 45) max_weapon_btn_select();
            else minmax_weapon_btn_deselect();
            break;
    }
}

function imposeMinMaxW(el) {
    if (el.value != '') {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max;
        }
        if (parseInt(el.value) == 45) {
            max_weapon_btn_select();
        } else if (parseInt(el.value) == 1){
            var overclockw5 = document.getElementsByName("w5");
            var overclockw6 = document.getElementsByName("w6");
            if(overclockw5[0].checked || overclockw6[0].checked){
                min_weapon_btn_select();
            }
        } else {
            minmax_weapon_btn_deselect();
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
        imposeMinMaxW(document.getElementById(targetId));
    }
    if (inId.charAt(0) == 'n') {
        var targetId = 'weapon_' + inId.charAt(2);
        document.getElementById(targetId).value--;
        // console.log("-"+targetId);
        imposeMinMaxW(document.getElementById(targetId));
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

function min_weapon_btn_select() {
    min_weapon.classList.add("minmax-toggle");
    max_weapon.classList.remove("minmax-toggle");
}

function max_weapon_btn_select() {
    min_weapon.classList.remove("minmax-toggle");
    max_weapon.classList.add("minmax-toggle");
}

function minmax_weapon_btn_deselect() {
    min_weapon.classList.remove("minmax-toggle");
    max_weapon.classList.remove("minmax-toggle");
}

//============================== Leap ===============================//
const max_leap = document.getElementById("max-leap");
const min_leap = document.getElementById("min-leap");
const custom_leap = document.getElementById("custom-leap");
const wrapper_leap = document.getElementById("leap-wrapper");

max_leap.addEventListener("click", function () {
    set_max_leap();
})

min_leap.addEventListener("click", function () {
    set_min_leap();
})

function set_max_leap(){
    min_leap.classList.remove("minmax-toggle");
    max_leap.classList.add("minmax-toggle");
    custom_leap.classList.remove("minmax-toggle");
    for (let i = 1; i <= 3; i++) {
        document.getElementById("leap_" + i).value = 18;
    }
    wrapper_leap.classList.add("dont_show");
    wrapper_leap.classList.remove("grid-wrapper");
}

function set_min_leap(){
    min_leap.classList.add("minmax-toggle");
    max_leap.classList.remove("minmax-toggle");
    custom_leap.classList.remove("minmax-toggle");
    for (let i = 1; i <= 3; i++) {
        document.getElementById("leap_" + i).value = 0;
    }
    wrapper_leap.classList.add("dont_show");
    wrapper_leap.classList.remove("grid-wrapper");
}

custom_leap.addEventListener("click", function(){
    min_leap.classList.remove("minmax-toggle");
    max_leap.classList.remove("minmax-toggle");
    custom_leap.classList.add("minmax-toggle");
    wrapper_leap.classList.remove("dont_show");
    wrapper_leap.classList.add("grid-wrapper");
})

function mod_lp_level(el) {
    var inId = el.id;
    if (inId.charAt(0) == 'p'){
        var targetId = 'leap_' + inId.charAt(2);
        document.getElementById(targetId).value++;
        // console.log("+"+targetId);
        imposeMinMax(document.getElementById(targetId));
    }
    if (inId.charAt(0) == 'n') {
        var targetId = 'leap_' + inId.charAt(2);
        document.getElementById(targetId).value--;
        // console.log("-"+targetId);
        imposeMinMax(document.getElementById(targetId));
    }
}

//====================== construct toggle ===============================//
var toggle_construct_val = document.getElementById("toggle-construct");
var content_construct = document.getElementById("content-construct");

function toggle_construct(){    
    if(toggle_construct_val.checked == false){
        content_construct.style.display = "none";
        // set everything to maximum
        set_max_lvl_construct();
        document.getElementById("rank_option").value = 14;
        set_max_Skill_construct();
        set_max_memory();

        max_weapon_btn_select();
        for (let i = 0; i < 2; i++) {
            if(weapon_rate[i].checked) set_max_weapon(weapon_rate[i].value);
        }
        set_max_leap();

    } else {
        content_construct.style.display = "block";
        // set everything to minimum
        set_min_lvl_construct();
        document.getElementById("rank_option").value = 1;
        set_min_Skill_construct();
        set_min_memory();

        min_weapon_btn_select();
        for (let i = 0; i < 2; i++) {
            if(weapon_rate[i].checked) set_min_weapon(weapon_rate[i].value);
        }
        set_min_leap();
    }
}