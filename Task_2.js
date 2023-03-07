const name = prompt('What is your name ?');
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
console.log('dataShareConfirmation', dataShareConfirmation);

dataShareConfirmation ? console.log(`User Name: ${user.name}, Surname: ${user.surname}, Age: ${user.age}, City: ${user.city}`) : alert('The user has refused to show his data');