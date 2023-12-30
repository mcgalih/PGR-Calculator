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

function memory_exp_init(max_lvl, start_exp, arr_exp, arr_sum_exp) {
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

memory_exp_init(m_max_lvl[0], 50, m_overclock0_exp, sum_m_overclock_exp);
memory_exp_init(m_max_lvl[1], 70, m_overclock1_exp, sum_m_overclock_exp);
memory_exp_init(m_max_lvl[2], 90, m_overclock2_exp, sum_m_overclock_exp);
memory_exp_init(m_max_lvl[3], 120, m_overclock3_exp, sum_m_overclock_exp);
memory_exp_init(m_max_lvl[4], 150, m_overclock4_exp, sum_m_overclock_exp);
const m_exp_arr = [m_overclock0_exp, m_overclock1_exp, m_overclock2_exp, m_overclock3_exp, m_overclock4_exp];
// console.log(sum_m_overclock_exp);
// console.log(m_overclock0_exp);
// console.log(m_exp_arr);

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

function calculate() {
    // ============================== result view ==============================
    var view_result = document.getElementById("result");
    var view_exp_pod = document.getElementById("exp_pod");
    var view_skill_point = document.getElementById("skill_point");
    var view_cogs = document.getElementById("cogs");
    var view_mEnhancer = document.getElementById("memo_enhancer");
    var view_wEnhancer = document.getElementById("weap_enhancer");
    var view_cmnOverclock3 = document.getElementById("common_overclock_3star");
    var view_cmnOverclock4 = document.getElementById("common_overclock_4star");
    var view_mOverclock3 = document.getElementById("memo_overclock_3star");
    var view_mOverclock4 = document.getElementById("memo_overclock_4star");
    var view_wOverclock3 = document.getElementById("weap_overclock_3star");
    var view_wOverclock4 = document.getElementById("weap_overclock_4star");
    var item_id_expPod = '#item_exp_pod';
    var item_id_skillPoint = '#item_skill_point';
    var item_id_cogs = '#item_cogs';
    var item_id_mEnhancer = '#item_m_enhancer';
    var item_id_wEnhancer = '#item_w_enhancer';
    var item_id_cmnOverclock3 = '#item_cmn_overclock_3star';
    var item_id_cmnOverclock4 = '#item_cmn_overclock_4star';
    var item_id_mOverclock3 = '#item_m_overclock_3star';
    var item_id_mOverclock4 = '#item_m_overclock_4star';
    var item_id_wOverclock3 = '#item_w_overclock_3star';
    var item_id_wOverclock4 = '#item_w_overclock_4star';
    view_result.style.display = "block";

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

    //====== memory overclock 1-6 value
    // memory id 0 doesn't exist, fill the element with 0
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
    // console.log(m_id_overclock_start + "||" + m_id_lvl_start);

    // ============================ Construct Level ============================
    for (let i = lvl_start; i < lvl_exp.length; i++) {
        exp_pod_needed += lvl_exp[i];
    }
    var qty_exp_pod_L = round_up(exp_pod_needed, item_exp_pod_L);
    show_item(view_exp_pod, qty_exp_pod_L, item_id_expPod);

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
    show_item(view_skill_point, sp_needed, item_id_skillPoint);

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
    show_item(view_mEnhancer, m_enhancer_needed, item_id_mEnhancer);
    show_item(view_mOverclock3, m_overclock_3star_needed, item_id_mOverclock3);
    show_item(view_mOverclock4, m_overclock_4star_needed, item_id_mOverclock4);
    // ============================== total cogs ================================
    show_item(view_cogs, cogs_needed, item_id_cogs);

    show_item(view_cmnOverclock3, cmn_overclock_3star_needed, item_id_cmnOverclock3);
    show_item(view_cmnOverclock4, cmn_overclock_4star_needed, item_id_cmnOverclock4);

    // reset
    exp_pod_needed = 0;
    sp_needed = 0;
    cogs_needed = 0;
    cmn_overclock_3star_needed = 0;
    cmn_overclock_4star_needed = 0;
    m_enhancer_needed = 0;
    m_overclock_3star_needed = 0;
    m_overclock_4star_needed = 0;
}