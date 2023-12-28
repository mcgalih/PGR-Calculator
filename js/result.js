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
const skill_point = [
    0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5
];
const skill_cogs = [
    0, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
    12000, 14000, 16000, 18000, 20000, 22000, 24000, 26000 
];

function round_up(pembilang, penyebut) {
    if (pembilang / penyebut > Math.floor(pembilang / penyebut)){
        return Math.ceil(pembilang / penyebut);
    } else {
        return Math.floor(pembilang / penyebut);
    }
}

function calculate() {
    //====== construct lvl value
    var lvl_start = parseInt(document.querySelector('#lvl_input').value);
    //====== rank value
    var rankval = parseInt(document.querySelector('#rank_option').value);
    //====== skill 1~8 value
    var skill_id_val = [0]; // skill id 0 tidak ada maka diisi dgn 0
    for (let i = 1; i <= 8; i++) {
        var name = '#skill_' + i;
        skill_id_val[i] = parseInt(document.querySelector(name).value);
    }
    // console.table(skill_id_val);

    //====== memory overclock 1-6 value
    var m_id_overclock_val = [0]; // memory id 0 tidak ada maka diisi dgn 0
    var m_id_lvl_val = [0];
    for (let i = 1; i <= 6; i++) {
        m_id_lvl_val[i] = parseInt(document.querySelector("#memory_"+i).value);
        for (let j = 0; j <= 4; j++) {
            var m_overclock_val = document.getElementsByName("m"+i);
            if(m_overclock_val[j].checked){
                m_id_overclock_val[i] = parseInt(m_overclock_val[j].value);
            }
        }
    }
    // console.log(m_id_overclock_val + "||" + m_id_lvl_val);
    // ============================== result view ==============================
    var result_view = document.getElementById("result");
    var exp_pod_view = document.getElementById("exp_pod");
    var skill_point_view = document.getElementById("skill_point");
    var total_cogs_view = document.getElementById("rank_cogs");
    result_view.style.display = "block";

    // ============================ Construct Level ============================
    for (let i = lvl_start; i < lvl_exp.length; i++) {
        exp_needed += lvl_exp[i];
    }
    var qty_exp_pod_L = round_up(exp_needed, exp_pod_L);
    if (lvl_start == 80) {
        // exp_pod_view.style.display = "none";
        exp_pod_view.classList.add("result-dontshow");
        exp_pod_view.classList.remove("result-show");
    } else {
        // exp_pod_view.style.display = "block";
        exp_pod_view.classList.remove("result-dontshow");
        exp_pod_view.classList.add("result-show");
        document.querySelector('#exp_pod_item').textContent = qty_exp_pod_L;
    }

    // ============================ Construct Rank =============================
    for (let i = rankval; i < rank_cogs.length; i++) {
        cogs_needed += rank_cogs[i];
    }

    // ========================= Construct skill point =========================
    for (let i = 1; i <= skill_id_val.length; i++) {
        for (let j = skill_id_val[i]; j < skill_cogs.length; j++) {
            cogs_needed += skill_cogs[j];
        }
    }

    for (let i = 1; i <= skill_id_val.length; i++) {
        for (let j = skill_id_val[i]; j < skill_point.length; j++) {
            sp_needed += skill_point[j];
        }
    }
    if(document.querySelector('#skill_9').checked == false){
        cogs_needed += 25000;
        sp_needed += 3;
    }

    if (sp_needed == 0){
        // skill_point_view.style.display = "none";
        skill_point_view.classList.add("result-dontshow");
        skill_point_view.classList.remove("result-show");
    } else {
        // skill_point_view.style.display = "block";
        skill_point_view.classList.remove("result-dontshow");
        skill_point_view.classList.add("result-show");
        document.querySelector('#skill_point_item').textContent = sp_needed;
    }

    // ============================== total cogs ================================
    if (cogs_needed == 0) {
        // total_cogs_view.style.display = "none";
        total_cogs_view.classList.add("result-dontshow");
        total_cogs_view.classList.remove("result-show");
    } else {
        // total_cogs_view.style.display = "block";
        total_cogs_view.classList.remove("result-dontshow");
        total_cogs_view.classList.add("result-show");
        document.querySelector('#total_cogs').textContent = cogs_needed;
    }
    // reset
    exp_needed = 0;
    sp_needed = 0;
    cogs_needed = 0;
}