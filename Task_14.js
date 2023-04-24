
// Задача 2 Гамбургер


// Класс Гамбургер
class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    // Метод добавления добавки
    addTopping(topping) {
        this.toppings.push(topping);
    }

    // Метод удаления добавки
    removeTopping(topping) {
        this.toppings = this.toppings.filter(item => item !== topping);
    }

    // Метод расчета калорий
    calculateCalories() {
        let calories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach(topping => {
            calories += topping.calories;
        });
        return calories;
    }

    // Метод расчета стоимости
    calculatePrice() {
        let price = this.size.price + this.stuffing.price;
        this.toppings.forEach(topping => {
            price += topping.price;
        });
        return price;
    }
}

// Класс Размер гамбургера
const Size = class {
    constructor(name, price, calories) {
        this.price = price;
        this.calories = calories;
    }
};

// Класс Начинка гамбургера
const Stuffing = class {
    constructor(name, price, calories) {
        this.price = price;
        this.calories = calories;
    }
};

// Класс Добавка гамбургера
const Topping = class {
    constructor(name, price, calories) {
        this.price = price;
        this.calories = calories;
    }
};

// Создание объектов размеров гамбургера
const SIZE_SMALL = new Size("Small", 50, 20);
const SIZE_LARGE = new Size("Large", 100, 40);

// Создание объектов начинок гамбургера
const STUFFING_CHEESE = new Stuffing("Cheese", 10, 20);
const STUFFING_SALAD = new Stuffing("Salad", 20, 5);
const STUFFING_POTATO = new Stuffing("Potato", 15, 10);

// Создание объектов добавок гамбургера
const TOPPING_MAYO = new Topping("Mayo", 20, 5);
const TOPPING_SAUCE = new Topping("Sauce", 15, 0);

// Пример использования классов
const hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);

hamburger.addTopping(TOPPING_MAYO);

console.log('-------------------')

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.removeTopping(TOPPING_MAYO);

console.log("Calories after removing topping: " + hamburger.calculateCalories());
console.log("Price after removing topping: " + hamburger.calculatePrice());

hamburger.addTopping(TOPPING_SAUCE);

console.log("Price with sauce: " + hamburger.calculatePrice());