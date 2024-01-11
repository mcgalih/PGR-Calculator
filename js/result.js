var cogs_needed = 0;
var cmn_overclock_3star_needed = 0;
var cmn_overclock_4star_needed = 0;

//=========================== CONSTRUCT LEVEL ============================//
const lvl_exp = [];
var lvl_exp_i = 0;
var exp_pod_needed = 0;
const item_exp_pod_S = 100;
const item_exp_pod_M = 1000;
const item_exp_pod_L = 3000;

for (let i = 0; i < 80; i++) {
    lvl_exp.push(lvl_exp_i);
    if (i < 20) lvl_exp_i += 20;
    else if (i < 30) lvl_exp_i += 40;
    else if (i < 40) lvl_exp_i += 160;
    else if (i < 50) lvl_exp_i += 240;
    else if (i < 60) lvl_exp_i += 480;
    else if (i < 70) lvl_exp_i += 840;
    else if (i < 80) lvl_exp_i += 1200;
}

//=========================== CONSTRUCT RANK =============================//
const rank_cogs = [
    0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 42500, 50000, 60000, 70000, 80000, 100000
];

//========================== CONSTRUCT SKILLS ============================//
var sp_needed = 0;
const skill_point = [
    0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5
];
const skill_cogs = [
    0, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
    12000, 14000, 16000, 18000, 20000, 22000, 24000, 26000 
];

//========================== CONSTRUCT MEMORY ============================//
const sum_m_overclock_exp = [];
const m_overclock0_exp = [0];
const m_overclock1_exp = [0];
const m_overclock2_exp = [0];
const m_overclock3_exp = [0];
const m_overclock4_exp = [0];
const m_max_lvl = [25, 30, 35, 40, 45];
const m_overclock_cogs = [0, 10000, 20000, 30000, 40000];
// ovrclck mats element -> [m_oveclock_3*, m_oveclock_4*, common_overclock_3*, common_overclock_4*]
const m_overclock_mats = [[0,0,0,0], [4,0,0,0], [4,0,4,0], [3,3,3,3], [3,5,3,5]];
var m_enhancer_needed = 0;
var m_overclock_3star_needed = 0;
var m_overclock_4star_needed = 0;

function arr_exp(max_lvl, start_exp, arr_exp, arr_sum_exp) {
    var m_start_exp = start_exp;
    var start_i = 1;
    var end_i = 5;
    var sum_m_exp = 0;
    var multiple = max_lvl/5

    for (let i = 1; i <= multiple; i++){
        for (j = start_i; j <= end_i; j++){
            if (j == max_lvl) {
                arr_sum_exp.push(sum_m_exp);
                break;
            }
            arr_exp.push(m_start_exp);
            sum_m_exp += m_start_exp;
        }
        start_i = end_i + 1;
        end_i += 5;
        if (max_lvl > 35){
            if (end_i <= 30) m_start_exp += 10;
            else m_start_exp += 20;
        } else m_start_exp += 10;
    }
}

arr_exp(m_max_lvl[0], 50, m_overclock0_exp, sum_m_overclock_exp);
arr_exp(m_max_lvl[1], 70, m_overclock1_exp, sum_m_overclock_exp);
arr_exp(m_max_lvl[2], 90, m_overclock2_exp, sum_m_overclock_exp);
arr_exp(m_max_lvl[3], 120, m_overclock3_exp, sum_m_overclock_exp);
arr_exp(m_max_lvl[4], 150, m_overclock4_exp, sum_m_overclock_exp);
const m_exp_arr = [m_overclock0_exp, m_overclock1_exp, m_overclock2_exp, m_overclock3_exp, m_overclock4_exp];
// console.log(sum_m_overclock_exp);
// console.log(m_overclock0_exp);
// console.log(m_exp_arr);

