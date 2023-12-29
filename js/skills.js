const max_skill = document.getElementById("max-skill");
const min_skill = document.getElementById("min-skill");
const custom_skill = document.getElementById("custom-skill");

max_skill.addEventListener("click", function () {
    min_skill.classList.remove("minmax-toggle");
    max_skill.classList.add("minmax-toggle");
    custom_skill.classList.remove("minmax-toggle");
    for (let i = 1; i <= 8; i++) {
        document.getElementById("skill_" + i).value = 18;
    }
    document.getElementById("skill_9").checked = true;
    document.getElementById("skills-wrapper").style.display = "none";
})

min_skill.addEventListener("click", function () {
    min_skill.classList.add("minmax-toggle");
    max_skill.classList.remove("minmax-toggle");
    custom_skill.classList.remove("minmax-toggle");
    for (let i = 1; i <= 8; i++) {
        document.getElementById("skill_" + i).value = 1;
    }
    document.getElementById("skill_9").checked = false;
    document.getElementById("skills-wrapper").style.display = "none";
})

custom_skill.addEventListener("click", function(){
    min_skill.classList.remove("minmax-toggle");
    max_skill.classList.remove("minmax-toggle");
    custom_skill.classList.add("minmax-toggle");
    document.getElementById("skills-wrapper").style.display = "grid";
})

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

function modIn(el) {
    var inId = el.id;
    if (inId.charAt(0) == 'p'){
        var targetId = 'skill_' + inId.charAt(2);
        document.getElementById(targetId).value++;
        // console.log("+"+targetId);
        imposeMinMax(document.getElementById(targetId));
    }
    if (inId.charAt(0) == 'n') {
        var targetId = 'skill_' + inId.charAt(2);
        document.getElementById(targetId).value--;
        // console.log("-"+targetId);
        imposeMinMax(document.getElementById(targetId));
    }
}