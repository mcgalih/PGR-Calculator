const max_skill = document.getElementById("max-skill");
const min_skill = document.getElementById("min-skill");

max_skill.addEventListener("click", function () {
    min_skill.classList.remove("minmax-toggle");
    max_skill.classList.add("minmax-toggle");
    for (let i = 1; i <= 8; i++) {
        document.getElementById("skill_" + i).value = parseInt(18);
    }
    document.getElementById("skill_9").checked = true;
})

min_skill.addEventListener("click", function () {
    min_skill.classList.add("minmax-toggle");
    max_skill.classList.remove("minmax-toggle");
    for (let i = 1; i <= 8; i++) {
        document.getElementById("skill_" + i).value = parseInt(1);
    }
    document.getElementById("skill_9").checked = false;
})

function resetminmax() {
    min_skill.classList.remove("minmax-toggle");
    max_skill.classList.remove("minmax-toggle");
}

function imposeMinMax(el) {
    resetminmax();
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

var index = 0;
var interval;
var timeout;
var stopFlag=false;

function clearAll(){
    clearTimeout(timeout);
    clearInterval(interval);
}

function modIn(el) {
    var inId = el.id;
    if (inId.charAt(0) == 'p'){
        var targetId = 'skill_' + inId.charAt(2);
        // console.log("+"+targetId);
        var maxValue = parseInt(document.getElementById(targetId).max);
        var actValue = parseInt(document.getElementById(targetId).value);
        index = actValue;
        if (actValue < maxValue){
            stopFlag=false;
            document.getElementById(targetId).value++;
        }else {
            stopFlag=true;
        }
        timeout = setTimeout(function(){
            interval = setInterval(function(){        
                if(index+1 >= maxValue){
                    index=0;
                    stopFlag=true;
                }  
                if(stopFlag==false){
                    document.getElementById(targetId).value++;
                } 
                index++;
            }, 100);
        }, 200);      
        imposeMinMax(document.getElementById(targetId));
    }
    if (inId.charAt(0) == 'n') {
        var targetId = 'skill_' + inId.charAt(2);
        // console.log("-"+targetId);
        var minValue = parseInt(document.getElementById(targetId).min);
        var actValue = parseInt(document.getElementById(targetId).value);
        index = actValue;
        if(actValue > minValue){
            stopFlag=false;
            document.getElementById(targetId).value--;
        }else{
            stopFlag=true;
        }
        timeout = setTimeout(function(){
            interval = setInterval(function(){        
                if(index-1 <= minValue){
                    index=0;
                    stopFlag=true;
                }  
                if(stopFlag==false){
                    document.getElementById(targetId).value--;
                } 
                index--;
            }, 100);
        }, 200);      
        imposeMinMax(document.getElementById(targetId));
    }
}