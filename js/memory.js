var mem_overclock_img = document.getElementsByClassName("mem-overclock-img");
var mem_1_value = document.getElementsByName("m1");
var next_overclock = document.getElementById("btn-mem-overclock");

for (let i = 1; i < mem_overclock_img.length; i++) {
    mem_overclock_img[i].style.display = "none";
}

let mem_iterator = 0;
next_overclock.addEventListener("click", () => {
    mem_iterator++;
    if (mem_iterator > 4) mem_iterator = 0;
    mem_1_value[mem_iterator].checked = true;
    for (let i = 0; i < mem_overclock_img.length; i++) {
        mem_overclock_img[i].style.display = "none";
    }
    mem_overclock_img[mem_iterator].style.display = "block";
})