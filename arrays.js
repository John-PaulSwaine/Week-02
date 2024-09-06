// let coffeeOrder = [
//     "Alex - Black Coffee",
//     "Ben - Americano",
//     "Charlie - Whatever's new"
// ]

// console.log(coffeeOrder)
// console.log(coffeeOrder[1])

// coffeeOrder[1] = "Ann - Vanilla Latte"

// console.log(coffeeOrder)
// console.log(coffeeOrder.length)

// coffeeOrder.push("Davide - Cappucino")

// console.log(coffeeOrder)

// coffeeOrder.pop()
// console.log(coffeeOrder)


// Activities

// Activity 1:
let faveSongs = [
    "Kibo No Uta - Miura Jam",
    "Fantastic Dreamer - Machico",
    "Like Flames - Minda Ryn"
]
console.log(faveSongs)

// stretch:

faveSongs.push("Colors Flying High - Lyn")
faveSongs.push("(Take Me Home) Country Roads - John Denver")
console.log(faveSongs)

faveSongs.pop()
console.log(faveSongs)

// Activity 2:

// Initial array
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

console.log("Original array:", fruits);

// Using .slice()
let slicedFruits = fruits.slice(1, 4); // Slices from index 1 to 3 (4 is not included)
console.log("Sliced array (from index 1 to 4):", slicedFruits);

// Using .splice() to remove elements
let removedFruits = fruits.splice(2, 2); // Removes 2 elements starting from index 2
console.log("Array after using .splice() to remove 2 elements from index 2:", fruits);
console.log("Removed elements:", removedFruits);

// Using .splice() to add elements
fruits.splice(2, 0, "Coconut", "Dragonfruit"); // Adds elements at index 2, without removing any
console.log("Array after using .splice() to add elements:", fruits);

// Using .splice() to replace elements
fruits.splice(4, 2, "Guava", "Honeydew"); // Replaces 2 elements starting at index 4
console.log("Array after using .splice() to replace elements:", fruits);
