for (let i = 0; i < 20; i++) {
    let btn = document.createElement("button");
    btn.innerText = "Click";
    document.body.appendChild(btn);
}

const makeRandomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const buttons = document.querySelectorAll("button");
// for (let button of buttons) {
//     button.addEventListener("click", () => {
//         button.style.backgroundColor = makeRandomColor();
//     })
// }

for (let button of buttons) {
    button.addEventListener("click", colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandomColor()
    this.style.color = makeRandomColor()
}