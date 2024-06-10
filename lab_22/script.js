document.addEventListener('DOMContentLoaded', () => {
    const createProductButton = document.getElementById('createProductButton');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const productForm = document.getElementById('productForm');
    const productContainer = document.getElementById('productContainer');
    const filterCategory = document.getElementById('filterCategory');
    const searchQuery = document.getElementById('searchQuery');
    const sortOrder = document.getElementById('sortOrder');

    let products = JSON.parse(localStorage.getItem('products')) || [];

    function displayProducts() {
        productContainer.innerHTML = '';
        let filteredProducts = products;

        const category = filterCategory.value;
        const search = searchQuery.value.toLowerCase();
        const sort = sortOrder.value;

        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }

        if (search) {
            filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(search));
        }

        switch (sort) {
            case 'priceAsc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'discountAsc':
                filteredProducts.sort((a, b) => a.discount - b.discount);
                break;
            case 'discountDesc':
                filteredProducts.sort((a, b) => b.discount - a.discount);
                break;
            default:
                break;
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">    
            <h3>${product.name}</h3>
                <p><strong>Опис:</strong> ${product.description}</p>
                <p><strong>Ціна:</strong> $${product.price.toFixed(2)}</p>
                <p><strong>Знижка:</strong> ${product.discount}%</p>
                <p><strong>Категорія:</strong> ${product.category}</p>
                <button type="submit" class="saveButton">Редагувати</button>
                <button type="submit" class="saveButton">Видалити</button>
            `;

            productContainer.appendChild(productCard);
        });
    }

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
            localStorage.setItem('products', JSON.stringify(products));
            displayProducts();

            productForm.reset();
            modal.style.display = 'none';
        } else {
            alert('Будь ласка, заповніть всі обов\'язкові поля коректно.');
        }
    });

    filterCategory.addEventListener('change', displayProducts);
    searchQuery.addEventListener('input', displayProducts);
    sortOrder.addEventListener('change', displayProducts);

    displayProducts();
});
