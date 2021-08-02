// default params
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }
const rollDie = (numSides = 6) => Math.floor(Math.random() * numSides) + 1;

function greet(person, msg = "Hey there") {
    console.log(`${msg}, ${person}!`)
}
const nums = [3, 4, 5, 6]
let a = Math.max(nums) // NaN
let b = Math.max(...nums) // 6
console.log(nums)
console.log(...nums)