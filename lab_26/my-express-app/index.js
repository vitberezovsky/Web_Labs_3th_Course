// index.js
// Імпортуємо бібліотеку Express
const express = require('express');
// Створюємо екземпляр додатку Express
const app = express();

// Налаштовуємо маршрут для відправлення текстового відповіді "Hello, Express!" на запити GET на кореневий маршрут ("/")
app.get('/', (req, res) => {
res.send('Hello, Express!');
});
// Прослуховуємо запити на порті 3000
app.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});