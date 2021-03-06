
// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "green";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "blue";
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = "violet";
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = "white";
//                         }, 500)
//                     }, 500);
//                 }, 500);
//             }, 500);
//         }, 500);
//     }, 500);
// }, 500);

// searchMoviesAPI("amadeus", () => {
//     saveToMyDB(movies, () => {
//         // if it works, run this
//     }, () => {
//         // if it donesn't work, run this
//     })
// }, () => {
//     // if API is down, or request failed
// })

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timeout:(")
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay);
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout :(")
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay);
    })
}

// fakeRequestCallback("books.com/page1",
//     function (response) {
//         console.log("It worked!(1st)")
//         console.log(response)
//         fakeRequestCallback("books.com/page2",
//             function (response) {
//                 console.log("It worked!(2nd)")
//                 console.log(response)
//                 fakeRequestCallback("books.com/page3",
//                     function (response) {
//                         console.log("It worked!(3rd)")
//                         console.log(response)
//                     }, function (err) {
//                         console.log("Error!", err)
//                     })
//             }, function (err) {
//                 console.log("Error!", err)
//             })
//     }, function (err) {
//         console.log("Error!", err)
//     })

// fakeRequestPromise("books.com/page1").then((response) => {
//     console.log("It worked!(1st)")
//     console.log(response)
//     fakeRequestPromise("books.com/page2").then((response) => {
//         console.log("It worked!(2nd)")
//         console.log(response)
//         fakeRequestPromise("books.com/page3").then((response) => {
//             console.log("It worked!(3rd)")
//             console.log(response)
//         }).catch((err) => {
//             console.log("Error!", err)
//         })
//     }).catch((err) => {
//         console.log("Error!", err)
//     })
// }).catch((err) => {
//     console.log("Error!", err)
// })

fakeRequestPromise("books.com/page1").then((response) => {
    console.log("It worked!(1st)")
    console.log(response)
    return fakeRequestPromise("books.com/page2")
}).then((response) => {
    console.log("It worked!(2nd)")
    console.log(response)
    return fakeRequestPromise("books.com/page3")
}).then((response) => {
    console.log("It worked!(3rd)")
    console.log(response)
}).catch((err) => {
    console.log("Error!", err)
})

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay);
    })
}

// delayedColorChange("red", 1000)
//     .then(() => delayedColorChange("orange", 1000))
//     .then(() => delayedColorChange("yellow", 1000))
//     .then(() => delayedColorChange("green", 1000))
//     .then(() => delayedColorChange("blue", 1000))
//     .then(() => delayedColorChange("indigo", 1000))
//     .then(() => delayedColorChange("violet", 1000))
//     .then(() => delayedColorChange("white", 1000))

// async function
async function hello() {
    return "hello!"
}

const sing = async () => {
    // throw "Oh no!"          // reject
    return "La La La La"    // resolve
}

sing().then((data) => {
    console.log("Promise resolved:", data)
})

const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials"
    if (password.length <= 5) throw "Password is too short"
    return `hello, ${username}`
}

login("hello", "password")
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })

// await
async function rainbow() {
    await delayedColorChange("red", 500)
    await delayedColorChange("orange", 500)
    await delayedColorChange("yellow", 500)
    await delayedColorChange("green", 500)
    await delayedColorChange("blue", 500)
    await delayedColorChange("indigo", 500)
    await delayedColorChange("violet", 500)
    console.log("ALL DONE")
}

// deal with rejection
const makeTwoRequests = async () => {
    try {
        let data1 = await fakeRequestPromise("books.com/page1");
        console.log(data1)
        let data2 = await fakeRequestPromise("books.com/page2");
        console.log(data2)
    } catch (e) {
        console.log("Noooooooo!", e)
    }
}