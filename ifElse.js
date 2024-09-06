// let weather = "sunny"

// if (weather == "sunny") {
//     console.log("Time for some shorts")
    // if the condition is true do this
// } else if (weather == "rainy") {
//     console.log ("time for jog bottoms")
    // if the first condition is false and the second is true do this
// } else {
//     console.log("Screw it I'll just throw whatever on")
    // if none are true do this
// }

// == equal - just needs same value
// === strictly equal - needs same value and data type
// != not equal
// !== strictly not equal

// Activities:

// Activty 1:

// let age = 29

// if (age>= 18) {
//     console.log("Old enough")
// } else {
//     console.log("Unfortunately you aren't old enough to enjoy a beer")
// }

// stretch:

// let ageNew = 20
// let country = "USA"

// if (age >= 18 && country == "UK") {
//     console.log("Old enough")
// } else if (age <= 20 && country == "USA") {
//     console.log("unfortunately you aren't old enough to drink beer.")
// } else {
//     console.log("Unfortunately you aren't old enough to enjoy a beer")
// }

// Activity 2:

// let topping = "Salami"

// switch (topping) {
//     case "Pepperoni":
//     case "Spicy Beef":
//     case "BBQ Sauce":
//         console.log(`${topping} has to be on my pizza`)
//         break;
//     case "Salami":
//     case "Red Onion":
//     case "Donner Meat":
//         console.log(`I don't mind having ${topping} on pizza`)
//         break;
//     default:
//         console.log(`I point blank refuse to have ${topping} on my pizza`)
//         break;
// }

// Activity 3:

// let password = "everton"

// if (password.length >= 8) {
//     console.log("Your password has been updated.")
// } else {
//     console.log("Error. Your chosen password is too short. Remember, your password must have at least 8 characters")
// }

// Stretch:

// let num = 27

// if (num % 3 === 0 || num % 5 === 0) {
//     console.log(`${num} is divisible by 3 and/or 5`)
// } else {
//     console.log(`${num} is not divisible by either 3 or 5.`)
// }

// Activity 4:

// let number = 17

// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("fizzbuzz")
// } else if (number % 5 === 0) {
//     console.log("buzz")
// } else if (number % 3 === 0) {
//     console.log("fizz")
// } else {
//     console.log(`${number}`)
// }

// Activity 5:

// let numPal = 202020202

// let numStr = numPal.toString();

// let reversedStr = numStr.split('').reverse().join('');

// if (numStr === reversedStr) {
//     console.log(numPal + " is a palindrome.");
// } else {
//     console.log(numPal + " is not a palindrome.");
// }

// Activity 6:

// let time = 17
// let cityOfHome = "Liverpool"
// let placeOfWork = "Goodison Park"

// if (time <= 9) {
//     console.log ("I'm still at home")
// } else if (time >= 9 && time < 10) {
//     console.log("I'm travelling to work")
// } else if (time >= 10 && time < 17) {
//     console.log("I'm currently in work")
// } else  if (time >= 17 && time <= 18){
//     console.log("I'm curently travelling home from work")
// } else {
//     console.log("I'm recuperating at home from a long day in work.")
// }

// Activity 7:

// let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

// let vowels = "aeiou";

// let lastVowelIndex = -1;

// for (let i = 0; i < string.length; i++) {

//     if (vowels.includes(string[i])) {

//         lastVowelIndex = i;
//     }
// }
// console.log("The index of the last vowel is: " + lastVowelIndex);

// Activity 8:

// let word = "superheroes"
// let firstLetter = word[0];
// let lastLetter = word[word.length - 1];

// if (firstLetter === lastLetter) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Activity 9:

// let num1 = 24
// let num2 = 48
// let sum = num1 + num2

// if (sum % 2 === 0) {
//     console.log(sum)
// } else {
//     console.log(num1 * num2)
// }