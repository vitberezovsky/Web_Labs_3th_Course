// Завдання 1
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

Car.prototype.displayInfo = function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
};

Car.prototype.drive = function() {
    console.log('Рух розпочато');
};

let car1 = new Car('Toyota', 'Camry', 2020);
let car2 = new Car('Honda', 'Civic', 2018);
let car3 = new Car('Ford', 'Mustang', 2022);

car1.displayInfo();
car1.drive();

car2.displayInfo();
car2.drive();

car3.displayInfo();
car3.drive();

// Завдання 2
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    study() {
        console.log(`${this.name}, ${this.age} років, навчається на ${this.grade} курсі.`);
    }
}

let student1 = new Student('Іван', 20, '3');
let student2 = new Student('Марія', 22, '4');
let student3 = new Student('Олег', 19, '2');

student1.study();
student2.study();
student3.study();
