// Завдання 1
let cities = ["Ternopil", "Lviv", "Warsaw"];
let result1 = cities.join("*");
console.log(result1); // "Ternopil*Lviv*Warsaw"

// Завдання 2
let numbers = [2, 3, 4, 5];
let productFor = 1;
for (let i = 0; i < numbers.length; i++) {
    productFor *= numbers[i];
}
console.log("Добуток елементів масиву (за допомогою циклу for):", productFor);

let productWhile = 1;
let j = 0;
while (j < numbers.length) {
    productWhile *= numbers[j];
    j++;
}
console.log("Добуток елементів масиву (за допомогою циклу while):", productWhile);

// Завдання 3
function findMin() {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

console.log(findMin(12, 14, 4, -4, 0.2)); // => -4