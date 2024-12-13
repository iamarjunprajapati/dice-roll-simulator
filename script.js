let diceNumber = document.querySelector("#dice-number");


let i = 1;
function rollDice() {
    let randomNumber = Math.round(Math.random() * 6);
    diceNumber.innerText = randomNumber;
    let triedContainer = document.querySelector('.tried-container');
    let triedElement = document.createElement('div');
    triedElement.classList.add("tried-element");
    let diceNo = document.createElement('p');
    let rollNo = document.createElement('p');
    rollNo.innerText = `Roll ${i++}`;
    diceNo.innerText = `${randomNumber}`;
    triedElement.append(rollNo);
    triedElement.append(diceNo);
    triedContainer.append(triedElement);
}



