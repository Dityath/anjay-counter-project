let add = document.querySelector(".countbtn");

let int = document.querySelector(".screen");
let i = 0;

let resetbtn = document.querySelector(".resetbtn")

function addition(){
    i += 1;
    int.innerHTML = i;
}

function reset(){
    i = 0;
    int.innerHTML = i;
}

add.addEventListener("click", addition);
resetbtn.addEventListener("click", reset);

console.log(i);