
// Задание №1

// Также используя https://swapi.dev/ API нужно сделать следующее.
// Делаете запросы на все фильмы первой трилогии звездных войн, для этого у вас есть
// "https://swapi.dev/api/films/1/
// Далее при успешном результате всех запросов -
// Вам нужно сделать запросы на все API планет которые появлялись в этих фильмах и вывести в консоль название этих планет
// Если хоть один запрос отвалился - делаете запрос на это API
// "https://swapi.dev/api/starships/9/"
// И выводите в консоль - "Имя корабля" все уничтожил


async function getPlanets(filmUrls) {
    try {
        const filmPromises = filmUrls.map(url => fetch(url).then(res => res.json()));
        const films = await Promise.all(filmPromises);
        const planetUrls = [...new Set(films.flatMap(film => film.planets))];
        const planetPromises = planetUrls.map(url => fetch(url).then(res => res.json()));
        const planets = await Promise.all(planetPromises);
        return planets.map(planet => planet.name);
    } catch (error) {
        const ship = await fetch("https://swapi.dev/api/starships/9/").then(res => res.json());
        return [`${ship.name} все уничтожил`];
    }
}

getPlanets([
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/"
]).then(result => console.log(result));












