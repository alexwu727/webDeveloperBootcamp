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