
// Задание №1
// Получить всех персонажей с помощью этого API - https://swapi.dev/api/people/
// Все 82 обьекта добавить в один массив, промапать что бы осталось только - name, mass, height, gender, films.
// отобразить персонажей которые появлялись больше чем в трех фильмах


const getUsers = async (url, arr = []) => {
    try {
        const result = await fetch(url);
        const obj = await result.json();
        arr.push(...obj.results);
        if (obj.next) {
            await getUsers(obj.next, arr);
        } else {
            console.log(arr);
            const filteredCharacters = arr.map(user => ({
                name: user.name,
                mass: user.mass,
                height: user.height,
                gender: user.gender,
                films: user.films
            }));
            const popularCharacters = filteredCharacters.filter(character => character.films.length > 3);
            console.log(popularCharacters);
        }
    } catch (e) {
        console.log(e);
    }
};

getUsers('https://swapi.dev/api/people/');


// --------------------------------------------------------------------------------------------------------------------

/*const getUsers = async (url) => {
    const users = [];
    try {
        const result = await fetch(url);
        const obj = await result.json();
        users.push(...obj.results);
        if (obj.next) {
            users.push(...await getUsers(obj.next));
        }
        return users;
    } catch (e) {
        console.log(e);
    }
};

getUsers('https://swapi.dev/api/people/')
    .then(users => {
        const filteredCharacters = users.map(user => ({
            name: user.name,
            mass: user.mass,
            height: user.height,
            gender: user.gender,
            films: user.films
        }));
        const popularCharacters = filteredCharacters.filter(character => character.films.length > 3);
        console.log(popularCharacters);
    })
    .catch(error => console.log(error));*/


// ----------------------------------------------------------------------------------------------------------------


/*const arr = [];

const getUsers = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            arr.push(...data.results);
            if (data.next) {
                getUsers(data.next);
            } else {
                console.log(arr);
            }
        })
        .catch(error => console.error(error));
};

getUsers("https://swapi.dev/api/people/");*/


// ------------------------------------------------------------------------------------------------------------------


/*async function getUsers(url) {
    try {
        let arr = [];
        while (url) {
            const result = await fetch(url);
            const obj = await result.json();
            arr.push(...obj.results);
            url = obj.next;
        }
        console.log(arr);
        const filteredCharacters = arr.map(user => ({
            name: user.name,
            mass: user.mass,
            height: user.height,
            gender: user.gender,
            films: user.films
        }));
        const popularCharacters = filteredCharacters.filter(character => character.films.length > 3);
        console.log(popularCharacters);
    } catch (e) {
        console.log(e);
    }
}

getUsers('https://swapi.dev/api/people/');*/









