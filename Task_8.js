/* Задание 1) Написать функцию которая будет принимать массив в качестве аргумента.
Массив типа
const arr = [ [ [ [8] ] ] ] - вложенность может быть любой, в конце всегда цифра
И возвращает ФАКТОРИАЛ этого числа.*/


const arr = [[[[8]]]];
factorial = (n) => n === 1 ? n : n * factorial(n - 1)

function findFactorial(array) {
    if (Array.isArray(array)) {
        array = array[0]
    }
    return factorial(array)
}

console.log(findFactorial(arr));


// Задание 2 Створіть об’єкт calculator з трьома методами:
// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.


let calculator = {
    read: function () {
        this.a = parseFloat(prompt('0',));
        this.b = parseFloat(prompt('0',));
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());







