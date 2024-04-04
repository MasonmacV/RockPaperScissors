
/* This function determines the computer selection in a game of RockPaper Scissors */

function getComputerChoice(){
   let max = 3;
   let choice = Math.floor(Math.random() * max);

   switch(choice) {
    case 0:
        return "ROCK"
        break;

    case 1: 
        return "SCISSORS"
        break;

    case 2: 
        return "PAPER"
        break;
   }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === "ROCK") {
        if(computerSelection === "ROCK") {
            return "Tie! Rock Ties Rock!"
        }
        else if (computerSelection === "PAPER"){
            return "You Lose! Paper Covers Rock!"
        }
        else {
            return "You Win! Rock Beats Scissors!"
        }
    }

    if (playerSelection === "PAPER") {
        if(computerSelection === "ROCK") {
            return "You Win! Paper covers Rock!"
        }
        else if (computerSelection === "PAPER"){
            return "Tie! Paper Ties Paper!"
        }
        else {
            return "You Lose! Scissors Cuts Paper!"
        }
    }

    if (playerSelection === "SCISSORS") {
        if(computerSelection === "ROCK") {
            return "You Lose! Rock Crushes Scissors!"
        }
        else if (computerSelection === "PAPER"){
            return "You Win! Scissors Cuts Paper!"
        }
        else {
            return "Tie! Scissors Ties Scissors!"
        }
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));