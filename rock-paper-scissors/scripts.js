const choices = ["Rock","Paper","Scissors"];
const numberOfChoices = choices.length;
function getComputerChoice() {
    return choices[Math.floor(Math.random() * numberOfChoices )];
}

function roundCalculation(playerSelection, computerSelection) {
    if(playerSelection === "rock"){
        if(computerSelection === "Rock") {
            return ("Computer chooses Rock! It's a Draw");
        }
        else if(computerSelection === "Paper") {
            return ("Computer chooses Paper! Computer Wins");
        }
        else{
            return ("Computer chooses Scissors: Player Wins");
        }
    }
    else if(playerSelection === "paper"){

        if(computerSelection === "Rock") {
            return ("Computer chooses Rock! Player Wins");
        }
        else if(computerSelection === "Paper") {
            return ("Computer chooses Paper! It's a Draw");
        }
        else{
            return ("Computer chooses Scissors: Computer Wins");
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "Rock") {
            return ("Computer chooses Rock! Computer Wins");
        }
        else if(computerSelection === "Paper") {
            return ("Computer chooses Paper! Player Wins");
        }
        else{
            return ("Computer chooses Scissors: It's a Draw");
        }
    }
    else{
        return ("Invalid Input");
    }
}

let numberOfRounds = 2;
while(numberOfRounds > 0) {
    let playerSelection = prompt(
        "Enter your choice " +
        "( between Rock, Paper, Scissors): ").toLowerCase();
    let computerSelection = getComputerChoice();
    let result = roundCalculation(playerSelection, computerSelection);
    console.log(result);
    numberOfRounds--;
}