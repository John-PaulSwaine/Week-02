// let person = {
//     name: "John-Paul",
//     age: 28,
//     favouriteGames: [
//         "Persona 5 Royal",
//         "Fallout 3",
//         "Fallout: New Vegas"
//     ],
//     favouriteAnime: [
//         "Sword Art Online",
//         "That Time I Got Reincarnated As A Slime",
//         "Konosuba: God's Blessing On This Wonderful World"
//     ],
//     sayHi: () => {
//         console.log(`Hello. My name is ${person.name}`)
//     }
// }
// person.sayHi()
// console.log(person.favouriteAnime)
// console.log(person["favouriteGames"])

// const pet = {
//     name: "Bob",
//     age: 5,
//     typeOfPet: "Lion",
//     colour: "golden brown",

//     eat: () => {
//         console.log(`Your pet ${pet.typeOfPet} named ${pet.name} is currently eating.`)
//     },
//     drink: () => {
//         console.log(`Your pet ${pet.typeOfPet} named ${pet.name} is currently drinking.`)
//     } 
// }

// pet.eat()
// pet.drink()

// const coffeeShop = {
//     branch: "Central London",
//     drinks: {
//         coffee: 3.0,
//         tea: 2.5,
//         latte: 3.5,
//         cappuccino: 4.0
//     },
//     food: {
//         sandwich: 5.0,
//         croissant: 2.5,
//         muffin: 3.0,
//         salad: 4.5,
//         fryup: 8.0
//     },
//     drinksOrdered: (...orderedDrinks) => {
//         let totalCost = 0;
//         let orderDetails = orderedDrinks.map(drink => {
//             if (coffeeShop.drinks[drink] !== undefined) {
//                 totalCost += coffeeShop.drinks[drink];
//                 return `${drink} £${coffeeShop.drinks[drink]}`;
//             } else {
//                 return `${drink} is not available`;
//             }
//         }).join(', ');
//         return `Your drinks order is: ${orderDetails}. Total cost: £${totalCost.toFixed(2)}`;
//     },
//     foodOrdered: (...orderedFood) => {
//         let totalCost = 0;
//         let orderDetails = orderedFood.map(food => {
//             if (coffeeShop.food[food] !== undefined) {
//                 totalCost += coffeeShop.food[food];
//                 return `${food} £${coffeeShop.food[food]}`;
//             } else {
//                 return `${food} is not available`;
//             }
//         }).join(', ');
//         return `Your food order is: ${orderDetails}. Total cost: £${totalCost.toFixed(2)}`;
//     },
//     orderItems: (...items) => {
//         let totalCost = 0;
//         let orderDetails = items.map(item => {
//             if (coffeeShop.drinks[item] !== undefined) {
//                 totalCost += coffeeShop.drinks[item];
//                 return `${item} £${coffeeShop.drinks[item]}`;
//             } else if (coffeeShop.food[item] !== undefined) {
//                 totalCost += coffeeShop.food[item];
//                 return `${item} £${coffeeShop.food[item]}`;
//             } else {
//                 return `${item} is not available`;
//             }
//         }).join(', ');
//         return `Your order is: ${orderDetails}. Total cost: £${totalCost.toFixed(2)}`;
//     }
// };
// console.log(coffeeShop.drinksOrdered("coffee", "latte", "espresso")); 
// console.log(coffeeShop.foodOrdered("sandwich", "muffin", "bagel"));  
// console.log(coffeeShop.orderItems("coffee", "sandwich", "latte", "muffin", "fryup"))