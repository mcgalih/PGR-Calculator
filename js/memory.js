const max_memory = document.getElementById("max-memory");
const min_memory = document.getElementById("min-memory");
const custom_memory = document.getElementById("custom-memory");

for (let i = 1; i <= 6; i++) {
    // initial memory stamp display, overclock 0 -> display = block
    for (let j = 1; j <= 4; j++) {
        document.getElementsByClassName("m"+i+"-overclock-img")[j].style.display = "none";
    }
}

max_memory.addEventListener("click", function () {
    min_memory.classList.remove("minmax-toggle");
    max_memory.classList.add("minmax-toggle");
    custom_memory.classList.remove("minmax-toggle");
    document.getElementById("memory-wrapper").style.display = "none";
    //=== max value
    for (let i = 1; i <= 6; i++) {
        document.getElementsByName("m"+i)[4].checked = true;
        document.getElementById("memory_"+i).value = 45;
        for (let j = 0; j <= 3; j++) {
            document.getElementsByClassName("m"+i+"-overclock-img")[j].style.display = "none";
        }
        document.getElementsByClassName("m"+i+"-overclock-img")[4].style.display = "block";
    }
})

min_memory.addEventListener("click", function () {
    min_memory.classList.add("minmax-toggle");
    max_memory.classList.remove("minmax-toggle");
    custom_memory.classList.remove("minmax-toggle");
    document.getElementById("memory-wrapper").style.display = "none";
    //=== min value
    for (let i = 1; i <= 6; i++) {
        document.getElementsByName("m"+i)[0].checked = true;
        document.getElementById("memory_"+i).value = 1;
        for (let j = 1; j <= 4; j++) {
            document.getElementsByClassName("m"+i+"-overclock-img")[j].style.display = "none";
        }
        document.getElementsByClassName("m"+i+"-overclock-img")[0].style.display = "block";
    }
})

custom_memory.addEventListener("click", function(){
    min_memory.classList.remove("minmax-toggle");
    max_memory.classList.remove("minmax-toggle");
    custom_memory.classList.add("minmax-toggle");
    document.getElementById("memory-wrapper").style.display = "grid";
    //=== reset value to minimum
    for (let i = 1; i <= 6; i++) {
        document.getElementsByName("m"+i)[0].checked = true;
        document.getElementById("memory_"+i).value = 1;
        for (let j = 1; j <= 4; j++) {
            document.getElementsByClassName("m"+i+"-overclock-img")[j].style.display = "none";
        }
        document.getElementsByClassName("m"+i+"-overclock-img")[0].style.display = "block";
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
