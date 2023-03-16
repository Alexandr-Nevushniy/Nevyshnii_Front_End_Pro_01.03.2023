const firstNumber = parseInt(prompt("")) || parseInt("0");
const secondNumber = parseInt(prompt("")) || parseInt("22");
console.log('firstNumber', firstNumber, 'secondNumber', secondNumber);

const thirdNumber = firstNumber > 0 && secondNumber > 0 ? 80 : 40;
console.log('thirdNumber', thirdNumber);


const obj = {}
if (firstNumber >= 90) {
    obj.size = 'big'
} else if (firstNumber <= 40) {
    obj.size = 'small'
} else {
    obj.size = 'medium'
}
console.log('obj', obj);

let fourthNumber;
switch (obj.size) {
    case 'big':
        fourthNumber = 1000;
        break;
    case 'medium':
        fourthNumber = 100;
        break;
    case 'small':
        fourthNumber = 10;
        break;
}
console.log('fourthNumber', fourthNumber);

const result = firstNumber * secondNumber * thirdNumber * fourthNumber;
if (result % 2 !== 0) {
    console.log('Number is 0')
} else if (secondNumber > 50) {
    alert(secondNumber)
}


