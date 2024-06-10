document.addEventListener('DOMContentLoaded', (event) => {
    const createProductButton = document.getElementById('createProductButton');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const productForm = document.getElementById('productForm');

    let products = [];

    createProductButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const price = parseFloat(document.getElementById('price').value);
        const discount = parseFloat(document.getElementById('discount').value);
        const category = document.getElementById('category').value;
        const image = document.getElementById('image').value;

        if (name && description && price >= 0 && discount >= 0 && category && image) {
            const product = {
                name,
                description,
                price,
                discount,
                category,
                image
            };

            products.push(product);
            console.log(products);

            productForm.reset();
            modal.style.display = 'none';
        } else {
            alert('Будь ласка, заповніть всі обов\'язкові поля коректно.');
        }
    });
});
