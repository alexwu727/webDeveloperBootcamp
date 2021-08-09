const gameWindow = document.querySelector("#gameWindow");
const restartWindow = document.querySelector("#restartWindow");
const startButton = document.querySelector("#startButton");
const difficuties = document.querySelectorAll("#difficuty button");
const userAnswer = document.querySelector("#userInput input");
const userAnswerButton = document.querySelector("#userInput button");
const result = document.querySelector("#userInput h3");
const score = document.querySelector("#userInput h2");
let currentScore = 0;
score.innerText = `Score: ${currentScore}`
let difficuty = "easy";
const difficutyWeight = { easy: 1, normal: 5, hard: 10, crazy: 20 }
let answer = 0;
const removePreviousDot = () => {
    let dots = document.querySelectorAll("#gameWindow div.dot")
    for (let dot of dots) {
        // dot.style.backgroundColor = "yellow";
        dot.remove()
    }
}

const createRandomDot = (num) => {
    for (let i = 0; i < num; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot")
        let x = Math.floor(Math.random() * 480);
        let y = Math.floor(Math.random() * 480);
        dot.style.top = `${y}px`;
        dot.style.left = `${x}px`;
        gameWindow.appendChild(dot);
    }
}


startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    score.innerText = `Score: ${currentScore}`
    removePreviousDot();
    switch (difficuty) {
        case "easy":
            answer = Math.floor(Math.random() * 5 + 1)
            break;
        case "normal":
            answer = Math.floor(Math.random() * 8 + 8)
            break;
        case "hard":
            answer = Math.floor(Math.random() * 10 + 20)
            break;
        case "crazy":
            answer = Math.floor(Math.random() * 20 + 51)
            break;
        default:
            break;
    }
    createRandomDot(answer);
    result.innerText = "";
    userAnswer.value = "";

})

for (let difficutyButton of difficuties) {
    difficutyButton.addEventListener("click", () => {
        difficuty = difficutyButton.innerText;
    })
}

userAnswerButton.addEventListener("click", () => {
    console.log(answer)
    if (!userAnswer.value || userAnswer.value < 1) {
        result.innerText = "Please enter a valid number";
        result.style.color = "black";

    } else {
        if (userAnswer.value == answer) {
            result.innerText = "Correct!";
            result.style.color = "green";
            adjustScore(1);
        } else {
            result.innerText = "Wrong!";
            result.style.color = "red";
            adjustScore(-1);
        }
    }
    // console.log(document.querySelector("#userInput input").value)
})

const adjustScore = (num) => {
    currentScore += num * difficutyWeight[difficuty];
    score.innerText = `Score: ${currentScore}`
    if (currentScore < 0) {
        result.innerText = "You Lose!";
        result.style.color = "red";
        currentScore = 0;
    }

}