//========================== CONSTRUCT WEAPON ============================//
const w6_overclock0_exp = [0];
const w6_overclock1_exp = [0];
const w6_overclock2_exp = [0];
const w6_overclock3_exp = [0];
const w6_overclock4_exp = [0];
const w5_overclock0_exp = [0];
const w5_overclock1_exp = [0];
const w5_overclock2_exp = [0];
const w5_overclock3_exp = [0];
const w5_overclock4_exp = [0];
const w_max_lvl = [25, 30, 35, 40, 45];
const sum_w6_overclock_exp = [];
const sum_w5_overclock_exp = [];
const w6_overclock_cogs = [0, 10000, 20000, 30000, 40000];
const w5_overclock_cogs = [0, 8000, 16000, 24000, 32000];
const w6_overclock_mats = [[0,0,0,0], [8,0,0,0], [8,0,8,0], [6,6,6,6], [6,10,6,10]];
const w5_overclock_mats = [[0,0,0,0], [6,0,0,0], [6,0,6,0], [4,4,4,4], [4,8,4,8]];
var w_enhancer_needed = 0;
var w_overclock_3star_needed = 0;
var w_overclock_4star_needed = 0;

arr_exp(w_max_lvl[0], 50, w6_overclock0_exp, sum_w6_overclock_exp);
arr_exp(w_max_lvl[1], 70, w6_overclock1_exp, sum_w6_overclock_exp);
arr_exp(w_max_lvl[2], 90, w6_overclock2_exp, sum_w6_overclock_exp);
arr_exp(w_max_lvl[3], 120, w6_overclock3_exp, sum_w6_overclock_exp);
arr_exp(w_max_lvl[4], 150, w6_overclock4_exp, sum_w6_overclock_exp);
const w6_exp_arr = [w6_overclock0_exp, w6_overclock1_exp, w6_overclock2_exp, w6_overclock3_exp, w6_overclock4_exp];

arr_exp(w_max_lvl[0], 30, w5_overclock0_exp, sum_w5_overclock_exp);
arr_exp(w_max_lvl[1], 40, w5_overclock1_exp, sum_w5_overclock_exp);
arr_exp(w_max_lvl[2], 60, w5_overclock2_exp, sum_w5_overclock_exp);
arr_exp(w_max_lvl[3], 80, w5_overclock3_exp, sum_w5_overclock_exp);
arr_exp(w_max_lvl[4], 100, w5_overclock4_exp, sum_w5_overclock_exp);
const w5_exp_arr = [w5_overclock0_exp, w5_overclock1_exp, w5_overclock2_exp, w5_overclock3_exp, w5_overclock4_exp];

//========================== CONSTRUCT LEAP ============================//
// leap_lvl = [[leap wafer, aura basic unit, SP, cogs]]
var leap_lvl = [[225,45,10,200000]]
var leapWafer_needed = 0;
var auraBasicUnit_needed = 0;

for (let i = 1; i <= 17; i++) {
    if (i == 8 || i == 17) {
        leap_lvl.push(leap_lvl[0]);
    } else {
        leap_lvl.push([0,5,2,75000]);
    }
}
// console.table(leap_lvl);

