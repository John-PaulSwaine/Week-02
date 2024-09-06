// Activity 1:

// const factorial = (n) => {

//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33))

// Activity 2:

// let orderCount = 0

// const takeOrder = (topping) => {
//     console.group(`Pizza with ${topping}`)
//     orderCount++
// }

// takeOrder("Beef")

// ACtivity 3:

// let correctPin = "1234"; 
// let balance = 1000;      

// const validatePin = (inputPin) => {
//     return inputPin === correctPin;
// }

// const withdrawCash = (inputPin, amount) => {
//     if (validatePin(inputPin)) {
//         if (amount <= balance) {
//             balance -= amount;
//             console.log(`Withdrawal successful! You withdrew £${amount}.`);
//             console.log(`Your new balance is £${balance}.`);
//         } else {
//             console.log("Insufficient funds.");
//         }
//     } else {
//         console.log("Incorrect PIN. Access denied.");
//     }
// }

// withdrawCash("1234", 300);
// withdrawCash("1234", 800); 
// withdrawCash("4321", 100); 
// withdrawCash("1234", 1000)
