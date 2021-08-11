
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
//                         document.body.style.backgroundColor = "purple";
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

fakeRequestCallback("books.com/page1",
    function (response) {
        console.log("It worked!(1st)")
        console.log(response)
        fakeRequestCallback("books.com/page2",
            function (response) {
                console.log("It worked!(2nd)")
                console.log(response)
                fakeRequestCallback("books.com/page3",
                    function (response) {
                        console.log("It worked!(3rd)")
                        console.log(response)
                    }, function (err) {
                        console.log("Error!", err)
                    })
            }, function (err) {
                console.log("Error!", err)
            })
    }, function (err) {
        console.log("Error!", err)
    })