const btn = document.querySelector("button")
btn.addEventListener("click", (evt) => { console.log(evt) })

const input = document.querySelector("input")
input.addEventListener("keydown", (evt) => {
    console.log(evt.key)
    console.log(evt.code)
})

const movingBox = document.querySelector("#movingBox")
// setting the boundary
const outerBox = document.querySelector("#outerBox")
const movingBoxWidth = parseInt(window.getComputedStyle(movingBox, null).width);
const movingBoxHeight = parseInt(window.getComputedStyle(movingBox, null).height);
const outerBoxWidth = parseInt(window.getComputedStyle(outerBox, null).width);
const outerBoxHeight = parseInt(window.getComputedStyle(outerBox, null).height);
const bounderX = outerBoxWidth - movingBoxWidth;
const bounderY = outerBoxHeight - movingBoxHeight;

// adding acceleration
let lastKey = "";
let a = 1;
window.addEventListener("keydown", (evt) => {
    let movingBoxStyle = window.getComputedStyle(movingBox, null);
    let x = parseInt(movingBoxStyle.left);
    let y = parseInt(movingBoxStyle.top);
    // if it is going to the same direction, increasing the acceleration
    if (lastKey === evt.key) {
        a *= 1.4;
    } else {
        a = 1;
    }
    lastKey = evt.key

    switch (evt.key) {
        case "ArrowUp":
            y -= (5 * a);
            break;
        case "ArrowDown":
            y += (5 * a);
            break;
        case "ArrowLeft":
            x -= (5 * a);
            break;
        case "ArrowRight":
            x += (5 * a);
            break;
        default:
            break;
    }

    x = Math.max(x, 0);
    y = Math.max(y, 0);
    x = Math.min(x, bounderX);
    y = Math.min(y, bounderY);
    x = Math.round(x)
    y = Math.round(y)

    movingBox.style.left = `${x}px`
    movingBox.style.top = `${y}px`
})