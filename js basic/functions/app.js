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