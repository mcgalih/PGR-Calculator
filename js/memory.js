const max_memory = document.getElementById("max-memory");
const min_memory = document.getElementById("min-memory");
const custom_memory = document.getElementById("custom-memory");

// for (let i = 1; i <= 6; i++) {
//     // initial memory stamp display, overclock 0 -> display = block
//     for (let j = 1; j <= 4; j++) {
//         m1_overclock_img[j].style.display = "none";
//         document.getElementsByClassName("m"+i+"-overclock-img")[j].style.display = "none";
//     }
// }
// initial memory stamp display, overclock 0 -> display = block
for (let j = 1; j < 5; j++) {
    document.getElementsByClassName("m1-overclock-img")[j].style.display = "none";
}

max_memory.addEventListener("click", function () {
    min_memory.classList.remove("minmax-toggle");
    max_memory.classList.add("minmax-toggle");
    custom_memory.classList.remove("minmax-toggle");
    //=== reset value

    //===
    // document.getElementById("memory-wrapper").style.display = "none";
})

min_memory.addEventListener("click", function () {
    min_memory.classList.add("minmax-toggle");
    max_memory.classList.remove("minmax-toggle");
    custom_memory.classList.remove("minmax-toggle");
    //=== reset value

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
}
