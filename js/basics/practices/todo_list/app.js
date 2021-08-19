const todoList = []

while (true) {
    let action = prompt("What would you like to do?")
    if (action === "new") {
        let newTodo = prompt("Ok, what is the new todo?");
        todoList.push(newTodo);
        console.log(`"${newTodo}" added to the list!`)
    } else if (action === "list") {
        if (!todoList.length) {
            console.log("Todo List is now empty.")
        } else {
            console.log("**************")
            for (let i = 0; i < todoList.length; i++) {
                console.log(`${i}: ${todoList[i]}`)
            }
            console.log("**************")
        }
    } else if (action === "delete") {
        if (!todoList.length) {
            console.log("Todo List is now empty.")
        } else {
            let delIndex = NaN;
            while ((!delIndex && delIndex !== 0) || delIndex >= todoList.length) {
                delIndex = prompt("Invalid index, please try again.");
                if (delIndex === "quit" || delIndex === "q") {
                    break;
                }
                delIndex = parseInt(delIndex);
            }
            if (delIndex !== "q" && delIndex !== "quit") {
                console.log(`Ok, deleted "${todoList[delIndex]}"`)
                todoList.splice(delIndex, 1);

            }
        }
    } else if (action === "quit" || action === "q") {
        break;
    } else {
        console.log("Invalid operation, please enter again.")
    }
}