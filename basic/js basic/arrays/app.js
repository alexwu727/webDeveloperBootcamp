const nums = [2, 5, 13, 4, 16];
console.log("nums:", nums);
console.log("nums[2]:", nums[2])

// modify array
console.log("---------- modify array ----------")
nums[1] = 7;
console.log("nums:", nums);

// index of 
console.log("---------- index of ----------")
console.log("nums.indexOf(4):", nums.indexOf(4));
console.log("nums.indexOf(8):", nums.indexOf(8));

// reverse
console.log("---------- reverse ----------")
console.log("nums.reverse():", nums.reverse());

// slice
console.log("---------- slice ----------")
console.log("nums.slice(2):", nums.slice(2));
console.log("nums.slice(2, 4):", nums.slice(2, 4));

// splice
console.log("---------- splice ----------")
console.log("nums:", nums);
console.log("nums.splice(4):", nums.splice(4)); // remove
console.log("nums:", nums);
console.log("nums.splice(1, 0):", nums.splice(1, 0)); // remove 0 numbers
console.log("nums:", nums);
console.log("nums.splice(1, 0, 25):", nums.splice(1, 0, 25)); // insert 25
console.log("nums:", nums);
console.log("nums.splice(2, 2, 50, 51):", nums.splice(2, 2, 50, 51)); // remove two numbers and insert 50, 51
console.log("nums:", nums);

// push and pop
console.log("---------- push and pop ----------")
console.log("nums.push(77):", nums.push(77));
console.log("nums:", nums);
console.log("nums.pop():", nums.pop());
console.log("nums:", nums);

// shift and unshift
console.log("---------- shift and unshift ----------")
console.log("nums.unshift(77):", nums.unshift(77)); // push to start
console.log("nums:", nums);
console.log("nums.shift():", nums.shift());  // pop from start
console.log("nums:", nums);