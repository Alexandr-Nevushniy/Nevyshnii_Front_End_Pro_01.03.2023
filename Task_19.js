
// ДЗ 20. Голосування

/*Створити програму для відображення результатів голосування. З наступними умовами:

    1.Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
    2.Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
    3.При натисканні на смайл - під ним змінюється значення лічильника.
    4.Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.*/


const voteCounts = [0, 0, 0, 0, 0];
const smileysContainer = document.getElementById("smileys");
const voteCountsContainer = document.getElementById("voteCounts");

smileysContainer.addEventListener("click", function(event) {
    const smiley = event.target.closest(".smiley");
    if (smiley) {
        const index = Array.prototype.indexOf.call(smileysContainer.children, smiley);
        voteCounts[index]++;
        updateVoteCounts();
    }
});

function updateVoteCounts() {
    let voteCountsString = "";
    for (let i = 0; i < voteCounts.length; i++) {
        voteCountsString += `<span class="smiley">${smileysContainer.children[i].innerHTML}</span>голосов: ${voteCounts[i]}<br>`;
    }
    voteCountsContainer.innerHTML = voteCountsString;
}









