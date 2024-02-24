const choices = ["rock","paper","scissors"];
const numberOfChoices = choices.length;
function getComputerChoice() {
    return choices[Math.floor(Math.random() * numberOfChoices )];
}

function roundCalculation(playerSelection, computerSelection) {
    if(playerSelection === "rock"){
        if(computerSelection === "rock") {
            return ("Draw");
        }
        else if(computerSelection === "paper") {
            return ("Computer Chooses Paper! Computer Wins");
        }
        else{
            return ("Computer Chooses Scissors! Player Wins");
        }
    }
    else if(playerSelection === "paper"){

        if(computerSelection === "rock") {
            return ("Computer chooses Rock! Player Wins");
        }
        else if(computerSelection === "paper") {
            return ("Computer chooses Paper! It's a Draw");
        }
        else{
            return ("Computer chooses Scissors! Computer Wins");
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock") {
            return ("Computer chooses Rock! Computer Wins");
        }
        else if(computerSelection === "paper") {
            return ("Computer chooses Paper! Player Wins");
        }
        else{
            return ("Computer chooses Scissors! It's a Draw");
        }
    }
}

function updateScores(result) {
    if (result.includes("Player Wins")) {
        playerScore+=1;
    } else if (result.includes("Computer Wins")) {
        computerScore+=1;
    }
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    if (playerScore === 5) {
        declareWinnerHeading.textContent = "Player Wins!";
        displayResult.appendChild(declareWinnerHeading);
        disableButtons();
    } else if (computerScore === 5) {
        declareWinnerHeading.textContent = "Computer Wins!";
        displayResult.appendChild(declareWinnerHeading);
        disableButtons();
    }
}
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
}

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorButton = document.querySelector("#scissor-button");

const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");

let playerScore = +playerScoreSpan.textContent;
let computerScore = +computerScoreSpan.textContent;

const displayResult = document.querySelector("#play-game");

const roundResult = document.createElement("h5");
roundResult.textContent="";

rockButton.addEventListener("click", ()=>{
    let computerSelection = getComputerChoice();
    let result = roundCalculation("rock",computerSelection);
    roundResult.textContent = result;
    displayResult.appendChild(roundResult);
    updateScores(result);
})

paperButton.addEventListener("click", ()=>{
    let computerSelection = getComputerChoice();
    let result = roundCalculation("paper",computerSelection);
    roundResult.textContent = result;
    displayResult.appendChild(roundResult);
    updateScores(result);
})
scissorButton.addEventListener("click", ()=>{
    let computerSelection = getComputerChoice();
    let result = roundCalculation("scissors",computerSelection);
    roundResult.textContent = result;
    displayResult.appendChild(roundResult);
    updateScores(result);
})


displayResult.appendChild(roundResult);

const declareWinnerHeading = document.createElement("h2");

document.body.appendChild(declareWinnerHeading);