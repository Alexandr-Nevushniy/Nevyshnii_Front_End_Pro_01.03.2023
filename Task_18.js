
// ДЗ 19. div - привид
// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
// При пропажі фокусу - <div> так само пропадає



const input = document.createElement("input");
input.type = "text";
input.id = "my-input";
document.body.prepend(input);

const redSquare = document.createElement("div");
redSquare.style.width = "177px";
redSquare.style.height = "20px";
redSquare.style.background = "red";
redSquare.style.position = "absolute";
redSquare.style.display = "none";
document.body.appendChild(redSquare);

input.addEventListener("focus", () => {
    redSquare.style.display = "block";
    console.log('focus')
});

input.addEventListener("blur", () => {
    redSquare.style.display = "none";
    console.log('blur')
});










