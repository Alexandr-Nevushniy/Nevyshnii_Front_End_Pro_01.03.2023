const oneNumber = parseInt(prompt("")) || parseInt("0");
const twoNumber = parseInt(prompt("")) || parseInt("22");
console.log('oneNumber', oneNumber, 'twoNumber', twoNumber);

const threeNumber = oneNumber > 0 && twoNumber > 0 ? 80 : 40;
console.log('threeNumber', threeNumber);


const obj = {}
if (oneNumber >= 90) {
    obj.size = 'big'
} else if (oneNumber <= 40) {
    obj.size = 'small'
} else {
    obj.size = 'medium'
}
console.log('obj', obj);

let fourNumber;
switch (obj.size) {
    case 'big':
        fourNumber = 1000;
        break;
    case 'medium':
        fourNumber = 100;
        break;
    case 'small':
        fourNumber = 10;
        break;
}
console.log('fourNumber', fourNumber);

const result = oneNumber * twoNumber * threeNumber * fourNumber;
if (result % 2 !== 0) {
    console.log('Number is 0')
} else if (twoNumber > 50) {
    alert(twoNumber)
}


