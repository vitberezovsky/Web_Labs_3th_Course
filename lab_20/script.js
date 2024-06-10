document.addEventListener('DOMContentLoaded', () => {
    const cardForm = document.getElementById('cardForm');
    const cardValidationResult = document.getElementById('cardValidationResult');
    const emailForm = document.getElementById('emailForm');
    const emailValidationResult = document.getElementById('emailValidationResult');

    cardForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const cardNumber = document.getElementById('cardNumber').value;
        if (validateCardNumber(cardNumber)) {
            cardValidationResult.textContent = 'Card number is valid!';
            cardValidationResult.style.color = 'green';
        } else {
            cardValidationResult.textContent = 'Card number is invalid!';
            cardValidationResult.style.color = 'red';
        }
    });

    emailForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        if (checkEmail(email)) {
            emailValidationResult.textContent = 'Email is correct!';
            emailValidationResult.style.color = 'green';
        } else {
            emailValidationResult.textContent = 'Email is not correct!';
            emailValidationResult.style.color = 'red';
        }
    });

    function validateCardNumber(cardNumber) {
        const cardRegex = /^[45]\d{15}$/;
        return cardRegex.test(cardNumber);
    }

    function checkEmail(email) {
        const emailRegex = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
        const consecutiveHyphens = /--/;
        return emailRegex.test(email) && !consecutiveHyphens.test(email);
    }
});