function calculate() {
    // ============================== result view ==============================
    const view_result = document.getElementById("result");
    const view_exp_pod = document.getElementById("exp_pod");
    const view_skill_point = document.getElementById("skill_point");
    const view_cogs = document.getElementById("cogs");
    const view_mEnhancer = document.getElementById("memo_enhancer");
    const view_wEnhancer = document.getElementById("weap_enhancer");
    const view_cmnOverclock3 = document.getElementById("common_overclock_3star");
    const view_cmnOverclock4 = document.getElementById("common_overclock_4star");
    const view_mOverclock3 = document.getElementById("memo_overclock_3star");
    const view_mOverclock4 = document.getElementById("memo_overclock_4star");
    const view_wOverclock3 = document.getElementById("weap_overclock_3star");
    const view_wOverclock4 = document.getElementById("weap_overclock_4star");
    const view_leapWafer = document.getElementById("leapWafer");
    const view_auraBasicUnit = document.getElementById("auraBasicUnit");
    const item_id_expPod = '#item_exp_pod';
    const item_id_skillPoint = '#item_skill_point';
    const item_id_cogs = '#item_cogs';
    const item_id_mEnhancer = '#item_m_enhancer';
    const item_id_wEnhancer = '#item_w_enhancer';
    const item_id_cmnOverclock3 = '#item_cmn_overclock_3star';
    const item_id_cmnOverclock4 = '#item_cmn_overclock_4star';
    const item_id_mOverclock3 = '#item_m_overclock_3star';
    const item_id_mOverclock4 = '#item_m_overclock_4star';
    const item_id_wOverclock3 = '#item_w_overclock_3star';
    const item_id_wOverclock4 = '#item_w_overclock_4star';
    const item_id_leapWafer = '#item_leap_wafer';
    const item_id_auraBasicUnit = '#item_auraBasicUnit';
    view_result.style.display = "block";
    var toggle_construct_val = document.getElementById("toggle-construct");

    if(toggle_construct_val.checked == true){
        calculate_construct();
    }

    // ============================== show result ================================
    console.log(cogs_needed);
    show_item(view_cogs, cogs_needed, item_id_cogs);
    show_item(view_skill_point, sp_needed, item_id_skillPoint);
    show_item(view_exp_pod, exp_pod_needed, item_id_expPod);
    show_item(view_mEnhancer, m_enhancer_needed, item_id_mEnhancer);
    show_item(view_mOverclock3, m_overclock_3star_needed, item_id_mOverclock3);
    show_item(view_mOverclock4, m_overclock_4star_needed, item_id_mOverclock4);
    show_item(view_cmnOverclock3, cmn_overclock_3star_needed, item_id_cmnOverclock3);
    show_item(view_cmnOverclock4, cmn_overclock_4star_needed, item_id_cmnOverclock4);
    show_item(view_wEnhancer, w_enhancer_needed, item_id_wEnhancer);
    show_item(view_wOverclock3, w_overclock_3star_needed, item_id_wOverclock3);
    show_item(view_wOverclock4, w_overclock_4star_needed, item_id_wOverclock4);
    show_item(view_leapWafer, leapWafer_needed, item_id_leapWafer);
    show_item(view_auraBasicUnit, auraBasicUnit_needed, item_id_auraBasicUnit);

    reset_value();
}

