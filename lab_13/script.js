// Завдання 1
let x = 1;
let y = 2;

let res1 = `${x}${y}`;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + `${y}`;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x > y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x / "a";
console.log(res4); // NaN
console.log(typeof res4); // "number"

// Завдання 2
let userInput = prompt("Введіть число:");
let number = parseFloat(userInput);

if (number > 0 && number % 2 === 0) {
    console.log("Число парне додатнє.");
} else {
    console.log("Число не є парним додатнім.");
}

if (number % 7 === 0) {
    console.log("Число кратне 7.");
} else {
    console.log("Число не кратне 7.");
}

// Завдання 3
let userAge = prompt("Скільки вам років?");
let isAdult = parseInt(userAge);

if (isAdult >= 18) {
    console.log("Ви досягли повнолітнього віку.");
} else {
    console.log("Ви ще надто молоді.");
}
