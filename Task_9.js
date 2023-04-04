/*1) Написать функцию которая будет возвращать уникальные значения в массиве
Пример:
const yourFunc = (arr) => {};
const arr1 = [1,2,3,4,5,1,2,3,4,5]
yourFunc(arr1) // [1,2,3,4,5]
Должно работать с любыми значениями*/


const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const yourFunc = (arr) => {
    return Array.from(new Set(arr1))
}
console.log(yourFunc(arr1));


const arr2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

function newArray(array) {
    let emptyArray = [];
    for (let i = 0, num = array.length; i < num; i++)
        if (emptyArray.indexOf(array[i]) === -1)
            emptyArray.push(array[i]);
    return emptyArray;
}

const uniqueArray = newArray(arr2);
console.log(uniqueArray);

/*2) Напишите функцию которая принимает массив целых чисел
и вернет число которое встречается чаще всего,
если таких чисел несколько, результатом должно быть число
которое встречается первым,*/


function arrayOfIntegers(arr) {
    const emptyObj = {};
    for (const num of arr) {
        if (num in emptyObj) {
            emptyObj[num]++;
        } else {
            emptyObj[num] = 1;
        }
    }

    const maxValue = Math.max(...Object.values(emptyObj));
    for (const num of arr) {
        if (emptyObj[num] === maxValue) {
            return num;
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 8, 3, 9, 12, 5, 3, 8, 4, 5];
console.log(arrayOfIntegers(arr));


/*3) Что вернет выражение z(x) ?
Напишите ответ своими словами как вы понимаете
В консоле не смотрите, сначала напишите, после проверьте себя*/


let y = 5;
let x = () => y;
let z = t => {
    let y = 5;
    t();
};
z(x);

// Ответ: Функция ничего не возвращает т.к. отсутствует return и покажет undefined
console.log(" c___c\n /. .\\\n \\_T_/\n /' '\\\n(/ . \\)\n/';‑;'\\\n()/ \\()") // Не принимать во внимание


/*4)Debounce
Результатом декоратора debounce(f, ms) должна быть обёртка,
которая передаёт вызов f не более одного раза в ms миллисекунд.
Другими словами, когда мы вызываем debounce, это гарантирует,
что все остальные вызовы будут игнорироваться в течение ms.*/


function debounce(f, ms) {
    let timer;

    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            f.apply(this, args);
            timer = null;
        }, ms);
    };
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)


