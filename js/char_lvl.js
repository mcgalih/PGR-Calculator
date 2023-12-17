const lvl_exp = [];
var exp = 0;

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
// console.log(lvl_exp);

var exp_needed = 0
var lvl_start = 1

for (let i = lvl_start; i < lvl_exp.length; i++) {
    exp_needed += lvl_exp[i];
}
// console.log(exp_needed);

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

var qty_exp_pod_L = round_up(exp_needed, exp_pod_L);
// console.log(qty_exp_pod_L);

// event shop
// stage_serum = 30
// stage_drop = 82
// shop_exp_pod = 125 # exp pod L x6 = 18000 exp