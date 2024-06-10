const fs = require('fs');
const readline = require('readline');

const filePath = 'info.txt';

// Зчитування вмісту файлу
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:\n', data);
});

// Налаштування readline для зчитування з консолі
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функція для запису вмісту у файл
const writeToFile = (input) => {
    fs.writeFile(filePath, input, (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('Content written to file successfully.');
    });
};

// Запит на введення вмісту з консолі
rl.question('Enter content to write to the file: ', (answer) => {
    writeToFile(answer);
    rl.close();
});
