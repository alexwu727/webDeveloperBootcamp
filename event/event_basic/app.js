const btn2 = document.querySelector("#v2");

btn2.onclick = function () {
    btn2.classList.toggle("bold");
}

function scream() {
    console.log("AAAAHHHHHH");
    console.log("STOP TOUCHING ME!")
}
function dontLeave() {
    console.log("HEY!");
    console.log("TOUCH ME!")
}

btn2.onmouseenter = scream;
btn2.onmouseleave = dontLeave;

document.querySelector("h1").onclick = () => { console.log("arrow function works") }

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", () => { console.log("event listener way!") })
