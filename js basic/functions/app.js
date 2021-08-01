function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}`)
}

function repeat(str, times) {
    let res = ""
    for (let i = 0; i < times; i++) {
        res += str
    }
    console.log(res);
}

function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    }
    return x + y;
}

function capitalize(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);

}

function returnDay(num) {
    if (num < 1 || num > 7) return null;
    switch (num) {
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        default:
            console.log("Please enter a number from 1 to 7.")
            break;
    }
}


// scope
let a = 0;
function f1() {
    console.log(a)
}
console.log(a)
f1()

console.log("--------------------------")

let b = 0;
function f2() {
    let b = 1;
    console.log(b)
}
console.log(b)
f2()

// function object
// function add(x, y) {
//     return x + y;
// }

const add2 = function (x, y) {
    return x + y;
};

function callTwice(func) {
    func();
    func();
}

// function isBetween1(num) {
//     return num >= 50 && num <= 100
// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10
// }

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);

// this
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}
