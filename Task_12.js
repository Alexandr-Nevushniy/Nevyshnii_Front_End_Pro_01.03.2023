
// Задание 1) Напишите функцию.На вход функции подаётся список строк и нужно найти общий для всех этих строк префикс максимальной длины.
// Например, для списка ["programming", "product", "procrastination"] — ответом будет "pro"


const strings = ["programming", "product", "procrastination"];

function findCommonPrefix(strings) {
    if (strings.length === 0) {
        return '';
    }
    return strings.reduce((prefix, str) => {
        let i = 0;
        while (prefix[i] && str[i] && prefix[i] === str[i]) {
            i++;
        }
        return prefix.slice(0, i);
    });
}

console.log(findCommonPrefix(strings))



// Задание 2) Напишите функцию которая превращает массив двухмерных массивов в массив трехмерных и наоборот.Остаток добавляется в новый массив


function convertArray(arr, newDimension) {
    const result = [];
    let tempArr = [];

    arr.forEach(subArr => {
        if (newDimension === 2) {
            subArr.forEach(num => {
                if (tempArr.length < 2) {
                    tempArr.push(num);
                } else {
                    result.push(tempArr);
                    tempArr = [num];
                }
            });
        } else if (newDimension === 3) {
            subArr.forEach(num => {
                if (tempArr.length < 3) {
                    tempArr.push(num);
                } else {
                    result.push(tempArr);
                    tempArr = [num];
                }
            });
        }
    });

    if (tempArr.length > 0) {
        result.push(tempArr);
    }

    return result;
}

const input1 = [[1, 2], [3, 4], [5, 6]];
const output1 = convertArray(input1, 3);
console.log('Output1', output1);

const input2 = [[1, 2], [3, 4], [5, 6], [7]];
const output2 = convertArray(input2, 3);
console.log('Output2', output2);

const input3 = [[1, 2, 3], [4, 5, 6]];
const output3 = convertArray(input3, 2);
console.log('Output3', output3);


// Второй вариант решения - но тут сама функция не используеться


/*function convertArray(arr, dimension) {
    const result = [];
    const sliceSize = (dimension === 2) ? 2 : 3;

    for (let i = 0; i < arr.length; i += sliceSize) {
        result.push(arr.slice(i, i + sliceSize));
    }

    return result;
}

const output = [[1, 2, 3], [4, 5, 6]];
const output2 = [[1, 2, 3], [4, 5, 6], [7]]
const output3 = [[1, 2], [3, 4], [5, 6]]


console.log("Output 1:", output);
console.log("Output 2:", output2);
console.log("Output 3:", output3);*/


// Третий вариант решения - реализован с помощью трёх функций


/*function convertArray(arr, dimension) {
    const result = [];
    const sliceSize = (dimension === 2) ? 2 : 3;

    for (let i = 0; i < arr.length; i += sliceSize) {
        result.push(arr.slice(i, i + sliceSize));
    }

    return result;
}

function convertDimension(arr, dimension) {
    if (dimension === 2) {
        return arr.reduce((acc, cur) => [...acc, ...cur], []);
    } else if (dimension === 3) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(...arr[i]);
        }
        return result;
    } else {
        throw new Error('Invalid dimension');
    }
}

function convertArrayDimension(arr, from, to) {
    const result = [];
    const dimension = (from === 2 && to === 3) ? 3 : (from === 3 && to === 2) ? 2 : null;

    if (!dimension) {
        throw new Error('Invalid conversion');
    }

    const convertedArr = convertDimension(arr, dimension);
    const remainder = convertedArr.length % (dimension === 2 ? 2 : 3);

    if (remainder === 0) {
        return convertArray(convertedArr, to);
    } else {
        const lastSlice = convertedArr.slice(-remainder);
        const slicedArr = convertedArr.slice(0, convertedArr.length - remainder);
        const slicedResult = convertArray(slicedArr, to);
        result.push(...slicedResult, lastSlice);
        return result;
    }
}

const input = [[1, 2], [3, 4], [5, 6]];
const output = [[1, 2, 3], [4, 5, 6]];
const num = convertArrayDimension(output, 2, 3);

const input2 = [[1, 2], [3, 4], [5, 6], [7]];
const output2 = [[1, 2, 3], [4, 5, 6], [7]];
const num2 = convertArrayDimension(output2, 2, 3);

const input3 = [[1, 2, 3], [4, 5, 6]];
const output3 = [[1, 2], [3, 4], [5, 6]];
const num3 = convertArrayDimension(output3, 3, 2);

console.log("Input 1:", input);
console.log("Output 1:", output);
console.log("Converted Output 1:", num);

console.log("Input 2:", input2);
console.log("Output 2:", output2);
console.log("Converted Output 2:", num2);

console.log("Input 3:", input3);
console.log("Output 3:", output3);
console.log("Converted Output 3:", num3);*/


// Задание 2 // Усложнение: сделайте так что бы вторым параметром в функцию я могу передать параметр массивы какой длины у меня должны быть в результате


function transformArray(arr) {
    const result = [];
    let currentSubarray = [];

    arr.forEach(innerArr => {
        innerArr.forEach(num => {
            if (currentSubarray.length < 5) {
                currentSubarray.push(num);
            } else {
                result.push(currentSubarray);
                currentSubarray = [num];
            }
        });
    });

    result.push(currentSubarray);

    return result;
}

const arr = [[1, 2, 3], [4, 5, 6]];
const transformedArr = transformArray(arr);
console.log('Complication', transformedArr);









