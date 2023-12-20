const lvl_exp = [];
var exp = 0;
var exp_needed = 0;

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

cogs_needed = 0;
const rank_cogs = [
    0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 42500, 50000, 60000, 70000, 80000, 100000
];

const exp_pod_S = 100
const exp_pod_M = 1000
const exp_pod_L = 3000

function round_up(pembilang, penyebut) {
    if (pembilang / penyebut > Math.floor(pembilang / penyebut)){
        return Math.ceil(pembilang / penyebut);
    } else {
        return Math.floor(pembilang / penyebut);
    }
}

// event shop
// stage_serum = 30
// stage_drop = 82
// shop_exp_pod = 125 # exp pod L x6 = 18000 exp

function calculate() {
    var lvl_start = parseInt(document.querySelector('#lvl_input').value);
    var rankval = parseInt(document.querySelector('#rank_option').value);
    var result_view = document.getElementById("result");
    var exp_pod_view = document.getElementById("exp_pod");
    var total_cogs_view = document.getElementById("rank_cogs");

    result_view.style.display = "block";

    for (let i = lvl_start; i < lvl_exp.length; i++) {
        exp_needed += lvl_exp[i];
    }
    
    for (let i = rankval; i < rank_cogs.length; i++) {
        cogs_needed += rank_cogs[i];
    }

    var qty_exp_pod_L = round_up(exp_needed, exp_pod_L);

    if (lvl_start == 80) {
        exp_pod_view.style.display = "none";
    } else {
        exp_pod_view.style.display = "block";
        document.querySelector('#exp_pod_item').textContent = qty_exp_pod_L;
    }

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