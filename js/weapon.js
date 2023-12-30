
for (let j = 1; j <= 4; j++) {
    document.getElementsByClassName("w6-overclock-img")[j].style.display = "none";
}

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