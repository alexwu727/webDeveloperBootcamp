console.log("Before conditional")
let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5");
    console.log(random);
}
console.log("After conditional")

const dayOfWeek = "Monday";

if (dayOfWeek === "Monday") {
    console.log("Ughhh, I hate mondays!")
} else if (dayOfWeek === "Saturday") {
    console.log("Yay, I love saturdays")
} else {
    console.log("Nah")
}

const age = 80;

if (age < 5) {
    console.log("Free");
} else if (age < 10) {
    console.log("$10")
} else if (age < 65) {
    console.log("$20")
} else {
    console.log("$10")
}

