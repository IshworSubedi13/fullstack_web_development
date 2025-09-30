function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const resultsList = document.querySelector(".list");
let result;
do {
    result = rollDice();
    const li = document.createElement("li");
    li.textContent = `You rolled : ${result}`;
    resultsList.appendChild(li);

} while (result !== 6);