function calculate_construct() {
    //=============================== Get value ===============================
    //====== construct lvl value
    var lvl_start = parseInt(document.querySelector('#lvl_input').value);
    //====== rank value
    var rank_start = parseInt(document.querySelector('#rank_option').value);
    //====== skill 1~8 value
    // skill id 0 doesn't exist, fill the element with 0
    var skill_id_start = [0];
    for (let id = 1; id <= 8; id++) {
        var name = '#skill_' + id;
        skill_id_start[id] = parseInt(document.querySelector(name).value);
    }
    // console.table(skill_id_start);

    //====== memory 1-6 overclock value
    var m_id_overclock_start = [0];
    var m_id_lvl_start = [0];
    for (let id = 1; id <= 6; id++) {
        m_id_lvl_start[id] = parseInt(document.querySelector("#memory_"+id).value);
        for (let overclock = 0; overclock <= 4; overclock++) {
            var m_overclock_val = document.getElementsByName("m"+id);
            if(m_overclock_val[overclock].checked){
                m_id_overclock_start[id] = parseInt(m_overclock_val[overclock].value);
            }
        }
    }

    //====== weapon 5 and 6 stars overclock value
    var weapon_rate =  document.getElementsByName("weapon-rate");
    var w_lvl_start = [];
    var w_overclock_start = [];
    for (let stars = 5; stars <= 6; stars++) {
        w_lvl_start[stars-5] = parseInt(document.querySelector("#weapon_"+stars).value);
        for (let overclock = 0; overclock <= 4; overclock++) {
            var w_overclock_val = document.getElementsByName("w"+stars);
            if(w_overclock_val[overclock].checked){
                w_overclock_start[stars-5] = parseInt(w_overclock_val[overclock].value);
            }
        }
    }
    // console.log("weapon 5 >> overclock = "+w_overclock_start[0]+", lvl = "+w_lvl_start[0]);
    // console.log("weapon 6 >> overclock = "+w_overclock_start[1]+", lvl = "+w_lvl_start[1]);

    //====== Leap 1~3 value
    var leap_id_start = [0];
    for (let id = 1; id <= 3; id++) {
        var name = '#leap_' + id;
        leap_id_start[id] = parseInt(document.querySelector(name).value);
    }

    // ============================ Construct Level ============================
    for (let i = lvl_start; i < lvl_exp.length; i++) {
        exp_pod_needed += lvl_exp[i];
    }
    exp_pod_needed = round_up(exp_pod_needed, item_exp_pod_L);

    // ============================ Construct Rank =============================
    for (let rank = rank_start; rank < rank_cogs.length; rank++) {
        cogs_needed += rank_cogs[rank];
    }

    // ========================= Construct skill point =========================
    for (let id = 1; id <= 8; id++) {
        for (let lvl = skill_id_start[id]; lvl < skill_cogs.length; lvl++) {
            cogs_needed += skill_cogs[lvl];
        }
    }

    for (let id = 1; id <= 8; id++) {
        for (let lvl = skill_id_start[id]; lvl < skill_point.length; lvl++) {
            sp_needed += skill_point[lvl];
        }
    }
    if(document.querySelector('#skill_9').checked == false){
        cogs_needed += 25000;
        sp_needed += 3;
    }

    // =============================== memory ==================================
    for (let id = 1; id <= 6; id++) {
        var total_m_exp = 0;
        var overclock = m_id_overclock_start[id];
        for (let lvl = m_id_lvl_start[id]; lvl < m_max_lvl[overclock]; lvl++) {
            total_m_exp += m_exp_arr[overclock][lvl];
        }
        for (let i = overclock + 1; i <= 4; i++) {
            total_m_exp += sum_m_overclock_exp[i];
            cogs_needed += m_overclock_cogs[i];
            m_overclock_3star_needed += m_overclock_mats[i][0];
            m_overclock_4star_needed += m_overclock_mats[i][1];
            cmn_overclock_3star_needed += m_overclock_mats[i][2];
            cmn_overclock_4star_needed += m_overclock_mats[i][3];
        }
        m_enhancer_needed += round_up(total_m_exp,300);
    }
    cogs_needed += m_enhancer_needed * 3000;

    // =============================== weapon ==================================
    var total_w_exp = 0;
    if(weapon_rate[0].checked){
        // weapon 5 stars
        var overclock = w_overclock_start[0];
        for (let lvl = w_lvl_start[0]; lvl < w_max_lvl[overclock]; lvl++) {
            total_w_exp += w5_exp_arr[overclock][lvl];
        }

        for (let i = overclock + 1; i <= 4; i++) {
            total_w_exp += sum_w5_overclock_exp[i];
            cogs_needed += w5_overclock_cogs[i];
            w_overclock_3star_needed += w5_overclock_mats[i][0];
            w_overclock_4star_needed += w5_overclock_mats[i][1];
            cmn_overclock_3star_needed += w5_overclock_mats[i][2];
            cmn_overclock_4star_needed += w5_overclock_mats[i][3];
        }
    } else if(weapon_rate[1].checked){
        // weapon 6 stars
        var overclock = w_overclock_start[1];
        for (let lvl = w_lvl_start[1]; lvl < w_max_lvl[overclock]; lvl++) {
            total_w_exp += w6_exp_arr[overclock][lvl];
        }

        for (let i = overclock + 1; i <= 4; i++) {
            total_w_exp += sum_w6_overclock_exp[i];
            cogs_needed += w6_overclock_cogs[i];
            w_overclock_3star_needed += w6_overclock_mats[i][0];
            w_overclock_4star_needed += w6_overclock_mats[i][1];
            cmn_overclock_3star_needed += w6_overclock_mats[i][2];
            cmn_overclock_4star_needed += w6_overclock_mats[i][3];
        }
    }

    w_enhancer_needed += round_up(total_w_exp,300);
    cogs_needed += w_enhancer_needed * 3000;

    // ================================= Leap ===================================
    for (let id = 1; id <= 3; id++) {
        for (let lvl = leap_id_start[id]; lvl < leap_lvl.length; lvl++) {
            leapWafer_needed += leap_lvl[lvl][0];
            auraBasicUnit_needed += leap_lvl[lvl][1];
            sp_needed += leap_lvl[lvl][2];
            cogs_needed += leap_lvl[lvl][3];
        }
    }
}

function reset_value(){
    exp_pod_needed = 0;
    sp_needed = 0;
    cogs_needed = 0;
    cmn_overclock_3star_needed = 0;
    cmn_overclock_4star_needed = 0;
    m_enhancer_needed = 0;
    w_enhancer_needed = 0;
    m_overclock_3star_needed = 0;
    m_overclock_4star_needed = 0;
    w_overclock_3star_needed = 0;
    w_overclock_4star_needed = 0;
    leapWafer_needed = 0;
    auraBasicUnit_needed = 0;
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