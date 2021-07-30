const person = { firstName: "Mike", lastName: "Jagger" }
console.log("person:", person)
console.log('person["firstName"]:', person["firstName"])

const kitchenSink = {
    favNum: 73,
    isFunny: true,
    colors: ["red", "yellow"],
}
console.log("kitchenSink:", kitchenSink)
console.log("kitchenSink.colors:", kitchenSink.colors)

// key values always convert into string type
const years = { 1999: "good", 2020: "bad" }
console.log("years:", years)
console.log("years['1999']:", years["1999"])

const dumbdumb = { null: "hello", undefined: "world" }
console.log("dumbdumb:", dumbdumb)
console.log("dumbdumb['null']:", dumbdumb["null"])

// modifying objects
console.log("------------ modifying objects ------------")
const midterms = { danielle: 98, thomas: 78 }
console.log("midterms:", midterms)

midterms.thomas = 88
console.log("midterms.thomas = 88")
console.log("midterms:", midterms)

midterms.ezra = 79
midterms.antonio = 62
console.log("midterms.ezra = 79")
console.log("midterms.antonio = 62")
console.log("midterms:", midterms)

// array and object
console.log("------------ array and object ------------")
const comments = [
    { username: "Tammy", text: "lololololol", votes: 9 },
    { username: "FishBoi", text: "glub glub", votes: 139941 },
]

console.log("comments:", comments)
console.log("comments[1].text:", comments[1].text)