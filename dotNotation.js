// Morning session:

// console.log("up the toffees!!!!")
// console.log("up the toffees!!!!".toUpperCase())
// console.log("UP THE TOFFEES!!!!".toLowerCase())
// console.log(Math.random())
// console.log(Math.random() *10)
// console.log(Math.floor(Math.random() *10))
// console.log(Math.ceil(Math.random() * 6))
// console.log(Math.round(Math.random()*10))


// Morning session activity:
//Make a tic-tac-toe board on the console

// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")

// const vertical = () => {
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// }

// const horizontal = () => {
// console.log("-----------")
// }

// console.log(vertical(), horizontal(), vertical(), horizontal(), vertical())


// Afternoon session:

// let fullName = "John-Paul"

// let i = 10
// i = i + 2
// console.log(i)

// i = 24
// i -= 5
// console.log (i)

// let favouriteDrink = "Monster Mango Loco"
// console.log(favouriteDrink)
// console.log("My name is " + fullName + ". My favourite drink is " + favouriteDrink)
// console.log(`My name is ${fullName}. My favourite drink is ${favouriteDrink}.`)


// Afternoon session Activities:
// Activity 1:

// let name = "John-Paul"
// let age = 28
// let favDrink = "Monster Mango Loco"

// console.log(`Hi, my name is ${name}, I am currently ${age} and my favourite drink is ${favDrink}.`)

// name = "Bob"
// age = 50
// favDrink = "coffee"

// console.log(`Hi, my name is ${name}, I am currently ${age} and my favourite drink is ${favDrink}.`)

// Activity 2:

// let breakfast = "Nothing"
// let lunch = "Cheese and ham toastie"
// let tea = "Half-Pounder Cheese and Bacon Burger, Cheesy Chips and a portion of Onion Rings"

// console.log(`For breakfast today I ate ${breakfast}. For lunch I had ${lunch} and for my tea I am going to have ${tea}.`)

// breakfast = "Weetabix"
// lunch = "Nothing"
// tea = "Hunter's Chicken"

// console.log(`For breakfast tomorrow I will have ${breakfast}. For lunch I plan on having ${lunch} and for my tea I am looking forward to have ${tea}.`)

// Activity 3:

let date1 = new Date("05/27/2025")
let date2 = new Date()

let timeDiff =
date1.getTime() - date2.getTime()

let daysDiff =
Math.ceil
(timeDiff / (1000 * 3600 * 24))

console.log(`Total number of days between dates: ${date2.toDateString()} and ${date1.toDateString()} is: ${daysDiff} days`)