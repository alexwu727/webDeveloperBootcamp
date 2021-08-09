const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const resetBtn = document.querySelector("#resetBtn");

const p1ScoreDisplay = document.querySelector("#p1Score");
const p2ScoreDisplay = document.querySelector("#p2Score");
const selectWinningScore = document.querySelector("select")
let winningScore = parseInt(selectWinningScore.value)
let p1Score = 0;
let p2Score = 0;

p1ScoreDisplay.innerText = `${p1Score}`
p2ScoreDisplay.innerText = `${p2Score}`


p1Btn.addEventListener("click", () => {
    selectWinningScore.disabled = true;
    p1Score += 1;
    p1ScoreDisplay.innerText = `${p1Score}`
    if (p1Score >= winningScore & (p1Score - p2Score) > 1) {
        p1ScoreDisplay.style.color = "green";
        p2ScoreDisplay.style.color = "red";
        p1Btn.disabled = true;
        p2Btn.disabled = true;
    }
})
p2Btn.addEventListener("click", () => {
    selectWinningScore.disabled = true;
    p2Score += 1;
    p2ScoreDisplay.innerText = `${p2Score}`
    if (p2Score >= winningScore & (p2Score - p1Score) > 1) {
        p2ScoreDisplay.style.color = "green";
        p1ScoreDisplay.style.color = "red";
        p1Btn.disabled = true;
        p2Btn.disabled = true;
    }
})

selectWinningScore.addEventListener("change", () => {
    winningScore = parseInt(selectWinningScore.value)
})

resetBtn.addEventListener("click", () => {
    p1Score = 0;
    p2Score = 0;
    p2ScoreDisplay.style.color = "black";
    p1ScoreDisplay.style.color = "black";
    p1ScoreDisplay.innerText = `${p1Score}`
    p2ScoreDisplay.innerText = `${p2Score}`
    selectWinningScore.disabled = false;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
})