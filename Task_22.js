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
                    showOrderForm(product);
                });
            });
        });
    });
});

function showOrderForm(product) {
    productInfoBlock.innerHTML = '';
    const orderForm = document.createElement('form');
    orderForm.classList.add('order-form');
    orderForm.innerHTML = `
      <h3>Оформление заказа</h3>
      <label>ФИО покупателя</label>
      <input type="text" id="fullName" required>
      
      <label>Город</label>
      <select id="city" required>
        <option value="">Выберите город</option>
        <option value="city1">Город 1</option>
        <option value="city2">Город 2</option>
        <option value="city3">Город 3</option>
      </select>
      
      <label>Состав Новой почты для отправки</label>
      <input type="text" id="postComposition" required>
      
      <label>Наложенные платежи или оплата банковской карты</label>
      <input type="text" id="paymentMethod" required>
      
      <label>Количество покупаемой продукции</label>
      <input type="number" id="quantity" required>
      
      <label>Комментарий к заказу</label>
      <textarea id="comment"></textarea>
      
      <button type="submit">Подтвердить заказ</button>
    `;
    productInfoBlock.appendChild(orderForm);
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateOrderForm()) {
            alert(`Заказ на "${product}" оформлен!`);
            productInfoBlock.innerHTML = '';
            productsBlock.innerHTML = '';
        }
    });
}

function validateOrderForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const city = document.getElementById('city').value;
    const postComposition = document.getElementById('postComposition').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value.trim();
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value.trim();

    if (fullName === '' || city === '' || postComposition === '' || paymentMethod === '' || quantity === '') {
        displayErrorMessage('Все обязательные поля должны быть заполнены');
        return false;
    }

    return true;
}

function displayErrorMessage(message) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    const orderForm = document.querySelector('.order-form');
    orderForm.appendChild(errorMessage);
}