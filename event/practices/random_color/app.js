const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const body = document.body;

const random = () => Math.floor(Math.random() * 256); // 0 - 255
const changeColor = () => {
    h1.style.color = "black";
    let red = random();
    let green = random();
    let blue = random();
    let newColor = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    if (red + green + blue <= 255) {
        h1.style.color = "white";
    }
}

btn.addEventListener("click", changeColor);