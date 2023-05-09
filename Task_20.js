
// ДЗ 21. Реалізувати подобу інтернет-магазину.

/*Дано 3 блоки
В лівій частині сторінки - перелік категорій.
При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
Клік на товар - інформацію про товар у правому блоці.
В інформації товару - кнопка “купити”.
При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).*/


const categoryLinks = document.querySelectorAll('.category-link');
const productsBlock = document.querySelector('.products');
const productInfoBlock = document.querySelector('.product-info');

const products = {
    category1: ['Продукт 1', 'Продукт 2', 'Продукт 3'],
    category2: ['Продукт 4', 'Продукт 5', 'Продукт 6'],
    category3: ['Продукт 7', 'Продукт 8', 'Продукт 9'],
    category4: ['Продукт 10', 'Продукт 11', 'Продукт 12'],
    category5: ['Продукт 13', 'Продукт 14', 'Продукт 15'],
};

categoryLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const category = link.getAttribute('data-category');
        productsBlock.innerHTML = '';
        products[category].forEach(product => {
            const productItem = document.createElement('div');
            productItem.innerText = product;
            productItem.classList.add('product-item');
            productsBlock.appendChild(productItem);
            productItem.addEventListener('click', () => {
                productInfoBlock.innerHTML = '';
                const productInfo = document.createElement('div');
                productInfo.innerHTML = `
          <h3>${product}</h3>
          <p>Описание продукта</p>        
          <button class="buy-button">Купить</button>
        `;
                productInfoBlock.appendChild(productInfo);
                const buyButton = productInfo.querySelector('.buy-button');
                buyButton.addEventListener('click', () => {
                    alert(`"${product}" куплен!`);
                    productInfoBlock.innerHTML = '';
                    productsBlock.innerHTML = '';
                });
            });
        });
    });
});






