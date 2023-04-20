/*const name = prompt('What is your name ?');
const surname = prompt('What is your surname ?');
const age = parseInt(prompt('How old are you ?'));
const city = prompt('Your city ?');
console.log(name, surname, age, city);

const user = {
    name,
    surname,
    age,
    city,
};
console.log(user);

const dataShareConfirmation = confirm('Can i show my details?');
console.log('dataShareConfirmation', dataShareConfirmation)

dataShareConfirmation ? console.log(`User Name: ${user.name}, Surname: ${user.surname}, Age: ${user.age}, City: ${user.city}`) : alert('The user has refused to show his data');*/

// Запрос данных у пользователя
var firstName = prompt("Введите ваше имя:");
var lastName = prompt("Введите вашу фамилию:");
var age = prompt("Введите ваш возраст:");
var city = prompt("Введите ваш город:");

// Преобразование данных по возрасту в число
age = Number(age);

// Создание объекта пользователя
var user = {
    name: firstName,
    surname: lastName,
    age: age,
    city: city
};

// Запрос разрешения на показ данных
var allowToShow = confirm("Разрешаете показывать ваши данные?");

// Формирование строки с данными пользователя
var userDataString = allowToShow ? `Имя пользователя: ${user.name}\nФамилия: ${user.surname}\nВозраст: ${user.age}\nГород: ${user.city}` : "Пользователь запретил показывать данные";

// Вывод данных о пользователе в консоль или с помощью alert
console.log(userDataString);
