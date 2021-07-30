// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

// iterating array
console.log("---------- iterating array ----------")
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]
console.log("colors:", colors)
for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);
}

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(i, colors[i]);
}

// nested loops
console.log("---------- nested loop ----------")
for (let i = 0; i < 3; i++) {
    console.log(`outer loop: ${i}`)
    for (let j = 0; j < 3; j++) {
        console.log(`   inner loop: ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
console.log("seatingChart:", seatingChart)

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

// while loop
console.log("---------- while loop ----------")
let i = 0
while (i < 10) {
    console.log(i);
    i++;
}

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!")

// number guessing game
console.log("---------- number guessing game ----------")

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)

let guess = prompt("Enter your first guess");
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    if (guess > targetNum) {
        guess = prompt("guess lower")
    } else {
        guess = prompt("guess higher")
    }
    attempts++;
}

if (guess === "q") {
    console.log(`Too bad you quit the game. The answer is ${targetNum}`)
} else if (attempts == 1) {
    console.log("Wow! You get the answer on first try!")
} else {
    console.log(`Congrats! The answer is ${targetNum}.`)
    console.log(`It took you ${attempts} guesses.`)
}
