// default params
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }
const rollDie = (numSides = 6) => Math.floor(Math.random() * numSides) + 1;

function greet(person, msg = "Hey there") {
    console.log(`${msg}, ${person}!`)
}

// spread
const nums = [3, 4, 5, 6]
let a = Math.max(nums) // NaN
let b = Math.max(...nums) // 6
console.log(nums)
console.log(...nums)

const cats = ["Blue", "Scout", "Rocket"]
const dogs = ["Rusty", "Wyatt"]
const allPets = [...cats, ...dogs, "Speedy"]

// spread with object
const feline = { legs: 4, family: "Felidae" }
const canine = { isFurry: true, family: "Caninae" }
const newObject = { ...feline, ...canine }

// rest params
const sum = (...nums) => nums.reduce((total, num) => total + num)

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to ${gold}`)
    console.log(`Silver medal goes to ${silver}`)
    console.log(`and thanks to everyone else: ${everyoneElse}`)
}