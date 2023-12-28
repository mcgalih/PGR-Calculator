const max_memory = document.getElementById("max-memory");
const min_memory = document.getElementById("min-memory");
const custom_memory = document.getElementById("custom-memory");

// initial memory stamp display, overclock 0 -> display = block
for (let j = 1; j <= 4; j++) {
    document.getElementsByClassName("m1-overclock-img")[j].style.display = "none";
}

// for (let i = 1; i <= 6; i++) {
//     // initial memory stamp display, overclock 0 -> display = block
//     for (let j = 1; j <= 4; j++) {
//         m1_overclock_img[j].style.display = "none";
//         document.getElementsByClassName("m"+i+"-overclock-img")[j].style.display = "none";
//     }
// }

max_memory.addEventListener("click", function () {
    min_memory.classList.remove("minmax-toggle");
    max_memory.classList.add("minmax-toggle");
    custom_memory.classList.remove("minmax-toggle");
    //=== max value
    document.getElementsByName("m1")[4].checked = true;
    document.getElementById("memory_1").value = 45;
    for (let j = 0; j <= 3; j++) {
        document.getElementsByClassName("m1-overclock-img")[j].style.display = "none";
    }
    document.getElementsByClassName("m1-overclock-img")[4].style.display = "block";
    //===
    // document.getElementById("memory-wrapper").style.display = "none";
})

min_memory.addEventListener("click", function () {
    min_memory.classList.add("minmax-toggle");
    max_memory.classList.remove("minmax-toggle");
    custom_memory.classList.remove("minmax-toggle");
    //=== min value
    document.getElementsByName("m1")[0].checked = true;
    document.getElementById("memory_1").value = 1;
    for (let j = 1; j <= 4; j++) {
        document.getElementsByClassName("m1-overclock-img")[j].style.display = "none";
    }
    document.getElementsByClassName("m1-overclock-img")[0].style.display = "block";
    //===
    // document.getElementById("memory-wrapper").style.display = "none";
})

custom_memory.addEventListener("click", function(){
    min_memory.classList.remove("minmax-toggle");
    max_memory.classList.remove("minmax-toggle");
    custom_memory.classList.add("minmax-toggle");
    //=== reset value

    //===
    // document.getElementById("memory-wrapper").style.display = "grid";
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

var m_index = 0;
var m_interval;
var m_timeout;
var m_stopFlag=false;

function clearAll(){
    clearTimeout(m_timeout);
    clearInterval(m_interval);
}


function mod_m_level(el) {
    var inId = el.id;
    if (inId.charAt(0) == 'p'){
        var targetId = 'memory_' + inId.charAt(2);
        // console.log("+"+targetId);
        var maxValue = parseInt(document.getElementById(targetId).max);
        var actValue = parseInt(document.getElementById(targetId).value);
        m_index = actValue;
        if (actValue < maxValue){
            m_stopFlag=false;
            document.getElementById(targetId).value++;
        }else {
            m_stopFlag=true;
        }
        m_timeout = setTimeout(function(){
            m_interval = setInterval(function(){        
                if(m_index+1 >= maxValue){
                    m_index=0;
                    m_stopFlag=true;
                }  
                if(m_stopFlag==false){
                    document.getElementById(targetId).value++;
                } 
                m_index++;
            }, 100);
        }, 200);      
        imposeMinMax(document.getElementById(targetId));
    }
    if (inId.charAt(0) == 'n') {
        var targetId = 'memory_' + inId.charAt(2);
        // console.log("-"+targetId);
        var minValue = parseInt(document.getElementById(targetId).min);
        var actValue = parseInt(document.getElementById(targetId).value);
        m_index = actValue;
        if(actValue > minValue){
            m_stopFlag=false;
            document.getElementById(targetId).value--;
        }else{
            m_stopFlag=true;
        }
        m_timeout = setTimeout(function(){
            m_interval = setInterval(function(){        
                if(m_index-1 <= minValue){
                    m_index=0;
                    m_stopFlag=true;
                }  
                if(m_stopFlag==false){
                    document.getElementById(targetId).value--;
                } 
                m_index--;
            }, 100);
        }, 200);      
        imposeMinMax(document.getElementById(targetId));
    }
}
