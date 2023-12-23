const lvl_exp = [];
var exp = 0;
var exp_needed = 0;
var cogs_needed = 0;
var sp_needed = 0;
const exp_pod_S = 100;
const exp_pod_M = 1000;
const exp_pod_L = 3000;

for (let i = 0; i < 80; i++) {
    lvl_exp.push(exp);
    if (i < 20) exp += 20;
    else if (i < 30) exp += 40;
    else if (i < 40) exp += 160;
    else if (i < 50) exp += 240;
    else if (i < 60) exp += 480;
    else if (i < 70) exp += 840;
    else if (i < 80) exp += 1200;
}

const rank_cogs = [
    0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 42500, 50000, 60000, 70000, 80000, 100000
];

// skill value 1 artinya skill_cogs[1] dan skill_point[1]
// skill berjumlah 8, untuk skill 9 adalah leader dgn cogs = 25k dan sp = 3
const skill_cogs = [
    0, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 14000, 16000, 18000, 20000, 22000, 24000
];
const skill_point = [
    0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5
];

function round_up(pembilang, penyebut) {
    if (pembilang / penyebut > Math.floor(pembilang / penyebut)){
        return Math.ceil(pembilang / penyebut);
    } else {
        return Math.floor(pembilang / penyebut);
    }
}

function calculate() {
    var lvl_start = parseInt(document.querySelector('#lvl_input').value);
    var rankval = parseInt(document.querySelector('#rank_option').value);
    // skill id 0 tidak ada maka diisi dgn 0
    var skill_id_val = [0];
    for (let i = 1; i <= 8; i++) {
        var name = '#skill_' + i;
        skill_id_val[i] = parseInt(document.querySelector(name).value);
    }
    var skill_id_9 = document.querySelector('#skill_9');
    // ================= result view =========================
    var result_view = document.getElementById("result");
    var exp_pod_view = document.getElementById("exp_pod");
    var skill_point_view = document.getElementById("skill_point");
    var total_cogs_view = document.getElementById("rank_cogs");

    result_view.style.display = "block";

    // ===============  Construct Level ====================
    for (let i = lvl_start; i < lvl_exp.length; i++) {
        exp_needed += lvl_exp[i];
    }
    var qty_exp_pod_L = round_up(exp_needed, exp_pod_L);
    if (lvl_start == 80) {
        exp_pod_view.style.display = "none";
    } else {
        exp_pod_view.style.display = "block";
        document.querySelector('#exp_pod_item').textContent = qty_exp_pod_L;
    }

    // ================= Construct Rank =====================
    for (let i = rankval; i < rank_cogs.length; i++) {
        cogs_needed += rank_cogs[i];
    }

    // ============= Construct skill point =====================
    // if total skill point == 0 display = none


    // =================== total cogs =========================
    if (cogs_needed == 0) {
        total_cogs_view.style.display = "none";
    } else {
        total_cogs_view.style.display = "block";
        document.querySelector('#total_cogs').textContent = cogs_needed;
    }
    // reset
    exp_needed = 0;
    cogs_needed = 0;
}

// ===========================input number ======================== //

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

// ====================================================================== //