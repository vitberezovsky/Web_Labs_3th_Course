// Завдання 1
document.getElementById('createButton').addEventListener('click', function() {
    let newDiv = document.createElement('div');
    newDiv.textContent = 'Новий елемент';
    newDiv.classList.add('newDivClass');
    document.querySelector('.container').appendChild(newDiv);

    // Змінюємо стилі новоствореного елементу
    newDiv.style.backgroundColor = 'lightblue';
    newDiv.style.color = 'white';
    newDiv.style.padding = '10px';
});

// Завдання 2
let editableDiv = document.querySelector('.container');

editableDiv.addEventListener('click', function() {
    let newText = prompt('Введіть новий текст:');
    if (newText !== null) {
        editableDiv.textContent = newText;
    }
});
