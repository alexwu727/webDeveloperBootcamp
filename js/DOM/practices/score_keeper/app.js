const p1 = {
    score: 0,
    btn: document.querySelector("#p1Btn"),
    display: document.querySelector("#p1Score")
}
const p2 = {
    score: 0,
    btn: document.querySelector("#p2Btn"),
    display: document.querySelector("#p2Score")
}
const resetBtn = document.querySelector("#resetBtn");
const selectWinningScore = document.querySelector("select")
let winningScore = parseInt(selectWinningScore.value)

p1.display.innerText = `${p1.score}`
p2.display.innerText = `${p2.score}`

const updateScore = (player, opponent) => {
    selectWinningScore.disabled = true;
    player.score += 1;
    player.display.innerText = `${player.score}`
    if (player.score >= winningScore & (player.score - opponent.score) > 1) {
        player.display.style.color = "green";
        opponent.display.style.color = "red";
        player.btn.disabled = true;
        opponent.btn.disabled = true;
    }
}
p1.btn.addEventListener("click", () => {
    updateScore(p1, p2);
})
p2.btn.addEventListener("click", () => {
    updateScore(p2, p1);
})

selectWinningScore.addEventListener("change", () => {
    winningScore = parseInt(selectWinningScore.value)
})

resetBtn.addEventListener("click", () => {
    for (let player of [p1, p2]) {
        player.score = 0;
        player.display.innerText = `${player.score}`
        player.display.style.color = "black";
        player.btn.disabled = false;
    }
    selectWinningScore.disabled = false;
})