// Задание 1 Проверьте что строка содержит все символы от "a" до "z"


function solution(str) {
    const alphabet = {};
    for (let i = 97; i <= 122; i++) {
        alphabet[String.fromCharCode(i)] = false;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char in alphabet) {
            alphabet[char] = true;
        }
    }
    return Object.values(alphabet).every((value) => value === true);
}

console.log(solution("wyyga"));
console.log(solution("qwertyuioplkjhgfdsazxcvbnm"));
console.log(solution("ejuxggfsts"));
console.log(solution("qpwoeirutyalskdjfhgmznxbcv"));
console.log(solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv"));
console.log(solution("0123456789abcdefghijklmnop"));


/* Задание 2 Вам дано предложение, верните массив из слов, которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены*/


function solutionNext(arr) {
    const words = arr[0].replace(/,/g, "").split(" ");
    const avgLength = words.reduce((acc, word) => acc + word.length, 0) / words.length;
    result = words.filter((word) => word.length > avgLength);
    return result;
}

console.log(solutionNext(["This is a sample string"]));
console.log(solutionNext(["Some another sample"]));
console.log(solutionNext(["Do, do, do, do... do it!"]));


/* Задание 3 Сделайте 4 объекта - не усложняйте, просто наследование через __proto__
- Пользователь - Верифицированный пользователь - Гость - База данных -
База хранит информацию о пользователях
Пользователи знают мыло админа
Aдмин знает пароль от базы данных
Гости могут зарегистрироваться в базе данных*/


const User = {
    email: '',
};

const VerifiedUser = {
    __proto__: User,
};

const Guest = {
    __proto__: User,
    register() {
        console.log('Регистрация гостя');
    },
};

const Database = {
    __proto__: Guest,
    password: '',
    add(user) {
        console.log(`Добавление пользователя ${user.email} в базу данных`);
    },
};

const admin = {
    __proto__: Database,
    password: 'my password',
};

const guest = {
    __proto__: Guest,
    email: 'guest@example.com',
};

const verifiedUser = {
    __proto__: VerifiedUser,
    email: 'verifieduser@example.com',
};

console.log(admin.password);
admin.add(guest);
verifiedUser.email = 'newemail@example.com';
console.log(verifiedUser.email);
guest.register();



