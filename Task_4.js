// Задание 1

let str = '';
for (let i = 10; i <= 20; i++) {
    i === 20 ? str += i : str += i + ','
}
console.log('str', str)

// Задание 2

let str2 = '';
for (let i = 10; i <= 20; i++) {
    i === 20 ? str2 += Math.pow(i,2) : str2 += Math.pow(i, 2) + ','
}
console.log('str2', str2)

// Задание 3

let str3 = 1;
for (let i = 15; i <= 35; i++) {
    str3 *= i;
}
console.log('str3', str3)

// Задание 4

let n = 500;
let str4 = 0;
for (let i = 1; i <= n; i++) {
    str4 += i
}
console.log('str4', str4 / n)

// Задание 5

let str5 = 0;
for(let i = 30; i <= 80; i++) {
    if(i % 2 === 0) str5 += i
}
console.log('str5', str5);

// Задание 6

let x = 100;
let y = 200;
let result = 0;
for (let i = x; i <= y; i++) {
    if (i % 3 === 0) {
        result += i;
        console.log(i);
    }
}

// Задание 7

let number = prompt('Enter the number');
let isPrime = true;
for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
        isPrime += 1
    }
}
console.log(isPrime === 1 ? 'true number' : 'false number')
