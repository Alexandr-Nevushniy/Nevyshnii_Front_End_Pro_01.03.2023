// Задание 1


const array = [1, 2, 3, 4, 5, 6, 7];
let removeElement = array.filter(item => item !== 5)
console.log(removeElement)

/*function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
    }
    return array;
}

const arr = [1, 2, 3, 4, 5];
removeElement(arr, 3);
console.log(arr);*/

// Задание 2


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

function generateKey(length, characters) {
    let emptyLine = '';
    for (let i = 0; i < length; i++) {
        emptyLine += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return emptyLine
}

console.log(key)


// Задание 3


const text = 'hello world'
const twoLetters = ['l', 'd']

function returns() {
    let str = '';
    for (let i = 0; i < text.length; i++) {
        if (!twoLetters.includes(text[i])) {
            str += text[i]
        }
    }
    return str
}

console.log(returns(text, twoLetters))


// Задание 4


function createNum(numValue) {
    let num = numValue;

    function sum(sumValue) {
        num += sumValue;
        console.log(num);
        return sum;
    }

    console.log(num);
    return sum;
}

const sum = createNum(3);
sum(5);
sum(20);



