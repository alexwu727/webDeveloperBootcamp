// console.log("Before conditional")
// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5");
//     console.log(random);
// }
// console.log("After conditional")

// const dayOfWeek = "Monday";

// if (dayOfWeek === "Monday") {
//     console.log("Ughhh, I hate mondays!")
// } else if (dayOfWeek === "Saturday") {
//     console.log("Yay, I love saturdays")
// } else {
//     console.log("Nah")
// }

// const age = 80;

// if (age < 5) {
//     console.log("Free");
// } else if (age < 10) {
//     console.log("$10")
// } else if (age < 65) {
//     console.log("$20")
// } else {
//     console.log("$10")
// }

const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid");
} else {
    console.log("incorrect format");
}


const age = 80;

if (age < 0 && age > 130) {
    console.log("Invalid age");
} else if (age < 5 || age >= 65) {
    console.log("Free")
} else if (age < 10) {
    console.log("$10")
} else {
    console.log("$20")
}

const day = 6;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend!")
        break; as

    default:
        console.log("I don't understand!")
}