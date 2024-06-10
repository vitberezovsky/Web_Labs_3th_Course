// Завдання 1.1
let student = { name: "John", age: 20, gender: "male" };
let { name: studentName, age: studentAge, gender: studentGender } = student;
console.log(studentName, studentAge, studentGender);

// Завдання 1.2
let car = { engine: { cylinders: 4, horsepower: 200 } };
let { engine: { cylinders: engineCylinders, horsepower: engineHorsepower } } = car;
console.log(engineCylinders, engineHorsepower);

// Завдання 1.3
let book = { title: "JavaScript Basics", author: "Jane Doe" };
let { title: bookTitle, author: bookAuthor } = book;
console.log(bookTitle, bookAuthor);

// Завдання 2.1
let numbers = [1, 2, 3];
let [firstNumber, secondNumber, thirdNumber] = numbers;
console.log(firstNumber, secondNumber, thirdNumber);

// Завдання 2.2
let fruits = ['apple', 'orange', 'banana'];
let [firstFruit, ...restFruits] = fruits;
console.log(firstFruit, restFruits);

// Завдання 2.3
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

// Завдання 3
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

let inputString = 'i like java script';
let outputString = capitalizeFirstLetter(inputString);
console.log(outputString);
