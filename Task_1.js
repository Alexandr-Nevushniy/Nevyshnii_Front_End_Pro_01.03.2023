/*
const userName = prompt('Your name');
alert(`Hello, ${userName}! How are you?`);
console.log(userName);*/


const isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (char !== map[top]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
