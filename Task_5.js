// Задание 1


const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}

let positive = arr.filter(elem => (elem > 0))
console.log(`Sum of elements:  ${result}, Number of elements: ${positive.length}`)


// Задание 2


let minElem = arr[0]
let index = 0
for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= minElem) {
        minElem = arr[i]
        index = i
    }
}
console.log(`MinElem: ${minElem}, Index: ${index}`);

// Ещё вариант нахождения минимального элемента массива
/*let minNumbers = Math.min(...arr)
console.log('minNumbers', minNumbers)*/


// Задание 3


let maxElem = arr[0]
let index2 = 0
for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= maxElem) {
        maxElem = arr[i]
        index2 = i
    }
}
console.log(`MaxElem: ${maxElem}, Index: ${index2}`);


// Задание 4


let negative = arr.filter(elem => (elem < 0))
console.log('Number of negative elements', negative.length)


// Задание 5


let numberOdd = arr.filter(elem => elem > 0 && elem % 2 === 1)
console.log('Number of odd element', numberOdd.length)


// Задание 6


let numberEven = arr.filter(elem => elem > 0 && elem % 2 === 0)
console.log('Number of even element', numberEven.length)


// Задание 7


let sum = 0;
arr.forEach(function (number) {
    if (number > 0 && number % 2 === 0) {
        sum += number;
    }
})
console.log('The sums of even elements', sum);


// Задание 8


let sumNum = 0;
arr.forEach(function(number){
    if(number > 0 && number % 2 === 1) {
        sumNum += number
    }
})
console.log('Sum of odd elements', sumNum);


// Задание 9


let productElem = 1;
arr.forEach(function(number) {
    if( number > 0 ) {
        productElem *= number
    }
})
console.log('Product of elements', productElem);


// Задание 10


let maxNumber = Math.max(...arr);
let resultElem = arr.map(maxValue => maxValue === maxNumber ? maxValue : 0);
console.log('The largest element', resultElem);
