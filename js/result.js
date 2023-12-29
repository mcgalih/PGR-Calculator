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
var m_overclock_3star_needed = 0;
var m_overclock_4star_needed = 0;

function memory_init_arr(max_lvl, start_exp, arr_exp, arr_sum_exp) {
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

memory_init_arr(25, 50, m_overclock0_exp, sum_m_overclock_exp);
memory_init_arr(30, 70, m_overclock1_exp, sum_m_overclock_exp);
memory_init_arr(35, 90, m_overclock2_exp, sum_m_overclock_exp);
memory_init_arr(40, 120, m_overclock3_exp, sum_m_overclock_exp);
memory_init_arr(45, 150, m_overclock4_exp, sum_m_overclock_exp);
console.log(sum_m_overclock_exp);
// console.table(m_overclock0_exp);

function round_up(numerator, denominator) {
    if (numerator / denominator > Math.floor(numerator / denominator)){
        return Math.ceil(numerator / denominator);
    } else {
        return Math.floor(numerator / denominator);
    }
}

function calculate() {
    //====== construct lvl value
    var lvl_start = parseInt(document.querySelector('#lvl_input').value);
    //====== rank value
    var rank_start = parseInt(document.querySelector('#rank_option').value);
    //====== skill 1~8 value
    // skill id 0 doesn't exist, fill the element with 0
    var skill_id_start = [0];
    for (let i = 1; i <= 8; i++) {
        var name = '#skill_' + i;
        skill_id_start[i] = parseInt(document.querySelector(name).value);
    }
    // console.table(skill_id_start);

    //====== memory overclock 1-6 value
    // memory id 0 doesn't exist, fill the element with 0
    var m_id_overclock_start = [0];
    var m_id_lvl_start = [0];
    for (let i = 1; i <= 6; i++) {
        m_id_lvl_start[i] = parseInt(document.querySelector("#memory_"+i).value);
        for (let j = 0; j <= 4; j++) {
            var m_overclock_val = document.getElementsByName("m"+i);
            if(m_overclock_val[j].checked){
                m_id_overclock_start[i] = parseInt(m_overclock_val[j].value);
            }
        }
    }
    console.log(m_id_overclock_start + "||" + m_id_lvl_start);
    // ============================== result view ==============================
    var result_view = document.getElementById("result");
    var exp_pod_view = document.getElementById("exp_pod");
    var skill_point_view = document.getElementById("skill_point");
    var total_cogs_view = document.getElementById("rank_cogs");
    result_view.style.display = "block";

    // ============================ Construct Level ============================
    for (let i = lvl_start; i < lvl_exp.length; i++) {
        exp_pod_needed += lvl_exp[i];
    }
    var qty_exp_pod_L = round_up(exp_pod_needed, item_exp_pod_L);
    if (lvl_start == 80) {
        exp_pod_view.classList.add("result-dontshow");
        exp_pod_view.classList.remove("result-show");
    } else {
        exp_pod_view.classList.remove("result-dontshow");
        exp_pod_view.classList.add("result-show");
        document.querySelector('#exp_pod_item').textContent = qty_exp_pod_L;
    }

    // ============================ Construct Rank =============================
    for (let i = rank_start; i < rank_cogs.length; i++) {
        cogs_needed += rank_cogs[i];
    }

    // ========================= Construct skill point =========================
    for (let i = 1; i <= skill_id_start.length; i++) {
        for (let j = skill_id_start[i]; j < skill_cogs.length; j++) {
            cogs_needed += skill_cogs[j];
        }
    }

    for (let i = 1; i <= skill_id_start.length; i++) {
        for (let j = skill_id_start[i]; j < skill_point.length; j++) {
            sp_needed += skill_point[j];
        }
    }
    if(document.querySelector('#skill_9').checked == false){
        cogs_needed += 25000;
        sp_needed += 3;
    }

    if (sp_needed == 0){
        skill_point_view.classList.add("result-dontshow");
        skill_point_view.classList.remove("result-show");
    } else {
        skill_point_view.classList.remove("result-dontshow");
        skill_point_view.classList.add("result-show");
        document.querySelector('#skill_point_item').textContent = sp_needed;
    }

    // ============================== total cogs ================================
    if (cogs_needed == 0) {
        total_cogs_view.classList.add("result-dontshow");
        total_cogs_view.classList.remove("result-show");
    } else {
        total_cogs_view.classList.remove("result-dontshow");
        total_cogs_view.classList.add("result-show");
        document.querySelector('#total_cogs').textContent = cogs_needed;
    }
    // reset
    exp_pod_needed = 0;
    sp_needed = 0;
    cogs_needed = 0;
}