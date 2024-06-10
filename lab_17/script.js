// script.js
// Отримуємо всі блоки div з класом "block"
let blocks = document.querySelectorAll('.block');

// Додаємо обробник подій до кожної кнопки видалення
blocks.forEach(function(block) {
    let deleteButton = block.querySelector('.deleteButton');
    deleteButton.addEventListener('click', function() {
        block.remove();
    });
});
