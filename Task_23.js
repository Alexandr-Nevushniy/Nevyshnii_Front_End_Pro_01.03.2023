// ДЗ 24. LocalStorage

const categoryLinks = document.querySelectorAll('.category-link');
const productsBlock = document.querySelector('.products');
const productInfoBlock = document.querySelector('.product-info');
const orderListBlock = document.querySelector('.order-list');
const myOrdersButton = document.querySelector('.my-orders-button');

const products = {
    category1: ['Продукт 1', 'Продукт 2', 'Продукт 3'],
    category2: ['Продукт 4', 'Продукт 5', 'Продукт 6'],
    category3: ['Продукт 7', 'Продукт 8', 'Продукт 9'],
    category4: ['Продукт 10', 'Продукт 11', 'Продукт 12'],
    category5: ['Продукт 13', 'Продукт 14', 'Продукт 15'],
};

myOrdersButton.addEventListener('click', () => {
    productsBlock.innerHTML = '';
    productInfoBlock.innerHTML = '';
    displayOrderList();
});

function displayOrderList() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orderListBlock.innerHTML = '';

    if (orders.length === 0) {
        const noOrdersMessage = document.createElement('p');
        noOrdersMessage.textContent = 'У вас нет сохраненных заказов.';
        orderListBlock.appendChild(noOrdersMessage);
    } else {
        orders.forEach((order, index) => {
            const orderItem = document.createElement('li');
            orderItem.classList.add('order-item');
            orderItem.textContent = `Заказ #${index + 1} (${order.date} - ${order.price} руб.)`;
            orderListBlock.appendChild(orderItem);
            orderItem.addEventListener('click', () => {
                displayOrderDetails(order);
            });
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.textContent = 'Удалить';
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation();
                deleteOrder(index);
            });
            orderItem.appendChild(deleteButton);
        });
    }
}

function displayOrderDetails(order) {
    productInfoBlock.innerHTML = '';
    const orderDetails = document.createElement('div');
    orderDetails.classList.add('order-details');
    orderDetails.innerHTML = `
      <h3>Заказ #${order.id}</h3>
      <p>Дата: ${order.date}</p>
      <p>Цена: ${order.price} руб.</p>
      <p>ФИО покупателя: ${order.fullName}</p>
      <p>Город: ${order.city}</p>
      <p>Состав Новой почты для отправки: ${order.postComposition}</p>
      <p>Наложенные платежи или оплата банковской карты: ${order.paymentMethod}</p>
      <p>Количество покупаемой продукции: ${order.quantity}</p>
      <p>Комментарий к заказу: ${order.comment}</p>
    `;
    productInfoBlock.appendChild(orderDetails);
}

function deleteOrder(index) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    displayOrderList();
}

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
            const fullName = document.getElementById('fullName').value.trim();
            const city = document.getElementById('city').value;
            const postComposition = document.getElementById('postComposition').value.trim();
            const paymentMethod = document.getElementById('paymentMethod').value.trim();
            const quantity = document.getElementById('quantity').value;
            const comment = document.getElementById('comment').value.trim();

            const order = {
                id: new Date().getTime(),
                date: new Date().toLocaleString(),
                price: calculatePrice(quantity),
                fullName,
                city,
                postComposition,
                paymentMethod,
                quantity,
                comment
            };

            saveOrder(order);
            alert(`Заказ на "${product}" оформлен!`);
            productInfoBlock.innerHTML = '';
            productsBlock.innerHTML = '';
        }
    });
}

function calculatePrice(quantity) {
    // Логика расчета цены на основе количества продукции
    return quantity * 10;
}

function validateOrderForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const city = document.getElementById('city').value;
    const postComposition = document.getElementById('postComposition').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value.trim();
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value.trim();

    if (fullName === '' || city === '' || postComposition === '' || paymentMethod === '' || quantity === '') {
        displayErrorMessage('Пожалуйста, заполните все поля формы.');
        return false;
    }

    return true;
}

function displayErrorMessage(message) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    productInfoBlock.appendChild(errorMessage);
}

function saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}