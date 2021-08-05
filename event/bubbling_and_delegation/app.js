const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", (evt) => {
    container.style.backgroundColor = makeRandomColor();
    evt.stopPropagation()
})

container.addEventListener("click", () => {
    container.classList.toggle("hide");
})

const makeRandomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}