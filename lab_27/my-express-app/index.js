// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Налаштування dotenv для завантаження змінних середовища з файлу .env
dotenv.config();

// Створюємо екземпляр додатку Express
const app = express();

// Підключення до MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

connectDB();

// Налаштовуємо маршрут для відправлення текстового відповіді "Hello, Express!" на запити GET на кореневий маршрут ("/")
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Прослуховуємо запити на порті 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
s